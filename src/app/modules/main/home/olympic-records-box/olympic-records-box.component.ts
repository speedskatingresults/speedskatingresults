import {ChangeDetectorRef, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SpeedSkatingResultsApiService} from '../../../../shared/services/speed-skating-results-api.service';

@Component({
  selector: 'app-olympic-records-box',
  templateUrl: './olympic-records-box.component.html'
})
export class OlympicRecordsBoxComponent implements OnInit {
  @Input() gender = 'male';
  olympicRecordsDataSource: MatTableDataSource<any>;
  olympicRecordsTableColumns: string[];

  @ViewChild('olympicRecordsTable', {read: MatSort})
  olympicRecordsTableMatSort: MatSort;

  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.speedSkatingResultsApiService.getOlympicRecords({
      gender: this.gender === 'male' ? 'm' : 'f',
    }).then((records) => {
      this.olympicRecordsDataSource = new MatTableDataSource(records);
      // this.changeDetectorRefs.detectChanges();
    });
    this.olympicRecordsTableColumns = ['distance', 'time', 'skater', 'country', 'date', 'location'];
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
