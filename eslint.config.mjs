import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Stray dirs left behind by remote-mount cleanup quirks during CI setup
    // (rm -rf couldn't remove them; safe to delete by hand on this Mac).
    ".next-stale-*/**",
    "coverage/**",
    "coverage-stale-*/**",
  ]),
]);

export default eslintConfig;
