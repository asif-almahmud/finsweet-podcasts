import { ButtonTypes } from "@/types";
import React, { FC, ReactNode } from "react";

interface IButtonContainedProps {
  children: ReactNode;
  type?: ButtonTypes;
  extraClasses?: string;
}

const ButtonContained: FC<IButtonContainedProps> = ({
  children,
  type = "button",
  extraClasses = "",
}) => {
  return (
    <button
      type={type}
      className={`w-fit btn--text px-8 py-3 body bg-primary text-primary-contrast hover:bg-primary-dark ${extraClasses}`}
    >
      {children}
    </button>
  );
};

export default ButtonContained;
