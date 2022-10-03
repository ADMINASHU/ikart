import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { AuthProvider } from "./components/context/AuthProvider";
import { ProductProvider } from "./components/context/ProductProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
          <App />
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
);
