import {ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SpeedSkatingResultsApiService} from '../../../shared/services/speed-skating-results-api.service';

@Component({
  selector: 'example',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  recentCompDataSource: MatTableDataSource<any>;
  recentCompTableColumns: string[];

  @ViewChild('recentCompTable', {read: MatSort})
  recentCompTableMatSort: MatSort;

  /**
   * Constructor
   */
  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService) {
    this.recentCompDataSource = new MatTableDataSource();
    this.recentCompTableColumns = ['transactionId', 'date', 'name', 'amount', 'status'];

  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  ngOnInit(): void {

    this.speedSkatingResultsApiService.getSkater({
      givenName: 'mees',
      familyName: 'egberts'
    }).then((skaters) => {
      console.log(skaters);
    });

    this.speedSkatingResultsApiService.getCompetitionsFromSkater({
      skater: 34772,
      season: 2019
    }).then((competitions) => {
      console.log(competitions);
    });

    this.speedSkatingResultsApiService.getResultsFromSkater({
      skater: 34772,
      distance: 500,
    }).then((results) => {
      console.log(results);
    });

    this.speedSkatingResultsApiService.getPersonalRecordsFromSkater({
      skater: 34772,
    }).then((times) => {
      console.log(times);
    });

    this.speedSkatingResultsApiService.getSeasonBestsFromSkater({
      skater: 34772,
      start: 1900,
      end: 2100
    }).then((results) => {
      console.log(results);
    });

    // this.speedSkatingResultsApiService.getSeedTimesFromSkater({
    //   skater: 11433,
    //   start: '2011-01-01',
    //   end: '2012-12-31'
    // }).then((results) => {
    //   console.log(results);
    // });

    this.speedSkatingResultsApiService.getNationalRecords({
      country: 'NED',
      distance: 500,
      gender: 'm',
      age: 'sr',
    }).then((records) => {
      console.log(records);
    });

    this.speedSkatingResultsApiService.getOlympicRecords({
      distance: 500,
      gender: 'm',
    }).then((records) => {
      console.log(records);
    });

    this.speedSkatingResultsApiService.getWorldRecords({
      distance: 500,
      gender: 'm',
      age: 'sr',
    }).then((records) => {
      console.log(records);
    });

  }
}
