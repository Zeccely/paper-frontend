import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu">
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/documents">Documents</Link></li>
      </ul>
    </nav>
  );
}

export default Menu; 