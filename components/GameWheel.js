import Image from "next/image";
import React, { useState } from "react";
import arrowImage from "../assets/images/journy-home/arrow.png";
import HexGridDemo from "./Grid";

const GameWheel = () => {
  const [positionX, setPositionX] = useState(335);
  const [positionY, setPositionY] = useState(660);
  const starshipStyle = {
    height: positionY,
    width: positionX,
  };
  return (
    <div>
      <div className="hexagone-container">
        <HexGridDemo setPositionX={setPositionX} setPositionY={setPositionY} />
        <div className="circle-section"></div>
        <div className="circle-section first-section"></div>
        <div className="circle-section second-section"></div>
        <div className="circle-section third-section"></div>
        <div className="circle-section fourth-section"></div>
        <div className="vertical-section one-section"></div>
        <div className="vertical-section two-section"></div>
        <div className="vertical-section three-section"></div>
        <div className="vertical-section four-section"></div>
        <div className="spaceship-container" style={starshipStyle}>
          <div className="starship">
            <Image
              src={arrowImage}
              alt="starship image"
              width={40}
              height={40}
              zIndex={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameWheel;
