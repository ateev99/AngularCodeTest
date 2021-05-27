import { Action, createReducer, on } from '@ngrx/store';
import * as appActions from './store.actions';


export interface State {
  name: string,
  alpha2Code: string;
  alpha3Code: string;
  altSpellings: string[];
  area: string;
  borders: string[];
  callingCodes: string[];
  capital: string;
  cioc: string;
  // currency: string;
  demonym: string;
  flag: string;
  gini: number;
  // language: string;
  latlng: string;
  nativeName: string;
  numericCode: string;
  population: number;
  // regionalBlocs: string;
  subregion: string;
  timezones: string[];
  topLevelDomain: string[];
  // translations: string;
};

export const initialState: State = {
  name: '',
  alpha2Code: '',
  alpha3Code: '',
  altSpellings: [],
  area: '',
  borders: [],
  callingCodes: [],
  capital: '',
  cioc: '',
  // currency:'',
  demonym: '',
  flag: '',
  gini: 0,
  // language:'',
  latlng: '',
  nativeName: '',
  numericCode: '',
  population: 0,
  // regionalBlocs:'',
  subregion: '',
  timezones: [],
  topLevelDomain: [],
  // translations:'',
};

const addCountryDetailListReducer = createReducer(initialState,
  on(appActions.ctryDetailList, state => ({ ...state })));

export function appReducer(state: State | undefined, action: Action) {
  return addCountryDetailListReducer(state, action);
}