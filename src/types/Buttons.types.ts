import { ReactNode } from "react";
export interface GlaredButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: "green" | "purple" | "white" | "dark" | string;
}
export interface FramedButtonWithIconsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  scheme?: string;
  icon?: ReactNode;
  className?: string;
}
export interface FramedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  scheme?: string;
  burger?: boolean;
  className?: string;
}
