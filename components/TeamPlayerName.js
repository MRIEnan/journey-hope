import React from "react";
import Image from "next/image";
import atom from "../assets/images/journy-home/icons/atom.png";
import navigator from "../assets/images/journy-home/icons/navigator.png";

const TeamPlayerName = ({ role, name }) => {
  if (role == "navigator") {
    return (
    <div className="team-player-name-role-icon-container">
        <div className="team-player-icon-container">
            <Image
              src={navigator}
              alt="navigator"
              />
        </div>
        <div className="team-player-role-container">
            <p>Navigator</p>
        </div>
        <div className="team-player-name-container">
            <p>{name}</p>
        </div>
    </div>
    );
  }

  else if(role == "environment"){
      return (
    <div className="team-player-name-role-icon-container atom">
        <div className="team-player-icon-container atom-icon-container">
            <Image
              src={atom}
              alt="atom"
              />
        </div>
        <div className="team-player-role-container atom-role-container">
            <p>Environment Scientist</p>
        </div>
        <div className="team-player-name-container">
            <p>{name}</p>
        </div>
    </div>
    );
  }
};

export default TeamPlayerName;
