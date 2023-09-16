import React from 'react'
import Image from 'next/image'

const AbilityCard = (props) => {
  return (
    <div className="flex text-center py-9 bg-[rgba(0, 0, 0, 0.4)] border border-2 border-purple-500 w-[] h-[] rounded-md">
      <div className="rounded-full ability-image-div"></div>

      <div className="flex flex-col ml-5 ">
        <div className="flex items-end ">
          <p className="font-bold text-center text-3xl tracking-wide text-white ">
            {props.name}
          </p>

          <div>
            <p className="font-light text-left text-md text-purple-500 ml-3">
              {props.count} SOL
            </p>
          </div>
        </div>

        <span
          className="text-md font-light tracking-wide ml-2 pr-1 text-left"
          style={{
            backgroundImage: "linear-gradient(to right, #6366f1, #ec4899 )",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {props.description}
        </span>
      </div>
      <div className='flex justify-center'>
        <button
          onClick={""}
          className="border border-2 border-purple-500 mr-3 px-3 py-2 h-fit rounded-md"
        >
          Buy
        </button>
      </div>
    </div>
  );
}

export default AbilityCard