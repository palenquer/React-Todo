import React from "react";

const Button = () => {
  return (
    <button
      className="bg-blue-500 w-28 rounded-lg text-white ml-4 outline-none focus:outline-none transform hover:translate-x-2 transition duration-300 active:bg-blue-700 transition duration 0"
      type="submit"
    >
      Add
    </button>
  );
};

export default Button;
