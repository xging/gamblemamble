import { getFilteredImages } from "../utils/loadImages";

export const gamesCovers = {
    games: import.meta.glob("/src/assets/gameCovers/*.{jpg,png,webp}", {
      eager: true,
      import: "default",
    }) as Record<string, string>,
  
  };
  
  export const GAME_CONFIG = {
    games: [
      { title: "game_1", gameCover: "1", players: 25066 },
      { title: "game_2", gameCover: "2", players: 3690 },
      { title: "game_3", gameCover: "3", players: 1593 },
      { title: "game_4", gameCover: "4", players: 642 },
      { title: "game_5", gameCover: "5", players: 7 },
      { title: "game_6", gameCover: "6", players: 83 },
      { title: "game_7", gameCover: "7", players: 120 },
      { title: "game_8", gameCover: "8", players: 501 },
      { title: "game_9", gameCover: "9", players: 990 },
      { title: "game_10", gameCover: "10", players: 77 },
      { title: "game_11", gameCover: "11", players: 345 },
      { title: "game_12", gameCover: "12", players: 111 },
      { title: "game_13", gameCover: "13", players: 888 },
      { title: "game_14", gameCover: "14", players: 44 },
      { title: "game_15", gameCover: "15", players: 999 },
      { title: "game_16", gameCover: "16", players: 10 },
      { title: "game_17", gameCover: "17", players: 22 },
      { title: "game_18", gameCover: "18", players: 333 },
    ]    
    
  };
  
  export function generateGamesList(
    type:"games"
  ) {
    return GAME_CONFIG[type].map((item) => {
      const baseCard = {
        type,
        title: item.title,
        players: item.players,
        gameCover: getFilteredImages(gamesCovers[type], [item.gameCover]),
      };
      return baseCard;
    });
  }
  