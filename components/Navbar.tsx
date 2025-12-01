import Image from "next/image";
import React from "react";
import Menu from "./Menu";

function Navbar() {
  return (
    <div className=" w-full h-20 border-b border-b-slate-500/50 ">
      <div className="max-w-7xl mx-auto px-10 py-5 grid items-center grid-cols-2">
        <div className="relative">
          <Image
            src={"/mo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="w-20"
            priority
          />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Navbar;
