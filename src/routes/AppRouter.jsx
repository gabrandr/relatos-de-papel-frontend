import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BookPage from "../pages/Books/Book";
import CartPage from "../pages/Shopping_cart/Cart";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal - Por ahora redirige al carrito para probar */}
        <Route path="/" element={<Navigate to="/cart" replace />} />

        {/* Ruta del Carrito */}
        <Route path="/book" element={<BookPage />} />

        {/* Ruta del Carrito */}
        <Route path="/cart" element={<CartPage />} />

        {/* Ruta 404 - Para manejar rutas no definidas */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
};
