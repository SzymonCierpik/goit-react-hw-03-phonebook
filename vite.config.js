import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://github.com/SzymonCierpik/goit-react-hw-04-phonebook.git",
});
