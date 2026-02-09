import {Component, OnInit} from '@angular/core';
import {countries} from '../../../data/countries';
import {Country} from '../../../shared/models/Country';
import {Router} from '@angular/router';
import {UntypedFormControl} from '@angular/forms';

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.scss'],
    standalone: false
})
export class CountriesComponent implements OnInit {
  public countries: Country[];
  searchControl: UntypedFormControl;
  search = '';

  constructor(private router: Router) {
    this.countries = countries;
    this.searchControl = new UntypedFormControl();
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
