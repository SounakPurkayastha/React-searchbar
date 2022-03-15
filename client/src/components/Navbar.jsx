import Searchbox from "./Searchbox";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="navbar-container">
        <Searchbox />
      </div>
    </nav>
  );
};

export default Navbar;
