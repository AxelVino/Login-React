import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { tokenAuth } from "../api/authService";
import Loader from "../ui/loader/loader.tsx";

export default function DefaultRedirect() {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);
  useEffect(() => {
    const validateToken = async () => {
      const res = await tokenAuth();
      setIsAuthorized(!!res);
    };
    validateToken();
  }, []);

  if (isAuthorized === null) return <Loader />;

  return isAuthorized ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/login" replace />
  );
}
