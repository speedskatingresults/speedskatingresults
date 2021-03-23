import {ChangeDetectionStrategy, Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {SkaterService} from '../../../shared/services/skating/skater.service';

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
  constructor(private skaterService: SkaterService) {
    this.recentCompDataSource = new MatTableDataSource();
    this.recentCompTableColumns = ['transactionId', 'date', 'name', 'amount', 'status'];

  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }

  ngOnInit(): void {

    this.skaterService.find({
      givenName: 'mees',
      familyName: 'egberts'
    });

  }
}
