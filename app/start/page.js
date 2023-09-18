"use client";
import React from "react";
import NewGameForm from "@/components/NewGameForm";
import JoinGameForm from "@/components/JoinGameForm";

const StartPage = () => {
  return (
    <div>
      <div className="flex justify-around pt-12"> 
        <div className="flex justify-center items-center h-[520px] w-[570px] bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg ">
          <div className="flex flex-col h-[500px] items-center justify-center 0 w-[530px] px-4 py-2 rounded-lg bg-[#121212]">
            <p className="text-6xl text-center text-[white] font-semibold tracking-wide mb-7 mt-4">
              Create Game
            </p>
            <NewGameForm />
          </div>
        </div>

        <div className="flex justify-center items-center h-[520px] w-[570px] bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg ">
          <div className="flex flex-col h-[500px] items-center  0 w-[530px] px-4 py-2 rounded-lg bg-[#121212]">
            <p className="text-6xl text-center text-[white] font-semibold tracking-wide mb-7 mt-[155px]">
              Join Game
            </p>
            <JoinGameForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
