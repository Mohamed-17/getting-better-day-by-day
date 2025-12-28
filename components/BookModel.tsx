"use client";
import { BookPlus } from "lucide-react";
import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import dynamic from "next/dynamic";
const DynamicModal = dynamic(() => import("./Modal"));
function BookModel() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="border-[0.5px] rounded cursor-pointer  border-gray-400/50 p-2 flex items-center gap-2"
      >
        <BookPlus size={15} className="mb-1" />
        <p className="text-sm mt-0.5">Add New Book</p>
      </button>
      <AnimatePresence>
        {isOpen && <DynamicModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </>
  );
}

export default BookModel;
