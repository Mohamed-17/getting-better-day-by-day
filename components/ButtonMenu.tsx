"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
function ButtonMenu() {
  const [tapped, setTapped] = useState(false);
  return (
    <motion.div
      onClick={() => setTapped(!tapped)}
      className="bg-[#181917] rounded-full w-10 h-10 flex items-center justify-center gap-0.5 border-2  border-white cursor-pointer"
    >
      {tapped ? (
        <motion.div className="bg-[#181917] rounded w-20 h-40  border-white cursor-pointer"></motion.div>
      ) : (
        <>
          <span className="w-0.5 h-0.5 rounded-full bg-white"></span>
          <span className="w-0.5 h-0.5 rounded-full bg-white"></span>
          <span className="w-0.5 h-0.5 rounded-full bg-white"></span>
        </>
      )}
    </motion.div>
  );
}

export default ButtonMenu;
