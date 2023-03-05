import { sponsors } from "@/static-data";
import { FC } from "react";

const Sponsors = () => {
  return (
    <div
      className={`lg-container py-[72px] bg-primary text-primary-contrast flex items-center flex-col gap-16 -mt-72`}
    >
      <h2>Our Sponsors</h2>
      <div className="w-full flex flex-col items-center sm:flex-row sm:justify-around  gap-8 flex-wrap">
        {sponsors.map((sponsor) => (
          <div className="px-2" key={sponsor.name}>
            {sponsor.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
