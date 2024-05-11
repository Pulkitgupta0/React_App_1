import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div className="wrapper">
      <h1>Hello Again!</h1><br></br>
      <p>Welcome back to SynthoMind</p>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      
      </form>
      <button className="button11">Sign in</button>
      <div className="not-member">
        Not a member? <Link to="/signup">Register Now</Link>
      </div>
    </div>
  );
};

export default Login;
