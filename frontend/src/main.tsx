import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AuthProvider from "./components/AuthenticationProvider.tsx";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
// AuthoProvider wrap allows the the whole app to acess authentication information
