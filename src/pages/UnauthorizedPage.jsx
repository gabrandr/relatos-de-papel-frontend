import { Link } from "react-router-dom";

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm w-96 text-center">
        <h1 className="text-xl font-bold text-rose-500 mb-2">
          Acceso no autorizado
        </h1>

        <p className="text-slate-600 mb-4">
          No tienes permisos para acceder a esta página.
          Debes iniciar sesión.
        </p>

        <Link
          to="/login"
          className="text-primary hover:underline font-medium"
        >
          Ir al login
        </Link>
      </div>
    </div>
  );
};


export { UnauthorizedPage };