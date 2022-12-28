// used in ../redux/reducer.js
export const INITIAL_STATE = {
  allCountries: [],
  countries: [],
  country: {},
  filters: {},
  continents: [],
  error: '',
};

// used in ../containers/ListFilters.js
export const INITIAL_FILTERS = {
  page: 0,
  text: '',
  sortAsc: false, // true: sort ascending, false: sort descending
  typeAlpha: false, // true: alphabetical, false: population
  continent: '',
  activity: {},
}

// used in ../containers/ActivityForm.js
export const INITIAL_FORM_VALUES = {
  name: '',
  difficulty: 0,
  duration: 0,
  season: '',
  countries: [],
}