export type ImageData = {
    src: string;
    alt: string;
  };
  
  export type TabbedItem = {
    tabName: string;
    label: string;
  };
  
  export type TabbedSlotsData = {
    slotTitle: string;
    slotImage: ImageData[];
    percent: number;
    type: string;
  };
  
  export type TabbedWinnersData = {
    user: string;
    slotImage: ImageData[];
    cash: number;
    type: string;
  };
  

  // export interface TabbedProps {
  //   tabsList: TabbedItem[];
  //   dataList: TabbedSlotsData[] | TabbedWinnersData[];
  //   setIceAndFire?: (variant: "fire" | "ice") => void;
  //   children?: (params: { data: TabbedSlotsData[] | TabbedWinnersData[] }) => React.ReactNode;
  // }
  
  export interface TabbedProps<dataItem> {
    tabsList: TabbedItem[];
    dataList: dataItem[];
    setIceAndFire?: (variant: "fire" | "ice") => void;
    children?: (params: { data: dataItem[] }) => React.ReactNode;
  }


  export interface TabbedContentTabsProps  {
    tabs: readonly TabbedItem[];
    activeTab: string;
    onTabChange: (tabId: string) => void;
  };

  export interface  SlotsListProps {
    data?: TabbedSlotsData[];
  };

  export interface  WinnersListProps {
    data?: TabbedWinnersData[];
  };

  export interface TabbedContentListProps {
    activeTab: string;
    children?: React.ReactNode;
  }

  