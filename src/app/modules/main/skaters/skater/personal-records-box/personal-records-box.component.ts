import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SpeedSkatingResultsApiService} from '../../../../../shared/services/speed-skating-results-api.service';

@Component({
  selector: 'app-personal-records-box',
  templateUrl: './personal-records-box.component.html',
  styleUrls: ['./personal-records-box.component.scss']
})
export class PersonalRecordsBoxComponent implements OnInit, OnChanges {
  @Input() skaterID;
  personalRecordsDataSource: MatTableDataSource<any>;
  personalRecordsTableColumns: string[];

  @ViewChild('personalRecordsTable', {read: MatSort})
  personalRecordsTableMatSort: MatSort;

  @HostBinding('class.hidden') hideThisComponent = false;

  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.personalRecordsTableColumns = ['distance', 'time', 'date', 'location'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.speedSkatingResultsApiService.getPersonalRecordsFromSkater({
      skater: this.skaterID
    }).then((times) => {
      if (times.length === 0) {
        this.hideThisComponent = true;
      } else {
        this.hideThisComponent = false;
        this.personalRecordsDataSource = new MatTableDataSource(times);
        this.changeDetectorRefs.detectChanges();
      }
    });
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
