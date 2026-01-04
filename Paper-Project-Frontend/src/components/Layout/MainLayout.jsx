import "../../Styles/MainLayout.css";
import MenuBar from "./MenuBar";
import UserInfo from "./UserInfo";
import { useState } from "react";
import CategoryBar from "../Category/CategoryBar";
import { useLocation } from "react-router-dom";

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();
  const isDocuments = pathname.startsWith("/documents");
  const [selectedCategoryId, setSelectedCategoryId] = useState("all");

  const categories = [
  { id: "school", name: "School" },
  { id: "bills", name: "Bills" },
  { id: "work", name: "Work" },
  ];

  return (
    <div className="container">

      <div className="user-info">
        <UserInfo />
      </div>


      <nav className="top-menu">
        <MenuBar />
      </nav>

      <div className="sidebar">
        {isDocuments && (
        <CategoryBar
            categories={categories}
            selectedId={selectedCategoryId}
            onSelect={setSelectedCategoryId}
        />
        )}
      </div>

      <main className="main">
        {children}
      </main>

      <div className="footer">
        <footer />
      </div>

    </div>
  );
};


export default MainLayout;