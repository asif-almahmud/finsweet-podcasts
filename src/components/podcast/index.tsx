import { podcasts } from "@/static-data";
import Link from "next/link";
import { FC } from "react";

type PodcastProps = typeof podcasts[0];

const Podcast: FC<PodcastProps> = ({ name, link, icon }) => {
  return (
    <Link href={link} className="flex items-center gap-2.5">
      {icon}
      <h4>{name}</h4>
    </Link>
  );
};

export default Podcast;
