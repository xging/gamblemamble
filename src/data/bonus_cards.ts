import { getFilteredImages } from "../utils/loadImages";

export const bonusImages = {
    promotion: import.meta.glob("/src/assets/promotions/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  
    tournament: import.meta.glob("/src/assets/tournaments/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  };
  
  export const CARD_CONFIG = {
    promotion: [
      { title: "first deposit bonus", image: "1", description: "100% up to € 100 + 300 Free spins" },
      { title: "second deposit bonus", image: "2", description: "100% up to € 100 + 300 Free spins" },
      { title: "third deposit bonus", image: "3", description: "100% up to € 100 + 300 Free spins" },
    ],
    tournament: [
      { title: "first deposit bonus", image: "1", description: "€150 + 100 free spins" },
      { title: "second deposit bonus", image: "2", description: "€150 + 100 free spins" },
      { title: "third deposit bonus", image: "3", description: "€150 + 100 free spins" },
      { title: "fourth deposit bonus", image: "4", description: "€150 + 100 free spins" },
    ],
    
  };
  
  export function generateBonusList(
    type: "promotion" | "tournament"
  ) {
    return CARD_CONFIG[type].map((item) => {
      const baseCard = {
        type,
        title: item.title,
        description: item.description,
        backgroundImage: getFilteredImages(bonusImages[type], [item.image]),
      };
      return baseCard;
    });
  }
  