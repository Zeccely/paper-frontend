import api from "./ApiClient.js";

export async function login({ username, password }) {

  const res = await api.post(`/api/sessions`, {
    username,
    password,
  });
  return res.data;
}

export async function logout() {
  const res = await api.delete("/api/sessions");
  return res.data;
}
