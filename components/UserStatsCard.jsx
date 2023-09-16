import React from 'react'


const UserStatsCard = (props) => {
  return (
    <div className="flex items-center border-white border-b-2 py-2 w-[400px]">
      <div className="border border-white border-2 text-purple-500 rounded-full w-10 h-10 flex justify-center items-center mr-3">
        <p className='text-2xl'>{props.place}</p>
      </div>

      <div className="flex flex-col">
        <div>
          <p className="font-bold text-center text-3xl tracking-wide text-white">
            ${props.price}
          </p>
        </div>
        <div>
          <p className="font-light text-left text-sm text-purple-500">
            3days ago
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserStatsCard