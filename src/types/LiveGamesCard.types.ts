export type ImageData = {
    src: string;
    alt: string;
  };
export type CardType = "livegames";
  
export type CardItem = {
    title: string;
    description?: string;
    coverimg: ImageData[];
    location: string;
    stream: string;
    type: CardType;
  };
  
export type LiveGamesProps = {
    dataList: CardItem[];
  };