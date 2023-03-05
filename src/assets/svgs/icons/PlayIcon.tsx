import { colors } from "@/static-data";
import { FC, useState } from "react";

interface IPlayIconProps {
  isParentHovered?: boolean;
}

export const PlayIcon: FC<IPlayIconProps> = ({ isParentHovered = false }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <rect
        width="32"
        height="32"
        rx="16"
        fill={
          hovered || isParentHovered
            ? colors.primary.dark
            : colors.primary.DEFAULT
        }
      />
      <path
        d="M21.3334 16L12.4445 21.6452L12.4445 10.3548L21.3334 16Z"
        fill="white"
      />
    </svg>
  );
};
