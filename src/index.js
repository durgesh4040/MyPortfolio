import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context";
import { HelmetProvider } from "react-helmet-async";

const rootElement = document.getElementById("root");

// If the root element has child nodes, use hydrateRoot for server-side rendering (SSR).
if (rootElement.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <React.StrictMode>
      <HelmetProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
} else {
  // Otherwise, use createRoot for client-side rendering (CSR).
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <HelmetProvider>
        <AppProvider>
          <App />
        </AppProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
}
