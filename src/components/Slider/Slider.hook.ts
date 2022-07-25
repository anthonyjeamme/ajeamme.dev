import { useEffect, useRef, useState } from "react";
import {
  getCurrentItemFromScroll,
  getResponsiveScrollOffset,
  scrollToIndex,
} from "./Slider.utils";

export const useSlider = ({ items }: { items: any[] }) => {
  const { scrollerRef } = useScroll(handleScroll);

  const [currentIndex, setCurrentIndex] = useState(0);

  function handleScroll() {
    if (!scrollerRef.current) return;
    const currentIndex = getCurrentItemFromScroll(scrollerRef);
    setCurrentIndex(currentIndex);
  }

  const handleScrollLeft = () => {
    const offset = getResponsiveScrollOffset();
    const index = Math.max(0, currentIndex - offset);
    scrollToIndex(index, scrollerRef);
  };

  const handleScrollRight = () => {
    const offset = getResponsiveScrollOffset();
    const index = Math.min(currentIndex + offset, items.length - 1);
    scrollToIndex(index, scrollerRef);
  };

  return {
    scrollerRef,
    currentIndex,
    handleScrollLeft,
    handleScrollRight,
  };
};

const useScroll = (handleScroll: () => void) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollerElement = scrollerRef.current;
    if (!scrollerElement) return;

    scrollerElement.addEventListener("scroll", handleScroll);

    return () => {
      scrollerElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    scrollerRef,
  };
};
