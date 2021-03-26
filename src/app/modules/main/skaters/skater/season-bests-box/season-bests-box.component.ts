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
  selector: 'app-season-bests-box',
  templateUrl: './season-bests-box.component.html',
  styleUrls: ['./season-bests-box.component.scss']
})
export class SeasonBestsBoxComponent implements OnInit, OnChanges {
  @Input() skaterID;
  seasonBestsDataSource: MatTableDataSource<any>;
  seasonBestsTableColumns: string[];

  @ViewChild('seasonBestsTable', {read: MatSort})
  seasonBestsTableMatSort: MatSort;

  @HostBinding('class.hidden') hideThisComponent = false;

  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.seasonBestsTableColumns = ['distance', 'time', 'date', 'location'];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.speedSkatingResultsApiService.getSeasonBestsFromSkater({
      skater: this.skaterID
    }).then((seasons) => {
      if (seasons.length === 0) {
        this.hideThisComponent = true;
      } else {
        this.hideThisComponent = false;
        this.seasonBestsDataSource = new MatTableDataSource(seasons[0].records);
        this.changeDetectorRefs.detectChanges();
      }
    });
  }

  trackByFn(index: number, item: any): any {
    return item.id || index;
  }
}
