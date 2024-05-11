import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="wrapper">
      <h1>Welcome</h1><br/>
      <p className="p2">Join our community</p>
      <form>
        <input type="text" placeholder="Username" />
        <input type="tel" placeholder="Phone no" />
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password" />
        
      </form>
      <button className="btn1">Sign Up</button>
      <div className="not-member">
        Already member? <Link to="/login">Login Now</Link>
      </div>
    </div>
  );
};

export default Signup;
