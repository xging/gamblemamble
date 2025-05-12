//Now its not necessary :D
import type {
  TabbedWinnersData,
  TabbedSlotsData,
} from "../types/TabbedCard.types";

export function isWinnersDataArray(
  data: TabbedWinnersData[] | TabbedSlotsData[]
): data is TabbedWinnersData[] {
  return data.length > 0 && "user" in data[0] && "cash" in data[0];
}

export function isSlotsDataArray(
  data: TabbedWinnersData[] | TabbedSlotsData[]
): data is TabbedSlotsData[] {
  return data.length > 0 && "slotTitle" in data[0] && "percent" in data[0];
}
