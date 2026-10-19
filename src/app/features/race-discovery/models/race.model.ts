export const RACE_DISTANCES = ['Marathon', 'Half Marathon', '10K', '5K'] as const;

export type RaceDistance = (typeof RACE_DISTANCES)[number];

export interface Race {
  id: number;
  name: string;
  city: string;
  country: string;
  distance: RaceDistance;
  date: string;
  month: string;
  day: string;
}
