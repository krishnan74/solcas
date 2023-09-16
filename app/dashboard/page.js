import React from "react";
import GridCell from "@/components/GridCell";
import ProfileCard from "@/components/ProfileCard";
import GridComponent from "@/components/GridComponent";
import WinningComponent from "@/components/WinningComponent";
import UserInfoCard from "@/components/UserStatsCard";

const DashBoardPage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex flex-col bg-[#212121] rounded-md ml-5 py-5 mb-5">
          <p className="text-white text-2xl tracking-widest ml-5">
            GENERAL INFO
          </p>
          <ProfileCard name="Imperius" gametag="#3241" />
        </div>
        <WinningComponent />
      </div>

      <div className="flex flex-col ">
        <div className="bg-[#212121] ml-5 h-[400px]">sd</div>
      </div>
    </div>
  );
};

export default DashBoardPage;
