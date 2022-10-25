// used in ../redux/reducer.js
export const initialState = {
  allCountries: [],
  countries: [],
  country: {},
  filters: {},
  continents: [],
};

// used in ../containers/ListFilters.js
export const initialFilters = {
  page: 0,
  text: '',
  sortAsc: false, // true: sort ascending, false: sort descending
  typeAlpha: false, // true: alphabetical, false: population
  continent: '',
  activity: {},
}

// used in ../containers/ActivityForm.js
export const initialFormValues = {
  name: '',
  difficulty: 0,
  duration: 0,
  season: '',
  countries: [],
}