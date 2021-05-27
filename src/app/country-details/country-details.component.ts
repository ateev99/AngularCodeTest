import { Component, Input, OnInit } from '@angular/core';
import { CountryDetails } from '../models/countryDetails';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() countryDetailsList!: CountryDetails[];
  constructor() { }

  ngOnInit(): void {
  }

}
