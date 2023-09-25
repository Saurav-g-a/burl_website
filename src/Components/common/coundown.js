import React, { useState, useEffect } from "react";
import { homeBanner } from "../api/all_api";

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const timeDifference = targetTime - now;

    if (timeDifference <= 0) {
      return { days: 0, hours: "00", minutes: 0, seconds: 0 };
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div>
      <div className="flex w-[375px] justify-center mx-auto">
        <div className="w-[25%] mx-auto text-center">
          <p className="text-5xl text-[#cd1e8a] font-bold">
            {" "}
            {timeLeft.days} :{" "}
          </p>
          <h1>days </h1>
        </div>
        <div className="w-[25%] mx-auto text-center">
          <p className="text-5xl text-[#cd1e8a] font-bold">
            {" "}
            {timeLeft.hours} :{" "}
          </p>
          <h1>hours </h1>
        </div>
        <div className="w-[25%] mx-auto text-center">
          <p className="text-5xl text-[#cd1e8a] font-bold">
            {" "}
            {timeLeft.minutes} :{" "}
          </p>
          <h1>mins </h1>
        </div>
        <div className="w-[25%] mx-auto text-center">
          <p className="text-5xl text-[#cd1e8a] font-bold">
            {" "}
            {timeLeft.seconds}{" "}
          </p>
          <h1>sec </h1>
        </div>
      </div>
    </div>
  );
}

function Countdown() {
  const [banner, setBanner] = useState(null);
  console.log(banner);

  useEffect(() => {
    homeBanner()
      .then((result) => {
        if (result) {
          setBanner(result[0]?.banner_time);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const targetDate = new Date(banner).toISOString();

  return (
    <div>
      {banner == null ? ('') : (
    <>
    <CountdownTimer targetDate={targetDate} />
  </>) }
  </div>
  )
}

export default Countdown;
