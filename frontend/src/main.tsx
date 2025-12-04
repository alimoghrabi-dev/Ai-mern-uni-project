import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import "./index.css";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.withCredentials = true;

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
    allVariants: {
      color: "white",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Toaster
            position="bottom-right"
            toastOptions={{
              className:
                "backdrop-blur-xl shadow-lg shadow-black/30 rounded-xl border border-white/10",
              style: {
                background: "rgba(17, 24, 39, 0.55)",
                color: "#fff",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: "12px 16px",
              },

              success: {
                className: "backdrop-blur-xl",
                style: {
                  background: "rgba(16,185,129,0.15)",
                  border: "1px solid rgba(16,185,129,0.4)",
                  color: "#34d399",
                },
              },

              error: {
                className: "backdrop-blur-xl",
                style: {
                  background: "rgba(239,68,68,0.15)",
                  border: "1px solid rgba(239,68,68,0.4)",
                  color: "#f87171",
                },
              },
            }}
          />

          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
