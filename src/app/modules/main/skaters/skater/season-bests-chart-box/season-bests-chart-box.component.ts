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
import {SpeedSkatingResultsApiService} from '../../../../../shared/services/speed-skating-results-api.service';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexGrid,
  ApexStroke,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexYAxis,
  ChartComponent
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-season-bests-chart-box',
  templateUrl: './season-bests-chart-box.component.html',
  styleUrls: ['./season-bests-chart-box.component.scss']
})
export class SeasonBestsChartBoxComponent implements OnInit, OnChanges {
  @Input() skaterID;
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @HostBinding('class.hidden') hideThisComponent = false;
  public distance = 500;

  constructor(private speedSkatingResultsApiService: SpeedSkatingResultsApiService, private changeDetectorRefs: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.speedSkatingResultsApiService.getSeasonBestsFromSkater({
      skater: this.skaterID,
      distance: this.distance,
      start: 1900,
      end: 2999
    }).then((seasons) => {
      if (seasons.length === 0) {
        this.hideThisComponent = true;
      } else {
        this.hideThisComponent = false;
        const categories = [];
        const data = [];

        for (const season of seasons.reverse()) {
          categories.push(season.start);
          let time;
          if (season.records[0].time.includes('.')) {
            const split = season.records[0].time.split('.');
            time = Number(split[0]) * 60 + Number(split[1].replace(',', '.'));
          } else {
            time = Number(season.records[0].time.replace(',', '.'));
          }
          data.push(time);
        }


        this.chartOptions = {
          series: [
            {
              name: 'Time',
              data: data
            }
          ],
          chart: {
            height: 361,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            colors: ['#036672'],
            curve: 'straight'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'],
              opacity: 0.5
            }
          },
          xaxis: {
            categories: categories,
          },
          yaxis: {
            labels: {
              formatter: (val) => {
                let minutes = 0;
                while (val / 60 >= 1) {
                  minutes += 1;
                  val -= 60;
                }
                let seconds = String(val.toFixed(2)).replace('.', ',');
                if (seconds.length === 4) {
                  seconds = '0' + seconds;
                }
                return (minutes > 0 ? minutes + '.' : '') + seconds;
              }
            }
          }
        };
      }
    });
  }
}
