import React from "react";
import { useNavigate } from "react-router-dom";
import { books } from "../../data/books.mock";

export default function Home() {
  const navigate = useNavigate();

  const handleRandomBook = () => {
    // Seleccionar libro aleatorio
    const randomIndex = Math.floor(Math.random() * books.length);
    const selectedBook = books[randomIndex];

    // Navegar a /book pasando el objeto libro
    navigate("/book", { state: selectedBook });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-slate-800 mb-8">
        RELATOS DE PAPEL
      </h1>

      <div className="flex gap-4">
        <button
          onClick={handleRandomBook}
          className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:bg-primary-dark transition-all transform hover:-translate-y-1"
        >
          🎲 Ver Detalle de Libro Random
        </button>
      </div>
    </div>
  );
}
