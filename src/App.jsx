// function App() {
//   return (
//     <div>
//       <h1>RELATOS DE PAPEL</h1>
//     </div>
//   );
// }

// export default App;


import { AuthProvider } from "./context/AuthContext";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export default App;
