
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CheckoutSeedPage from "./features/checkout/pages/CheckoutSeedPage";
import CheckoutPage from "./features/checkout/pages/CheckoutPage";
import CheckoutSuccessPage from "./features/checkout/pages/CheckoutSuccessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ruta por defecto */}

        <Route path="/dev/checkout-seed" element={<CheckoutSeedPage />} />

        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/checkout/success" element={<CheckoutSuccessPage />} />

        {/* opcional: 404 */}
        <Route path="*" element={<Navigate to="/dev/checkout-seed" replace />} />
      </Routes>
    </BrowserRouter>
  );
}