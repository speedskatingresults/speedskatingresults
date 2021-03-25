import {Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';
import {Skater} from '../../../shared/models/skating-data/Skater';
import {FormBuilder} from '@angular/forms';
import {SpeedSkatingResultsApiService} from '../../../shared/services/speed-skating-results-api.service';
import {countries} from 'app/data/countries';

@Component({
  selector: 'app-skaters',
  templateUrl: './skaters.component.html',
  styleUrls: ['./skaters.component.scss'],
})
export class SkatersComponent implements OnInit {

  public country: string;
  public gender: string;
  public givenName: string;
  public familyName: string;
  public skaters: Skater[] = [];
  public countries = countries;
  public searchForm = this.formBuilder.group({});
  public hasSearched = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private speedSkatingResultsApiService: SpeedSkatingResultsApiService) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      country: this.country ?? '',
      gender: this.gender ?? '',
      givenName: this.givenName ?? '',
      familyName: this.familyName ?? '',
    });
  }

  submit(): void {
    this.speedSkatingResultsApiService.getSkaters({
      givenName: this.searchForm.value.givenName,
      familyName: this.searchForm.value.familyName,
      country: this.searchForm.value.country,
      gender: this.searchForm.value.gender,
    }).then((skaters) => {
      this.skaters = skaters;
      this.hasSearched = true;
    });
  }
}
