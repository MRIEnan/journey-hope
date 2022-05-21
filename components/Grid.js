import times from "lodash/times";
import React from "react";
import HexagonGrid from "./hexagongrid.js";

const HexGridDemo = () => {
  const getHexProps = (hexagon) => {
    return {
      style: {
        fill: "transparent",
        stroke: "#007aff"
      },
      /* style: {
        fill: "#007aff",
        stroke: "white"
      }, */
      onClick: () => alert(`Hexagon n.${hexagon} has been clicked`)
    };
  };

  const renderHexagonContent = (hexagon) => {
    return (
      <text
        x="50%"
        y="50%"
        fontSize={100}
        fontWeight="lighter"
        style={{ fill: "white" }}
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