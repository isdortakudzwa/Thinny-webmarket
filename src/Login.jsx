import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import userLogin from "./components/Auth/userLogin";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/Dashboard";

  const { error, login } = userLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
    if (!error) {
      navigate(from, { replace: true });
      setEmail("");
      setPassword("");
      console.log("success");
      return;
    } else {
      setErrorMessage(error);
      console.log("failed");
    }
  };

  return (
    <>
      <Link to="/AboutUs" className="back">
        Back
      </Link>
      <div className="more">
        <h1 className="h1-more">Login into your account</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && <p>{errorMessage}</p>}
          <button className="form-btn">Signin</button>
        </form>

           <p>Dont have an account</p>
            <button className="form-btn" onClick={props.toggleForm}>Signup</button>
      </div>
    </>
  );
};

export default Login;