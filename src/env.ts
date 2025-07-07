import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod/v4";

export const env = createEnv({
  server: {
    LIARA_API_KEY: z.string(),
  },
  experimental__runtimeEnv: process.env,
  emptyStringAsUndefined: true,
  isServer: typeof window === "undefined",
  skipValidation: !!process.env.SKIP_VALIDATION,
});
