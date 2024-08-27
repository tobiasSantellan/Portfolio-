"use client";
import MagicButton from "@/components/ui/MagicButton";
import { socialMedia } from "@/data";
import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("tobias.ariel.santellan@gmail.com");
    setCopied(true);
  };
  return (
    <div className="w-full pt-10 pb-10 " id="contact">
      <div className="w-full left-0 absolute -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let's work
          <span className="text-green"> together</span>
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach me out today
        </p>

        <MagicButton
          title={copied ? "Email Copied" : "Get in touch"}
          icon={<FaLocationArrow />}
          position="right"
          otherClasses="gap-3"
          handleClick={handleCopy}
        />
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Tobias Santellan
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((item) => (
            <div
              key={item.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-lg backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-green
              "
            >
              <a href={item.link} target="_blank">
                {" "}
                <img src={item.img} alt={item.img} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
