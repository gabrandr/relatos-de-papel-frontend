import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function Book() {
  const location = useLocation();
  const navigate = useNavigate();
  const book = location.state;
  const { addToCart } = useCart();

  const [selectedFormat, setSelectedFormat] = useState("Físico");

  // Redirigir si no hay libro (acceso directo a url)
  if (!book) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center bg-slate-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          No se encontro el libro
        </h2>
        <Link to="/" className="text-primary hover:underline">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(book, selectedFormat);
    // Feedback visual opcional o redirect. Por ahora solo agrega.
    alert(`Agregado al carrito: ${book.title} (${selectedFormat})`);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      {/* Header simplificado o navbar */}
      <div className="container mx-auto px-4 w-11/12 lg:w-9/12 mb-8 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-slate-800">
          Relatos de Papel
        </Link>
        <Link to="/cart" className="relative group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-slate-800 group-hover:text-primary transition-colors"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </Link>
      </div>

      <div className="container mx-auto px-4 w-11/12 lg:w-9/12 bg-white p-6 lg:p-12 rounded-2xl shadow-sm border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna Izquierda: Imagen */}
          <div className="flex justify-center items-start h-full">
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-full object-cover rounded-lg shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-500"
            />
          </div>

          {/* Columna Derecha: Detalles */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              {/* Tags o Categoría (Mock) */}
              <div className="flex gap-2 mb-4">
                <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Programación
                </span>
                <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Best Seller
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2 leading-tight">
                {book.title}
              </h1>
              <p className="text-xl text-slate-500 font-medium mb-6">
                Autor: <span className="text-slate-800">{book.author}</span>
              </p>

              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {book.description}
                <br />
                <br />
                Transformar al programador para que escriba código que sea fácil
                de entender y modificar, adoptando los valores de la
                construcción ágil de software.
              </p>
            </div>

            <div className="space-y-6 bg-slate-50 p-6 rounded-xl border border-slate-100">
              {/* Precio */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-bold text-slate-900">
                  ${book.price}
                </span>
              </div>

              {/* Selector Formato */}
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">
                  Formato:
                </label>
                <div className="relative">
                  <select
                    value={selectedFormat}
                    onChange={(e) => setSelectedFormat(e.target.value)}
                    className="w-full p-4 bg-white border border-slate-300 rounded-lg appearance-none font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer hover:border-primary transition-colors"
                  >
                    <option value="Físico">Físico - Tapa Blanda</option>
                    <option value="Digital">Digital - PDF / EPUB</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Botón Añadir */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-slate-300 text-slate-800 py-4 rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all shadow-lg hover:shadow-primary/30 active:scale-95"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
