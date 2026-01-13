import api from "./ApiClient";

const getAllDocuments = async () => {
  const response = await api.get("/api/documents");
  return response.data;
};

const getDocumentById = async (uuid) => {
  const response = await api.get(`/api/documents/${uuid}`);  // backticks were for a reason, I reverted this twice
  return response.data;
};

const sendFile = async (formData) => {
  const response = await api.post("/api/documents", formData);
  return response.data;
};

const getFile = async (fileUUID) => {
  const response = await api.get(`/api/documents/${fileUUID}/file`, {
    responseType: "blob",
  });
  return response.data;
};

export { getAllDocuments, getDocumentById, sendFile, getFile };
