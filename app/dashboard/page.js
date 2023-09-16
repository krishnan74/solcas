import React from "react";
import GridCell from "@/components/GridCell";
import ProfileCard from "@/components/ProfileCard";
import GridComponent from "@/components/GridComponent";
import WinningComponent from "@/components/WinningComponent";

const DashBoardPage = () => {
  return (
    <>
      <div className="flex justify-center mb-4">
        <ProfileCard name="Imperius" gametag="#3421" role="Initiator" />
      </div>

      <div className="flex">
        <div className="ml-6">
          <WinningComponent numberofWins="6" />
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
