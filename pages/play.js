import React from 'react';
import HexGridDemo from '../components/Grid';
// import HexGridDemo from "./Grid.js";

const play = () => {
    return (
        <div className="App">
            <div className="hexagone-container">
                <HexGridDemo/>
            </div>
        </div>
      );
};

export default play;