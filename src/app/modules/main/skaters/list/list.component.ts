import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Skater} from '../../../../shared/models/skating-data/Skater';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'skaters-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnChanges {

  @Input() skaters: Skater[];

  skatersDataSource: MatTableDataSource<any>;
  skatersRecordsTableColumns: string[];

  @ViewChild('skatersTable', {read: MatSort})
  skatersTableMatSort: MatSort;

  constructor(private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.skatersRecordsTableColumns = ['givenName', 'familyName', 'category', 'gender', 'country'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.skatersDataSource = new MatTableDataSource(this.skaters);
    this.changeDetectorRefs.detectChanges();
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
