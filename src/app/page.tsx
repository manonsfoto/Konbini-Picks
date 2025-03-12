import Link from "next/link";
import Image from "next/image";

export const metadata = {
  description:
    "High-performance e-commerce store built with Next.js, Vercel, and Shopify.",
  openGraph: {
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="flex-1">
      <section className="w-full pt-12 md:pt-24 lg:pt-32 border-bottom-b">
        <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Explore the Highlights of Japanese Convenience Stores
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-4">
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                At Konbini Picks, we bring you the finest selections from
                Japan&apos;s top convenience stores. Explore our must-try
                products that capture the essence of konbini culture!
              </p>
              <div className="flex flex-col w-full md:flex-row gap-2 text-nowrap">
                <Link
                  href="/search/lawsons-collection"
                  className="inline-flex h-9 items-center justify-center rounded-md border bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop LAWSON
                </Link>
                <Link
                  href="/search/familymarts-collection"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop FamilyMart
                </Link>
                <Link
                  href="/search/7-elevens-collection"
                  className="inline-flex h-9 items-center justify-center rounded-md border border-red-300 border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-red-300 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Shop 7-Eleven
                </Link>
              </div>
            </div>
          </div>
          <Image
            src="/hero.jpg"
            width="1270"
            height="300"
            alt="Hero"
            className="mx-auto rounded-t-xl object-cover"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 grid place-content-center">
        <div className="container space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Collection
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Explore Our Top Picks
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover the must-try items from Japanese convenience stores.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start justify-center gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-4">
            <div className="grid gap-1">
              <Link
                href="/search/lawsons-collection"
                className="group"
                prefetch={false}
              >
                <Image
                  src="/lawsons-collection.png"
                  width="400"
                  height="500"
                  alt="Lawson's Collection"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="mt-4 text-lg font-bold group-hover:underline">
                  LAWSON
                </h3>
              </Link>
            </div>
            <div className="grid gap-1">
              <Link
                href="/search/familymarts-collection"
                className="group"
                prefetch={false}
              >
                <Image
                  src="/familymarts-collection.png"
                  width="400"
                  height="500"
                  alt="FamilyMart's Collection"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="mt-4 text-lg font-bold group-hover:underline">
                  FamilyMart
                </h3>
              </Link>
            </div>
            <div className="grid gap-1">
              <Link
                href="/search/7-elevens-collection"
                className="group"
                prefetch={false}
              >
                <Image
                  src="/7-elevens-collection.png"
                  width="400"
                  height="500"
                  alt="7-Eleven's Collection"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="mt-4 text-lg font-bold group-hover:underline">
                  7-ELEVEN
                </h3>
              </Link>
            </div>
            <div className="grid gap-1">
              <Link href="/search" className="group" prefetch={false}>
                <Image
                  src="/all-collection.png"
                  width="400"
                  height="500"
                  alt="All Collection"
                  className="aspect-[4/5] overflow-hidden rounded-lg object-cover group-hover:scale-105 transition-transform"
                />
                <h3 className="mt-4 text-lg font-bold group-hover:underline">
                  All Products
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
