import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookPage from "../pages/Books/Book";
import CartPage from "../pages/Shopping_cart/Cart";
import CheckOutPage from "../pages/Checkout/CheckOut";
import OrderConfirmationPage from "../pages/Checkout/OrderConfirmation";

import HomePage from "../pages/Home/Home";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<HomePage />} />

        {/* Ruta del Carrito */}
        <Route path="/book" element={<BookPage />} />

        {/* Ruta del Carrito */}
        <Route path="/cart" element={<CartPage />} />

        {/* Ruta de Checkout */}
        <Route path="/checkout" element={<CheckOutPage />} />

        {/* Ruta de Confirmación */}
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

        {/* Ruta 404 - Para manejar rutas no definidas */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};
