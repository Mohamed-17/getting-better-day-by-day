"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { BBH_Sans_Bartle } from "next/font/google";
import SplitText from "gsap/SplitText";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
const bbhSansBartle = BBH_Sans_Bartle({
  subsets: ["latin"],
  weight: ["400"],
});

function GsapSection() {
  useGSAP(() => {
    const splittingText1 = SplitText.create(".gsapText1", {
      type: "words",
    });
    const splittingText2 = SplitText.create(".gsapText2", {
      type: "words",
    });
    gsap.fromTo(
      splittingText1.words,
      {
        y: -100,
      },
      {
        y: 100,
        duration: 2,
        ease: "power2.inOut",
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
        },
      }
    );
    gsap.fromTo(
      splittingText2.words,
      {
        y: -100,
      },
      {
        y: 100,
        duration: 2,
        ease: "power2.inOut",
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
        },
      }
    );
  });
  return (
    <section className="mt-20 ">
      <div className="flex flex-col w-full h-70 ">
        <div className="size-full flex justify-center items-center overflow-hidden relative ">
          <div className="absolute bottom-0 text-center left-1/2 w-full translate-y-1/2 -translate-x-1/2 textEffect-1">
            <h2
              id="textEffect-1"
              className="uppercase  text-[30px] gsapText1"
              style={{ fontFamily: bbhSansBartle.style.fontFamily }}
            >
              Welcome to gsap section
            </h2>
          </div>
        </div>
        <div className="border-t border-slate-500 size-full flex justify-center overflow-hidden relative ">
          <div className="absolute top-0 text-center left-1/2 w-full -translate-y-1/2 -translate-x-1/2 ">
            <h2
              id="textEffect-2"
              className="uppercase gsapText2 text-blue-400 blur-[1px] text-[30px]"
              style={{ fontFamily: bbhSansBartle.style.fontFamily }}
            >
              Welcome to gsap section
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GsapSection;
