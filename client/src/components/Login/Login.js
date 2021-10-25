import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="col-md-10 mx-auto col-lg-5">
      <form className="p-4 p-md-5 border rounded-3 bg-light">
        <h3>Manager Sign In</h3>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" defaultValue="remember-me" /> Remember me
          </label>
        </div>

        <hr className="my-4" />
        <small className="text-muted">New to Employee Survey?</small>
        <br />
        <small className="text-muted">
          Send a Access Request to matthew.gainer@pcbank.ca
        </small>
      </form>
      <Link to="/stats">
        <button className="w-100 btn btn-lg btn-primary">Log In</button>
      </Link>
    </div>
  );
}

export default Login;
