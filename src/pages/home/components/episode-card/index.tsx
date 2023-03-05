import Image from "next/image";
import React, { FC } from "react";
import { recentEpisodes } from "@/static-data";
import { MikeIcon } from "@/assets/svgs/icons/MikeIcon";
import Link from "next/link";
import ButtonPlay from "@/components/buttons/button-play";

type EpisodeCardProps = typeof recentEpisodes[0];

const EpisodeCard: FC<EpisodeCardProps> = ({ title, desc, image, link }) => {
  return (
    <div className="flex-1 flex flex-col gap-8 relative">
      <div className="w-full h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 duration-300"
        />
      </div>
      <button className="absolute top-4 right-4">
        <MikeIcon />
      </button>
      <div className="flex flex-col gap-4">
        <Link href={link}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <ButtonPlay>Listen Now</ButtonPlay>
      </div>
    </div>
  );
};

export default EpisodeCard;
