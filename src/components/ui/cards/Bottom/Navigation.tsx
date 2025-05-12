import React from "react";
import type { navProps } from "../../../../types/BottomCard.types";

export const Navigation: React.FC<navProps> = ({ dataList }) => {
  return (
    <nav className="bottom-card__nav" aria-label="Footer Navigation">
      {dataList.map(({ linkHref, linkName }, index) => (
        <a
          key={`${linkName}-${index}`}
          href={linkHref}
          className="bottom-card__nav-link"
        >
          {linkName}
        </a>
      ))}
    </nav>
  );
};
