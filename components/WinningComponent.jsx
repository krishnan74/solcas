import React from "react";
import UserStatsCard from "./UserStatsCard";
import "./winning-component.css";

const WinningComponent = (props) => {
  const cells = Array.from({ length: props.numberofWins }, (_, i) => (
    <UserStatsCard key={i} place="1" price="12" />
  ));

  const cellDelays = [100, 200, 300, 400];

  return (
    <div className="flex flex-col gap-1 w-[] h-[190px] overflow-y-auto  bg-[#212121] rounded-md ml-5 py-5 ">
      <p className="text-white text-2xl tracking-widest ml-5">
        RECENT WINNINGS
      </p>
      <div className="animate-fade-in">
        {cells.map((cell, index) => (
          <div
            key={index}
            className="animate-move-up"
            style={{
              transitionDelay: `${cellDelays[index]}ms`,
            }}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinningComponent;
