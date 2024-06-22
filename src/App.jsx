import React from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";

const App = () => {
  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex gap-2">
        <div className="flex items-center relative flex-grow">
          <FiSearch className="text-3xl text-white absolute ml-1" />
          <input
            type="text"
            className="border-white bg-transparent h-10 rounded-md border flex-grow  text-white pl-9"
          />
        </div>

        <AiFillPlusCircle className="text-5xl text-white cursor-pointer" />
      </div>
    </div>
  );
};

export default App;
