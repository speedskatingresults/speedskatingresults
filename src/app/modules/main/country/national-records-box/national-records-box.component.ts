import {ChangeDetectorRef, Component, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SpeedSkatingResultsApiService} from '../../../../shared/services/speed-skating-results-api.service';

@Component({
  selector: 'app-national-records-box',
  templateUrl: './national-records-box.component.html',
})
export class NationalRecordsBoxComponent implements OnInit {
  @Input() gender = 'male';
  @Input() country = 'NED';
  nationalRecordsDataSource: MatTableDataSource<any>;
  nationalRecordsTableColumns: string[];

  @ViewChild('nationalRecordsTable', {read: MatSort})
  nationalRecordsTableMatSort: MatSort;

  @HostBinding('class.hidden') hideThisComponent = false;

  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.speedSkatingResultsApiService.getNationalRecords({
      gender: this.gender === 'male' ? 'm' : 'f',
      country: this.country,
      age: 'sr'
    }).then((records) => {
      if (records.length === 0) {
        this.hideThisComponent = true;
      } else {
        this.nationalRecordsDataSource = new MatTableDataSource(records);
        this.changeDetectorRefs.detectChanges();
      }
    });
    this.nationalRecordsTableColumns = ['distance', 'time', 'skater', 'date', 'location'];
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
