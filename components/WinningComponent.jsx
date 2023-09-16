import React from "react";
import UserStatsCard from "./UserStatsCard";

const WinningComponent = (props) => {
  const cells = Array.from({ length: props.numberofWins }, (_, i) => (
    <UserStatsCard key={i} place= "1" price= "12"/>
  ));

  return (
    <div className="flex flex-col gap-1 w-fit px-8 h-fit py-6 items-center  border-2 rounded-md bg-[#222224]">
      <p className="font-bold text-center text-4xl tracking-wide text-white">
        Recent Winnings
      </p>
      {cells}
    </div>
  );
};

export default WinningComponent;
