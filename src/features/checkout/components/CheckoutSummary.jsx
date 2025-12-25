import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";
import { useNavigate } from "react-router-dom";

export default function CheckoutSummary({ hasPhysicalItems }) {
  const { getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const { subtotal, discountAmount, total } = getCartTotal();

  // Mock shipping cost logic
  const shippingCost = hasPhysicalItems ? 12.5 : 0;
  const finalTotal = total + shippingCost;

  const handleConfirmOrder = () => {
    // Simular proceso de pago
    // En una app real aqui iria la llamada a la API

    // Limpiar carrito
    clearCart();

    // Feedback y redirección
    navigate("/order-confirmation");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-fit sticky top-8">
      <h2 className="text-xl font-bold text-slate-800 mb-6">Resumen Final</h2>

      <div className="space-y-3 mb-6 text-slate-600 text-sm">
        <div className="flex justify-between">
          <span>Productos</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Envío y manejo</span>
          <span className={shippingCost === 0 ? "text-emerald-600" : ""}>
            {shippingCost === 0 ? "Gratis" : `$${shippingCost.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between">
          <span>Impuestos</span>
          <span>$0.00</span>
        </div>

        {discountAmount > 0 && (
          <div className="flex justify-between text-emerald-600 font-medium">
            <span>Descuento aplicado</span>
            <span>-${discountAmount.toFixed(2)}</span>
          </div>
        )}

        <hr className="border-slate-200 my-4" />

        <div className="flex justify-between text-lg font-bold text-slate-900">
          <span>Total pedido</span>
          <span className="text-primary">${finalTotal.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={handleConfirmOrder}
        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/30 uppercase tracking-widest text-sm"
      >
        Confirmar y Pagar
      </button>

      <p className="text-xs text-center text-slate-400 mt-4">
        Transacción segura y encriptada
      </p>
    </div>
  );
}
