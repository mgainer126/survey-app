import logo from "../../assets/pclogo.svg";
import "../Header/Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo"></img>
      </header>
    </>
  );
}

export default Header;
