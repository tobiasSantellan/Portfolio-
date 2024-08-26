import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <div>
      <button
        className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none  md:w-60"
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00a98f_0%,#58edd6_50%,#00a98f_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-black-100 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>
    </div>
  );
};

export default MagicButton;
