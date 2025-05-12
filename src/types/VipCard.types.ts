export type ImageData = {
    src: string;
    alt: string;
  };
export type CardItem = {
    title: string;
    lvlBadgeImg: ImageData[];
    level: number;
    currentSP: number;
    maxSP: number;
    rewardSP: number;
    rewardFS: number;
    isLocked: boolean;
  };
  
export type LevelCardProps = {
    dataList: CardItem[];
  };

export interface LevelCardContentProps {
    title: string;
    level: number;
    currentSP: number;
    maxSP: number;
    rewardSP: number;
    rewardFS: number;
    lvlBadgeImg: ImageData;
    bgColorClass: string;
    isLocked: boolean;
  }