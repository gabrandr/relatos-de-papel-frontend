import React from "react";
import { Link } from "react-router-dom";

export default function OrderConfirmation() {
  const orderId = Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full text-center border border-slate-200 animate-in zoom-in duration-500">
        {/* Success Icon */}
        <div className="mb-6 flex justify-center">
          <div className="bg-emerald-100 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-16 text-emerald-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-slate-800 mb-2">
          ¡Gracias por tu compra!
        </h1>
        <p className="text-slate-500 mb-8">
          Número de pedido:{" "}
          <span className="font-mono font-bold text-slate-700">#{orderId}</span>
        </p>

        <div className="space-y-4">
          {/* Botón Descargar (Mock) */}
          <button className="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 group">
            Descargar E-book Ahora
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5 group-hover:translate-y-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>

          {/* Botón Volver a la Tienda */}
          <Link
            to="/"
            className="w-full bg-slate-100 text-slate-700 py-3.5 rounded-xl font-bold hover:bg-slate-200 transition-colors block"
          >
            Volver a la tienda
          </Link>
        </div>
      </div>
    </div>
  );
}
