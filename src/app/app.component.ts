import { Component, ViewChild } from '@angular/core';
import { GetDetailsService } from './services/get-details.service';
import { CountryDetails } from './models/countryDetails';
import { RegionsComponent } from './regions/regions.component';
import { Store } from '@ngrx/store';
import { ctryDetailList } from './store.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is a test';
  regionCountrylist: any[] = ['Asia', 'Europe'];
  labelValue: string = 'region';
  isRegionSelected: boolean = false;
  isCountrySelected: boolean = false;
  @ViewChild('regionDropdown')
  regionDd!: RegionsComponent;

  @ViewChild('countryDetailDropdown')
  cntryDetailsDd!: RegionsComponent;

  countryDTList!: CountryDetails[];


  public countryDetails!: CountryDetails[];
  constructor(private getDetailService: GetDetailsService, private store: Store<{ cdkr: CountryDetails[] }>) {
  }

  public valueSelected(selectedObject: any) {
    let state: any;
    const selectedValue = selectedObject.target.value;
    const dropdownType = selectedObject.dropdownType;
    this.isRegionSelected = selectedValue && selectedValue !== '0';
    if (dropdownType === 'region' && selectedValue !== '0') {
      this.getDetailService.getCountryDetails(selectedValue).subscribe(res => {
        this.countryDetails = res;
        this.cntryDetailsDd.listValue = this.filterCountryNames(this.countryDetails || []);
        this.store.dispatch(ctryDetailList({ 'cdlist': this.countryDetails }));
        this.store.select(state => state).subscribe(data => {
        });
      });
    }
    this.isCountrySelected = dropdownType === 'country' && selectedValue !== '0' ? true : false;
    if (dropdownType === 'country' && selectedValue !== '0') {
      this.countryDTList = this.countryDetails?.filter(res => res.name === selectedValue);
    }

  }

  public filterCountryNames(countryDetails: CountryDetails[]) {
    let countryName: string[];
    countryName = countryDetails.map(res => { return res.name });
    return countryName;
  }
  public ngAfterViewChecked() {
    if (this.cntryDetailsDd) this.cntryDetailsDd.displayLabel = 'country';
    this.regionDd.displayLabel = 'region';
  }
}
