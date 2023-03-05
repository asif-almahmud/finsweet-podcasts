import { FC, HTMLInputTypeAttribute } from "react";

interface IInputBoxProps {
  type?: HTMLInputTypeAttribute;
  extraStylingClasses?: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

const InputBox: FC<IInputBoxProps> = ({
  type = "text",
  extraStylingClasses = "",
  value = "",
  setValue,
  placeholder = "",
}) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      className={`px-8 py-3 focus:border-0 focus:outline-0 body bg-primary-light text-secondary ${extraStylingClasses}`}
    />
  );
};

export default InputBox;
