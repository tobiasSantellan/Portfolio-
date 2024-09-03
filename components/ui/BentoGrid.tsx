"use client";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("tobias.ariel.santellan@gmail.com");
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 rounded-lg relative overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(27,28,28)",
        backgroundColor:
          "linear-gradient(159deg, rgba(27,28,28,1) 0%, rgba(12,12,13,0) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(
                imgClassName,
                "object-cover object-center w-full h-full"
              )}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 3 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-cover, object-center, w-full, h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold " />
          </BackgroundGradientAnimation>
        )}
      </div>
      <div
        className={cn(
          titleClassName,
          "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-2 lg:p-5"
        )}
      >
        <div className="font-extralight text-[#c1c2d3] text-xs md:text-xs lg:text-base z-10">
          {description}
        </div>
        <div className=" font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>

        {id === 3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-3 ">
            <div className="flex flex-col gap-3 lg:gap-3 mb-2 ">
              {["React.js", "Next.js", "JavaScript"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-3 lg:mt-[-3px] lg:px-3 px-3 text-xs lg:text-base opacity-70 lg:opacity-80 rounded-lg text-center bg-[#00a98f]"
                >
                  {item}
                </span>
              ))}
              {/* <span className="py-4 px-3 rounded-lg text-center bg-[#00a98f]" /> */}
            </div>
            <div className="flex flex-col gap-3 lg:gap-3 pr-4">
              {/* <span className="py-4 px-3 rounded-lg text-center bg-[#00a98f]" /> */}
              {["Tailwind", "Shadcn", "Git"].map((item) => (
                <span
                  key={item}
                  className="py-2 lg:py-3 lg:mt-[-3px] lg:px-3 px-3 text-xs lg:text-base opacity-70 lg:opacity-80 rounded-lg text-center bg-[#00a98f]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative flex justify-center items-center">
            <div className={`absolute -bottom-5 right-0`}>
              <Lottie
                options={{
                  loop: copied,
                  autoplay: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <MagicButton
              title={copied ? "Email Copied" : "Copy my email"}
              icon={<IoCopyOutline />}
              position="left"
              otherClasses="bg-black-200 gap-3 "
              handleClick={handleCopy}
            />
          </div>
        )}
      </div>
    </div>
  );
};
