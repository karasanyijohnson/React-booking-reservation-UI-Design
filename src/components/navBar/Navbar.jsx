import "./navbar.css"; // We use ./ because we are in the same folder
const Navbar = () => {
  return (
    <div className="navBar">
    <div className="navContainer">
        <span className="logo">JohnsonBooking</span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
        </div>
    </div>
  </div>
  )
};
export default Navbar;
