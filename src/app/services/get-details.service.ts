import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CountryDetails } from '../models/countryDetails';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  private serviceRootUrl = 'https://restcountries.eu/rest/v2/region/';
  public responseCache = new Map();
  constructor(private httpClient: HttpClient) { }
  
  public getCountryDetails(region:string): Observable<CountryDetails[]> {
    const completeServiceURL = this.serviceRootUrl+region;
    const countryDetailsFromCache = this.responseCache.get(completeServiceURL);
    if (countryDetailsFromCache) {
      return of(countryDetailsFromCache);
    }
    const response = this.httpClient.get<CountryDetails[]>(completeServiceURL);
    response.subscribe(details => this.responseCache.set(completeServiceURL, details));
    return response;
  }
}
