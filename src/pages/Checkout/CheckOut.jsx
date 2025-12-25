import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import AddressForm from "../../features/checkout/components/AddressForm";
import PaymentMethod from "../../features/checkout/components/PaymentMethod";
import CheckoutSummary from "../../features/checkout/components/CheckoutSummary";

export default function CheckOut() {
  const { cart } = useCart();

  // Detectar items físicos ('fisico' en el array formats)
  const hasPhysicalItems = cart.some(
    (item) => item.formats && item.formats.includes("fisico")
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-slate-800 mb-4">
          Tu carrito está vacío
        </h1>
        <Link to="/" className="text-primary hover:underline">
          Volver a la tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header simple */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="text-2xl font-bold text-slate-800">
            Relatos de Papel
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-slate-600 font-medium">Checkout Seguro</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 text-emerald-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Columna Izquierda: Formularios */}
          <div className="flex-2 space-y-6">
            {/* Mostrar dirección solo si hay items físicos */}
            {hasPhysicalItems && (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                <AddressForm />
              </div>
            )}

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <PaymentMethod />
            </div>
          </div>

          {/* Columna Derecha: Resumen */}
          <div className="flex-1">
            <CheckoutSummary hasPhysicalItems={hasPhysicalItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
