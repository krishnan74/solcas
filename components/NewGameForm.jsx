
import React, { useState } from "react";

const NewGameForm = () => {

  const [formData, setFormData] = useState({
    entryFee : 0.0, 
    maxParticipants : 0.0, 
    authorityAddress : "",
  })

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can perform further actions here, such as sending the data to a server
    // or processing it in your application.
    console.log("Entry Fee:", entryFee);
    console.log("Max Participants:", maxParticipants);
    console.log("Authority Address:", authorityAddress);

    // Reset the form fields if needed
    setEntryFee({ ...formData, });

  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-xl text-white items-center"
      >
        <div>
          <label htmlFor="entryFee" className="mr-[90px]">
            Entry Fee:
          </label>
          <input
            type="number"
            className="bg-[#121212] border border-white focus:border-purple-500 rounded-md py-1 pl-3"
            name="entryFee"
            value={formData.entryFee}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="maxParticipants" className="mr-5">
            Max Participants:
          </label>
          <input
            type="number"
            name="maxParticipants"
            className="bg-[#121212] border border-white focus:border-purple-500 rounded-md py-1 pl-3"
            value={formData.maxParticipants}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="authorityAddress" className="mr-3 ">
            Authority Address:
          </label>
          <input
            type="text"
            name="authorityAddress"
            className="bg-[#121212] border border-white focus:border-purple-500 rounded-md py-1 pl-3"
            value={formData.authorityAddress}
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="mt-5 border-2 border-purple-500 px-3 py-1 rounded-md"
          onClick={() => (window.location.href = "/play")}
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default NewGameForm;
