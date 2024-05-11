import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div>
      <div id="pagee1">
        <div id="left">
          <h1>Synthomind</h1>
          <div class="container">
            <div class="form_area">
              <p class="title">SIGN UP</p>
              <form action="">
                <div class="form_group">
                  <label class="sub_title" for="name">
                    Name
                  </label>
                  <input
                    placeholder="Enter your full name"
                    class="form_style"
                    type="text"
                  />
                </div>
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
                  <button class="btn">SIGN UP</button>
                  <p>
                    Have an Account?{" "}
                    <Link to="/login" class="link" href="">
                      Login Here!
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

export default Signup;
