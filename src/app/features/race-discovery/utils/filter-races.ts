import { Race, RaceDistance } from '../models/race.model';

/** Returns races matching the search phrase and any selected distance. */
export function filterRaces(
  races: Race[],
  searchTerm: string,
  selectedDistances: ReadonlySet<RaceDistance>,
): Race[] {
  const normalizedTerm = searchTerm.trim().toLocaleLowerCase();

  return races.filter((race) => {
    const matchesSearch =
      !normalizedTerm ||
      race.name.toLocaleLowerCase().includes(normalizedTerm) ||
      race.city.toLocaleLowerCase().includes(normalizedTerm);
    const matchesDistance = !selectedDistances.size || selectedDistances.has(race.distance);

    return matchesSearch && matchesDistance;
  });
}
