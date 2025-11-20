import React from "react";
import "./MainLayout.css";
import MenuBar from "./MenuBar"


const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="user-info">user stuff here</div>
      <div className="extra-space">extra space here</div>

      <nav className="menu">
        <MenuBar />
      </nav>

      <main className="letter-center">
        {children}
      </main>

      <div className="footer">
        <footer />
      </div>
    </div>
  );
}

export default MainLayout;