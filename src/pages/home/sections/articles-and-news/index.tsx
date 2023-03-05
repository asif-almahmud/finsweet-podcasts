import { AngleBars } from "@/assets/svgs/Shapes/AngleBars";
import ButtonText from "@/components/buttons/button-text";
import { articles } from "@/static-data";
import React from "react";
import ArticleCard from "../../components/article-card";

type Props = {};

const ArticlesAndNews = (props: Props) => {
  return (
    <div className="flex flex-col gap-16">
      {/* Article Cards */}
      <ul className="flex flex-col gap-14 sm:flex-row sm:gap-4 [&>*]:flex-1">
        <li className="min-h-[320px] bg-primary-light relative overflow-hidden">
          <div className="p-10 flex flex-col gap-4">
            <h2 className="sm:text-2xl md:text-4xl">
              Read our articles & news
            </h2>
            <ButtonText>See More</ButtonText>
          </div>
          <div className="absolute right-0 -bottom-44 sm:left-auto sm:right-0 sm:bottom-0">
            <AngleBars />
          </div>
        </li>
        {articles.map((article) => (
          <li key={article.title}>
            <ArticleCard {...article} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesAndNews;
