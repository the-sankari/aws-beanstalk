// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/aws-beanstalk/", // Replace <repository-name> with the name of your GitHub repository
  plugins: [react()],
});
