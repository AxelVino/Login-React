import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { tokenAuth } from "../api/authService";
import Loader from "../ui/loader/loader";
import Login from "../../routes/login.tsx";

const LoginWrapper = () => {
  const [loading, setLoading] = useState(true);
  const [_authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      const user = await tokenAuth();
      if (user) {
        setAuthenticated(true);
        navigate("/home", { replace: true });
      } else {
        setLoading(false);
      }
    };
    check();
  }, []);

  if (loading) return <Loader />; // o spinner

  return <Login />;
};

export default LoginWrapper;
