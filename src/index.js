import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { AuthProvider } from "./components/context/AuthProvider";
import { CartProvider } from "./components/context/CartProvider";
import { Provider } from "react-redux";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
