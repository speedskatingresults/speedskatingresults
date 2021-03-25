import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-skater',
  templateUrl: './skater.component.html',
  styleUrls: ['./skater.component.scss']
})
export class SkaterComponent implements OnInit, OnDestroy {
  private parametersObservable;
  public skaterId;
  public skaterGivenName;
  public skaterFamilyName;

  constructor(private route: ActivatedRoute) {
    this.parametersObservable = this.route.params.subscribe(params => {
      this.skaterId = params['id'];
      this.skaterGivenName = params['givenName'];
      this.skaterFamilyName = params['familyName'];
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.parametersObservable.unsubscribe();
  }

}
