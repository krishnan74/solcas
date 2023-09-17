import React from "react";
import GridComponent from "@/components/GridComponent";
import AbilityUsageComponent from "@/components/AbilityUsageComponent";

const PlayPage = () => {
  return (
    <div className="flex justify-around">
      <div className=""></div>
      <div>
        <p className="font-bold text-center text-3xl tracking-wide mb-10 text-white">
          Select one of the boxes below
        </p>

        <div className="flex justify-center ">
          <GridComponent numberOfCells="36" />
        </div>
      </div>
      <div className="relative">
        <AbilityUsageComponent />
      </div>
    </div>
  );
};

export default PlayPage;
