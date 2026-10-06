import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/ledger-test-app/",
  plugins: [react()],
});
