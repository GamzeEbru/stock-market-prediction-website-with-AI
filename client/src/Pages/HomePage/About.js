import React, { Component } from "react";
import DataGrafik from "../../components/DataGrafik"


function About() {
  return (
    <div name="about" className="w-full mt-16">
    <div className="max-w-[1240px] mx-auto">
      <div className=" grid md:grid-cols-1 gap-1">
     
          <DataGrafik/>
      </div>
    </div>
  </div>
  )
}

export default About


