import { z } from "zod";

const envSchema = z.object({
  COMPANY_NAME: z.string().optional(),
  TWITTER_CREATOR: z.string().optional(),
  TWITTER_SITE: z.string().optional(),
  SITE_NAME: z.string().optional(),
  SHOPIFY_REVALIDATION_SECRET: z.string().optional(),
  SHOPIFY_STOREFRONT_ACCESS_TOKEN: z.string().optional(),
  SHOPIFY_STORE_DOMAIN: z.string(),
});

envSchema.parse(process.env);


declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
       interface ProcessEnv {
      SHOPIFY_STORE_DOMAIN: string;
      COMPANY_NAME?: string;
      TWITTER_CREATOR?: string;
      TWITTER_SITE?: string;
      SITE_NAME?: string;
      SHOPIFY_REVALIDATION_SECRET?: string;
      SHOPIFY_STOREFRONT_ACCESS_TOKEN?: string;
    }
  }
}