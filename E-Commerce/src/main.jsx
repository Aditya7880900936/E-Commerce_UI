import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Context/ProductContext.jsx";
import SidebarProvider from "./Context/SidebarContext.jsx";
import CartProvider from "./Context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <CartProvider>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
    </CartProvider>
  </SidebarProvider>
);
