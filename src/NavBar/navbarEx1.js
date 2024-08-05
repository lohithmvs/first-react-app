import { NavLink } from "react-router-dom";
import "./navbar.css"

const NavbarEx1 = () => {
    const linkStyle = { margin: "10px", textDecoration: "none" };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/"} style={linkStyle}>Main</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/Recipes"} style={linkStyle}>Recipe</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/login"} style={linkStyle}>Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/registration"} style={linkStyle}>Registration</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavbarEx1;