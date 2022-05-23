import Image from "next/image";
import React, { useState } from "react";
import arrowImage from "../assets/images/journy-home/arrow.png";
import destImage from "../assets/images/journy-home/one.png";
import p1Image from "../assets/images/journy-home/p1.png";
import p10Image from "../assets/images/journy-home/p10.png";
import p11Image from "../assets/images/journy-home/p11.png";
import p12Image from "../assets/images/journy-home/p12.png";
import p13Image from "../assets/images/journy-home/p13.png";
import p14Image from "../assets/images/journy-home/p14.png";
import p15Image from "../assets/images/journy-home/p15.png";
import p2Image from "../assets/images/journy-home/p2.png";
import p3Image from "../assets/images/journy-home/p3.png";
import p4Image from "../assets/images/journy-home/p4.png";
import p5Image from "../assets/images/journy-home/p5.png";
import p6Image from "../assets/images/journy-home/p6.png";
import p7Image from "../assets/images/journy-home/p7.png";
import p8Image from "../assets/images/journy-home/p8.png";
import p9Image from "../assets/images/journy-home/p9.png";
import HexGridDemo from "./Grid";
import CircleSvg from "./CircleSvg";

const GameWheel = () => {
  const [sectorName,setSectorName] = useState("sector1");
  const [positionX, setPositionX] = useState(335);
  const [positionY, setPositionY] = useState(660);
  const [hexagone, setHexagone] = useState(0);
  const [finalPosition, setFinalPosition] = useState(696);
  const [initialPosition, setInitialPosition] = useState(696);
  const starshipStyle = {
    top: positionY,
    left: positionX,
    width: "auto",
    height: "auto",
  };
  const planet = (e) => {
    alert(`Planet Arrived ${e.target.name}!`);
    setPositionX(e.clientX);
    setPositionY(e.clientY);
    setInitialPosition(finalPosition);
    // setFinalPosition(hexagon);
  };
  return (
    <div>
      <div className="hexagone-container">
        <HexGridDemo
          finalPosition={finalPosition}
          setFinalPosition={setFinalPosition}
          initialPosition={initialPosition}
          setInitialPosition={setInitialPosition}
          setPositionX={setPositionX}
          setPositionY={setPositionY}
        />
        {/* <div className="circle-section"></div>
        <div className="circle-section first-section"></div>
        <div className="circle-section second-section"></div>
        <div className="circle-section third-section"></div>
        <div className="circle-section fourth-section"></div> */}
        
        <CircleSvg setPositionX={setPositionX} setPositionY={setPositionY}></CircleSvg>
        <div className="vertical-section one-section"></div>
        <div className="vertical-section two-section"></div>
        <div className="vertical-section three-section"></div>
        <div className="vertical-section four-section"></div>
        <div className="spaceship-container" style={starshipStyle}>
          <div className="starship">
            <Image
              src={arrowImage}
              alt="starship image"
              width={20}
              height={20}
              zIndex={7}
            />
          </div>
        </div>
        <div className="destination" onClick={(event) => planet(event)}>
          <Image
            name="earth"
            src={destImage}
            alt="dest image"
            width={60}
            height={60}
            zIndex={10}
          />
        </div>
        <div className="p1" onClick={(event) => planet(event)}>
          <Image
            src={p1Image}
            name="p1"
            alt="p1 image"
            width={60}
            height={60}
            zIndex={7}
          />
        </div>
        <div className="p2" onClick={(event) => planet(event)}>
          <Image
            src={p2Image}
            name="p2 image"
            alt="p2 image"
            width={60}
            height={60}
            zIndex={7}
          />
        </div>
        <div className="p3" onClick={(event) => planet(event)}>
          <Image
            src={p3Image}
            name={"p3 image"}
            alt="p3 image"
            width={60}
            height={60}
            zIndex={7}
          />
        </div>
        <div className="p4" onClick={(event) => planet(event)}>
          <Image
            src={p4Image}
            name="p4 image"
            alt="p4 image"
            width={80}
            height={80}
            zIndex={7}
          />
        </div>
        <div className="p5" onClick={(event) => planet(event)}>
          <Image
            src={p5Image}
            alt="p5 image"
            name="p5 image"
            width={70}
            height={60}
            zIndex={7}
          />
        </div>
        <div className="p6" onClick={(event) => planet(event)}>
          <Image
            src={p6Image}
            alt="p6 image"
            name="p6 image"
            width={70}
            height={60}
            zIndex={7}
          />
        </div>
        <div className="p7" onClick={(event) => planet(event)}>
          <Image
            src={p7Image}
            alt="p7 image"
            name="p7 image"
            width={60}
            height={60}
            zIndex={7}
          />
        </div>
        <div className="p8" onClick={(event) => planet(event)}>
          <Image
            src={p8Image}
            alt="p8 image"
            name="p8 image"
            width={40}
            height={40}
            zIndex={7}
          />
        </div>
        <div className="p9" onClick={(event) => planet(event)}>
          <Image
            src={p9Image}
            alt="p9 image"
            name="p9 image"
            width={40}
            height={40}
            zIndex={7}
          />
        </div>
        <div className="p10" onClick={(event) => planet(event)}>
          <Image
            src={p10Image}
            alt="p10 image"
            name="p10 image"
            width={50}
            height={50}
            zIndex={7}
          />
        </div>
        <div className="p11" onClick={(event) => planet(event)}>
          <Image
            src={p11Image}
            alt="p11 image"
            name="p11 image"
            width={50}
            height={50}
            zIndex={7}
          />
        </div>
        <div className="p12" onClick={(event) => planet(event)}>
          <Image
            src={p12Image}
            alt="p12 image"
            name="p12 image"
            width={60}
            height={60}
            zIndex={7}
          />
        </div>
        <div className="p13" onClick={(event) => planet(event)}>
          <Image
            src={p13Image}
            alt="p13 image"
            name="p13 image"
            width={60}
            height={60}
            zIndex={7}
          />
        </div>
        <div className="p14" onClick={(event) => planet(event)}>
          <Image
            src={p14Image}
            alt="p14 image"
            name="p14 image"
            width={50}
            height={50}
            zIndex={7}
          />
        </div>
        <div className="p15" onClick={(event) => planet(event)}>
          <Image
            src={p15Image}
            alt="p15 image"
            name="p15 image"
            width={60}
            height={60}
            zIndex={7}
          />
        </div>
      </div>
    </div>
  );
};

export default GameWheel;
