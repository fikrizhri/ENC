import { useEffect, useState } from "react";
import { off, on } from "@/utils";

const useScrollingUp = () => {
  const [scrollingUp, setScrollingUp] = useState(false);

  useEffect(() => {
    let prevScroll = window.pageYOffset;
    const handleScroll = () => {
      const currScroll = window.pageYOffset;
      const isScrolled = prevScroll > currScroll;
      setScrollingUp(currScroll === 0 ? false : isScrolled);
      prevScroll = currScroll;
    };
    on(window, "scroll", handleScroll, { passive: true });
    return () => {
      off(window, "scroll", handleScroll, { passive: true });
    };
  }, []);
  return scrollingUp;
};

export default useScrollingUp;
