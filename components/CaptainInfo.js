import Image from "next/image";
import React from "react";
import containerImage from "../assets/images/journy-home/Box/captainInfo.png";
import contact from "../assets/images/journy-home/contact.png";

const CaptainInfo = () => {
  return (
    <div style={{ position: "relative", marginLeft: "35px" }}>
      <svg
        width="256"
        height="112"
        viewBox="0 0 256 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_b_102_7355)">
          <path
            d="M245.964 12.1562H179.411L158.06 1H52.3392L30.9887 12.1562H9.99917C7.61243 12.1562 5.32353 13.1037 3.63585 14.79C1.94818 16.4763 1 18.7634 1 21.1482V101.998C1 104.383 1.94818 106.67 3.63585 108.357C5.32353 110.043 7.61243 110.99 9.99917 110.99H245.964C248.353 110.99 250.645 110.044 252.336 108.358C254.028 106.673 254.982 104.386 254.989 101.998V21.1482C254.982 18.761 254.028 16.474 252.336 14.7884C250.645 13.1028 248.353 12.1562 245.964 12.1562Z"
            fill="#00CECE"
            fillOpacity="0.17"
          />
          <path
            d="M245.964 12.1562H179.411L158.06 1H52.3392L30.9887 12.1562H9.99917C7.61243 12.1562 5.32353 13.1037 3.63585 14.79C1.94818 16.4763 1 18.7634 1 21.1482V101.998C1 104.383 1.94818 106.67 3.63585 108.357C5.32353 110.043 7.61243 110.99 9.99917 110.99H245.964C248.353 110.99 250.645 110.044 252.336 108.358C254.028 106.673 254.982 104.386 254.989 101.998V21.1482C254.982 18.761 254.028 16.474 252.336 14.7884C250.645 13.1028 248.353 12.1562 245.964 12.1562Z"
            stroke="#00CECE"
            strokeWidth="0.78"
            strokeMiterlimit="10"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_102_7355"
            x="-3.39001"
            y="-3.39"
            width="262.769"
            height="118.77"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="2" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_102_7355"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_102_7355"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div style={{ position: "absolute", top: "40px", left: "40px" }}>
        <Image src={contact} name={"contact"} alt="contact icon" zIndex={7} />
      </div>
      <div className="captain-info-holder">
        <p className="captain-title">Captain #007</p>
        <p className="captain-name">JON DOE</p>
      </div>
      <div className="captain-info-bottom-stripe">
        <svg
          width="242"
          height="15"
          viewBox="0 0 242 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.3">
            <path
              opacity="0.3"
              d="M16.1239 14.4362H8.67186L0.162598 0.136719H7.61465L16.1239 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M32.1884 14.4362H24.7363L16.2271 0.136711H23.6791L32.1884 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M48.2528 14.4362H40.8008L32.2915 0.136711H39.7436L48.2528 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M64.3173 14.4362H56.8652L48.356 0.136711H55.808L64.3173 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M80.3817 14.4362H72.9297L64.4204 0.136711H71.8725L80.3817 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M96.4462 14.4362H88.9941L80.4849 0.136711H87.9369L96.4462 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M112.511 14.4362H105.059L96.5494 0.136711H104.001L112.511 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M128.575 14.4362H121.123L112.614 0.136711H120.066L128.575 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M144.64 14.4362H137.188L128.678 0.136711H136.13L144.64 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M160.704 14.4362H153.252L144.743 0.136711H152.195L160.704 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M176.769 14.4362H169.317L160.807 0.136711H168.259L176.769 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M192.833 14.4362H185.381L176.872 0.136711H184.324L192.833 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M208.897 14.4362H201.445L192.936 0.136711H200.388L208.897 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M224.962 14.4362H217.51L209.001 0.136711H216.453L224.962 14.4362Z"
              fill="#00CECE"
            />
            <path
              opacity="0.3"
              d="M241.026 14.4362H233.574L225.065 0.136711H232.517L241.026 14.4362Z"
              fill="#00CECE"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default CaptainInfo;
