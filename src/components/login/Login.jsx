import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
  return (
    <div>
      <div id="pagee1">
        <div id="left">
          <h1>Synthomind</h1>
          <div class="container">
            <div class="form_area">
              <p class="title">LOGIN</p>
              <form action="">
                <div class="form_group">
                  <label class="sub_title" for="email">
                    Email
                  </label>
                  <input
                    placeholder="Enter your email"
                    id="email"
                    class="form_style"
                    type="email"
                  />
                </div>
                <div class="form_group">
                  <label class="sub_title" for="password">
                    Password
                  </label>
                  <input
                    placeholder="Enter your password"
                    id="password"
                    class="form_style"
                    type="password"
                  />
                </div>
                <div>
                  <button class="btn">LOGIN UP</button>
                  <p>
                    {" "}
                    Don't Have Account?{" "}
                    <Link to="/signup" class="link" href="">
                      Sign Up
                    </Link>
                  </p>
                  <a class="link" href=""></a>
                </div>
                <a class="link" href=""></a>
              </form>
            </div>
            <a class="link" href=""></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
