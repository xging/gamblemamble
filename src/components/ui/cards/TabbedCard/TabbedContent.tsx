import React from "react";
import type { TabbedContentListProps } from "../../../../types/TabbedCard.types";

export const TabbedContent: React.FC<TabbedContentListProps> = ({
  activeTab,
  children,
}) => {
  const className = `tabbed-card__list tabbed-card__list--${activeTab.toLowerCase()}`;

  return <div className={className}>{children}</div>;
};
