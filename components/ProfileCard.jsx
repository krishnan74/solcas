import React from "react";
import Image from "next/image";
import "./profile-card.css";

const ProfileCard = (props) => {
  return (
    <div className="flex px-5 py-3 bg-[rgba(0, 0, 0, 0.4)] w-1/3 rounded-md ">


      <Image src={"/profile1.jpg"} width={"400"} height={"400"} />

      <div className="flex flex-col ml-5">
        <div className="flex items-end">
          <p className="font-bold text-center text-3xl tracking-wide text-white">
            {props.name}
          </p>
          <span
            className="text-md text-center font-light tracking-wide ml-2"
            style={{
              backgroundImage: "linear-gradient(to right, #6965F2, #E649A2)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {props.gametag}
          </span>
        </div>
        <div>
          <p className="font-light text-left text-sm text-purple-500">
            No. of participations: {props.numberOfParticipation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
