import api from "./ApiClient.js";

export default async function login(credentials) {
  try {
    const response = await api.post("/api/auth/login", credentials);
    return response.data;
  } catch (err) {
    throw new Error("LOGIN_FAILED");
  }
}
