"use client";
import React               from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image               from "next/image";

export function HeroScroller({ bgImage }) {
  return (
    <div className="relative">
      {/* Background wrapper */}
      <div className={`${bgImage} relative`}>
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-lg"></div>

        {/* Dark overlay + content */}
        <div className="w-full h-full bg-[#0000006b] text-center relative">
          <div className="relative flex flex-col overflow-hidden pb-[20px] pt-[500px] z-60">
            <ContainerScroll
              titleComponent={
                <>
                  <h1 className="text-4xl font-semibold text-secondary dark:text-white">
                    Unleash the power of <br />
                    <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                      Scroll Animations
                    </span>
                  </h1>
                </>
              }
            >
              <Image
                src={`/hero/bg-2.jpg`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </div>
      </div>
    </div>
  );
}
