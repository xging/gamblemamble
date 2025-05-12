import React from "react";
import "./Feedback.style.scss";
import { FeedbackCardContent } from "./FeedbackCardContent";
import type { FeedbackProps } from "../../../../types/FeedbackCard.types";

export const FeedbackCard: React.FC<FeedbackProps> = ({ dataList }) => {
  const shuffledDataList = React.useMemo(() => {
    return [...dataList].sort(() => Math.random() - 0.5).slice(0, 3);
  }, [dataList]);

  return (
    <>
      {shuffledDataList.map(
        ({ username, att, avatar, rate, date, text }, index) => (
          <FeedbackCardContent
            key={`${username}-${date}-${index}`}
            username={username}
            att={att}
            avatar={avatar?.[0]}
            rate={rate}
            date={date}
            text={text}
          />
        )
      )}
    </>
  );
};
