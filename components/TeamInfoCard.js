import React from "react";
import CardBottomStripe from "./CardBottomStripe";
import TeamPlayerName from "./TeamPlayerName";

const TeamInfoCard = () => {
  return (
    <div className="team-info-card-container">
      <div className="team-info-card-box">
        <svg
          width="256"
          height="321"
          viewBox="0 0 256 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_b_102_7377)">
            <path
              d="M10.0254 297.787L76.5811 297.787L97.9327 320L203.659 320L225.01 297.787L246 297.787C248.387 297.787 250.676 295.901 252.364 292.543C254.052 289.185 255 284.632 255 279.883L255 18.9037C255 14.1553 254.052 9.60129 252.364 6.24368C250.676 2.88608 248.387 1.00003 246 1.00003L10.0254 1.00001C7.63618 0.999978 5.34439 2.88471 3.65254 6.24085C1.96069 9.59699 1.00685 14.1506 1.00003 18.9037L1 279.883C1.00682 284.636 1.96067 289.19 3.65251 292.546C5.34436 295.902 7.63616 297.787 10.0254 297.787Z"
              fill="#00CECE"
              fillOpacity="0.17"
            />
            <path
              d="M10.0254 297.787L76.5811 297.787L97.9327 320L203.659 320L225.01 297.787L246 297.787C248.387 297.787 250.676 295.901 252.364 292.543C254.052 289.185 255 284.632 255 279.883L255 18.9037C255 14.1553 254.052 9.60129 252.364 6.24368C250.676 2.88608 248.387 1.00003 246 1.00003L10.0254 1.00001C7.63618 0.999978 5.34439 2.88471 3.65254 6.24085C1.96069 9.59699 1.00685 14.1506 1.00003 18.9037L1 279.883C1.00682 284.636 1.96067 289.19 3.65251 292.546C5.34436 295.902 7.63616 297.787 10.0254 297.787Z"
              stroke="#00CECE"
              strokeWidth="0.78"
              strokeMiterlimit="10"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_102_7377"
              x="-3.39001"
              y="-3.39001"
              width="262.78"
              height="327.78"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
              <feComposite
                in2="SourceAlpha"
                operator="in"
                result="effect1_backgroundBlur_102_7377"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_102_7377"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="team-info-card-bg"></div>
      <div className="team-info-your-name-title">
          <div className="team-info-card-header"></div>
          <p>YOUR TEAM</p>
      </div>
      <div>
          <TeamPlayerName role="navigator" name="Vikas"></TeamPlayerName>
      </div>
      <div>
          <TeamPlayerName role="environment" name="Shrushti"></TeamPlayerName>
      </div>
      <div className="team-info-card-bottom-stripe">
          <CardBottomStripe/>
      </div>
    </div>
  );
};

export default TeamInfoCard;
