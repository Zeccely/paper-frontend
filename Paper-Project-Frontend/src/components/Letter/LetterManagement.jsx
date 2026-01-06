import { useForm } from "react-hook-form";
import "../../Styles/LetterManagement.css";
import { sendFile } from "../../api/DocumentFetcher";



async function onSubmit(e) {
    e.preventDefault();

    if (!SelectedFile) {
        console.log("Please select a file.");
        return;
    }

    try {
        const response = await sendFile(Title, Description, SelectedFile);
        console.log("Uploaded OK:", response);
    } catch (error) {
        console.error("Upload failed:", error);
    }
}

const LetterManagement = () => {
    const { register, handleSubmit } = useForm();

    async function onSubmit(data) {
        const file = data.file[0];

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("categoryName", data.category);
        formData.append("deadline", data.deadline);
        formData.append("description", data.description)
        formData.append("file", file);

        await sendFile(formData);
    }

    return (
        <div className="upload-wrapper">
            <form className="card shadow shadow-large shadow-hover" onSubmit={handleSubmit(onSubmit)}>
                <div className="potaat">Add A Poatatoe</div>
                <div className="card-body" >

                    <div className="form-group">
                        <label>Title</label>
                        <input className="input-block" type="text" {...register("title")} />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input className="input-block" type="text" {...register("category")} />
                    </div>

                    <div className="form-group">
                        <label>Deadline</label>
                        <input className="input-block" type="date" {...register("deadline")} />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="input-block" {...register("description")} />
                    </div>

                    <div className="form-group">
                        <label>Document</label>
                        <input className="input-block" type="file" {...register("file")} />
                    </div>

                    <button className="btn-block background-secondary" type="submit">
                        Submit
                    </button>

                </div>
            </form>
        </div>
    );
};

export default LetterManagement;