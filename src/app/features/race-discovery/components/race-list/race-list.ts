import { Component, Input } from '@angular/core';
import { Race } from '../../models/race.model';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.html',
  styleUrl: './race-list.css',
})
export class RaceList {
  @Input({ required: true }) races: Race[] = [];
}
