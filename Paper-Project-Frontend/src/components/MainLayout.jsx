import React from "react";
import "./MainLayout.css";
import MenuBar from "./MenuBar"
import UserInfo from "./UserInfo";


const MainLayout = ({ children }) => {
  return (
    <div className="container">
      <div className="user-info"><UserInfo></UserInfo></div>

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