import axios from "axios";

async function getDocumentPicture() {

    const response = await axios.get("http://localhost:8080/api/documents/{uuid}")

    return response.data
}

async function updatePicture() {

}

export { getDocumentPicture }