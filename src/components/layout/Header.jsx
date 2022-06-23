import "../../assets/css/layout-css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid navbar">
          <div className="navbar-logo-wrapper">
            <Link to="/">
              <p className="navbar-logo">CinePlus</p>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
