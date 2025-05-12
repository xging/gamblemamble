import React from "react";
import "./SearchBox.style.scss";
import SearchIcon from "../../../assets/SearchIcon.svg?react";
import type { SearchBoxProps } from "./SearchBar.types";

export const SearchBox: React.FC<SearchBoxProps> = ({
  placeholder = "Search...",
  value,
  onChange,
  ariaLabel = "Search input",
}) => {
  return (
    <div className="framed-searchbox px-6">
      <span className="framed-searchbox__inner">
        <SearchIcon className="framed-searchbox__icon" />
        <input
          type="text"
          className="framed-searchbox__input"
          placeholder={placeholder}
          aria-label={ariaLabel}
          value={value}
          onChange={onChange}
        />
      </span>
    </div>
  );
};
