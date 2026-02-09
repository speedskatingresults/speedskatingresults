import {
  AfterViewInit,
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
import {MatPaginator} from '@angular/material/paginator';

@Component({
    selector: 'app-personal-results-box',
    templateUrl: './personal-results-box.component.html',
    styleUrls: ['./personal-results-box.component.scss'],
    standalone: false
})
export class PersonalResultsBoxComponent implements OnInit, OnChanges {
  @Input() skaterID;
  personalResultsDataSource: MatTableDataSource<any>;
  personalResultsTableColumns: string[];

  @ViewChild('personalResultsTable', {read: MatSort})
  personalResultsTableMatSort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @HostBinding('class.hidden') hideThisComponent = false;

  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.personalResultsTableColumns = ['distance', 'time', 'date', 'location', 'competition'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.speedSkatingResultsApiService.getResultsFromSkater({skater: this.skaterID}).then((results) => {
      if (results.length === 0) {
        this.hideThisComponent = true;
      } else {
        this.hideThisComponent = false;
        this.personalResultsDataSource = new MatTableDataSource(results);
        this.personalResultsDataSource.paginator = this.paginator;
        this.changeDetectorRefs.detectChanges();
      }
    });
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

}
