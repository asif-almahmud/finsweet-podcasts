import { recentEpisodes } from "@/static-data";
import React from "react";
import EpisodeCard from "../../components/episode-card";

type Props = {};

const RecentEpisodes = (props: Props) => {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h2>Recent Episodes</h2>
        <p className="max-w-[371px]">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black.
        </p>
      </div>
      {/* Episode Cards */}
      <ul className="flex flex-col gap-14 sm:flex-row sm:gap-4 [&>*]:flex-1">
        {recentEpisodes.map((episode) => (
          <li key={episode.title}>
            <EpisodeCard {...episode} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentEpisodes;
