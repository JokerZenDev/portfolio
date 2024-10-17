import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"

export default defineConfig(
  ({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "")
    return {
      plugins: [react()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      define: {
        "process.env.EMAILJS_PUBLIC_KEY": JSON.stringify(env.EMAILJS_PUBLIC_KEY),
        "process.env.EMAILJS_SERVICE_ID": JSON.stringify(env.EMAILJS_SERVICE_ID),
        "process.env.EMAILJS_TEMPLATE_ID": JSON.stringify(env.EMAILJS_TEMPLATE_ID),
      },
    }
  }
)
