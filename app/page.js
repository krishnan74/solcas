"use client";
import React, { useState, useEffect, useRef } from "react";

import "../app/globals.css";

import Image from "next/image";

const Page = () => {
  const [message, setMessage] = useState("Nothing");
  const circlesRef = useRef([]);



  const getRandomDelay = () => {
    return Math.random() * 2000 + "ms";
  };

  

  const handleMouseMove = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    circlesRef.current.forEach((circle) => {
      const circleRect = circle.getBoundingClientRect();
      const circleX = circleRect.left + circleRect.width / 2;
      const circleY = circleRect.top + circleRect.height / 2;

      const deltaX = mouseX - circleX;
      const deltaY = mouseY - circleY;

      const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
      const maxDistance = 150;

      if (distance < maxDistance) {
        circle.style.transition = "transform 0.5s ease";
        circle.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      } else {
        circle.style.transition = "transform 0.5s ease";
        circle.style.transform = "translate(0, 0)";
      }
    });
  };

  return (
    <>
      <div className="relative" onMouseMove={handleMouseMove}>
        <div className="z-10">
          <p className="text-7xl text-center text-white font-semibold mt-32 tracking-wide">
            Decentralized
          </p>

          <p className="text-7xl text-center font-semibold text-[#E649A2] tracking-wide">
            Gaming Redefined
          </p>

          {/* <p className="text-7xl text-center  text-[#212121] font-semibold tracking-wide">
            AI - Assisted
          </p> */}
          <p className="text-2xl text-center text-[#4d4d4d] font-semibold mt-4 tracking-wide">
            Made on{" "}
            <span
              className="text-2xl text-center font-semibold tracking-wide"
              style={{
                backgroundImage: "linear-gradient(to right, #6965F2, #E649A2)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Solana
            </span>
          </p>
          <section className="py-16">
            <div className="container mx-auto text-center">
              <p className="text-lg text-gray-600">Solcas is a decentralized</p>
            </div>
          </section>
        </div>

        <div className="flex mb-10 mt-20 justify-around">
          <div className="flex flex-col w-1/2">
            <div>
              <p className="text-7xl text-center text-[#212121] font-semibold tracking-wide">
                How to Play?
              </p>
            </div>

            <div className="mt-10">
              <p className="text-left text-1xl px-[40px] text-gray-600"></p>
            </div>
          </div>

          <div className="mr-[80px] w-full rounded-lg py-9  h-[700px] flex justify-center">
            <Image
              src={"/game_ss.png"}
              height={"900"}
              width={"900"}
              className="border-2  p-5 rounded-lg"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => (window.location.href = "/web3")}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-lg mb-9"
          >
            Play Now!
          </button>
        </div>
      </div>
    </>
  );
};

export default Page;
