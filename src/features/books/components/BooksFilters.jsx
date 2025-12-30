const BooksFilters = ({
  author,
  setAuthor,
  maxPrice,
  setMaxPrice,
  onlyInStock,
  setOnlyInStock,
  format,
  setFormat,
}) => {
  return (
    <aside className="bg-white rounded-xl border p-4 h-fit">
      <h2 className="font-semibold text-slate-900 mb-4">Filtros</h2>

      <div className="mb-4">
        <label className="text-sm text-slate-600">Autor</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 w-full px-3 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm text-slate-600">Precio máximo</label>
        <input
          type="number"
          min="0"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="mt-1 w-full px-3 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="mb-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={onlyInStock}
          onChange={(e) => setOnlyInStock(e.target.checked)}
          className="accent-primary"
        />
        <span className="text-sm text-slate-700">Solo en stock</span>
      </div>
      <div>
        <label className="text-sm text-slate-600 block mb-1">Formato</label>
        <select
          value={format}
          onChange={(e) => setFormat(e.target.value)}
          className="w-full px-3 py-2 bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="all">Todos</option>
          <option value="fisico">Físico</option>
          <option value="digital">Digital</option>
        </select>
      </div>
    </aside>
  );
};

export { BooksFilters };
