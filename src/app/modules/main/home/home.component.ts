import {ChangeDetectionStrategy, Component, ViewChild, ViewEncapsulation} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'example',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  recentCompDataSource: MatTableDataSource<any>;
  recentCompTableColumns: string[];

  @ViewChild('recentCompTable', {read: MatSort})
  recentCompTableMatSort: MatSort;

  /**
   * Constructor
   */
  constructor() {
    this.recentCompDataSource = new MatTableDataSource();
    this.recentCompTableColumns = ['transactionId', 'date', 'name', 'amount', 'status'];
        
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
