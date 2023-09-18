"use client";

import React, { useState } from "react";
import Image from "next/image";
import entryP from "../app/assets/entry_purple.png";
import entryW from "../app/assets/entry_white.png";
import "./game-card.css";

const GameCard = (props) => {
  const { entries, solInPool, usersLeft, hoursLeft, imageUrl, title } = props;
  const [showDetails, setShowDetails] = useState(false);

  const toggleshowDetails = () => {
    setShowDetails(true);
  };
  const toggleNotShowDetails = () => {
    setShowDetails(false);
  };

  return (
    <div
      onMouseEnter={toggleshowDetails}
      onMouseLeave={toggleNotShowDetails}
      className="border rounded-lg flex-shrink-0 shadow-md w-fit h-[340px] overflow-hidden full-div transition-transform transform-gpu "
    >
      <div className="game-image-div">
        <Image src={imageUrl} width={"250"} height={"250"} />
      </div>

      <div
        className="game-details-div
         px-5 w-[250px] border-t-1  rounded-lg bg-[#18181a]  "
      >
        <h2 className="text-2xl font-semibold text-white mt-3">{title}</h2>
        {!showDetails ? (
          <div className="flex justify-around py-2 mb-2 h-[36px]">
            <div className="flex items-center">
              <Image src={"/entry.png"} height={"20"} width={"20"}></Image>
              <p className="ml-2 text-md text-white">{entries}</p>
            </div>
            <div className="flex items-center">
              <Image src={"/solana.png"} height={"19"} width={"19"}></Image>
              <p className="ml-2 text-md text-white">{solInPool}</p>
            </div>
            <div className="flex items-center">
              <Image src={"/user.png"} height={"20"} width={"20"}></Image>
              <p className="ml-2 text-md text-white">{usersLeft}</p>
            </div>
            <div className="flex items-center">
              <Image src={"/time.png"} height={"20"} width={"20"}></Image>
              <p className="ml-2 text-md text-white">{hoursLeft}</p>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex justify-around py-2 mb-2 h-[36px]">
              <div className="flex items-center">
                <Image src={"/entry.png"} height={"20"} width={"20"}></Image>
                <p className="ml-2 text-md text-white">{entries}</p>
              </div>
              <div className="flex items-center">
                <Image src={"/solana.png"} height={"19"} width={"19"}></Image>
                <p className="ml-2 text-md text-white">{solInPool}</p>
              </div>
              <div className="flex items-center">
                <Image src={"/user.png"} height={"20"} width={"20"}></Image>
                <p className="ml-2 text-md text-white">{usersLeft}</p>
              </div>
              <div className="flex items-center">
                <Image src={"/time.png"} height={"20"} width={"20"}></Image>
                <p className="ml-2 text-md text-white">{hoursLeft}</p>
              </div>
            </div>
            <div className="flex flex-col justify-between mb-2 game-card mt-2">
              <div>
                <p className="text-lg font-bold text-white">
                  Entries{" :"}
                  <span className="ml-2 text-md text-white">{entries}</span>
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-white">
                  Users Left{" :"}
                  <span className="ml-2 text-md text-white">{usersLeft}</span>
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-white whitespace-nowrap">
                  Pool SOL{" :"}
                  <span className="ml-2 text-md text-white">{solInPool}</span>
                </p>
              </div>

              <div>
                <p className="text-lg font-bold text-white whitespace-nowrap">
                  Time Left{" :"}
                  <span className="ml-2 text-md text-white">
                    {hoursLeft} hr
                  </span>
                </p>
              </div>
            </div>
            <p className="text-sm text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nu
            </p>

            <div className="flex justify-around mt-6">
              <div className="bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-[1px]">
                <button className=" px-4 py-2 rounded-lg font-bold text-[#ffffff]">
                  Participate
                </button>
              </div>
              <div className="bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg p-[1px]">
                <button className="bg-[#18181a] px-4 py-2 rounded-lg text-white">
                  Chat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameCard;
