import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-next-season-countdown',
    templateUrl: './next-season-countdown.component.html',
    standalone: false
})
export class NextSeasonCountdownComponent implements OnInit {
  public days: number;

  constructor() {
    const oneDay = 24 * 60 * 60 * 1000;
    const newSeasonDate = new Date(2021, 8, 25);
    if (newSeasonDate < new Date()) {
      this.days = 0;
    } else {
      this.days = Math.round(Math.abs((new Date().getTime() - newSeasonDate.getTime()) / oneDay) + 1);
    }
  }

  ngOnInit(): void {
  }

}
