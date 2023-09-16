import React from 'react'
import Image from 'next/image'

const AbilityCard = (props) => {
  return (
    <div className="flex px-5 py-3 bg-[rgba(0, 0, 0, 0.4)] border border-2 border-purple-500 w-1/3 rounded-md">
      <div className="rounded-full profile-image-div"></div>

      <div className="flex flex-col ml-5">
        <div className="flex items-end">
          <p className="font-bold text-center text-3xl tracking-wide text-white">
            {props.name}
          </p>

          <div>
            <p className="font-light text-left text-sm text-purple-500">
              {props.count}
            </p>
          </div>
        </div>
        <span
          className="text-md text-center font-light tracking-wide ml-2"
          style={{
            backgroundImage: "linear-gradient(to right, #ff6347, #32cd32)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {props.description}
        </span>
      </div>
    </div>
  );
}

export default AbilityCard