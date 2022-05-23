import React from "react";

const CircleSvg = ({ setPositionX, setPositionY}) => {
  
  const stop = (e) => {
    console.log(e);
    setPositionX(e.clientX);
    setPositionY(e.clientY);
    alert(e.target.attributes.name.value);
    //e.stopPropagation();
  };
  return (
    
      <svg className="circleSvg-container"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 823.28 823.28"
      >
        <title>Untitled-4</title>
        <path
          className="cls-1"
          d="M468.42,26.32v76.31A333.16,333.16,0,0,0,232.1,200.52l-54-54A409.22,409.22,0,0,1,468.42,26.32Z"
          name="sector1" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
          
        />
        <path
          className="cls-1"
          d="M232.1,200.52a333.16,333.16,0,0,0-97.89,236.32H57.9A409.24,409.24,0,0,1,178.14,146.56Z"
          name="sector2" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
          
        />
        <path
          className="cls-1"
          d="M232.1,673.17l-54,54A409.24,409.24,0,0,1,57.9,436.84h76.31A333.18,333.18,0,0,0,232.1,673.17Z"
          name="sector3" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
          
        />
        <path
          className="cls-1"
          d="M468.42,771.06v76.31A409.22,409.22,0,0,1,178.14,727.13l54-54A333.16,333.16,0,0,0,468.42,771.06Z"
          name="sector4" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M758.71,727.13A409.24,409.24,0,0,1,468.42,847.37V771.06a333.16,333.16,0,0,0,236.32-97.89Z"
          name="sector5" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M878.95,436.84A409.24,409.24,0,0,1,758.71,727.13l-54-54h0a333.18,333.18,0,0,0,97.89-236.32Z"
          name="sector6" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M878.95,436.84H802.63a333.15,333.15,0,0,0-97.89-236.31l54-54A409.24,409.24,0,0,1,878.95,436.84Z"
          name="sector7" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M758.71,146.56l-54,54a333.09,333.09,0,0,0-236.32-97.9V26.32A409.24,409.24,0,0,1,758.71,146.56Z"
          name="sector8" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <rect
          className="cls-1"
          x="411.64"
          y="411.64"
          width="0.01"
          height="0.01"
        />
        <path
          className="cls-1"
          d="M291.64,260.06a249.25,249.25,0,0,0-73.22,176.78H134.21A333.16,333.16,0,0,1,232.1,200.52Z"
          name="sector9" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M704.74,200.53,645.2,260.07a249.23,249.23,0,0,0-176.78-73.23V102.63A333.09,333.09,0,0,1,704.74,200.53Z"
          name="sector10" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <rect
          className="cls-1"
          x="411.64"
          y="411.64"
          width="0.01"
          height="0.01"
        />
        <path
          className="cls-1"
          d="M645.2,260.07l-57.69,57.69a167.86,167.86,0,0,0-119.09-49.34V186.84A249.23,249.23,0,0,1,645.2,260.07Z"
          name="sector11" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <rect
          className="cls-1"
          x="411.64"
          y="411.64"
          width="0.01"
          height="0.01"
        />
        <path
          className="cls-1"
          d="M587.51,317.76,541,364.28a102.25,102.25,0,0,0-72.57-30.07V268.42A167.86,167.86,0,0,1,587.51,317.76Z"
          name="sector12" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <rect
          className="cls-1"
          x="411.64"
          y="411.64"
          width="0.01"
          height="0.01"
        />
        <path
          className="cls-1"
          d="M541,364.28l-72.56,72.56h0V334.21A102.25,102.25,0,0,1,541,364.28Z"
          name="sector13" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <rect
          className="cls-1"
          x="411.64"
          y="411.64"
          width="0.01"
          height="0.01"
        />
        <path
          className="cls-1"
          d="M468.42,102.63v84.21a249.25,249.25,0,0,0-176.78,73.22L232.1,200.52A333.16,333.16,0,0,1,468.42,102.63Z"
          name="sector14" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,186.84v81.58a167.88,167.88,0,0,0-119.09,49.33l-57.69-57.69A249.25,249.25,0,0,1,468.42,186.84Z"
          name="sector15" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,268.42v65.79a102.31,102.31,0,0,0-72.57,30.06l-46.52-46.52A167.88,167.88,0,0,1,468.42,268.42Z"
          name="sector16" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,334.21V436.84l-72.57-72.57A102.31,102.31,0,0,1,468.42,334.21Z"
          name="sector17" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,686.84v84.22A333.16,333.16,0,0,1,232.1,673.17l59.55-59.55A249.25,249.25,0,0,0,468.42,686.84Z"
          name="sector18" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,605.27v81.57a249.25,249.25,0,0,1-176.77-73.22l57.68-57.68A167.88,167.88,0,0,0,468.42,605.27Z"
          name="sector19" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,539.48v65.79a167.88,167.88,0,0,1-119.09-49.33l46.52-46.52A102.31,102.31,0,0,0,468.42,539.48Z"
          name="sector20" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,436.85V539.48a102.31,102.31,0,0,1-72.57-30.06Z"
          name="sector21" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M704.74,673.16h0a333.16,333.16,0,0,1-236.32,97.89V686.84A249.25,249.25,0,0,0,645.2,613.62Z"
          name="sector22" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M645.2,613.62a249.25,249.25,0,0,1-176.78,73.22V605.27a167.88,167.88,0,0,0,119.09-49.33Z"
          name="sector23" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M587.51,555.93h0a167.88,167.88,0,0,1-119.09,49.33V539.48A102.31,102.31,0,0,0,541,509.42Z"
          name="sector24" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M541,509.41h0a102.31,102.31,0,0,1-72.57,30.06V436.85h0Z"
          name="sector25" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M349.33,317.75A167.88,167.88,0,0,0,300,436.84H218.42a249.25,249.25,0,0,1,73.22-176.78Z"
          name="sector26" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M395.85,364.27a102.31,102.31,0,0,0-30.06,72.57H300a167.88,167.88,0,0,1,49.33-119.09Z"
          name="sector27" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,436.84H365.79a102.31,102.31,0,0,1,30.06-72.57Z"
          name="sector28" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M802.63,436.84a333.18,333.18,0,0,1-97.89,236.32L645.2,613.62a249.22,249.22,0,0,0,73.22-176.78Z"
          name="sector29" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M718.42,436.84A249.22,249.22,0,0,1,645.2,613.62l-57.69-57.68h0a167.9,167.9,0,0,0,49.33-119.09Z"
          name="sector30" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M636.84,436.84a167.9,167.9,0,0,1-49.33,119.09L541,509.42h0A102.31,102.31,0,0,0,571,436.84Z"
          name="sector31" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M571,436.84A102.31,102.31,0,0,1,541,509.41l-72.56-72.56H571Z"
          name="sector32" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M291.65,613.62,232.1,673.17a333.18,333.18,0,0,1-97.89-236.33h84.21A249.19,249.19,0,0,0,291.65,613.62Z"
          name="sector33" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M349.33,555.94l-57.68,57.68a249.19,249.19,0,0,1-73.23-176.78H300A167.91,167.91,0,0,0,349.33,555.94Z"
          name="sector34" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M395.85,509.42l-46.52,46.52A167.91,167.91,0,0,1,300,436.84h65.79A102.32,102.32,0,0,0,395.85,509.42Z"
          name="sector35" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M468.42,436.84h0l-72.57,72.57a102.32,102.32,0,0,1-30.06-72.58Z"
          name="sector36" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M802.63,436.84H718.42A249.25,249.25,0,0,0,645.2,260.07l59.54-59.54A333.15,333.15,0,0,1,802.63,436.84Z"
          name="sector37" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M718.42,436.84H636.84a167.88,167.88,0,0,0-49.33-119.08l57.69-57.69A249.25,249.25,0,0,1,718.42,436.84Z"
          name="sector38" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M636.84,436.84H571A102.31,102.31,0,0,0,541,364.28l46.52-46.52A167.88,167.88,0,0,1,636.84,436.84Z"
          name="sector39" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
        <path
          className="cls-1"
          d="M571,436.84H468.43L541,364.28A102.31,102.31,0,0,1,571,436.84Z"
          name="sector40" onClick={(event) => stop(event)} transform="translate(-56.78 -25.2)"
        />
      </svg>
    
  );
};

export default CircleSvg;
