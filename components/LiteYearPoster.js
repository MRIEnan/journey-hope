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
    const timeDefMin = new Date(timeToStartDef).getMinutes();
    const timeDefSec = new Date(timeToStartDef).getSeconds();
    const totalTime = timeDefMin * 60 + timeDefSec;
    console.log(totalTime);
    setTimeToStart(totalTime);
    console.log(timeToStartDef);
  }, []);

  useEffect(() => {
    if(timeToStart<1){
        const nDate = new Date();
        console.log('init Date',nDate);
        let newDate = nDate.setSeconds(nDate.getSeconds()+10);
        let positionTime = nDate.setSeconds(nDate.getSeconds()+10);
        let liteYearEndTime = nDate.setSeconds(nDate.getSeconds()+5);
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
    </div>
  );
};

export default LiteYearPoster;
