import "../../Styles/LetterManagement.css";

const LetterInformation = ({document, onOpen}) => {
    return (
     <div className="card" style={{ width: "20rem" }}>
      <div className="card-body">
        <h4 className="card-title">{document.title || "Untitled"}</h4>

        {document.categoryName && (
          <h5 className="card-subtitle">{document.categoryName}</h5>
        )}

        {document.description && (
          <p className="card-text">{document.description}</p>
        )}

        <p className="card-text">
          <small>
            {document.deadline ? `Deadline: ${document.deadline}` : "No deadline"}
            {" • "}
            {document.is_Handled ? "Handled" : "Not handled"}
          </small>
        </p>

        <button onClick={() => onOpen?.(document)}>Open</button>
      </div>
    </div>
  );
}


export default LetterInformation;
