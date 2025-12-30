const BookCard = ({ book }) => {
  return (
    <div className="bg-white rounded-xl border shadow-sm overflow-hidden flex flex-col">
      <img
        src={book.image}
        alt={book.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 flex-1">
        <h3 className="font-semibold text-slate-900">{book.title}</h3>
        <p className="text-sm text-slate-600">{book.author}</p>

        <p className="mt-2 font-bold text-primary">${book.price}</p>

        <div className="mt-2 flex gap-2 text-xs">
          {book.formats.map((f) => (
            <span key={f} className="px-2 py-1 bg-slate-200 rounded">
              {f}
            </span>
          ))}
        </div>
      </div>

      <div
        className={`h-8 flex items-center justify-center text-white text-xs font-semibold ${
          book.stock > 0 ? "bg-emerald-500" : "bg-rose-500"
        }`}
      >
        {book.stock > 0 ? "En stock" : "Agotado"}
      </div>
    </div>
  );
};

export { BookCard };
