"use client";
import React, { useState, useEffect } from "react";
import GridComponent from "@/components/GridComponent";
import Image from "next/image";
import AbilityUsageComponent from "@/components/AbilityUsageComponent";
import MessagingComponent from "@/components/MessagingComponent";

const PlayPage = () => {
  const [timeRemaining, setTimeRemaining] = useState(10); // Initial time limit in seconds

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
      <MessagingComponent />
      <div>
        <div className="flex">
          <p className="font-bold text-center text-xl tracking-wide mb-2 text-white">
            Lobby Code: #65943
          </p>
          <p className="font-bold text-center ml-9 text-xl tracking-wide mb-3 text-white">
            Time Remaining: {timeRemaining} seconds
          </p>
        </div>

        <div className="flex">
          <p className="font-bold text-center text-xl tracking-wide mb-2 text-white">
            Creator : Imperius
          </p>
          <p className="font-bold text-center ml-9 text-xl tracking-wide mb-3 text-white">
            SOL left : 45 SOL
          </p>
        </div>
        <p className="font-bold text-center text-xl tracking-wide mb-3 text-white"></p>

        <div className="flex justify-center ">
          <GridComponent
            numberOfCells="16"
            numberOfRows="4"
            numberofColumns="4"
            time={timeRemaining}
          />
        </div>
      </div>
      <div className="relative ">
        <AbilityUsageComponent />
      </div>
    </div>
  );
};

export default PlayPage;
