import { LogoSmall } from "@/assets/svgs/logo/LogoSmall";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { menu } from "@/static-data";
import Link from "next/link";
import React, { useCallback, useEffect, useMemo, useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const { scrollPosition, scrollingUpward } = useScrollPosition();
  const [upwardScroll, setUpwardScroll] = useState(false);
  const [savedPosition, setSavedPosition] = useState(0);

  console.log({ scrollPosition, scrollingUpward });

  return (
    <div
      className={`h-[72px] ${
        scrollingUpward && scrollPosition !== 0
          ? "sticky border-b border-gray-100"
          : ""
      } top-0 left-0 flex items-center z-[999] backdrop-blur-md bg-white/50`}
    >
      <nav className="lg-container flex justify-between items-center">
        <Link href="/">
          <LogoSmall />
        </Link>
        <ul>
          {menu.map((item) => (
            <li key={item.name}>
              <Link href={item.link} className="body hover:text-primary">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
