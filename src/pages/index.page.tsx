import GeneralLayout from "@/layouts/general-layout";
import Head from "next/head";
import Image from "next/image";
import ArticlesAndNews from "./home/sections/articles-and-news";
import AvailablePodcasts from "./home/sections/available-podcasts";
import Hero from "./home/sections/hero";
import RecentEpisodes from "./home/sections/recent-episodes";

export default function Home() {
  return (
    <>
      <Head>
        <title>Finsweet Podcasts</title>
        <meta name="description" content="Finsweet Podcasts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GeneralLayout>
        {/* Company's First Shout-out */}
        <Hero />
        {/* Start of Engagement */}
        <div className="flex flex-col gap-32">
          <AvailablePodcasts />
          {/* Highlights of Contents */}
          <div className="flex flex-col gap-28">
            <RecentEpisodes />
            <ArticlesAndNews />
          </div>
        </div>
      </GeneralLayout>
    </>
  );
}
