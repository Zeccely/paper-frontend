import api from "./ApiClient.js";

export async function login(usernameOrEmail, password) {

  const res = await api.post("/api/sessions", {
    username: usernameOrEmail,
    password,
  });
  return res.data;
}

export async function logout() {
  const res = await api.delete("/api/sessions");
  return res.data;
}
