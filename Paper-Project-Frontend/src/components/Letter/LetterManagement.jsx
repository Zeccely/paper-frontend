import "C:\\Users\\jepis\\Desktop\\School stuff\\I Hate Paper Project\\paper-project-frontend\\Paper-Project-Frontend\\src\\Styles\\LetterManagement.css"

const LetterManagement = () => {
    return (
        <div className="upload-wrapper">
            <form className="card shadow shadow-large shadow-hover">
                <div className="card-header">Add A Document</div>
                <div className="card-body" >

                    <div className="form-group">
                        <label>Title</label>
                        <input className="input-block" type="text" />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <input className="input-block" type="text" />
                    </div>

                    <div className="form-group">
                        <label>Deadline</label>
                        <input className="input-block" type="date" />
                    </div>

                    <div className="form-group">
                        <label>Description</label>
                        <textarea className="input-block" />
                    </div>

                    <div className="form-group">
                        <label>Document</label>
                        <input className="input-block" type="file" />
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