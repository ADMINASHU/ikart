import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { AuthProvider } from "./components/context/AuthProvider";
import { ProductProvider } from "./components/context/ProductProvider";
import { UIProvider } from "./components/context/UIProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UIProvider>
      <ProductProvider>
          <App />
      </ProductProvider>
      </UIProvider>
    </AuthProvider>
  </React.StrictMode>
);
