import { Component, OnInit } from '@angular/core';
import {countries} from '../../../data/countries';
import {Country} from '../../../shared/models/Country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  public countries: Country[];

  constructor() {
    this.countries = countries;
  }

  ngOnInit(): void {
  }

}
