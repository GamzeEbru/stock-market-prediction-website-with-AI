import React from "react";
import Navbar from "./Navbar"
import Hero from "../Pages/HomePage/Hero";
import About from "../Pages/HomePage/About";
import Support from "../Pages/HomePage/Support";
import Footer from "../Pages/HomePage/Footer";

function Main() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Footer />
    </div>
  );
}

export default Main;
