import React, { useState } from "react";

const NewGameForm = () => {
  const [formData, setFormData] = useState({
    entryFee: 0.0,
    maxParticipants: 0.0,
    authorityAddress: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Entry Fee:", formData.entryFee);
    console.log("Max Participants:", formData.maxParticipants);
    console.log("Authority Address:", formData.authorityAddress);

    setFormData({
      entryFee: 0.0,
      maxParticipants: 0.0,
      authorityAddress: "",
    });
  };

  return (
    
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 sm:text-xl text-md text-white items-center"
      >
        <div className="w-full sm:w-[250px]">
          <label htmlFor="entryFee" className="mr-[10px] sm:mr-[90px]">
            Entry Fee:
          </label>
          <input
            type="number"
            className="bg-[#121212] border border-white focus:border-purple-500 rounded-md py-1 pl-3 w-full"
            name="entryFee"
            value={formData.entryFee}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full sm:w-[250px]">
          <label htmlFor="maxParticipants" className="mr-5">
            Max Participants:
          </label>
          <input
            type="number"
            name="maxParticipants"
            className="bg-[#121212] border border-white focus:border-purple-500 rounded-md py-1 pl-3 w-full"
            value={formData.maxParticipants}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full sm:w-[250px]">
          <label htmlFor="authorityAddress" className="mr-3">
            Authority Address:
          </label>
          <input
            type="text"
            name="authorityAddress"
            className="bg-[#121212] border border-white focus:border-purple-500 rounded-md py-1 pl-3 w-full"
            value={formData.authorityAddress}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="sm:mt-5 mt-0 border-2 border-purple-500 px-3 py-1 rounded-md"
          onClick={() => (window.location.href = "/play")}
        >
          Create
        </button>
      </form>
    
  );
};

export default NewGameForm;
