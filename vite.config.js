import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: "#121212",
          800: "#1e1e2f",
          700: "#2b2c4b",
        },
        purple: {
          cosmic: "#8a2be2",
        },
      },
      backgroundImage: {
        "space-pattern":
          "url('https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')",
        "modal-bg":
          "url('https://images.pexels.com/photos/7630006/pexels-photo-7630006.jpeg')",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
