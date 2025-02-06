import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({

  server: {
    DATABASE_URL: z.string().url(),
    NODE_ENV: z
      .enum(["development", "test", "production"])
      .default("development"),

    SINGLESTORE_USER: z.string(),
    SINGLESTORE_PASS: z.string(),
    SINGLESTORE_HOST: z.string(),
    SINGLESTORE_PORT: z.string(),
    SINGLESTORE_DB_NAME: z.string(),
  },

  client: {
    NEXT_PUBLIC_POSTHOG_KEY: z.string(),
    NEXT_PUBLIC_POSTHOG_HOST: z.string(),
  },


  runtimeEnv: {
    DATABASE_URL: process.env.DATABASE_URL,
    NODE_ENV: process.env.NODE_ENV,
    SINGLESTORE_USER: process.env.SINGLESTORE_USER,
    SINGLESTORE_PASS: process.env.SINGLESTORE_PASS,
    SINGLESTORE_HOST: process.env.SINGLESTORE_HOST,
    SINGLESTORE_PORT: process.env.SINGLESTORE_PORT,
    SINGLESTORE_DB_NAME: process.env.SINGLESTORE_DB_NAME,

    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  },

  skipValidation: !!process.env.SKIP_ENV_VALIDATION,

  emptyStringAsUndefined: true,
});