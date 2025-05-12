import { getFilteredImages } from "../utils/loadImages";

export const bonusImages = {
  recent: import.meta.glob("/src/assets/winners/recent/*.{jpg,png,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,

  bigwinners: import.meta.glob("/src/assets/winners/big/*.{jpg,png,webp}", {
    eager: true,
    import: "default",
  }) as Record<string, string>,
};

export const CARD_CONFIG = {
  recent: [
    { user: "Robert**", slotImg: "1", cash: 1800.75 },
    { user: "Glen**", slotImg: "2", cash: 2600.04},
    { user: "GTUst**", slotImg: "3", cash: 3072.93 },
  ],
  bigwinners: [
    { user: "GTUst**", slotImg: "3", cash: 9999 },
    { user: "Glen**", slotImg: "2", cash: 8888 },
    { user: "Robert**", slotImg: "1", cash: 7777 },
    
    
  ],
  tabs: [
    { tabName: "Recent", tabfullname:"Recent"  },
    { tabName: "BigWinners",tabfullname:"Big Winners" },
  ],
};

export function generateWinnersList() {
    const recentList = CARD_CONFIG.recent.map((item) => ({
      type: "RECENT",
      user: item.user,
      cash: item.cash,
      slotImage: getFilteredImages(bonusImages.recent, [item.slotImg]),
    }));
  
    const bigwinnersList = CARD_CONFIG.bigwinners.map((item) => ({
      type: "BIGWINNERS",
      user: item.user,
      cash: item.cash,
      slotImage: getFilteredImages(bonusImages.bigwinners, [item.slotImg]),
    }));
  
    return [...recentList, ...bigwinnersList];
  }

export function generateWinnersTabsList() {
  return CARD_CONFIG.tabs.map((tab) => ({
    tabName: tab.tabName.toLowerCase(),
    label: `${tab.tabfullname.toUpperCase()}`,
  }));
}
