import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import Tippy, {followCursor} from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective.css';
import 'tippy.js/themes/light.css';
import arrowImage from "../assets/images/journy-home/arrow.png";
import destImage from "../assets/images/journy-home/one.png";
import p1Image from "../assets/images/journy-home/p1.png";
import p10Image from "../assets/images/journy-home/p10.png";
import p11Image from "../assets/images/journy-home/p11.png";
import p12Image from "../assets/images/journy-home/p12.png";
import p13Image from "../assets/images/journy-home/p13.png";
import p14Image from "../assets/images/journy-home/p14.png";
import p15Image from "../assets/images/journy-home/p15.png";
import p2Image from "../assets/images/journy-home/p2.png";
import p3Image from "../assets/images/journy-home/p3.png";
import p4Image from "../assets/images/journy-home/p4.png";
import p5Image from "../assets/images/journy-home/p5.png";
import p6Image from "../assets/images/journy-home/p6.png";
import p7Image from "../assets/images/journy-home/p7.png";
import p8Image from "../assets/images/journy-home/p8.png";
import p9Image from "../assets/images/journy-home/p9.png";
import HexGridDemo from "./Grid";
import CircleSvg from "./CircleSvg";
import { useRef } from "react";

const GameWheel = () => {

  const myName = "enan";
  // hexagone grid info
  const [sectorName, setSectorName] = useState("36");
  const [positionX, setPositionX] = useState(305);
  const [positionY, setPositionY] = useState(600);
  const [hexagone, setHexagone] = useState(0);
  const [finalPosition, setFinalPosition] = useState(1027);
  const [initialPosition, setInitialPosition] = useState(1027);

  // reaider info
  const [raiderNumbers, setRaiderNumbers] = useState([]);
  const [change, setChange] = useState(true);
  const [raiderTotal, setRaiderTotal] = useState(0);

  //message box and beacon activator info
  const [messagesArr,setMessagesArr] = useState([{name:'enan',text:"This is first text"},{name:'naman',text:"This is second"}]);
  const msgRef = useRef();
  const [isBeaconIconActivated,setIsBeaconIconActivated] = useState(false);
  const [beaconActivatePlanet,setBeaconActivationPlanet]=useState('earth')
  const [beaconActivateCode,setBeaconActivationCode]=useState('p1 image')
  const beaconCode = 'BB2022FB29';
  const beaconCodeRef = useRef();

  //beacon-activation-code

  // forbidden area info
  const [area1, setArea1] = useState([
    127,146,147,167,186,187,206,207,208,225,226,227,228,245,246,247,248,249,264,265,266,267,268,269
  ]);
  const [area2, setArea2] = useState([
    362,363,364,381,382,383,384,402,403,404,421,422,423,442,443,444,461,462,463,441,481,482,483
  ]);
  const [area3, setArea3] = useState([
    353,373,374,393,412,413,432,433,452,453,454,471,472,473,474,491,492,493,494
  ]);
  const [area4, setArea4] = useState([
    705,745,646,686,726,766,666,706,746,786,826,647,687,727,767,627,667,707,747,787,807,648,688,728,768,808,668,708,748,788,828,649,689,729,769,809,669,709,749,789,690,730,770,710,750
  ]);
  const [Planet, setPlanet] = useState([
    155, 167, 336, 319, 158, 411, 323, 281, 415, 504, 592, 587, 514, 451, 226,
  ]);

  // liteyear info
  const [liteYear, setLiteYear] = useState(null);
  const [timeToMove, setTimeToMove] = useState(null);
  const [liteYearDuration, setLiteYearDuration] = useState(180);

  const router = useRouter();

  const starshipStyle = {
    top: positionY,
    left: positionX,
    width: "auto",
    height: "auto",
  };

  // const timeDefMin = Math.floor((timeToStartDef % (1000 * 60 * 60)) / (1000 * 60));
  //   const timeDefSec = Math.floor((timeToStartDef % (1000 * 60)) / 1000);
  useEffect(() => {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum < 3) {
      randomNum = 3;
    } else if (randomNum > 10) {
      randomNum = 10;
    }
    setRaiderTotal(randomNum);
    setChange(!change);
    let tNum = [];
    for (let index = 100; index < 600; index++) {
      if (
        Planet.includes(index) ||
        area1.includes(index) ||
        area2.includes(index) ||
        area3.includes(index) ||
        area4.includes(index)
      ) {
        continue;
      }
      tNum.push(index);
    }
    console.log(tNum);

    function shuffle(array) {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }

    shuffle(tNum);
    const newArr = [];
    console.log("tNum", tNum);
    for (let index = 0; index < randomNum; index++) {
      //condition pos is not be planet or those area
      newArr.push(tNum[index]);
    }
    setRaiderNumbers([...newArr]);
    /*
    const abc = [...Array(randomNum).keys()];
      console.log("ABC:",abc);
      const newArr = []; 
      abc.map(()=>{
        let num = Math.round(Math.random()*1000);
        if(num>600){
          num=600;
        }
        else if(num<60){
          num=60;
        }
        newArr.push(num);
      });
      setRaiderNumbers([...newArr]);
      console.log("RN:",[...newArr]);
    console.log("RANDOM total",randomNum);*/
  }, []);

  // useEffect(() => {
  //   if(raiderTotal){
  //     alert("AAAAAAA");
  //     const abc = [...Array(raiderTotal).keys()];
  //     console.log("ABC:",abc);
  //     const newArr = [];
  //     abc.map(()=>{
  //       let num = Math.round(Math.random()*1000);
  //       if(num>600){
  //         num=600;
  //       }
  //       else if(num<60){
  //         num=60;
  //       }
  //       newArr.push(num);
  //     });
  //     setRaiderNumbers([...newArr]);
  //     console.log("RN:",raiderNumbers);
  //   }
  // }, [raiderTotal,change]);
  // 260,220,180,140,100,60,  
  const getRadius = (midX,midY,posX,posY,quarter=1) =>{
    const dif = Math.sqrt(Math.pow(Math.abs(midX-posX),2)+Math.pow(Math.abs(midY-posY),2))
    let ans;
    // 310,270,230,190,150,110,70,30
    if(dif<60){
      ans = 7 + (quarter-1)*7;
    }
    else if(dif<100){
      ans = 6 + (quarter-1)*7
    }
    else if(dif<140){
      ans = 5 + (quarter-1)*7
    }
    else if(dif<180){
      ans = 4 + (quarter-1)*7
    }
    else if(dif<220){
      ans = 3 + (quarter-1)*7
    }
    else if(dif<260){
      ans = 2 + (quarter-1)*7
    }
    else{
      ans = 1 + (quarter-1)*7
    }
    return ans;
  }

  const getSectorName = (x = 650, y = 650) => {
    const midX = 300;
    const midY = 300;
    let posX = x;
    let posY = y;
    if (x < midX && y < midY) {
      if (x <= y) {
        const dif = getRadius(midX,midY,posX,posY,1);
        // alert(`sector is ${dif}`)
        setSectorName(dif);
      } 
      else {
        const dif = getRadius(midX,midY,posX,posY,2);
        setSectorName(dif);
        // alert(`sector is ${dif}`)
      }
    } else if (x < midX && y > midY) {
      if (x + y >= midX + midY) {
        const dif = getRadius(midX,midY,posX,posY,7);
        setSectorName(dif);
        // alert(`sector is ${dif}`)
        // alert("sector is left down 7");
      } else {
        const dif = getRadius(midX,midY,posX,posY,8);
        setSectorName(dif);
        // alert(`sector is ${dif}`)
        // alert("sector is left down 8");
      }
    } else if (x > midX && y < midY) {
      if (x + y <= midX + midY) {
        const dif = getRadius(midX,midY,posX,posY,3);
        setSectorName(dif);
        // alert(`sector is ${dif}`)
        // alert("sector is right up 3");
      } else {
        const dif = getRadius(midX,midY,posX,posY,4);
        setSectorName(dif);
        // alert(`sector is ${dif}`)
        // alert("sector is right up 4");
      }
    } else if (x > midX && y > midY) {
      if (x > y) {
        const dif = getRadius(midX,midY,posX,posY,5);
        setSectorName(dif);
        // alert(`sector is ${dif}`)
        // alert("sector is right down 5");
      } else {
        const dif = getRadius(midX,midY,posX,posY,6);
        setSectorName(dif);
        // alert(`sector is ${dif}`)
        // alert("sector is right down 6");
      }
    }
  };

  useEffect(() => {
    getSectorName(positionX, positionY);
  }, [positionX, positionY]);

  const getNotified = (msgArr) =>{
    const newArr = [msgArr,...messagesArr];
    setMessagesArr([...newArr]);

  }

  useEffect(()=>{
    const sectorState = `startship is in sector${sectorName}`;
    const name=myName;
    const msgArr = {name:name,text:sectorState}
    getNotified(msgArr);
  },[sectorName])


  useEffect(() => {
    const liteYearTime = localStorage.getItem("remaining-liteyear");
    setLiteYear(liteYearTime);
    const timeToEndLiteYearDef =
      parseInt(localStorage.getItem("lite-year-end-time")) -
      new Date().getTime();
    const timeDefMin = Math.floor(
      (timeToEndLiteYearDef % (1000 * 60 * 60)) / (1000 * 60)
    );
    const timeDefSec = Math.floor((timeToEndLiteYearDef % (1000 * 60)) / 1000);
    const totalTime = timeDefMin * 60 + timeDefSec;
    console.log("setLiteYearDuration ", totalTime);
    setLiteYearDuration(totalTime);
    console.log(timeToEndLiteYearDef);
    const timeToMoveDef =
      parseInt(localStorage.getItem("position-time")) - new Date().getTime();
    const timeMoveDefMin = Math.floor(
      (timeToMoveDef % (1000 * 60 * 60)) / (1000 * 60)
    );
    const timeMoveDefSec = Math.floor((timeToMoveDef % (1000 * 60)) / 1000);
    const totalMoveTime = timeMoveDefMin * 60 + timeMoveDefSec;
    console.log(totalMoveTime);
    setTimeToMove(totalMoveTime);
    // setTimeToMove(10);
    console.log("setTimeToMove  ", timeToMoveDef);
  }, [liteYear]);

  /* useEffect(() => {
    if (liteYearDuration < 1) {
      console.log("over");
      setLiteYear(liteYear--);
      const nDate = new Date();
      console.log("init Date", nDate);
      // let newDate = nDate.setSeconds(nDate.getSeconds() + 10);
      // localStorage.setItem("lite-year-poster-time", newDate);
      localStorage.setItem("remaining-liteyear", liteYear);
      let positionTime = nDate.setSeconds(nDate.getSeconds()+10);
      let liteYearEndTime = nDate.setSeconds(nDate.getSeconds()+20);
      localStorage.setItem('position-time',positionTime);
      localStorage.setItem('lite-year-end-time',liteYearEndTime);
      localStorage.setItem('remaining-liteyear',liteYear);
      // router.push("/liteyearpreview");
    }
    const myInterval = setInterval(() => {
      setLiteYearDuration(liteYearDuration--);
      setTimeToMove(timeToMove--);
    },1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [liteYearDuration]); */

  const planet = (e) => {
    // if (timeToMove < 0) {
    //   alert("moving time over");
    //   return;
    // }
    // alert(`Planet Arrived ${e.target.name}!`);
    // alert(`Planet Arrived ${e.target.name}!`);
    if(e.target.name==beaconActivatePlanet){
      setIsBeaconIconActivated(true);
      const arr={name:myName,text:`Planet Arrived ${e.target.name}!`}
      const arr1 = {name:myName,text:`Beacon is ready to activate`};
      getNotified(arr);
      getNotified(arr1);
      setPositionX(e.clientX);
      setPositionY(e.clientY);
      setInitialPosition(finalPosition);
      // setFinalPosition(hexagon);
    }
    else if(e.target.name == beaconActivateCode){
      const arr={name:myName,text:`Planet Arrived ${e.target.name}!`}
      const arr1={name:myName,text:`Activation code is ${beaconCode}`}
      getNotified(arr);
      getNotified(arr1);
      setPositionX(e.clientX);
      setPositionY(e.clientY);
      setInitialPosition(finalPosition);
      // setFinalPosition(hexagon);
    }
    else{
      const arr={name:myName,text:`Planet Arrived ${e.target.name}!`}
      getNotified(arr);
      setPositionX(e.clientX);
      setPositionY(e.clientY);
      setInitialPosition(finalPosition);
      // setFinalPosition(hexagon);
    }
  };

  const beaconActivateBtn = (e) =>{
    e.preventDefault();
    if(beaconCodeRef.current.value == beaconCode){
      // alert('Bio Beacond is Activated Successfully');
      getNotified({name:myName,text:`Bio Beacon is Activated Successfully`})
    }
    else{
      // alert('please input the valid code');
      getNotified({name:myName,text:`Bio Beacon Activation code is not authorized`})
    }
  }

  const sendMessages = (e) =>{
    e.preventDefault();
  }
  return (
    <div className="gamewheel-main-container">
      <div className="beacon-info-container">
        <div className="messages-main-container">
          <ul className="messages-showcase">
          {
            messagesArr.map((msg,index)=>
              <li className={msg.name=='enan'?"self-messages-list":"opponent-messages-list"} key={index}><p>{msg.text}</p></li>
            )
          }
          </ul>
          <form onSubmit={(e)=>{sendMessages(e)}} className="messages-writing-box">
            <input type="text" placeholder="write messages"/>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="beacon-activation-container">
          {isBeaconIconActivated && <div className='beacon-icon-container'><div id="beacon-icon"></div></div>}
          {isBeaconIconActivated &&  <form onSubmit={e=>beaconActivateBtn(e)}>
            <input ref={beaconCodeRef} type="password" placeholder="Enter Beacon Code"/>
            <button type="submit">Activate</button>
          </form>}
        </div>
      </div>
      <div className="hexagone-container">
        <svg className="circleSvg-container" version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 780 780" width="780" height="780">
          <circle className="a" cx="390" cy="390" r="260"/>
          <circle className="a" cx="390" cy="390" r="220"/>
          <circle className="a" cx="390" cy="390" r="180"/>
          <circle className="a" cx="390" cy="390" r="140"/>
          <circle className="a" cx="390" cy="390" r="100"/>
          <circle className="a" cx="390" cy="390" r="60"/>
        </svg>
        <HexGridDemo
          liteYear={liteYear}
          timeToMove={timeToMove}
          liteYearDuration={liteYearDuration}
          finalPosition={finalPosition}
          setFinalPosition={setFinalPosition}
          initialPosition={initialPosition}
          setInitialPosition={setInitialPosition}
          setPositionX={setPositionX}
          setPositionY={setPositionY}
          raiderNumbers={raiderNumbers}
          area1={area1}
          area2={area2}
          area3={area3}
          area4={area4}
          Planet={Planet}
        />
        <div className="vertical-section one-section"></div>
        <div className="vertical-section two-section"></div>
        <div className="vertical-section three-section"></div>
        <div className="vertical-section four-section"></div>
        <div className="spaceship-container" style={starshipStyle}>
          <div className="starship">
            <Image
              src={arrowImage}
              alt="starship image"
              width={20}
              height={20}
              zIndex={7}
            />
          </div>
        </div>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="Earth">
          <div className="destination" onClick={(event) => planet(event)}>
          <Image
            name="earth"
            src={destImage}
            alt="dest image"
            width={20}
            height={20}
            zIndex={10}
            />
        </div>
          </Tippy>
          <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p1">

        <div className="p1" onClick={(event) => planet(event)}>
          <Image
            src={p1Image}
            name="p1 image"
            alt="p1 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
            </Tippy>
            <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p2">

        <div className="p2" onClick={(event) => planet(event)}>
          <Image
            src={p2Image}
            name="p2 image"
            alt="p2 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
            </Tippy>    
            <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p3">

        <div className="p3" onClick={(event) => planet(event)}>
          <Image
            src={p3Image}
            name={"p3 image"}
            alt="p3 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
        </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p4">

        <div className="p4" onClick={(event) => planet(event)}>
          <Image
            src={p4Image}
            name="p4 image"
            alt="p4 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p5">

        <div className="p5" onClick={(event) => planet(event)}>
          <Image
            src={p5Image}
            alt="p5 image"
            name="p5 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p6">

        <div className="p6" onClick={(event) => planet(event)}>
          <Image
            src={p6Image}
            alt="p6 image"
            name="p6 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p7">

        <div className="p7" onClick={(event) => planet(event)}>
          <Image
            src={p7Image}
            alt="p7 image"
            name="p7 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p8">

        <div className="p8" onClick={(event) => planet(event)}>
          <Image
            src={p8Image}
            alt="p8 image"
            name="p8 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p9">

        <div className="p9" onClick={(event) => planet(event)}>
          <Image
            src={p9Image}
            alt="p9 image"
            name="p9 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p10">

        <div className="p10" onClick={(event) => planet(event)}>
          <Image
            src={p10Image}
            alt="p10 image"
            name="p10 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p11">

        <div className="p11" onClick={(event) => planet(event)}>
          <Image
            src={p11Image}
            alt="p11 image"
            name="p11 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p12">

        <div className="p12" onClick={(event) => planet(event)}>
          <Image
            src={p12Image}
            alt="p12 image"
            name="p12 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p13">

        <div className="p13" onClick={(event) => planet(event)}>
          <Image
            src={p13Image}
            alt="p13 image"
            name="p13 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p14">

        <div className="p14" onClick={(event) => planet(event)}>
          <Image
            src={p14Image}
            alt="p14 image"
            name="p14 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
        <Tippy inertia={true} followCursor={true} delay={200} offset={[0,0]} placement={'bottom'} animation='perspective' theme={'planet-tooltip-theme'} interactive={true}content="p15">

        <div className="p15" onClick={(event) => planet(event)}>
          <Image
            src={p15Image}
            alt="p15 image"
            name="p15 image"
            width={20}
            height={20}
            zIndex={7}
          />
        </div>
    </Tippy>
      </div>
      <div>
        <h1>liteyear {liteYear}</h1>
        <h2>Liteyear Time {liteYearDuration}</h2>
        <h3>Moving Time {timeToMove}</h3>
        <button
          onClick={() => {
            router.push("/play");
          }}
        >
          home
        </button>
      </div>
    </div>
  );
};

export default GameWheel;
