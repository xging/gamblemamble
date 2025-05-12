import { getFilteredImages } from "../utils/loadImages";

export const bonusImages = {
  hot: import.meta.glob("/src/assets/hotncold/hot/*.{jpg,png,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,

  cold: import.meta.glob("/src/assets/hotncold/cold/*.{jpg,png,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,
};

export const CARD_CONFIG = {
  hot: [
    { slotTitle: "Donny Dough", slotImg: "1", percent: 215.6 },
    { slotTitle: "Fire Portals", slotImg: "2", percent: 187.1 },
    { slotTitle: "Curse of the Werewolf Megaways", slotImg: "3", percent: 164.8 },
  ],
  cold: [
    { slotTitle: "Curse of the Werewolf Megaways", slotImg: "3", percent: 73 },
    { slotTitle: "Fire Portals", slotImg: "2", percent: 15.1 },
    { slotTitle: "Donny Dough", slotImg: "1", percent: 17.3 },
    
    
  ],
  tabs: [
    { tabName: "Hot" },
    { tabName: "Cold" },
  ],
};

export function generateHotNColdList() {
    const hotList = CARD_CONFIG.hot.map((item) => ({
      type: "HOT",
      slotTitle: item.slotTitle,
      percent: item.percent,
      slotImage: getFilteredImages(bonusImages.hot, [item.slotImg]),
    }));
  
    const coldList = CARD_CONFIG.cold.map((item) => ({
      type: "COLD",
      slotTitle: item.slotTitle,
      percent: item.percent,
      slotImage: getFilteredImages(bonusImages.cold, [item.slotImg]),
    }));
  
    return [...hotList, ...coldList];
  }

export function generateHotNColdTabsList() {
  return CARD_CONFIG.tabs.map((tab) => ({
    tabName: tab.tabName.toLowerCase(),
    label: `${tab.tabName.toUpperCase()} SLOTS`,
  }));
}
