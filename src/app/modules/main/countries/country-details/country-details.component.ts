import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Country} from '../../../../shared/models/Country';
import {countries} from '../../../../data/countries';

@Component({
    selector: 'app-country-details',
    templateUrl: './country-details.component.html',
    styleUrls: ['./country-details.component.scss'],
    standalone: false
})
export class CountryDetailsComponent implements OnInit {
  public country: Country;

  constructor(private route: ActivatedRoute) {
    const countryCode = this.route.snapshot.paramMap.get('code');
    this.country = countries.filter(c => c.code === countryCode)[0];
  }

  ngOnInit(): void {
  }

}
