import React from "react";
import { useCart } from "../../../hooks/useCart";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";

export default function CartList() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-xl">Tu carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl mx-auto p-4">
      {/* Lado Izquierdo: Lista de Items */}
      <div className="flex-2">
        {/* Header de la Tabla */}
        <div className="grid grid-cols-[2fr_1fr_1fr] bg-gray-200 p-3 rounded-t-lg text-gray-700 font-medium text-sm uppercase tracking-wider mb-2">
          <div className="pl-4">Item</div>
          <div className="text-center">Cantidad</div>
          <div className="text-right pr-4">Precio</div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* Lado Derecho: Resumen */}
      <div className="flex-1">
        <OrderSummary />
      </div>
    </div>
  );
}
