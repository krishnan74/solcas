"use client"
import React from "react";
import NewGameForm from "@/components/NewGameForm";
import JoinGameForm from "@/components/JoinGameForm";

const StartPage = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col sm:flex-row justify-center items-center pt-12 space-y-6 sm:space-y-0 sm:space-x-6">
        <div className="flex justify-center items-center h-[400px] sm:h-[520px] w-[90%]  sm:w-[570px] bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
          <div className="flex justify-center flex-col h-[380px] sm:h-[500px] w-[90%] sm:w-[530px] px-4 py-2 rounded-lg bg-[#121212]">
            <p className="text-4xl sm:text-6xl text-center text-white font-semibold tracking-wide mb-7 mt-4">
              Create Game
            </p>
            <NewGameForm />
          </div>
        </div>

        <div className="flex justify-center items-center h-[400px] sm:h-[520px] w-[90%]  sm:w-[570px] bg-gradient-to-l hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
          <div className="flex justify-center flex-col h-[380px] sm:h-[500px] w-[90%] sm:w-[530px] px-4 py-2 rounded-lg bg-[#121212]">
            <p className="text-4xl sm:text-6xl text-center text-white font-semibold tracking-wide mb-7 mt-4">
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
