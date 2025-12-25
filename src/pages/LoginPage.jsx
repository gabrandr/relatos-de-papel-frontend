import { useLogin } from "../hooks/useLogin";
import bookLogin from "../assets/images/bookLogin.png";
import { PrimaryButton } from "../components/ui/PrimaryButton";

const LoginPage = () => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    submitLogin,
    isLoading,
    error,
  } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary/20">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitLogin();
          }}
          className="p-10 flex flex-col justify-center"
        >
          <h1 className="text-2xl font-bold text-slate-900 mb-6">
            Iniciar sesión
          </h1>
          <label className="text-sm text-slate-600 mb-1">
            Correo electrónico
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-4 px-4 py-2 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <label className="text-sm text-slate-600 mb-1">
            Contraseña
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-6 px-4 py-2 rounded-lg bg-slate-100 focus:outline-none focus:ring-2 focus:ring-primary"
          />

          {error && (
            <p className="text-rose-500 text-sm mb-4">
              {error}
            </p>
          )}

          <PrimaryButton
            type="submit"
            text="Iniciar sesión"
            isLoading={isLoading}
          />
        </form>

        <div className="bg-slate-200 flex flex-col items-center justify-center p-10 text-center">
          <img
            src={bookLogin}
            alt="Relatos de Papel"
            className="w-40 mb-6"
          />

          <h2 className="text-xl font-bold text-slate-900">
            Relatos de Papel
          </h2>
          <p className="text-slate-600 mt-2">
            Bienvenido a tu próxima historia.
          </p>
        </div>
      </div>
    </div>
  );
};

export { LoginPage };
