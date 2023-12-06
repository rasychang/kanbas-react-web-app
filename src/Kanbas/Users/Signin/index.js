import * as client from "../client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Signin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account");
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Signin</h2>
        <div className="input-container2">
          <input type="text" placeholder="Username" onChange={(e) => setCredentials({
            ...credentials,
            username: e.target.value
          })} />
          <input type="password" placeholder="Password" onChange={(e) => setCredentials({
            ...credentials,
            password: e.target.value
          })} />
        </div>
        <div className="button-container">
          <button type="button" className="btn btn-primary login" onClick={signin}>Sign in</button>
        </div>
      </form>
    </div>
  );
}
export default Signin;