import { ReactNode } from "react";

export type ContentCard = {
  style: string;
  title: string;
  buttonText?: string;
  isShowButton?: boolean;
  variant?: "fire" | "ice";
  children: ReactNode;
};
export type Variant = "fire" | "ice";