"use client"
import React, { useState } from "react";
import "./grid-cell.css";
import Image from "next/image";

const GridCell = () => {
  const [selected, setselected] = useState(true);

  const handleBuy = () => {
    setselected(!selected);
  };

  return (
    <div className="cell-container flex justify-center items-center">
      {selected ? (
        <button
          onClick={handleBuy}
          className="flex justify-center items-center h-[80px] w-[80px] rounded-md bg-[#222224] cursor-pointer cell-animation"
        >
          <p className="text-white font-bold text-4xl">?</p>
        </button>
      ) : (
        <button
          onClick={handleBuy}
          className="flex justify-center items-center h-[80px] w-[80px] rounded-md bg-[#222224] cursor-pointer cell-animation"
        >
          <p className="text-white font-bold text-xl">SOLD</p>
        </button>
      )}
    </div>
  );
};

export default GridCell;
