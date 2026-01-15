import { useEffect, useState } from "react";       //I clearly had help from chatGPT I would like to be able to do this myself by next semester
import { getFile } from "../../api/DocumentFetcher";

const LetterPicture = ({ fileUUID, storedName, alt }) => {
  const [imageUrl, setImageUrl] = useState(null);

  const isImage = (name) => {
    if (!name) return false;
    const ext = name.split(".").pop()?.toLowerCase();
    return ext === "png" || ext === "jpg" || ext === "jpeg";
  };

  useEffect(() => {
    let objectUrl = null;

    const load = async () => {
      try {
        if (!fileUUID) return;
        if (!isImage(storedName)) return;

        const blob = await getFile(fileUUID);
        objectUrl = URL.createObjectURL(blob);
        setImageUrl(objectUrl);
      } catch (e) {
        console.error("Failed to load preview", e);
        setImageUrl(null);
      }
    };

    setImageUrl(null);
    load();

    return () => {
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [fileUUID, storedName]);

  if (!imageUrl) return null;

  return (
    <img
      src={imageUrl}
      alt={alt || "Picture of the document"}
      style={{
        width: "100%",
        height: "180px",
        objectFit: "cover",
        borderRadius: "8px",
        marginBottom: "12px",
      }}
    />
  );
};

export default LetterPicture;
