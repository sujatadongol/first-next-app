import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      // Scoped to app/lib on purpose: that's the only layer with real unit
      // tests today (plain functions, no React/JSX). Widen this glob as more
      // areas get tested (Server Actions, route handlers, etc. per Day 8) —
      // gating on the whole app right now would just fail every build on
      // code nobody has written tests for yet, which teaches the pipeline
      // to be ignored rather than trusted.
      include: ["app/lib/**/*.ts"],
      exclude: ["**/*.test.ts", "**/*.d.ts"],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
    },
  },
});
