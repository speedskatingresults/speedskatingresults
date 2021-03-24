import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  public countryCode: string;

  constructor(private route: ActivatedRoute) {
    this.countryCode = this.route.snapshot.paramMap.get('code');
  }

  ngOnInit(): void {
  }

}
