import { api } from "./ApiClient"


async function getDocumentPicture() {

    const response = await api.get("http://localhost:8080/api/documents/{uuid}")

    return response.data
}

async function updatePicture() {

}

export { getDocumentPicture }