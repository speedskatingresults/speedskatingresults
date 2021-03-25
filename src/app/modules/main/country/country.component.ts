import {Component, OnInit} from '@angular/core';
import {countries} from '../../../data/countries';
import {Country} from '../../../shared/models/Country';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  public countries: Country[];
  searchControl: FormControl;
  search = '';

  constructor(private router: Router) {
    this.countries = countries;
    this.searchControl = new FormControl();
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((value) => {
      this.search = value.toLowerCase();
    });
  }

  countryInSearch(country: Country): boolean {
    if (country.name.toLowerCase().indexOf(this.search) !== -1) {
      return true;
    }
    return country.code.toLowerCase().indexOf(this.search) !== -1;
  }
}
