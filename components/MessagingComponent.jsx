import React, { useState } from "react";
import Image from "next/image";

const MessagingComponent = () => {
  const [showMessageDiv, setShowMessageDiv] = useState(false);

  function toggleMessageDiv() {
    setShowMessageDiv(!showMessageDiv);
  }

  return (
    <div className="flex flex-col justify-end items-start">
      {showMessageDiv && (
        <div className="absolute left-9 mb-20 h-[600px] border-2 w-[315px] rounded-lg"></div>
      )}

      <div
        onClick={toggleMessageDiv}
        className="flex justify-center items-center absolute left-9  w-[50px] h-[50px] rounded-full bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500 cursor-pointer"
      >
        <Image src={"/me.png"} width={"30"} height={"30"}></Image>
      </div>
    </div>
  );
};

export default MessagingComponent;
