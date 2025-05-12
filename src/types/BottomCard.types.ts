export type ImageData = {
  src: string;
  alt: string;
};

export type logoType = "payments" | "providers";
export type logoItem = {
  type: logoType;
  desc: string;
  logo: ImageData[];
};

export interface logoProps  {
  dataList: logoItem[];
};


export type navType = "links";
export type navItem = {
  type: navType;
  linkHref: string;
  linkName: string;
};

export interface navProps  {
  dataList: navItem[];
};

export interface quoteItem {
  text: string;
};
