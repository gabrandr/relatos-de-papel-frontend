import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { UnauthorizedPage } from "../pages/UnauthorizedPage";
import { ProtectedRoute } from "./ProtectedRoute";
import { BooksPage } from "../pages/BooksPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* root */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* protected routes */}
        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <BooksPage />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/unauthorized" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRouter };
