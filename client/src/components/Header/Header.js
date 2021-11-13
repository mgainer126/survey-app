import { Link } from "react-router-dom";
import logo from "../../assets/pclogo.svg";
import "../Header/Header.scss";
import useToken from "../../components/App/useToken";

function Header() {
  const { token } = useToken();

  return (
    <>
      <header className="header">
        <Link to="/">
          <img src={logo} alt="logo" className="header__logo"></img>
        </Link>
        {!token && (
          <Link to="/login" className="header__manager">
            <h5>Manager Log In</h5>
          </Link>
        )}
        {token && (
          <Link to="/login" className="header__manager">
            <h5>Manager Log Out</h5>
          </Link>
        )}
      </header>
    </>
  );
}

export default Header;
