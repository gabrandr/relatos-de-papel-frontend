import { useBooks } from "../features/books/hooks/useBooks";
import { BooksFilters } from "../features/books/components/BooksFilters";
import { BooksList } from "../features/books/components/BookList";

const BooksPage = () => {
  const {
    books,
    author,
    setAuthor,
    onlyInStock,
    setOnlyInStock,
    format,
    setFormat,
    maxPrice,
    setMaxPrice,
  } = useBooks();

  return (
    <div className="min-h-screen bg-primary/20 p-6">
      <h1 className="text-2xl font-bold text-slate-900 mb-6">
        Resultado de búsqueda
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <BooksFilters
          author={author}
          setAuthor={setAuthor}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          onlyInStock={onlyInStock}
          setOnlyInStock={setOnlyInStock}
          format={format}
          setFormat={setFormat}
        />

        <section className="lg:col-span-3">
          <BooksList books={books} />
        </section>
      </div>
    </div>
  );
};

export { BooksPage };
