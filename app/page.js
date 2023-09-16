import React from "react";
import GridComponent from "@/components/GridComponent";
import AbilityUsageComponent from "@/components/AbilityUsageComponent";

const HomePage = () => {
  return (
    <div className="flex">
      <div className="">
        <AbilityUsageComponent />
      </div>
      <div>
        <p className="font-bold text-center text-3xl tracking-wide mb-10 text-white">
          Select one of the boxes below
        </p>

        <div className="flex justify-center ">
          <GridComponent numberOfCells="36" />
        </div>
      </div>
      <div className="">
        <AbilityUsageComponent />
      </div>
    </div>
  );
};

export default HomePage;
