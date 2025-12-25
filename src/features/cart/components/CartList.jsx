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
    <div className="flex flex-col lg:flex-row gap-8 w-full px-4 lg:w-9/12 lg:px-0 mx-auto mt-8">
      {/* Lado Izquierdo: Lista de Items */}
      <div className="flex-2">
        {/* Header de la Tabla (Oculto en móvil) */}
        <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr] bg-slate-100 p-4 rounded-t-lg text-slate-700 font-medium text-sm uppercase tracking-wider mb-2 border-b-2 border-primary/20">
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
