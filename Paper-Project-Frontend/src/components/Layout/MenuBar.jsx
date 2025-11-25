

import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <nav className="top-menu">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "menu-link active" : "menu-link"
        }
        end
      >
        Home
      </NavLink>

      <NavLink
        to="/upload"
        className={({ isActive }) =>
          isActive ? "menu-link active" : "menu-link"
        }
      >
        Upload
      </NavLink>

      <NavLink
        to="/documents"
        className={({ isActive }) =>
          isActive ? "menu-link active" : "menu-link"
        }
      >
        Documents
      </NavLink>
    </nav>
  );
};

export default MenuBar;
