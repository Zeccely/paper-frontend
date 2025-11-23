import { Link } from "react-router-dom";

const MenuBar = () => {
  return (

    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/upload">Upload</Link></li>
      <li><Link to="/documents">Documents</Link></li>
    </ul>

  );
}

export default MenuBar; 