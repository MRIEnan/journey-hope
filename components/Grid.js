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
}) => {
  const getHexProps = (hexagon) => {
    if (hexagon == finalPosition) {
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
          if (timeToMove > 0) {
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
          if (timeToMove > 0) {
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
          if (timeToMove > 0) {
            console.log(e);
            setPositionX(e.clientX);
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
