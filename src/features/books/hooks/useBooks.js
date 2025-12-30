import { useMemo, useState } from "react";
import { books as mockBooks } from "../../../data/books.mock";

export const useBooks = () => {
  const [author, setAuthor] = useState("");
  const [onlyInStock, setOnlyInStock] = useState(false);
  const [format, setFormat] = useState("all"); 
  const [maxPrice, setMaxPrice] = useState("");

  // simulate an API search word
  const apiSearchWord = "quijote";

  const filteredBooks = useMemo(() => {
    // Simulate api filter
    const apiFilteredBooks = mockBooks.filter((book) =>
      book.title.toLowerCase().includes(apiSearchWord.toLowerCase())
    );

    return apiFilteredBooks.filter((book) => {
      const matchesAuthor = author
        ? book.author.toLowerCase().includes(author.toLowerCase())
        : true;

      const matchesStock = onlyInStock ? book.stock > 0 : true;

      const matchesFormat =
        format === "all"
          ? true
          : book.formats.includes(format);

      const matchesPrice = maxPrice
        ? book.price <= Number(maxPrice)
        : true;

      return (
        matchesAuthor &&
        matchesStock &&
        matchesFormat &&
        matchesPrice
      );
    });
  }, [author, onlyInStock, format, maxPrice]);

  return {
    books: filteredBooks,
    author,
    setAuthor,
    onlyInStock,
    setOnlyInStock,
    format,
    setFormat,
    maxPrice,
    setMaxPrice,
  };
};
