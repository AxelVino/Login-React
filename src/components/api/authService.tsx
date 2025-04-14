import { User } from "@/types/userType";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const tokenAuth = async (): Promise<User | null> => {
  try {
    const res = await axios.post<User | null>(
      `${API_URL}/api/v1/auth/verify`,
      {},
      {
        withCredentials: true,
      }
    );
    return res.data ?? null;
  } catch (error) {
    return null;
  }
  //return new Promise((resolve) => {
  //setTimeout(() => {
  //resolve(null); // o resolve({ ... }) para simular usuario válido
  //}, 3000); // 3 segundos
  //});
};

//axios.get("http://localhost:4000/api/v1/profile", {
//withCredentials: true,
//});
