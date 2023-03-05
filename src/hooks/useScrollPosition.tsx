import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [savedPosition, setSavedPosition] = useState(0);
  const [scrollingUpward, setScrollingUpward] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    if (savedPosition - scrollPosition > 0) {
      setSavedPosition(scrollPosition);
      setScrollingUpward(true);
    } else {
      setSavedPosition(scrollPosition);
      setScrollingUpward(false);
    }
  }, [scrollPosition]);

  return { scrollPosition, scrollingUpward };
};
