import { Link } from "react-router-dom";
import logo from "../../assets/genericlogo.png";
import "../Header/Header.scss";
import useToken from "../../components/App/useToken";

function Header() {
  const { token, setToken } = useToken();
  const clearSession = (e) => {
    console.log("hello");
    setToken(e);
  };

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
            <form>
              <button
                type="submit"
                className="w-100 btn btn-lg btn-primary login__button"
                onClick={clearSession("")}
              >
                Manager Log Out
              </button>
            </form>
          </Link>
        )}
      </header>
    </>
  );
}

export default Header;
