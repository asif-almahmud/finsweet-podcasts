import { footer } from "@/static-data";
import { FooterHeaders, FooterSectionsKeys } from "@/types";
import Link from "next/link";
import React from "react";
import Podcast from "../podcast";
import Sponsors from "../sponsors";

const { sectionsOrder, sections } = footer;

const getSectionsProp = (section: FooterHeaders) => {
  return section
    .split(" ")
    .map((word, index) => {
      return index === 0 ? word.toLowerCase() : word;
    })
    .join("") as FooterSectionsKeys;
};

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className={`bg-secondary text-secondary-contrast mt-72`}>
      <div className="lg-container py-24 flex flex-col gap-24">
        <Sponsors />
        <div className="flex flex-col gap-5 sm:gap-0 sm:flex-row sm:justify-between [&>*]:p-4 [&>*]:self-center sm:[&>*]:self-auto">
          {sectionsOrder.map((section) => {
            return section === "Logo" ? (
              <Link key={section} href={sections["logo"][0].link as string}>
                {sections["logo"][0].icon}
              </Link>
            ) : (
              <div className="flex flex-col gap-8" key={section}>
                <h4 className="text-capitalize font-bold text-md text-center sm:text-start">
                  {section}
                </h4>
                <ul className="flex flex-col items-center sm:items-baseline gap-4 [&>*]:text-white/[85%] hover:[&>*]:text-secondary-contrast hover:[&>*]:drop-shadow-lg duration-300">
                  {sections[getSectionsProp(section as FooterHeaders)].map(
                    ({ name, link, icon }) => {
                      return (
                        <li key={name} className="body">
                          {link && !icon ? (
                            <Link
                              className="flex items-start justify-start "
                              href={link}
                            >
                              {name}
                            </Link>
                          ) : null}
                          {icon && !link ? (
                            <div className="flex items-center gap-2.5">
                              {icon}
                              <span>{name}</span>
                            </div>
                          ) : null}
                          {link && icon ? (
                            <Podcast {...{ name, link, icon }} />
                          ) : null}
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-16 flex justify-center items-center bg-primary font-semibold">
        &#169;&nbsp;Copyright Finsweet {new Date().getFullYear()}
      </div>
    </div>
  );
};

export default Footer;
