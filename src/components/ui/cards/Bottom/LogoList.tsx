import React from "react";
import type { logoProps } from "../../../../types/BottomCard.types";

export const LogoList: React.FC<logoProps> = ({ dataList }) => {
  const remainder = dataList.length % 3;

  const getRemainderClass = (index: number): string => {
    const lastIndex = dataList.length - 1;
    if (remainder === 1 && index === lastIndex) return "_1";
    if (remainder === 2 && index >= lastIndex - 1) return "_2";
    return "_0";
  };

  return (
    <div className="bottom-card__logolist">
      {dataList.map((data, index) => {
        const logo = data.logo?.[0];
        const classSuffix = getRemainderClass(index);

        return (
          <div
            key={`${data.desc}-${index}`}
            className={`bottom-card__logolist-remain bottom-card__logolist-remain${classSuffix}`}
          >
            {logo && (
              <img
                className="bottom-card__logolist-img"
                src={logo.src}
                alt={logo.alt || data.desc}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
