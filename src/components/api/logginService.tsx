import axios from "axios";
import { LoginResponse } from "@/responses/loginResponse";
const API_URL = import.meta.env.VITE_API_URL;

export const postLoggin = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const res = await axios.post<LoginResponse>(
    `${API_URL}/api/v1/auth/login`,
    {
      email,
      password,
    },
    {
      withCredentials: true,
    }
  );
  return res.data;
};

export const postRegister = async (
  name: string,
  username: string,
  email: string,
  password: string
) => {
  const requestData = {
    name: name,
    username: username,
    email: email,
    password: password,
  };
  const res = await axios.post("/api/v1/auth/register", requestData);
  return res.data;
};
