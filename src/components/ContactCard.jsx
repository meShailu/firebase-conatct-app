import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from "../config/firebase";

const ContactCard = ({ contact }) => {
  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      key={contact.id}
      className="bg-yellow flex justify-between items-center p-2 rounded-lg "
    >
      <div className="flex gap-1">
        <HiOutlineUserCircle className="text-orange text-4xl" />

        <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
      </div>

      <div className="flex text 3xl">
        <RiEditCircleLine className="text-orange" />
        <IoMdTrash onClick={() => deleteContact(contact.id)} />
      </div>
    </div>
  );
};

export default ContactCard;
