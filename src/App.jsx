import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { AiFillPlusCircle } from "react-icons/ai";
import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCard from "./components/ContactCard";
import Modal from "./components/Modal";
import AddAndUpdateContact from "./components/AddAndUpdateContact";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [isOpen, isSetOpen] = useState(false);

  function onOpen() {
    isSetOpen(true);
  }

  function onClose() {
    isSetOpen(false);
  }

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
    <>
      <div className="max-w-[370px] mx-auto px-4">
        <Navbar />
        <div className="flex items-center gap-2 mt-4">
          <div className="flex items-center relative flex-grow">
            <FiSearch className="text-3xl text-white absolute ml-1" />
            <input
              type="text"
              className="border-white bg-transparent h-10 rounded-md border flex-grow text-white pl-9"
            />
          </div>
          <AiFillPlusCircle
            onClick={onOpen}
            className="text-5xl text-white cursor-pointer"
          />
        </div>
        <div className="mt-4 gap-4 flex flex-col ">
          {contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))}
        </div>
      </div>
      <AddAndUpdateContact onClose={onClose} isOpen={isOpen} />
    </>
  );
};

export default App;
