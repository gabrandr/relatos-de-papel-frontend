import React, { useState } from "react";

export default function PaymentMethod() {
  const [method, setMethod] = useState("card"); // 'card' | 'paypal'
  const [cardData, setCardData] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
  });

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-primary"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          />
        </svg>
        Método de pago
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMethod("card")}
          className={`flex-1 py-3 px-4 rounded-lg border text-sm font-bold flex items-center justify-center gap-2 transition-all
            ${
              method === "card"
                ? "bg-slate-100 border-primary text-primary"
                : "border-slate-200 text-slate-500 hover:bg-slate-50"
            }
          `}
        >
          <span>💳</span> Tarjeta
        </button>
        <button
          onClick={() => setMethod("paypal")}
          className={`flex-1 py-3 px-4 rounded-lg border text-sm font-bold flex items-center justify-center gap-2 transition-all
            ${
              method === "paypal"
                ? "bg-slate-100 border-primary text-primary"
                : "border-slate-200 text-slate-500 hover:bg-slate-50"
            }
          `}
        >
          <span>🅿️</span> PayPal
        </button>
      </div>

      {/* Content */}
      <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 min-h-[200px] flex flex-col justify-center">
        {method === "card" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div>
              <input
                type="text"
                name="number"
                value={cardData.number}
                onChange={handleCardChange}
                placeholder="Número de tarjeta"
                className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="expiry"
                value={cardData.expiry}
                onChange={handleCardChange}
                placeholder="MM/YY"
                className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="text"
                name="cvc"
                value={cardData.cvc}
                onChange={handleCardChange}
                placeholder="CVC"
                className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                name="name"
                value={cardData.name}
                onChange={handleCardChange}
                placeholder="Nombre en la tarjeta"
                className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>
        )}

        {method === "paypal" && (
          <div className="text-center space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <p className="text-slate-600 mb-2">
              Serás redirigido a PayPal para completar tu compra de forma
              segura.
            </p>
            <button className="bg-[#FFC439] text-slate-900 px-8 py-3 rounded-full font-bold hover:brightness-105 transition-all w-full max-w-xs mx-auto shadow-sm">
              Pagar con PayPal
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
