import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
});

export async function getMe() {
    const res = await api.get("/api/auth/me"); // or /api/users/me
    return res.data;
}

