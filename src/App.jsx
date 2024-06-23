import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";

const App = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function getContacts() {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactsRef);
        const contactLists = contactSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.log(error);
      }
    }
    getContacts();
  }, []);
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
      <div></div>
    </div>
  );
};

export default App;
