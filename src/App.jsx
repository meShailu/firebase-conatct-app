import React from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";

const App = () => {
  return (
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar />
      <div className="flex items-center">
        <FiSearch className="text-3xl text-white absolute ml-1" />
        <input
          type="text"
          className="border-white bg-transparent h-10 rounded-md border flex-grow relative text-white pl-9"
        />
      </div>
    </div>
  );
};

export default App;
