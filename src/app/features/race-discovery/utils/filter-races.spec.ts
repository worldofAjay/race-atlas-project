import { SAMPLE_RACES } from '../data/sample-races';
import { RaceDistance } from '../models/race.model';
import { filterRaces } from './filter-races';

describe('filterRaces', () => {
  it('finds races by name without regard to casing', () => { expect(filterRaces(SAMPLE_RACES, 'HARBOR', new Set<RaceDistance>()).map((race) => race.name)).toEqual(['Harbor Lights Marathon']); });
  it('finds races by city', () => { expect(filterRaces(SAMPLE_RACES, 'golden bay', new Set<RaceDistance>()).map((race) => race.name)).toEqual(['Sunrise 5K']); });
  it('shows only selected distances', () => { expect(filterRaces(SAMPLE_RACES, '', new Set<RaceDistance>(['10K', '5K'])).map((race) => race.distance)).toEqual(['10K', '5K']); });
  it('combines the search term and distance filter', () => { expect(filterRaces(SAMPLE_RACES, 'marathon', new Set<RaceDistance>(['Marathon'])).map((race) => race.name)).toEqual(['Harbor Lights Marathon', 'Old Town Marathon']); });
});
