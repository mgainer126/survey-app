import Login from "../../components/Login/Login";
import "./LoginPage.scss";
import collaboration from "../../assets/collaboration-1.jpg";

function LoginPage() {
  return (
    <div className="login">
      <img src={collaboration} alt="collaboration" className="login__img"></img>
      <Login />
    </div>
  );
}

export default LoginPage;
