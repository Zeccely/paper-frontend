import api from "./ApiClient.js";

export async function createUser(data) {
  const res = await api.post("/api/users", {
    username: data.username,
    email: data.email,
    password: data.password,
  });
  return res.data;
}
