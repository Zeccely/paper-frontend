import axios from "axios";

async function getFile() {

    const response = await axios.get("http://localhost:8080/api/files")

    return response.data
}

async function sendFile(title, description) {

    const response = await axios.post("http://localhost:8080/api/upload", {
        title: title,
        description: description

    })

    return response.data
}

export { getFile, sendFile };