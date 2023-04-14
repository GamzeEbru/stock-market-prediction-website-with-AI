import React from "react";
import { NavLink } from "react-router-dom";
import bgImg from "../../assets/undraw_visual_data_re_mxxo (1).svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-gray-300 flex flex-col ">
      <div
        className=" grid md:grid-cols-2 max-w-[1240px] m-auto text-gray-800  "
        initial={{ width: "50vw", x: "0vw", opacity: 0 }}
        animate={{ width: "100vw", x: 0, opacity: 1 }}
        transition={{ duration: 2, origin: 1 }}
      >
        <div className="flex flex-col justify-center md:items-start w-full -ml-16  py-8">
          <p className="text-2xl">Scientific Predictions</p>

          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 120 }}
          >
            <h1 className="py-3 text-5xl md:text-7xl font-bold">
              Exchange Predictions
            </h1>
          </motion.div>



          <p className="text-2xl">This is our brand</p>

          <button className="py-3 px-6 sm:w-[60%] my-4 bg-slate-800">
            <NavLink to="/login" smooth="true" offset={-50} duration={500}>
              Get Started
            </NavLink>
          </button>
        </div>
        <div>
          <img className="w-full" src={bgImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
