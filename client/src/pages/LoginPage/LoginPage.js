import Login from "../../components/Login/Login";
import "./LoginPage.scss";
import collaboration from "../../assets/collaboration-1.jpg";
// import useToken from "../../components/App/useToken";

function LoginPage() {
  // const { token, setToken } = useToken();
  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  return (
    <div className="login">
      <img src={collaboration} alt="collaboration" className="login__img"></img>
      <Login />
    </div>
  );
}

export default LoginPage;
