import React from "react";
import "./MainLayout.css";


function MainLayout({ children }) {
  return (
<div className="container">
  <div className="user-info">user stuff here</div>
  <div className="extra-space">extra space here</div>

  <nav className="menu">
    <Menu />
  </nav>

  <main className="letter-center">
    {children}
  </main>

  <div className="footer">
    <Footer /> 
  </div>
</div>
  );
}


export default MainLayout;