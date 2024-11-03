import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    AUTH_SECRET:
      process.env.NODE_ENV === "production"
        ? z.string()
        : z.string().optional(),
    POSTGRES_URL:
      z.string()
        .url()
        .refine(
          (str) => !str.includes("YOUR_POSTGRES_URL_HERE"),
          "You forgot to change the default value"
        ),
    POSTGRES_PRISMA_URL:
      z.string()
        .url()
        .refine(
          (str) => !str.includes("YOUR_POSTGRES_PRISMA_URL_HERE"),
          "You forgot to change the default value"
        ),
    POSTGRES_URL_NO_SSL:
      z.string()
        .url()
        .refine(
          (str) => !str.includes("YOUR_POSTGRES_URL_NO_SSL_HERE"),
          "You forgot to change the default value"
        ),
    POSTGRES_URL_NON_POOLING:
      z.string()
        .url()
        .refine(
          (str) => !str.includes("YOUR_POST)GRES_URL_NON_POOLING_HERE"),
          "You forgot to change the default value"
        ),
    POSTGRES_USER:
      z.string()
        .refine(
          (str) => !str.includes("YOUR_POSTGRES_USER_HERE"),
          "You forgot to change the default value"
        ),
    POSTGRES_HOST:
      z.string()
        .refine(
          (str) => !str.includes("YOUR_POSTGRES_HOST_HERE"),
          "You forgot to change the default value"
        ),
    POSTGRES_PASSWORD:
      z.string()
        .refine(
          (str) => !str.includes("YOUR_POSTGRES_PASSWORD_HERE"),
          "You forgot to change the default value"
        ),
    POSTGRES_DATABASE:
      z.string()
        .refine(
          (str) => !str.includes("YOUR_POSTGRES_DATABASE_HERE"),
          "You forgot to change the default value"
        ),
    RESEND_API_KEY:
      z.string()
        .refine(
          (str) => !str.includes("YOUR_RESEND_KEY_HERE"),
          "You forgot to change the default value"
        ),
    RESEND_TO_EMAIL:
      z.string()
        .refine(
          (str) => !str.includes("YOUR_EMAIL_HERE"),
          "You forgot to change the default value"
        ),
    RESEND_FROM_EMAIL:
      z.string()
        .refine(
          (str) => !str.includes("YOUR_EMAIL_HERE"),
          "You forgot to change the default value"
        ),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    // NEXT_PUBLIC_CLIENTVAR: z.string(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    AUTH_SECRET: process.env.AUTH_SECRET,
    POSTGRES_URL: process.env.POSTGRES_URL,
    POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
    POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL,
    POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_TO_EMAIL: process.env.RESEND_TO_EMAIL,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    NODE_ENV: process.env.NODE_ENV,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
});
