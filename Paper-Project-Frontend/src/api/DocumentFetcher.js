import axios from "axios";

async function getFile() {

    const response = await axios.get("http://localhost:8080/api/documents/{uuid}")

    return response.data
}

async function sendFile(formData) {
    const response = await axios.post(
        "http://localhost:8080/api/files/upload",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data;
}

async function getCategory() {
    const response = await axios.get("http://localhost:8080/api/categories")
    return response.data;
}



export { getFile, sendFile };