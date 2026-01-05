import MainLayout from "./components/Layout/MainLayout"
import Letter from "./components/Letter/Letter"
import Home from "./Pages/Home";
import LetterManagement from "./components/Letter/LetterManagement";
import { Routes, Route } from "react-router-dom";
import Documents from "./Pages/Documents";
import { useState, useEffect } from "react";
import { getCategories } from "./api/DocumentFetcher";
import Login from "./Pages/Login";

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState(null);
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await getCategories();

        setCategories(data || []);
      } catch (e) {
        console.error(e);
        setCategories([]);
      }
    };

    loadCategories();
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <MainLayout
            categories={categories}
            selectedCategoryName={selectedCategoryName}
            setSelectedCategoryName={setSelectedCategoryName}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/letter" element={<Letter />} />
              <Route path="/upload" element={<LetterManagement />} />
              <Route
                path="/documents"
                element={<Documents selectedCategoryName={selectedCategoryName} />}
              />
            </Routes>
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default App;
