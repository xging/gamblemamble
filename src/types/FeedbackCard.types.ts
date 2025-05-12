export type ImageData = {
    src: string;
    alt: string;
  };
  
export type FeedbackType = "twitter" | "facebook";
export type FeedbackItem = {
    type: FeedbackType;
    username: string;
    att: string;
    avatar: ImageData[];
    rate: number;
    date: string;
    text: string;
  };
  
export type FeedbackProps = {
    dataList: FeedbackItem[];
  };

  export interface FeedbackContentProps {
    username: string;
    att: string;
    avatar: ImageData;
    rate: number;
    date: string;
    text: string;
  }