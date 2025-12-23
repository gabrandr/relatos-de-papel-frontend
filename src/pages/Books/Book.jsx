import React from "react";
import { books } from "../../data/books.mock";
import { useCart } from "../../hooks/useCart";

export default function Book() {
  const { addToCart } = useCart();

  const handleAddRandom = () => {
    // Generar índice aleatorio
    const randomIndex = Math.floor(Math.random() * books.length);
    const randomBook = books[randomIndex];

    addToCart(randomBook);
    alert(`Libro agregado: ${randomBook.title}`);
  };

  return (
    <div className="p-8 flex flex-col items-center justify-center min-h-[50vh] gap-6">
      <h1 className="text-3xl font-bold text-gray-800">Prueba de Carrito</h1>
      <p className="text-gray-600">
        Presiona el botón para agregar un libro aleatorio al carrito.
      </p>

      <button
        onClick={handleAddRandom}
        className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition shadow-lg active:scale-95"
      >
        🎲 Agregar Libro Random
      </button>

      <div className="mt-8 text-sm text-gray-500">
        <p>Total de libros en catálogo: {books.length}</p>
      </div>
    </div>
  );
}
