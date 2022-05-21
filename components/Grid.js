import times from "lodash/times";
import React, { useState } from "react";
import HexagonGrid from "./hexagongrid.js";

const HexGridDemo = () => {
  const [finalPosition,setFinalPosition] = useState(696);
  const [initialPosition,setInitialPosition] = useState(696);
  const getHexProps = (hexagon) => {
    if(hexagon == finalPosition){
      return {
        style: {
          fill: "rgb(0, 255, 21)",
          // fill: hexagon==initialPosition?"rgb(250, 125, 101)":"transparent",
          stroke: "#007aff",
        },
        /* style: {
          fill: "#007aff",
          stroke: "white"
        }, */
        onClick: () => {
          if(hexagon!=finalPosition){
            setInitialPosition(finalPosition);
            setFinalPosition(hexagon);
          }
          // if(initialPosition){
            // setInitialPosition(hexagon);
            // setFinalPosition(initialPosition);
            // }
            // alert(`Hexagon n.${hexagon} has been clicked`)
        }
      };
    }
    else if(hexagon == initialPosition){
      return {
        style: {
          // fill: hexagon==finalPosition?"rgb(0, 255, 21)":"transparent",
          fill: "rgb(250, 125, 101)",
          stroke: "#007aff"
        },
        /* style: {
          fill: "#007aff",
          stroke: "white"
        }, */
        onClick: () => {
          setInitialPosition(finalPosition);
          setFinalPosition(hexagon);
          // if(initialPosition){
            // setInitialPosition(hexagon);
            // setFinalPosition(initialPosition);
          // }
          // alert(`Hexagon n.${hexagon} has been clicked`)
        }
      };
    }
    else{
      return {
        style: {
          fill: "transparent",
          // fill: hexagon==finalPosition?"rgb(0, 255, 21)":"transparent",
          // fill: hexagon==initialPosition?"rgb(250, 125, 101)":"transparent",
          stroke: "#007aff"
        },
        /* style: {
          fill: "#007aff",
          stroke: "white"
        }, */
        onClick: () => {
          setInitialPosition(finalPosition);
          setFinalPosition(hexagon);
          // if(initialPosition){
            // setInitialPosition(hexagon);
            // setFinalPosition(initialPosition);
          // }
          // alert(`Hexagon n.${hexagon} has been clicked`)
        }
      };
    }
  };

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        x="50%"
        y="50%"
        fontSize={100}
        fontWeight="lighter"
        style={{ fill: "black" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  let hexagons = times(729, (id) => id);

  return (
    <HexagonGrid classname="hexagone-container"
      gridWidth={800}
      gridHeight={800}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
    />
  );
};

export default HexGridDemo;