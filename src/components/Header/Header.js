import { Link } from "react-router-dom";
import logo from "../../assets/pclogo.svg";
import "../Header/Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo"></img>
        </Link>
      </header>
    </>
  );
}

export default Header;
