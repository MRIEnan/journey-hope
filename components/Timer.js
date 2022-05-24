import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const Timer = () => {
    const router = useRouter();
    const onStart = () =>{
        const nDate = new Date();
        console.log('init Date',nDate);
        let newDate = nDate.setSeconds(nDate.getSeconds()+10);
        let positionTime = nDate.setSeconds(nDate.getSeconds()+115);
        let liteYearEndTime = nDate.setSeconds(nDate.getSeconds()+295);
        localStorage.setItem('lite-year-poster-time',newDate);
        localStorage.setItem('position-time',positionTime);
        localStorage.setItem('lite-year-end-time',liteYearEndTime);
        localStorage.setItem('remaining-liteyear',14);
        router.push('./liteyearpreview');
        // console.log(liteYearTime.getTime-nDate.getTime);
    }
  return (
  <div>
      <h3>hello</h3>
      <button onClick={onStart}>start</button>
  </div>
  );
};

export default Timer;
