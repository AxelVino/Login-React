import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//rutas
import Layout from "./components/ui/layout/index.tsx";
import ProtectedRoute from "./components/security/protectedRoute.tsx";
import LoginWrapper from "./components/wrapper/loginWrapper.tsx";
import { UserList } from "./components/pages/userList.tsx";
import DefaultRedirect from "./components/security/defaultRedirect.tsx";

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
            <UserList></UserList>
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
