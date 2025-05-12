  export interface SearchBoxProps {
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    ariaLabel?: string;
  }