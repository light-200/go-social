import { Link } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  return (
    <div className="navigationContainer">
      <nav className="navigation">
        <div className="logo">go-social</div>
        <div className="navBtns">
          <Link to="/" className="btn navBtn">
            feed
          </Link>
          <Link to="/login" className="btn navBtn">
            login
          </Link>
          <Link to="/signup" className="btn navBtn">
            signup
          </Link>
          <div className="btn navBtn search">search</div>
          <div className="btn navBtn">logout</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
