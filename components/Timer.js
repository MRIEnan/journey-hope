import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";

const Timer = () => {
    const router = useRouter();
    const onStart = () =>{
        const nDate = new Date();
        console.log('init Date',nDate);
        let newDate = nDate.setSeconds(nDate.getSeconds()+10);
        let positionTime = nDate.setSeconds(nDate.getSeconds()+5);
        let liteYearEndTime = nDate.setSeconds(nDate.getSeconds()+10);
        localStorage.setItem('lite-year-poster-time',newDate);
        localStorage.setItem('position-time',positionTime);
        localStorage.setItem('lite-year-end-time',liteYearEndTime);
        localStorage.setItem('remaining-liteyear',20);
        router.push('./liteyearpreview');
        // console.log(liteYearTime.getTime-nDate.getTime);
    }
  return (
  <div style={{textAlign:'center',display:'grid',placeItems:'center',height:'100vh'}}>
      <div>
      <h3 style={{textTransform:"uppercase"}}>Journey Home</h3>
      <button onClick={onStart}>start</button>

      </div>
  </div>
  );
};

export default Timer;
