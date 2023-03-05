import Image from "next/image";
import React, { FC } from "react";
import { articles } from "@/static-data";
import { MikeIcon } from "@/assets/svgs/icons/MikeIcon";
import Link from "next/link";
import ButtonText from "@/components/buttons/button-text";

type ArticleCardProps = typeof articles[0];

const ArticleCard: FC<ArticleCardProps> = ({ title, desc, image, link }) => {
  return (
    <div className="flex-1 flex flex-col gap-8 relative">
      <div className="w-full h-80 overflow-hidden">
        <Image src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-4">
        <Link href={link}>
          <h3>{title}</h3>
        </Link>
        <p>{desc}</p>
        <ButtonText>Listen Now</ButtonText>
      </div>
    </div>
  );
};

export default ArticleCard;
