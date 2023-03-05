import { Audiotrack } from "@/assets/svgs/Shapes/Audiotrack";
import ButtonContained from "@/components/buttons/button-contained";
import InputBox from "@/components/input-box";
import { useState } from "react";

type Props = {};

const Hero = (props: Props) => {
  const [value, setValue] = useState("");
  return (
    <div className="md-container pt-16 pb-24 sm:py-24 flex flex-col items-center lg:flex-row [&>*]:flex-1 [&>*]:max-w-[70%] gap-24">
      <div className="flex flex-col gap-8 relative">
        <h1>Become The Hero Of Your Own Story</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-0">
          <InputBox
            value={value}
            setValue={setValue}
            placeholder="Enter Your Email Id"
          />
          <ButtonContained>Subscribe</ButtonContained>
        </div>
        <div className="lg:hidden scale-[65%] absolute opacity-10 top-[25%] left-[50%] -translate-y-[50%] -translate-x-[50%] sm:scale-100">
          <Audiotrack />
        </div>
      </div>
      <div className="hidden lg:block">
        <Audiotrack />
      </div>
    </div>
  );
};

export default Hero;
