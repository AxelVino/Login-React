import { JSX, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { tokenAuth } from "../api/authService";
import Loader from "../ui/loader/loader";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const validate = async () => {
      const res = await tokenAuth();
      setIsAuthorized(!!res);
    };

    validate();
  }, []);

  if (isAuthorized === null) {
    return <Loader />;
  }

  return isAuthorized ? children : <Navigate to="/login" replace />;
}
