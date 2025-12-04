"use client";
import { useToggleMood } from "@/context/ToggleMood";
import Navbar from "@/components/Navbar";

import React from "react";

function ContainerLayout({ children }: { children: React.ReactNode }) {
  const { toggleMood } = useToggleMood();
  
  return (
    <div className={`${toggleMood ? "dark" : "light"}`}>
      <Navbar />
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
}

export default ContainerLayout;
