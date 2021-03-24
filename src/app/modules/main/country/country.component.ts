import {Component, OnInit} from '@angular/core';
import {countries} from '../../../data/countries';
import {Country} from '../../../shared/models/Country';
import {Router} from '@angular/router';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  public countries: Country[];

  constructor(private router: Router) {
    this.countries = countries;
  }

  ngOnInit(): void {
  }

  goToCountry(country: Country): void {
    this.router.navigate(['country', country.code]);
  }
}
