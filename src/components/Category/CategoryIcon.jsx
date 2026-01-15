import folderIcon from "../../assets/folder.svg";


export default function CategoryIcon({ label, count, active, onClick }) {
  return (
    <button
      type="button"
      className={`category-icon ${active ? "active" : ""}`}
      onClick={onClick}
      title={label}
    >
      <span className="folder-icon" aria-hidden="true"> <img src={folderIcon} alt="Icon of a folder" /> </span>
      <span className="category-label">{label}</span>

      {typeof count === "number" && (
        <span className="category-count">{count}</span>
      )}
    </button>
  );
}