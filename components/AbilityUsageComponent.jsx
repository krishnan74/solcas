"use client"
import React, { useState } from "react";
import AbilityCard from "./AbilityCard";
import Image from "next/image";
import "./ability-card.css";

const AbilityUsageComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showArrow, setshowArrow] = useState(true);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const toggleshowArrow = () => {
    setshowArrow(false)
  }
  const toggleNotShowArrow = () => {
    setshowArrow(true);
  };


  return (
    <div
      onMouseEnter={toggleshowArrow}
      onMouseLeave={toggleNotShowArrow}
      className="flex text-white items-center slide-left-animation w-[450px] pr-5 rounded-md py-2"
    >
      {showArrow && (
        <div className="semicircle flex justify-center">
          <p className="text-white text-[6px] absolute top-4  w-fit h-full overflow-hidden">
            <span className="vertical-text ">ABILITIES</span>
          </p>
        </div>
      )}

      <div className="flex flex-col justify-around gap-5 h-[690px] items-center overflow-y-auto">
        <div>
          <p className="text-white text-2xl tracking-widest mt-20 ">
            ABILITIES
          </p>
        </div>

        <AbilityCard
          name="Lucky Charm"
          description="Increases the chances of getting platinum boxes"
          count="3"
        />
        <AbilityCard
          name="Slow motion"
          description="Increases the time limit"
          count="6"
        />
        <AbilityCard
          name="Seven Lives"
          description="Increases the number of user tries"
          count="3"
        />
        <AbilityCard
          name="Jackpot"
          description="Doubles the prize in the selected box"
          count="3"
        />
      </div>
    </div>
  );
};

export default AbilityUsageComponent;
