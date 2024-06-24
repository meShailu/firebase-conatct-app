import React, { useState } from "react";

const useDisclouse = () => {
  const [isOpen, isSetOpen] = useState(false);

  function onOpen() {
    isSetOpen(true);
  }

  function onClose() {
    isSetOpen(false);
  }

  return { onClose, onOpen, isOpen };
};

export default useDisclouse;
