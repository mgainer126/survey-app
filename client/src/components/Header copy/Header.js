import logo from "../../assets/pclogo.svg";
import magnifyingGlass from "../../assets/magnifying-glass.png";
import hamburger from "../../assets/icons8-menu.svg";
import "../Header/Header.scss";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" className="header__logo"></img>
        <section className="header__section">
          <div className="header__magnifying">
            <img
              src={magnifyingGlass}
              alt="magnifying-glass"
              className="header__glass"
            ></img>
          </div>
          <button className="header__apply">Apply Now</button>
          <button className="header__sign">Sign In</button>
          <menu className="header__menu">Menu</menu>
          <img src={hamburger} alt="menu"></img>
        </section>
      </header>
    </>
  );
}

export default Header;
