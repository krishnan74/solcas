"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WalletConnectButton from "./WalletConnectButton";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex justify-between h-20 items-center px-4 sm:px-6 lg:px-8">
      <div>
        <Link
          href={"/"}
          className="text-white font-semibold tracking-widest text-xl text-center ml-3"
        >
          SOLCAS
        </Link>
      </div>

      <div className="hidden sm:flex justify-around w-1/2 sm:w-1/3 items-center">
        <div className="text-white">
          <Link href={"/"}>HOME</Link>
        </div>
        <div className="text-white">
          <Link href={"/start"}>PLAY</Link>
        </div>

        <div>
          <WalletConnectButton />
        </div>
      </div>

      {/* Hamburger Menu Button for Small Screens */}
      <div className="sm:hidden">
        <button
          onClick={toggleMenu}
          className="text-white p-2 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Responsive Menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-16 inset-x-0 bg-[#18181a] py-4  border-b-2  z-10">
          <div className="flex flex-col items-center">
            <div className="text-white mb-4">
              <Link href={"/"}>HOME</Link>
            </div>
            <div className="text-white mb-4">
              <Link href={"/start"}>PLAY</Link>
            </div>
            <div className="mb-2 border">
              <WalletConnectButton />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
