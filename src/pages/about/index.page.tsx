import { Audiotrack } from "@/assets/svgs/Shapes/Audiotrack";
import ButtonContained from "@/components/buttons/button-contained";
import InputBox from "@/components/input-box";
import GeneralLayout from "@/layouts/general-layout";
import { useState } from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <GeneralLayout>
      <div className="md-container pt-16 pb-24 sm:py-24 flex flex-col items-center lg:flex-row [&>*]:flex-1 [&>*]:max-w-[70%] gap-24">
        <div className="flex flex-col gap-8 relative">
          <h1>About Finsweet Podcast</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>

          <ButtonContained>Subscribe Now!</ButtonContained>
        </div>
        <div className="hidden lg:block"></div>
      </div>
    </GeneralLayout>
  );
};

export default About;
