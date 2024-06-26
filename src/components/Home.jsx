import React from 'react'
import "../App.css";
import Article from "../components/article/Article";
import Brand from "../components/brand/Brand";
import CTA from "../components/cta/CTA";
import Navbar from "../components/navbar/Navbar";

import {
    Features,
    Blog,
    Possibility,
    WhatGPT3,
    Header,
    Footer,
  } from "../containers";
const Home = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
  )
}

export default Home
