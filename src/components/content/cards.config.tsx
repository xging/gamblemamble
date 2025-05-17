import {
  generateBonusList,
  generateFeedbackList,
  generateVipList,
  generateGamesList,
  generateHotNColdList,
  generateHotNColdTabsList,
  generateWinnersList,
  generateWinnersTabsList,
  generateLivegames,
} from "../../data";

import { BonusCards } from "../ui/cards/Bonus/BonusCards";
import { FeedbackCard } from "../ui/cards/Feedback/FeedbackCard";
import { Recomended } from "../ui/cards/Recomended/Recomended";
import { LevelCard } from "../ui/cards/Vip/LevelCard";
import { TabbedCard } from "../ui/cards/TabbedCard/TabbedCard";
import { SlotsList } from "../ui/cards/TabbedCard/SlotsList/SlotsList";
import { WinnersList } from "../ui/cards/TabbedCard/WinnersList/WinnersList";
import { LiveGames } from "../ui/cards/LiveGames/LiveGames";

import type { ContentCard } from "../../types/Content.types";

const data = {
  promotions: generateBonusList("promotion"),
  tournaments: generateBonusList("tournament"),
  vip: generateVipList("vip"),
  feedback: generateFeedbackList("twitter"),
  games: generateGamesList("games"),
  livegames: generateLivegames("livegames"),
  hotncold: generateHotNColdList(),
  hotncoldTabs: generateHotNColdTabsList(),
  winners: generateWinnersList(),
  winnersTabs: generateWinnersTabsList(),
};

export const getContentCards = (
  iceAndFire: "fire" | "ice",
  setIceAndFire: (variant: "fire" | "ice") => void
): ContentCard[] => [
  {
    style: "winners",
    title: "Winners",
    buttonText: "SHOW MORE",
    children: (
      <TabbedCard tabsList={data.winnersTabs} dataList={data.winners}>
        {({ data }) => <WinnersList data={data} />}
      </TabbedCard>
    ),
  },
  {
    style: "recomended",
    title: "Recommended for you",
    buttonText: "SHOW MORE",
    children: <Recomended dataList={data.games} />,
  },
  {
    style: "hotncold",
    title: "Hot&cold",
    isShowButton: false,
    variant: iceAndFire,
    children: (
      <TabbedCard
        tabsList={data.hotncoldTabs}
        dataList={data.hotncold}
        setIceAndFire={setIceAndFire}
      >
        {({ data }) => <SlotsList data={data} />}
      </TabbedCard>
    ),
  },
  {
    style: "livegames",
    title: "Live games",
    buttonText: "SHOW MORE",
    children: <LiveGames dataList={data.livegames} />,
  },
  {
    style: "promotion",
    title: "PROMOTIONS",
    buttonText: "ALL PROMOTIONS",
    children: <BonusCards dataList={data.promotions} cardname="promotions" />,
  },
  {
    style: "tournament",
    title: "TOURNAMENTS",
    buttonText: "ALL TOURNAMENTS",
    children: <BonusCards dataList={data.tournaments} cardname="tournament" />,
  },
  {
    style: "vip",
    title: "VIP PROGRAM",
    buttonText: "PARTICIPATE",
    children: <LevelCard dataList={data.vip} />,
  },
  {
    style: "feedback",
    title: "FEEDBACK",
    isShowButton: false,
    children: <FeedbackCard dataList={data.feedback} />,
  },
];
