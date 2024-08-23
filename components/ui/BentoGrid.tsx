import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";

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
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-4 mx-auto ",
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
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border-transparent justify-between flex flex-col space-y-4 border dark:bg-black/10 bg-green-500/10 border-green-500/20",
        className
      )}
      style={
        {
          // background: "rgb(0,169,143)",
          // backgroundColor:
          //   "linear-gradient(159deg, rgba(0,169,143,1) 0%, rgba(1,1,10,0) 100%)",
        }
      }
    >
      <div className={`${id === 6} && "flex justify-center h-full"`}>
        <div className="w-full h-full absolute">
          {/* {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
            />
          )} */}
        </div>
      </div>
      <div
        className={`absolute right-0 -bottom-5 ${
          id === 4 && "w-full opacity-80"
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
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>
      )}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
