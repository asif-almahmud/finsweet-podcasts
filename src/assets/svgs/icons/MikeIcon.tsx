import { colors } from "@/static-data";
import { useState } from "react";

export const MikeIcon = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="hover:text-primary-dark"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <rect
        width="40"
        height="40"
        rx="20"
        fill={hovered ? colors.primary.dark : colors.primary.DEFAULT}
      />
      <path
        d="M27 17V18C26.998 19.6818 26.3906 21.3068 25.2888 22.5775C24.187 23.8482 22.6646 24.6797 21 24.92V28H24V30H16V28H19V24.92C17.3354 24.6797 15.813 23.8482 14.7112 22.5775C13.6094 21.3068 13.002 19.6818 13 18V17H15V18C15 19.3261 15.5268 20.5979 16.4645 21.5355C17.4021 22.4732 18.6739 23 20 23C21.3261 23 22.5979 22.4732 23.5355 21.5355C24.4732 20.5979 25 19.3261 25 18V17H27ZM20 21C20.7956 21 21.5587 20.6839 22.1213 20.1213C22.6839 19.5587 23 18.7956 23 18V13C23 12.2044 22.6839 11.4413 22.1213 10.8787C21.5587 10.3161 20.7956 10 20 10C19.2044 10 18.4413 10.3161 17.8787 10.8787C17.3161 11.4413 17 12.2044 17 13V18C17 18.7956 17.3161 19.5587 17.8787 20.1213C18.4413 20.6839 19.2044 21 20 21Z"
        fill="white"
      />
    </svg>
  );
};
