import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PRODIGY_WD_04/",
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
