import axios from "axios";
const token = localStorage.getItem("token");

export const getUsers = async () => {
  const res = await axios.get("/api/v1/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const getUserById = async (id: string) => {
  const res = await axios.get(`/api/v1/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};
