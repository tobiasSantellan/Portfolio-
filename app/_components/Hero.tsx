import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "@/components/ui/SpotLight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { SocialIcon } from "react-social-icons";
import { PiReadCvLogo } from "react-icons/pi";

const Hero = () => {
  return (
    <div className="pb-20 pt-36" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vh] "
          fill="#00a98f"
        />
        <Spotlight
          className="top-28 left-80 h-[80-vh] w-[50vw] "
          fill="#bcbfd1"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.02] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex justify-center relative -my-10 lg:my-5 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-md text-center text-blue-100 max-w-80">
            I am Tobias Santellan
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Frontend Developer Transforming ideas into Digital Experiences"
          />

          <a href="TobiasSantellan_CV.pdf" target="_blank">
            <MagicButton
              title="Download CV"
              icon={<PiReadCvLogo />}
              position="right"
              otherClasses="gap-3"
            />
          </a>
          {/* Añadir los iconos de redes sociales */}
          <div className="flex gap-4 mt-6">
            <SocialIcon
              url="https://github.com/tobiasSantellan"
              network="github"
              target="_blank"
              style={{ height: 35, width: 35 }}
              fgColor="transparent"
              bgColor="#00a98f"
              className="hover:opacity-80 transition-opacity"
            />
            <SocialIcon
              url="https://linkedin.com/in/tobias-s98/"
              network="linkedin"
              target="_blank"
              style={{ height: 35, width: 35 }}
              fgColor="transparent"
              bgColor="#00a98f"
              className="hover:opacity-80 transition-opacity duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
