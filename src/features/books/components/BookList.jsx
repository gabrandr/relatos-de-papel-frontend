import { BookCard } from "./BookCard";

const BooksList = ({ books }) => {
  if (books.length === 0) {
    return (
      <p className="text-slate-600">
        No se encontraron libros con los filtros aplicados.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export { BooksList };
