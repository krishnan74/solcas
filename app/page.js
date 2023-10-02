"use client";
import React, { useState, useEffect, useRef } from "react";
import GameCard from "@/components/GameCard";
import Image from "next/image";

const Page = () => {
  const [message, setMessage] = useState("Nothing");
  const circlesRef = useRef([]);

  return (
    <>
      <div className="relative">
        <div className="">
          <div className="px-2">
            <p className="text-5xl sm:text-6xl md:text-7xl text-center text-white font-semibold mt-20 md:mt-32 tracking-wide">
              Decentralized
            </p>

            <p className="text-5xl sm:text-6xl md:text-7xl text-center font-semibold text-[#E649A2] tracking-wide">
              Gaming Redefined
            </p>
          </div>
          <p className="text-xl sm:text-2xl text-center text-[#4d4d4d] font-semibold mt-4 tracking-wide">
            Made on{" "}
            <span
              className="text-xl sm:text-2xl text-center font-semibold tracking-wide"
              style={{
                backgroundImage: "linear-gradient(to right, #6965F2, #E649A2)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Solana
            </span>
          </p>
          <section className="py-8 md:py-16">
            <div className="container mx-auto text-center">
              <p className="text-lg sm:text-xl text-gray-600 px-3">
                Step into the future of gambling with SolCas, a revolutionary
                lottery game deployed on Solana
              </p>
            </div>
          </section>
        </div>

        <div className="mb-5">
          <p className="text-2xl sm:text-3xl md:text-4xl text-white font-semibold mb-4 sm:mb-5 md:mb-6 ml-4 sm:ml-8">
            Trending Games
          </p>
          <div className="pl-4 sm:pl-8 gap-4 sm:gap-6 flex items-center overflow-x-auto">
            <GameCard
              entries="5"
              solInPool="35"
              usersLeft="7"
              hoursLeft="1"
              imageUrl="/nft1.jpeg"
              title="GameHub"
              username="Imperius"
              userImage="/solana.png"
            />
            <GameCard
              entries="5"
              solInPool="35"
              usersLeft="7"
              hoursLeft="1"
              imageUrl="/nft1.jpeg"
              title="GameHub"
              username="Imperius"
              userImage="/solana.png"
            />
            <GameCard
              entries="5"
              solInPool="35"
              usersLeft="7"
              hoursLeft="1"
              imageUrl="/nft1.jpeg"
              title="GameHub"
              username="Imperius"
              userImage="/solana.png"
            />
            <GameCard
              entries="5"
              solInPool="35"
              usersLeft="7"
              hoursLeft="1"
              imageUrl="/nft1.jpeg"
              title="GameHub"
              username="Imperius"
              userImage="/solana.png"
            />
            <GameCard
              entries="5"
              solInPool="35"
              usersLeft="7"
              hoursLeft="1"
              imageUrl="/nft1.jpeg"
              title="GameHub"
              username="Imperius"
              userImage="/solana.png"
            />
            <GameCard
              entries="5"
              solInPool="35"
              usersLeft="7"
              hoursLeft="1"
              imageUrl="/nft1.jpeg"
              title="GameHub"
              username="Imperius"
              userImage="/solana.png"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => (window.location.href = "/start")}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-lg mb-10 sm:mb-20"
          >
            Get Started!
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;

{
  /* <div className="flex flex-col w-1/2">
            <div>
              <p className="text-7xl text-center text-[white] font-semibold tracking-wide">
                How to Play?
              </p>
            </div>

            <div className="mt-10">
              <p className="text-left text-2xl px-[40px] text-gray-600">
                1 ) Create Game by entering inputs such as Entry Fee, Max
                Participants, Authority Address or Join Game using the lobby
                code
                <br />
                <br></br>2 ) Select the boxes based on your intuition
                <br />
                <br></br>3 ) Wait for other players to Select
                <br />
                <br></br> 4 ) Enjoy your revealed prizes
              </p>
            </div>
          </div>

          <div className="mr-[80px] w-full rounded-lg py-9  h-[700px] flex justify-center">
            <Image
              src={"/game_ss.png"}
              height={"900"}
              width={"900"}
              className="border-2  p-5 rounded-lg"
            />
          </div> */
}
