import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// --- Register Service Worker dari vite-plugin-pwa ---
import { registerSW } from "virtual:pwa-register";

// Update otomatis jika ada versi baru PWA
registerSW({
  onNeedRefresh() {
    if (confirm("Versi baru tersedia. Reload sekarang?")) {
      window.location.reload();
    }
  },
  onOfflineReady() {
    console.log("Aplikasi siap digunakan secara offline.");
  },
});
// -----------------------------------------------------

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
