import { PlayIcon } from "@/assets/svgs/icons/PlayIcon";
import { ButtonTypes } from "@/types";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

interface IButtonPlayProps {
  children: ReactNode;
  type?: ButtonTypes;
  extraClasses?: string;
}

const ButtonPlay: FC<IButtonPlayProps> = ({
  children,
  type = "button",
  extraClasses = "",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type={type}
      className={`w-fit flex items-center gap-2 text-primary hover:text-primary-dark ${extraClasses}`}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      <PlayIcon isParentHovered={hovered} />
      <h5>{children}</h5>
    </button>
  );
};

export default ButtonPlay;
