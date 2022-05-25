import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const LiteYearPoster = () => {
  const [liteYear, setLiteYear] = useState(null);
  const [timeToStart, setTimeToStart] = useState(10);
  const router = useRouter();

  useEffect(() => {
    const liteYearTime = localStorage.getItem("remaining-liteyear");
    setLiteYear(liteYearTime);
    const timeToStartDef =
      parseInt(localStorage.getItem("lite-year-poster-time")) -
      new Date().getTime();
    const timeDefMin = Math.floor((timeToStartDef % (1000 * 60 * 60)) / (1000 * 60));
    const timeDefSec = Math.floor((timeToStartDef % (1000 * 60)) / 1000);
    const totalTime = (timeDefMin * 60) + timeDefSec;
    console.log(totalTime);
    setTimeToStart(totalTime);
    console.log(timeToStartDef);
  }, []);

  useEffect(() => {
    if(timeToStart<1){
        const nDate = new Date();
        console.log('init Date',nDate);
        let positionTime = nDate.setSeconds(nDate.getSeconds()+10);
        let liteYearEndTime = nDate.setSeconds(nDate.getSeconds()+20);
        localStorage.setItem('position-time',positionTime);
        localStorage.setItem('lite-year-end-time',liteYearEndTime);
        localStorage.setItem('remaining-liteyear',liteYear);
        router.push('/gameplay');
    }
    const myInterval = setInterval(() => {
      setTimeToStart(timeToStart--);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [timeToStart]);


  return (
    <div>
      <h2>Liteyear starting: {liteYear}</h2>
      <h3>starting {timeToStart}</h3>
      {timeToStart < 0 && <h1>STARTEd</h1>}
      <button onClick={()=>router.push('/play')}>Play</button>
    </div>
  );
};

export default LiteYearPoster;
