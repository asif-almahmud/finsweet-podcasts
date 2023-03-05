import { PlayIcon } from "@/assets/svgs/icons/PlayIcon";
import { ButtonTypes } from "@/types";
import { FC, ReactNode } from "react";

interface IButtonTextProps {
  children: ReactNode;
  type?: ButtonTypes;
  extraClasses?: string;
}

const ButtonText: FC<IButtonTextProps> = ({
  children,
  type = "button",
  extraClasses = "",
}) => {
  return (
    <button
      type={type}
      className={`text-primary hover:text-primary-dark w-fit ${extraClasses}`}
    >
      <h5>{children}</h5>
    </button>
  );
};

export default ButtonText;
