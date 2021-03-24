import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SpeedSkatingResultsApiService} from '../../../../shared/services/speed-skating-results-api.service';

@Component({
  selector: 'app-world-records-box',
  templateUrl: './world-records-box.component.html',
})
export class WorldRecordsBoxComponent implements OnInit {
  @Input() gender = 'male';
  worldRecordsDataSource: MatTableDataSource<any>;
  worldRecordsTableColumns: string[];

  @ViewChild('worldRecordsTable', {read: MatSort})
  worldRecordsTableMatSort: MatSort;

  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.speedSkatingResultsApiService.getWorldRecords({
      gender: this.gender === 'male' ? 'm' : 'f',
      age: 'sr',
    }).then((records) => {
      this.worldRecordsDataSource = new MatTableDataSource(records);
      this.changeDetectorRefs.detectChanges();
    });
    this.worldRecordsTableColumns = ['distance', 'time', 'skater', 'country', 'date', 'location'];
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
