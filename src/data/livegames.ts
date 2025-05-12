import { getFilteredImages } from "../utils/loadImages";

export const gamesCovers = {
  livegames: import.meta.glob("/src/assets/livegames/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  };
  
  export const LIVE_GAME_CONFIG = {
    livegames: [
      { title: "Blackjack", image: "1", location: "Evolution", stream:"Live" },
      { title: "Dragon Tiger", image: "2", location: "Pragmatic play", stream:"Live" },
      { title: "Roulette", image: "3", location: "Evolution", stream:"Live" },
      { title: "Mega Wheel", image: "4", location: "Pragmatic play", stream:"Live" },
      { title: "Baccarat", image: "5", location: "Live88", stream:"Live" },
      { title: "Sweet Bonanza Candyland", image: "6", location: "Pragmatic play", stream:"Live" },
      { title: "Lucky 6 Roulette", image: "7", location: "Pragmatic play", stream:"Live" },
    ]
  };
  
  export function generateLivegames(
    type: "livegames"
  ) {
    return LIVE_GAME_CONFIG[type].map((item) => {
      const baseCard = {
        type,
        title: item.title,
        coverimg: getFilteredImages(gamesCovers[type], [item.image]),
        location: item.location,
        stream: item.stream
        
      };
      return baseCard;
    });
  }
  