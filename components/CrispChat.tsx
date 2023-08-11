"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("9f39facd-d8c1-44d0-9c99-bbc8d8190059");
  }, []);

  return null;
};

export default CrispChat;
