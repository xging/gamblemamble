import React from "react";
import clsx from "clsx";
import type { TabbedContentTabsProps } from "../../../../types/TabbedCard.types";

export const TabbedContentTabs: React.FC<TabbedContentTabsProps> = ({
  tabs,
  activeTab,
  onTabChange,
}) => (
  <div className="tabbed-card__tabs">
    {tabs.map((tab) => {
      const tabId = tab.tabName.toUpperCase();
      return (
        <button
          key={tabId}
          onClick={() => onTabChange(tabId)}
          className={clsx(
            "tabbed-card__tab-button",
            activeTab === tabId
              ? "tabbed-card__tab-button--active"
              : "tabbed-card__tab-button--inactive"
          )}
        >
          {tab.label}
        </button>
      );
    })}
  </div>
);
