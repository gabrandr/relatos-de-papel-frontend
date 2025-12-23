import React from "react";
import { useCart } from "../../../hooks/useCart";

export default function CartItem({ item }) {
  const { addToCart, decreaseQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between border-b border-gray-200 py-4">
      {/* Columna Item: Imagen + Título */}
      <div className="flex items-center gap-4 flex-2">
        <img
          src={item.image}
          alt={item.title}
          className="w-16 h-24 object-cover rounded shadow-sm"
        />
        <div>
          {/* La imagen muestra el titulo en mayusculas y quizas descripcion pequeña */}
          <h3 className="font-bold text-gray-800 uppercase text-sm tracking-wide">
            {item.title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 max-w-[200px] mt-1">
            {item.description}
          </p>
        </div>
      </div>

      {/* Columna Cantidad: Botones y numero */}
      <div className="flex items-center justify-center gap-3 flex-1">
        <button
          onClick={() => decreaseQuantity(item.id)}
          className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          -
        </button>
        <span className="text-lg font-medium w-6 text-center">
          {item.quantity}
        </span>
        <button
          onClick={() => addToCart(item)}
          className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          +
        </button>
      </div>

      {/* Columna Eliminar + Precio */}
      <div className="flex items-center justify-end gap-6 flex-1">
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-600 hover:text-red-500 transition"
          title="Eliminar del carrito"
        >
          {/* Icono de basurero simple SVG */}
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
        <span className="text-lg font-semibold min-w-[80px] text-right">
          ${(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
