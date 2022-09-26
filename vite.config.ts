import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],

  // @ts-ignore
  test: {
    globals: true,
    environment: "jsdom",
    deps: {
      registerNodeLoader: false,
    },
  },
});
