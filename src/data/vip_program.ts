import { getFilteredImages } from "../utils/loadImages";

export const lvlImages = {
    vip: import.meta.glob("/src/assets/levelCard/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  };
  
  export const CARD_CONFIG = {
    vip: [
      {
        title: "1 LEVEL",
        badgeImg: "lvl1",
        level: 1,
        currentSP: 120,
        maxSP: 800,
        rewardSP: 800,
        rewardFS: 15,
        locked: false
      },
      {
        title: "2 LEVEL",
        badgeImg: "lvl2",
        level: 2,
        currentSP: 0,
        maxSP: 1200,
        rewardSP: 1200,
        rewardFS: 80,
        locked: true
      },
      {
        title: "3 LEVEL",
        badgeImg: "lvl3",
        level: 3,
        currentSP: 0,
        maxSP: 1600,
        rewardSP: 1600,
        rewardFS: 140,
        locked: true
      },
      {
        title: "4 LEVEL",
        badgeImg: "lvl4",
        level: 4,
        currentSP: 0,
        maxSP: 2000,
        rewardSP: 2000,
        rewardFS: 200,
        locked: true
      },
    ],
  };
  
  export function generateVipList(
    type: "vip"
  ) {
    return CARD_CONFIG[type].map((item) => {
      const baseCard = {
        type
      };
  
        return {
          ...baseCard,
          level: item.level,
          currentSP: item.currentSP,
          maxSP: item.maxSP,
          rewardSP: item.rewardSP,
          rewardFS: item.rewardFS,
          isLocked: item.locked,
          title: item.title,
          lvlBadgeImg: getFilteredImages(lvlImages[type], [item.badgeImg]),
      }
  
    });
  }
  