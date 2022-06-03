import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import starshipImage from '../assets/images/journy-home/arrow.png';

const LiteYearPoster = () => {
  const [liteYear, setLiteYear] = useState(null);
  const [timeToStart, setTimeToStart] = useState(10);
  const [starshipName,setStarshipName] = useState('wrap')
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
        let stepLimit;
        if(starshipName=='wrap'){
          localStorage.setItem('starship-name',starshipName);
          localStorage.setItem('step-limit',3);
        }
        if(starshipName=='force'){
          localStorage.setItem('starship-name',starshipName);
          localStorage.setItem('step-limit',4);
        }
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
      <div>
        <div onClick={()=>setStarshipName('wrap')} className="starship-select-option-image-container" name="wrap">
        <Image
              className="starship-select-option-image"
              src={starshipImage}
              alt="wrap starship"
            />
            <h2>Wrap Starship</h2>
        </div>
        <div onClick={()=>setStarshipName('force')}  className="starship-select-option-image-container" name="force">
        <Image
              className="starship-select-option-image"
              src={starshipImage}
              alt="force starship"
            />
            <h2>Force Starship</h2>
        </div>
      </div>
      <button onClick={()=>setTimeToStart(0)}>start</button>
      <button onClick={()=>router.push('/play')}>Return</button>
    </div>
  );
};

export default LiteYearPoster;
