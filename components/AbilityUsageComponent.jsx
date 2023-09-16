"use client"
import React, { useState } from "react";
import AbilityCard from "./AbilityCard";

const AbilityUsageComponent = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex flex-col ${
        isExpanded ? "expanded" : ""
      } transition-transform`}
    >
      <div className="cursor-pointer" onClick={toggleExpansion}>
        <p>Abilities {isExpanded ? "◄" : "►"}</p> {/* Add left arrow mark */}
      </div>

      <div>
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
