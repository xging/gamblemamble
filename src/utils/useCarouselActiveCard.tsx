import { useEffect, useState } from "react";

export function useCarouselActiveCard(
  carouselRef: React.RefObject<HTMLElement>
): number {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const cards = Array.from(carousel.children) as HTMLElement[];
      //   const center = carousel.scrollLeft + carousel.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const box = card.getBoundingClientRect();
        const cardCenter = box.left + box.width / 2;
        const distance = Math.abs(carousel.offsetWidth / 2 - cardCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    carousel.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, [carouselRef]);

  return activeIndex;
}
