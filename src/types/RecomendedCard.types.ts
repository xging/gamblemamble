export type ImageData = {
    src: string;
    alt: string;
  };
  
export type CardType = "games";
  
export type CardItem = {
    title: string;
    players: number;
    gameCover: ImageData[];
    type: CardType;
  };
  
export type RecomendedProps = {
    dataList: CardItem[];
  };
  