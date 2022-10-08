import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { AuthProvider } from "./components/context/AuthProvider";
import { ProductProvider } from "./components/context/ProductProvider";
import { UIProvider } from "./components/context/UIProvider";
import { CartProvider } from "./components/context/CartProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductProvider>
      <AuthProvider>
        <CartProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </CartProvider>
      </AuthProvider>
    </ProductProvider>
  </React.StrictMode>
);
