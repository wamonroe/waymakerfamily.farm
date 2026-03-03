import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "happy-dom",
    globals: true,
    css: true,
    setupFiles: ["./test/setup.ts"]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  }
});
