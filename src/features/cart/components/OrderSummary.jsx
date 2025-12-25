import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../hooks/useCart";

export default function OrderSummary() {
  const { getCartTotal, applyCoupon, discount } = useCart();
  const { subtotal, discountAmount, total } = getCartTotal();
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");

  const handleApplyCoupon = () => {
    if (!couponCode.trim()) return;

    const applied = applyCoupon(couponCode);
    if (applied) {
      setCouponMessage("¡Cupón aplicado correctamente!");
    } else {
      setCouponMessage("Cupón no válido");
    }
  };

  return (
    <div className="bg-slate-50 p-8 rounded-xl shadow-sm h-fit border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-6">
        Resumen del Pedido
      </h2>

      {/* Sección Cupón */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-600 mb-2 uppercase tracking-wide">
          Código de Descuento
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="flex-1 p-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
            placeholder="Ej: DESC10"
          />
          <button
            onClick={handleApplyCoupon}
            className="bg-slate-800 text-white px-5 py-2 rounded-lg font-medium hover:bg-slate-900 transition text-sm"
          >
            Aplicar
          </button>
        </div>
        {couponMessage && (
          <p
            className={`text-sm mt-3 font-medium flex items-center gap-1 ${
              couponMessage.includes("correctamente")
                ? "text-emerald-600"
                : "text-rose-500"
            }`}
          >
            {couponMessage.includes("correctamente") ? "✓ " : "✕ "}
            {couponMessage}
          </p>
        )}
      </div>

      <hr className="border-slate-200 mb-6" />

      {/* Resumen Financiero */}
      <div className="space-y-3 mb-6 text-slate-700">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="font-medium">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span>
            Descuento{" "}
            {discount > 0 && (
              <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold ml-2">
                -{discount}%
              </span>
            )}
          </span>
          <span className="text-emerald-600 font-medium">
            -${discountAmount.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-end mb-8 border-t border-slate-200 pt-6">
        <span className="font-bold text-lg text-slate-800">Total</span>
        <div className="text-right">
          <span className="block text-2xl font-bold text-primary">
            ${total.toFixed(2)}
          </span>
          <span className="text-xs text-slate-400">Impuestos incluidos</span>
        </div>
      </div>

      <Link
        to="/checkout"
        className="block text-center w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-dark transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/30 uppercase tracking-widest text-sm"
      >
        Proceder al Pago
      </Link>
    </div>
  );
}
