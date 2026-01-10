import { useEffect, useMemo, useState } from "react";
import LetterInformation from "../components/Letter/LetterInformation";
import { getAllDocuments } from "../api/DocumentFetcher";


const Documents = ({ selectedCategoryName }) => {

  const [documents, setDocuments] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const docs = await getAllDocuments();
        setDocuments(docs || []);
      } catch (e) {
        console.error(e);
        setDocuments([]);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const visibleDocuments = useMemo(() => {
    if (selectedCategoryName === null) return documents;
    return documents.filter((d) => d.categoryName === selectedCategoryName);
  }, [documents, selectedCategoryName]);

  const handleOpen = (doc) => {
    console.log("open doc:", doc);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
      {visibleDocuments.length === 0 ? (
        <p>No documents found.</p>
      ) : (
        visibleDocuments.map((doc) => (
          <LetterInformation
            key={doc.fileUUID || doc.documentStoredName || doc.title}
            document={doc}
            onOpen={handleOpen}
          />
        ))
      )}
    </div>
  );
};

export default Documents;
