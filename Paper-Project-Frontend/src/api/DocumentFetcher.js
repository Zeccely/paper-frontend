import api from "./ApiClient";

const getAllDocuments = async () => {
  const response = await api.get("/api/documents");
  return response.data;
};

const getDocumentById = async (uuid) => {
  const response = await api.get("/api/documents/${uuid}");
  return response.data;
};

const sendFile = async (formData) => {
  const response = await api.post("/api/files/upload",
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );

  return response.data;
};

const getFile = async (fileUUID) => {
  const response = await api.get("/api/files/${fileUUID}", {
    responseType: "blob",
  });
  return response.data;
};

export { getAllDocuments, getDocumentById, sendFile, getFile };
