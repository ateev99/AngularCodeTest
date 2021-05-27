import { createAction, props } from '@ngrx/store';
import { CountryDetails } from './models/countryDetails';

export const ctryDetailList = createAction('[CountryDetail List] AddCountryDetailsList', props<{cdlist: CountryDetails[]}>());

