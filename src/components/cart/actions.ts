"use server";

import { TAGS } from "@/lib/constants";
import { addToCart, createCart, getCart, removeFromCart, updateCart } from "@/lib/shopify";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function addItem(
  prevState: unknown,
  selectedVariantId: string | undefined
) {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId || !selectedVariantId) {
    return "Error adding item to cart";
  }

  try {
    await addToCart(cartId, [
      { merchandiseId: selectedVariantId, quantity: 1 },
    ]);
    revalidateTag(TAGS.cart);
  } catch (error) {
    return "Error adding item to cart";
  }
}

export async function updateItemQuantity(
  prevState: unknown,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  const cartId = cookies().get("cartId")?.value;
  if (!cartId) {
    return "Missing cart ID";
  }

  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCart(cartId);
    if (!cart) {
      return "Error fetching cart";
    }

    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );

    if (lineItem && lineItem.id) {
      if (quantity === 0) {
        await removeFromCart(cartId, [lineItem.id]);
      } else {
        await updateCart(cartId, [
          {
            id: lineItem.id,
            merchandiseId,
            quantity,
          },
        ]);
      }
    } else if (quantity > 0) {
          await addToCart(cartId, [{ merchandiseId, quantity }]);
    }

    revalidateTag(TAGS.cart);
  } catch (error) {
    console.error(error);
    return "Error updating item quantity";
  }
}

export async function removeItem(prevState: unknown, merchandiseId: string) {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }

  try {
    const cart = await getCart(cartId);
    if (!cart) {
      return "Error fetching cart";
    }

    const lineItem = cart.lines.find(
      (line) => line.merchandise.id === merchandiseId
    );

    if (lineItem && lineItem.id) {
      await removeFromCart(cartId, [lineItem.id]);
      revalidateTag(TAGS.cart);
    } else {
      return "Item not found in cart";
    }
  } catch (error) {
    return "Error removing item from cart";
  }
}

export async function redirectToCheckout() {
  const cartId = cookies().get("cartId")?.value;

  if (!cartId) {
    return "Missing cart ID";
  }

  const cart = await getCart(cartId);

  if (!cart) {
    return "Error fetching cart";
  }

  redirect(cart.checkoutUrl);
}

export async function createCartAndSetCookie() {
  const cart = await createCart();
  cookies().set("cartId", cart.id!);
}
