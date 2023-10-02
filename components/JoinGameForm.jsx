import React, { useState } from "react";

const JoinGameForm = () => {
  // Define state variables for the form inputs
  const [roomNumber, setRoomNumber] = useState("");
  const [maxParticipants, setMaxParticipants] = useState("");
  const [authorityAddress, setAuthorityAddress] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform further actions here, such as sending the data to a server
    // or processing it in your application.
    console.log("Entry Fee:", entryFee);
    console.log("Max Participants:", maxParticipants);
    console.log("Authority Address:", authorityAddress);

    // Reset the form fields if needed
    setEntryFee("");
    setMaxParticipants("");
    setAuthorityAddress("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 sm:text-xl text-md text-white items-center "
    >
      <div className="flex flex-col justify-center ">
        <label htmlFor="entryFee" className="mr-[20px]">
          Lobby Code: 
        </label>
        <input
          type="number"
          className="bg-[#121212] border border-white focus:border-purple-500 rounded-md py-1 text-white"
          id="entryFee"
          value={roomNumber}
          onChange={(e) => setRoomNumber(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className="mt-5 border-2 border-purple-500 px-3 py-1 rounded-md"
      >
        Join
      </button>
    </form>
  );
};

export default JoinGameForm;
