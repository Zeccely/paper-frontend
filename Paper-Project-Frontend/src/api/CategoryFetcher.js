import api from "./ApiClient.js"

const getCategories = async () => {
    const response = await api.get("/api/categories");
    return response.data;
};

export { getCategories };