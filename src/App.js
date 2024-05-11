import React from "react";
// import { Article, Brand, CTA, Navbar, Signup } from "./components";
import Signup from "./components/signup/Signup";
import Login from './components/login/Login';
import Home from './components/Home';
import { Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  );
};

export default App;
