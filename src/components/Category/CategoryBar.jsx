import CategoryIcon from "./CategoryIcon";

export default function CategoryBar({ categories, selectedId, onSelect }) {
  return (
    <div className="category-bar">

      <div className="category-list">
        <CategoryIcon
          label="All"
          active={selectedId === "all"}
          onClick={() => onSelect(null)}
        />

        {categories.map((c) => (
          <CategoryIcon
            key={c.id}
            label={c.name}
            active={selectedId === c.name}
            onClick={() => onSelect(c.name)}
          />
        ))}
      </div>
    </div>
  );
}
