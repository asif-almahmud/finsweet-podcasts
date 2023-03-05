import Podcast from "@/components/podcast";
import { podcasts } from "@/static-data";
import React from "react";

type Props = {};

const AvailablePodcasts = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-10 justify-around md:flex-row md:gap-32">
      <h3>Podcast Available On</h3>
      <ul className="flex flex-col items-center sm:flex-auto sm:flex-row sm:justify-between grow flex-wrap gap-8">
        {podcasts.map((podcast) => (
          <li key={podcast.name}>
            <Podcast {...podcast} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AvailablePodcasts;
