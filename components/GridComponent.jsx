import React from "react";
import GridCell from "./GridCell";

const GridComponent = (props) => {
  const cells = Array.from({ length: props.numberOfCells }, (_, i) => (
    <GridCell key={i} number ={i+1} />
  ));

  return <div className="grid grid-cols-6 gap-1 w-[600px] h-[600px] items-center">
    {cells}
    </div>;
};

export default GridComponent;
