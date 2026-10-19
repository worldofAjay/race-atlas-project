import { Component, computed, signal } from '@angular/core';
import { SAMPLE_RACES } from './features/race-discovery/data/sample-races';
import { RaceDistance } from './features/race-discovery/models/race.model';
import { filterRaces } from './features/race-discovery/utils/filter-races';
import { RaceFilters } from './features/race-discovery/components/race-filters/race-filters';
import { RaceList } from './features/race-discovery/components/race-list/race-list';

@Component({
  selector: 'app-root',
  imports: [RaceFilters, RaceList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly races = SAMPLE_RACES;
  readonly searchTerm = signal('');
  readonly selectedDistances = signal<ReadonlySet<RaceDistance>>(new Set());
  readonly visibleRaces = computed(() =>
    filterRaces(this.races, this.searchTerm(), this.selectedDistances()),
  );

  toggleDistance(distance: RaceDistance): void {
    const next = new Set(this.selectedDistances());
    next.has(distance) ? next.delete(distance) : next.add(distance);
    this.selectedDistances.set(next);
  }
}
