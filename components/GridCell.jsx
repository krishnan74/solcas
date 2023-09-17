"use client"
import React, { useState, useEffect } from "react";
import "./grid-cell.css";
import Image from "next/image";

const GridCell = (props) => {
  const [selected, setSelected] = useState(true);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [hasPrize, setHasPrize] = useState(false); // State to track if the cell has a prize

  const handleBuy = () => {
    setSelected(!selected);

    // Check a condition (you can change this condition as needed)
    if (!hasPrize && selected) {
      // If the condition is met, setHasPrize to true to display the prize
      setHasPrize(true);
    }
  };

  useEffect(() => {
    // Set a timeout to change the content to the prize after 5 seconds (adjust as needed)
    const timeoutId = setTimeout(() => {
      if (!hasPrize && selected) {
        setHasPrize(true);
      }
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [hasPrize, selected]);

  return (
    <div className="cell-container flex justify-center items-center">
      {selected ? (
        <button
          onClick={handleBuy}
          className="flex justify-center items-center h-[80px] w-[80px] rounded-md bg-[#222224] cursor-pointer cell-animation"
        >
          <p className="text-white font-bold text-3xl">
            {props.number}
          </p>
        </button>
      ) : (
        <button
          onClick={handleBuy}
          className="flex justify-center items-center h-[80px] w-[80px] rounded-md bg-[#222224] cursor-pointer cell-animation"
        >
          <p className="text-white font-bold text-xl">
            SOLD
            {hasPrize ? "4 SOL" : "SOLD"}
            </p>
        </button>
      )}
    </div>
  );
};

export default GridCell;
