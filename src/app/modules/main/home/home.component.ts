import {ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SpeedSkatingResultsApiService} from '../../../shared/services/speed-skating-results-api.service';

@Component({
    selector: 'example',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class HomeComponent implements OnInit {
  recentCompDataSource: MatTableDataSource<any>;
  recentCompTableColumns: string[];

  @ViewChild('recentCompTable', {read: MatSort})
  recentCompTableMatSort: MatSort;

  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService) {
    this.recentCompDataSource = new MatTableDataSource();
    this.recentCompTableColumns = ['transactionId', 'date', 'name', 'amount', 'status'];
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  ngOnInit(): void {
  }
}
