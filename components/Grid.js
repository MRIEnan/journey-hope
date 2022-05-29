import times from "lodash/times";
import React from "react";
import HexagonGrid from "./hexagongrid.js";

const HexGridDemo = ({
  setPositionX,
  setPositionY,
  liteYear,
  timeToMove,
  liteYearDuration,
  finalPosition,
  setFinalPosition,
  initialPosition,
  setInitialPosition,
  raiderNumbers,
  area1,
  area2,
  area3,
  area4,
  Planet
}) => {
  const getHexProps = (hexagon) => {
    if(area1.includes(hexagon)){
      return {
        style: {
          fill: "rgb(255, 120, 0)",
          // fill: "rgba(255,255,255,0.2)",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        onClick: (e) => {
        },
      }
    }
    if(area2.includes(hexagon)){
      return {
        style: {
          fill: "gray",
          // fill: "rgba(255,255,255,0.2)",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        onClick: (e) => {
        },
      }
    }
    if(area3.includes(hexagon)){
      return {
        style: {
          fill: "rgb(204, 164, 61)",
          // fill: "rgba(255,255,255,0.2)",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        onClick: (e) => {
        },
      }
    }
    if(area4.includes(hexagon)){
      return {
        style: {
          fill: "rgb(204, 164, 61)",
          // fill: "rgba(255,255,255,0.2)",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        onClick: (e) => {
        },
      }
    }
    if(Planet.includes(hexagon)){
      return {
        style: {
          fill: "rgb(0, 0, 255)",
          // fill: "rgba(255,255,255,0.2)",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        onClick: (e) => {
        },
      }
    }
    if(raiderNumbers.includes(hexagon)){
      return {
        style: {
          fill: "rgb(255, 0, 255)",
          // fill: "rgba(255,255,255,0.2)",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        onClick: (e) => {
          if (timeToMove > 0 || timeToMove<= 0) {
            alert("raider")
          }
          else{
            alert("time over");
          }
        },
      }
    }

    if (hexagon == finalPosition) {
      // console.log("raiderNumbers",raiderNumbers)
      return {
        style: {
          fill: "rgb(0, 255, 21)",
          // fill: "rgba(255,255,255,0.2)",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        /* style: {
          fill: "#007aff",
          stroke: "white"
        }, */
        onClick: (e) => {
          if (timeToMove > 0 || timeToMove<= 0) {
            console.log(e);
            const hexId = window.document.getElementById(`${hexagon}text`);
            console.log(`hello ${hexId.target}`);
            if (hexagon != finalPosition) {
              setInitialPosition(finalPosition);
              setFinalPosition(hexagon);
              alert(`new loacation id ${hexagon}`);
            }
            // if(initialPosition){
            // setInitialPosition(hexagon);
            // setFinalPosition(initialPosition);
            // }
            // setPositionX(e.clientX);
            // setPositionY(e.clientY);
            // alert(`Hexagon n.${hexagon} has been clicked`)
          }
          else{
            alert("time over");
          }
        },
      };
    } else if (hexagon == initialPosition) {
      return {
        style: {
          // fill: hexagon==finalPosition?"rgb(0, 255, 21)":"transparent",
          fill: "rgb(250, 125, 101)",
          // fill: "rgba(255,255,255,0.2)",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        /* style: {
            fill: "#007aff",
            stroke: "white"
          }, */
        onClick: (e) => {
          if (timeToMove > 0 || timeToMove<= 0) {
            console.log(e);
            setInitialPosition(finalPosition);
            setFinalPosition(hexagon);
            alert(`new loacation id ${hexagon}`);
            // setPositionX(e.clientX);
            // setPositionY(e.clientY);
            // if(initialPosition){
            // setInitialPosition(hexagon);
            // setFinalPosition(initialPosition);
            // }
            // alert(`Hexagon n.${hexagon} has been clicked`)
          }
          else{
            alert("time over");
          }
        },
      };
    } else {
      return {
        style: {
          fill: "rgba(255,255,255,0.2)",
          // fill: hexagon==finalPosition?"rgb(0, 255, 21)":"transparent",
          // fill: hexagon==initialPosition?"rgb(250, 125, 101)":"transparent",
          stroke: "rgba(255,255,255,0.35)",
          zIndex: "6",
        },
        /* style: {
              fill: "#007aff",
              stroke: "white"
            }, */
        onClick: (e) => {
          if (timeToMove > 0 || timeToMove<= 0) {
            console.log(e);
            setPositionX(e.clientX-360);
            setPositionY(e.clientY);
            setInitialPosition(finalPosition);
            setFinalPosition(hexagon);
            alert(`new loacation id ${hexagon}`);
            console.log(`width ${e.clientX} height ${e.clientY}`);

            // if(initialPosition){
            // setInitialPosition(hexagon);
            // setFinalPosition(initialPosition);
            // }
            // alert(`Hexagon n.${hexagon} has been clicked`)
          }
          else{
            alert("time over");
          }
        },
      };
    }
  };

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        id={`${hexagon}text`}
        x="50%"
        y="50%"
        fontSize={200}
        fontWeight="lighter"
        // style={{ fill: "black" }}
        style={{ fill: "none" }}
        textAnchor="middle"
      >
        {hexagon}
      </text>
    );
  };

  let hexagons = times(1369, (id) => id);

  return (
    <HexagonGrid
      gridWidth={800}
      gridHeight={800}
      hexagons={hexagons}
      hexProps={getHexProps}
      renderHexagonContent={renderHexagonContent}
      setPositionX={setPositionX}
      setPositionY={setPositionY}
    />
  );
};

export default HexGridDemo;
