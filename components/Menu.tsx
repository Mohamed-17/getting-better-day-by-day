"use client";
import { AnimatePresence } from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useToggleMood } from "@/context/ToggleMood";
import { ArrowLeft, Moon, Sun } from "lucide-react";
function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setterMood, toggleMood } = useToggleMood();
  const ref = useRef<HTMLButtonElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDalegation = (e: any) => {
    if (e.target.tagName === "SPAN" || e.target.tagName === "svg")
      setIsMenuOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className="justify-self-end">
      <div className="relative">
        <motion.button
          name="menu_button"
          layout
          style={{
            transition: "all 0.3s ease-in-out",
          }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          ref={ref}
          className="grid  grid-cols-1 bg-slate-700   justify-items-center gap-1 items-center p-2 rounded hover:shadow-[0px_10px_20px_5px] hover:shadow-cyan-400/50 hover:cursor-pointer outline-0 ring-0  hover:border-cyan-400 border border-transparent "
          type="button"
        >
          <span className="w-6 bg-white h-px"></span>
          <span className="w-6 bg-white h-px"></span>
          <span className="w-6 bg-white h-px"></span>
        </motion.button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.5,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="absolute top-10 right-5 min-h-50 bg-[#15171b] w-60 rounded overflow-hidden"
            >
              <ul className="rounded " onClick={(e) => handleDalegation(e)}>
                <h4
                  className={`text-gray-400 self-start w-full text-sm  px-3 py-2 ${
                    !toggleMood && "bg-[#1a2230]"
                  }`}
                >
                  Actions
                </h4>
                <li
                  className={`cursor-pointer px-5 py-2 text-sm  ${
                    toggleMood ? " text-white" : "bg-white text-black"
                  }`}
                  onClick={() => setterMood()}
                >
                  {toggleMood ? (
                    <span className="flex items-center gap-2 w-full">
                      <span className="mb-1">
                        <Sun size={20} />
                      </span>
                      To Light
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span className="mb-1">
                        <Moon size={20} />
                      </span>
                      To Dark
                    </span>
                  )}
                </li>
                <h4
                  className={`text-gray-400 self-start w-full text-sm  px-3 py-2 ${
                    !toggleMood && "bg-[#1a2230]"
                  }`}
                >
                  Sections
                </h4>
                <li
                  className={` px-5 py-2  cursor-pointer bg-blue-500 text-white`}
                >
                  <a
                    href="#authentication"
                    className="w-full flex justify-between items-center text-[15px]"
                  >
                    <span>Authentication</span>
                    <span>
                      <ArrowLeft size={15} />
                    </span>
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Menu;
