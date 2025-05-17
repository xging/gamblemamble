export type ImageData = {
    src: string;
    alt: string;
  };
  
export type CardType = "promotion" | "tournament";
  
export type CardItem = {
    title: string;
    description?: string;
    backgroundImage: ImageData[];
    type: CardType;
  };
  
export type BonusCardsProps = {
    dataList: CardItem[];
    cardname: string;
  };
  
export type BonusContentCardsProps = {
  Img: ImageData;
  index: number;
  title: string;
  description: string;
  type: CardType;
  textColorClass: string;
  bgColorClass: string;
};
