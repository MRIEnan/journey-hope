import Image from "next/image";
import React from "react";
import arrowImage from "../assets/images/journy-home/arrow.png";
import HexGridDemo from "../components/Grid";
// import HexGridDemo from "./Grid.js";

const play = () => {
  return (
    <div className="App">
      <div className="hexagone-container">
        <div className="circle-section"></div>
        <div className="circle-section first-section"></div>
        <div className="circle-section second-section"></div>
        <div className="circle-section third-section"></div>
        <div className="circle-section fourth-section"></div>
        <div className="vertical-section one-section"></div>
        <div className="vertical-section two-section"></div>
        <div className="vertical-section three-section"></div>
        <div className="vertical-section four-section"></div>
        <HexGridDemo />
        <div className="spaceship-container">
          <Image 
            className="spaceship-icon"
            src={arrowImage}
            alt="starship image"
            width={40}
            height={40}
          />
        </div>
      </div>
    </div>
  );
};

export default play;
