import React, { useState, useEffect, JSX } from "react";
import { TabbedContentTabs } from "./TabbedTabs";
import { TabbedContent } from "./TabbedContent";
import type { TabbedProps } from "../../../../types/TabbedCard.types";
import "./TabbedCard.styles.scss";

export const TabbedCard = <dataItem extends { type: string }>({
  tabsList,
  dataList,
  setIceAndFire,
  children,
}: TabbedProps<dataItem>): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>(
    tabsList[0].tabName.toUpperCase()
  );

  const data = dataList.filter((value) => value.type === activeTab);

  useEffect(() => {
    if (setIceAndFire) {
      setIceAndFire(activeTab === "HOT" ? "fire" : "ice");
    }
  }, [activeTab, setIceAndFire]);

  return (
    <div className={`tabbed-card tabbed-card--${activeTab}`}>
      <div className="tabbed-card__container">
        <TabbedContentTabs
          tabs={tabsList}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <TabbedContent activeTab={activeTab}>
          {children?.({ data })}
        </TabbedContent>
      </div>
    </div>
  );
};
