"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

export const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 flex flex-col justify-center pt-36 px-10">
        {" "}
        <h1 className="hero__title">
          Find, Buy and sell vehicles - quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Making Your Dream Vehicle a Reality: Easy Steps to Fit Your Budget
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
