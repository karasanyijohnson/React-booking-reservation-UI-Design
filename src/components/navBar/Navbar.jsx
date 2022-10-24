import { Link } from "react-router-dom";
import "./navbar.css"; // We use ./ because we are in the same folder
const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">JohnsonBooking</span>
        </Link>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
