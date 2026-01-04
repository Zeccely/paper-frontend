import axios from "axios";

const API_BASE = "http://localhost:8080";

const getAllDocuments = async () => {
  const response = await axios.get(`${API_BASE}/api/documents`);
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get(`${API_BASE}/api/categories`);
  return response.data;
};

const getDocumentById = async (uuid) => {
  const response = await axios.get(`${API_BASE}/api/documents/${uuid}`);
  return response.data;
};

const sendFile = async (formData) => {
  const response = await axios.post(
    `${API_BASE}/api/files/upload`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response.data;
};

const getFile = async (fileUUID) => {
  const response = await axios.get(`${API_BASE}/api/files/${fileUUID}`, {
    responseType: "blob",
  });
  return response.data;
};

export { getAllDocuments, getCategories, getDocumentById, sendFile, getFile };
