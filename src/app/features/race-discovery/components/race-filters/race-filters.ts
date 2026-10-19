import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RACE_DISTANCES, RaceDistance } from '../../models/race.model';

@Component({
  selector: 'app-race-filters',
  templateUrl: './race-filters.html',
  styleUrl: './race-filters.css',
})
export class RaceFilters {
  readonly distances = RACE_DISTANCES;

  @Input({ required: true }) searchTerm = '';
  @Input({ required: true }) selectedDistances: ReadonlySet<RaceDistance> = new Set();

  @Output() readonly searchTermChange = new EventEmitter<string>();
  @Output() readonly distanceToggled = new EventEmitter<RaceDistance>();

  onSearch(event: Event): void {
    this.searchTermChange.emit((event.target as HTMLInputElement).value);
  }
}
