import { LogoLarge } from "./assets/svgs/logo/LogoLarge";
import { ApplePodcasts } from "./assets/svgs/podcasts/ApplePodcasts";
import { Cloud } from "./assets/svgs/podcasts/Cloud";
import { GooglePodcasts } from "./assets/svgs/podcasts/GooglePodcasts";
import { Spotify } from "./assets/svgs/podcasts/Spotify";
import { Sponsor1 } from "./assets/svgs/sponsors/Sponsor1";
import { Sponsor2 } from "./assets/svgs/sponsors/Sponsor2";
import { Sponsor3 } from "./assets/svgs/sponsors/Sponsor3";
import { Sponsor4 } from "./assets/svgs/sponsors/Sponsor4";
import { Sponsor5 } from "./assets/svgs/sponsors/Sponsor5";
import BuildingBusinessBrand from "@/assets/images/episodes/building-business-brand.jpg";
import ManagingCustomers from "@/assets/images/episodes/managing-customers.jpg";
import StartupFundRaising from "@/assets/images/episodes/startup-fund-raising.jpg";
import Article1 from "@/assets/images/articles/article1.jpg";
import Article2 from "@/assets/images/articles/article2.jpg";

// # If we have to change this "colors" object then we will have to change the "colors" object in the tailwind.config.js file accordingly and vice-versa
export const colors = {
  primary: {
    light: "#F4F2FF",
    DEFAULT: "#503AE7",
    dark: "#3E2DB2",
    contrast: "#ffffff",
  },
  secondary: {
    light: "#AFB0B9",
    DEFAULT: "#14142B",
    dark: "#111127",
    contrast: "#ffffff",
  },
};

export const menu = [
  {
    name: "About",
    link: "/about",
  },
];

export const podcasts = [
  {
    name: "Apple Podcasts",
    link: "/",
    icon: ApplePodcasts(),
  },
  { name: "Google Podcasts", link: "/", icon: GooglePodcasts() },
  {
    name: "SOUNDCLOUD",
    link: "/",
    icon: Cloud(),
  },
  {
    name: "Spotify",
    link: "/",
    icon: Spotify(),
  },
];

export const footer = {
  sectionsOrder: ["Logo", "Pages", "Reach Us", "Subscribe"],
  sections: {
    logo: [{ name: "logo", link: "/", icon: LogoLarge() }],
    pages: [
      {
        name: "Home",
        link: "/",
        icon: null,
      },
      { name: "Podcast", link: "/", icon: null },
      { name: "Host", link: "/", icon: null },
      { name: "Blog", link: "/", icon: null },
    ],
    reachUs: [
      { name: "Contact", link: "/", icon: null },
      { name: "About", link: "/", icon: null },
    ],
    subscribe: podcasts,
  },
};

export const sponsors = [
  { name: "sponsor1", icon: Sponsor1() },
  { name: "sponsor2", icon: Sponsor2() },
  { name: "sponsor3", icon: Sponsor3() },
  { name: "sponsor4", icon: Sponsor4() },
  { name: "sponsor5", icon: Sponsor5() },
];

export const recentEpisodes = [
  {
    title: "Ep 1: How to build a world-class business brand",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: BuildingBusinessBrand,
    link: "/",
  },
  {
    title: "Ep 2: Getting the first 100 customers for your business",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: ManagingCustomers,
    link: "/",
  },
  {
    title: "Ep 3: Should I raise money for my startup, or not?",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: StartupFundRaising,
    link: "/",
  },
];

export const articles = [
  {
    title: "Getting the first 100 customers for your business",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: Article1,
    link: "/",
  },
  {
    title: "Ep 2: Getting the first 100 customers for your business",
    desc: "Lorem ipsum at vero eos et accusam et justo duo dolores et ea rebum.",
    image: Article2,
    link: "/",
  },
];
