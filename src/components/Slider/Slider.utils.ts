import { RefObject } from "react";

export { scrollToIndex, getResponsiveScrollOffset, getCurrentItemFromScroll };

const scrollToIndex = (
  index: number,
  scrollerRef: RefObject<HTMLDivElement>
) => {
  if (!scrollerRef.current) return;

  const elements = getItemsElements(scrollerRef);

  elements[index].scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};

const getResponsiveScrollOffset = () => {
  const itemWidth = window.innerWidth < 768 ? 320 : 420;

  const widthAvailable =
    window.innerWidth < 1000
      ? window.innerWidth
      : (window.innerWidth - 1000) / 2 + 1000;

  return Math.floor(widthAvailable / itemWidth);
};

const getCurrentItemFromScroll = (scrollerRef: RefObject<HTMLDivElement>) => {
  const elements = getItemsElements(scrollerRef);
  const leftLine = Math.max(0, (window.innerWidth - 1000) / 2);

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];

    if (element.getBoundingClientRect().left >= leftLine) {
      return i;
    }
  }

  return elements.length - 1;
};

const getItemsElements = (scrollerRef: RefObject<HTMLDivElement>) => {
  if (!scrollerRef.current) return [];

  return Array.from<HTMLDivElement>(
    scrollerRef.current.querySelectorAll(`[data-type="item"]`)
  );
};
