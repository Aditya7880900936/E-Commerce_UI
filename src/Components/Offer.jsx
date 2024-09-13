import React, { useEffect, useState } from "react";

const Offer = () => {

const [targetDate,setTargetDate]=useState(new Date("2024-09-13T12:15:00"))


  const calculateTimeLeft = () => {
    const difference = +new Date("2024-08-23T12:15:00") - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),

        minutes: String(Math.floor((difference / 1000 / 60) % 24)).padStart(
          2,
          "0"
        ),

        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }
    else{
      timeLeft={
        days:"00",
        hours:"00",
        minutes:"00",
        seconds:"00",
      };
    }
    return timeLeft;
  };
  
  const [timeleft,setTimeleft]=useState(calculateTimeLeft());

  useEffect(()=>{
    const timer =setTimeout(()=>{
      setTimeleft(calculateTimeLeft());
    },1000);
    return ()=>clearTimeout(timer)
  },[])

  return(
    <section className="max-padd-container bg-banner bg-center bg-cover h-screen ">
      <div className="flex items-center flex-col gap-1 mt-40 max-w-xl">
        <h3 className="upprcase meddium-20">Sales Fever</h3>
        <h2 className="bold-44 uppercase">20% Off Everything</h2>
        <span className="italic font-ace">Offer Ends in </span>
        <div className="flex gap-x-4 xs:gap-x-7 mt-2">
          <div className="bg-white p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeleft.days}</span>
            <span className="block">Days</span>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeleft.hours}</span>
            <span className="block">Hours</span>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeleft.minutes}</span>
            <span className="block">Minutes</span>
          </div>
          <div className="bg-white p-2 rounded-lg">
            <span className="font-bold text-4xl">{timeleft.seconds}</span>
            <span className="block">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  )


};

export default Offer
