"use client"
import React, { useState } from "react";
import AbilityCard from "./AbilityCard";
import Image from "next/image";
import "./ability-card.css";

const AbilityUsageComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex text-white items-center slide-left-animation">
      <Image
        src={"/left_arrow.png"}
        width={"30"}
        height={"30"}
      >

      </Image>
      <div className="flex flex-col justify-around gap-5 h-full items-center">
        <AbilityCard
          name="Lucky Charm"
          description="Increases the chances of spawning platinum boxes"
          count="3"
        />
        <AbilityCard
          name="Lucky Charm"
          description="Increases the chances of spawning platinum boxes"
          count="3"
        />
        <AbilityCard
          name="Lucky Charm"
          description="Increases the chances of spawning platinum boxes"
          count="3"
        />
        <AbilityCard
          name="Lucky Charm"
          description="Increases the chances of spawning platinum boxes"
          count="3"
        />

      </div>
    </div>
  );
};

export default AbilityUsageComponent;
