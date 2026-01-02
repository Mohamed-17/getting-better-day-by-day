"use client";
import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { BBH_Bartle } from "next/font/google";
const bbhBartle = BBH_Bartle({
  subsets: ["latin"],
  weight: ["400"],
});
gsap.registerPlugin(ScrollTrigger);
function HeroGsap() {
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;

  useGSAP(() => {
    gsap.set(".cloud", {
      y: "random(0,500)",
      scale: "random(0.5,1.5)",
    });
    gsap.fromTo(
      ".cloud",
      {
        x: `random(0,${windowWidth - 200})`,
      },
      {
        x: `random(0,${windowWidth - 200})`,

        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      }
    );
    // hero section
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        trigger: "#heroSection",
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        // pinSpacing: false,
        anticipatePin: 1,
      },
    });

    tl.fromTo(
      "#heroWrapper",
      { clipPath: "inset(30% 30% 30% 30%)" },
      { clipPath: "inset(0% 0% 0% 0%)" },
      0
    )
      .from(
        "#heroWrapper h2",
        {
          clipPath: "inset(100% 0% 0% 0%)",
          y: 50,
        },
        0.6
      )
      .fromTo(
        "#heroScroll",
        { clipPath: "inset(100% 0% 0% 0%)", y: 20 },
        { clipPath: "inset(0% 0% 0% 0%)", y: 0 },
        0.3
      );
  });
  return (
    <div
      className="relative overflow-hidden h-screen bg-[#fececc]"
      id="heroSection"
    >
      <div
        className="w-full h-screen relative  overflow-hidden grid place-content-center"
        id="heroWrapper"
      >
        <div className="cloud w-60 h-60 absolute z-100  ">
          <Image
            src={"/cloud.webp"}
            alt="cloud"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>

        <div className="cloud w-60 h-60 absolute z-10  ">
          <Image
            src={"/cloud.webp"}
            alt="cloud"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="cloud w-60 h-60 absolute z-10  ">
          <Image
            src={"/cloud.webp"}
            alt="cloud"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="cloud w-60 h-60 absolute z-10  ">
          <Image
            src={"/cloud.webp"}
            alt="cloud"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="relative z-100 text-center">
          <div
            id="heroScroll"
            className="z-100 relative  text-2xl font-bold leading-17 tracking-[50px]"
            style={{ fontFamily: bbhBartle.style.fontFamily }}
          >
            GSAP
          </div>
          <h2 className="relative z-100 text-5xl text-white">Demo</h2>
        </div>
        <Image src="/hero.jpg" alt="hero" fill className="object-cover" />
      </div>
    </div>
  );
}

export default HeroGsap;
