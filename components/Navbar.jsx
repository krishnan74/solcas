import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between h-20 items-center ">
      <div>
        <Link
          href={"/"}
          className="text-white font-semibold tracking-widest text-xl text-center pl-8"
        >
          SOLCAS
        </Link>
      </div>

      <div className="flex justify-around w-1/3 items-center">
        <div className="text-white">
          <Link href={"/play"}>PLAY</Link>
        </div>
        <div className="text-white">
          <Link href={"/dashboard"}>DASHBOARD</Link>
        </div>
        <div>
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-2 rounded-lg ">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
