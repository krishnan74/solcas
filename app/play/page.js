"use client"
import React, { useState, useEffect } from "react";
import GridComponent from "@/components/GridComponent";
import AbilityUsageComponent from "@/components/AbilityUsageComponent";

const PlayPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(15); // Initial time limit in seconds

  useEffect(() => {
    // Update the time remaining every second
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prevTime) => prevTime - 1);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, [timeRemaining]);

  return (
    <div className="flex justify-around">
      <div className=""></div>
      <div>
        <div className="flex">
          <p className="font-bold text-center text-3xl tracking-wide mb-2 text-white">
            Lobby Code: #65943
          </p>
          <p className="font-bold text-center ml-9 text-xl tracking-wide mb-3 text-white">
            Time Remaining: {timeRemaining} seconds
          </p>
        </div>
        <p className="font-bold text-center text-xl tracking-wide mb-3 text-white">
          Select one of the boxes below
        </p>

        <div className="flex justify-center ">
          <GridComponent numberOfCells="36" time={timeRemaining} />
        </div>
      </div>
      <div className="relative">
        <AbilityUsageComponent />
      </div>
    </div>
  );
};

export default PlayPage;
