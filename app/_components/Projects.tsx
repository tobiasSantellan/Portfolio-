import { PinContainer } from "@/components/ui/3d-pin";
import { projects } from "@/data";

import { FaLocationArrow } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="lg:py-20" id="projects">
      <h1 className="heading">
        Here&apos;s a selection of{" "}
        <span className="text-green opacity-90">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4  lg:gap-x-24 lg:gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] "
          >
            <PinContainer title={item.href} href={item.href}>
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[20vh]  mb-10">
                {/* <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <img src="/bg.png" alt="bg-img" />
                </div> */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0 rounded-md"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {item.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    className="flex lg:text-xl md:text-xs text-sm text-white-200"
                  >
                    Live Demo
                  </a>
                  <FaLocationArrow className="ms-3" color="#53bdac" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
