import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultRedirect from "./components/security/defaultRedirect.tsx";

//rutas
import Layout from "./components/ui/layout/index.tsx";
import ProtectedRoute from "./components/security/protectedRoute.tsx";
import LoginWrapper from "./components/wrapper/loginWrapper.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DefaultRedirect />,
      },
      {
        path: "/login",
        element: <LoginWrapper />,
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <div>logged</div>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
