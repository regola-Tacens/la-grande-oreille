export const SELECT_ERA = 'SELECT_ERA'; 
export const SELECT_GENRE = 'SELECT_GENRE'; 
export const SELECT_COUNTRY = 'SELECT_COUNTRY'; 
export const GET_RADIOS = 'GET_RADIOS'; 
export const STORE_RADIOS = 'STORE_RADIOS'; 

export const selectEra = (musicEraInputValue) => (
  {type:SELECT_ERA, musicEraInputValue: musicEraInputValue}
);
export const selectGenre = (musicGenreInputValue) => (
  {type:SELECT_GENRE, musicGenreInputValue: musicGenreInputValue}
);
export const selectCountry = (musicCountryInputValue) => (
  {type:SELECT_COUNTRY, musicCountryInputValue: musicCountryInputValue}
);
export const getRadiosFromAPI = () => (
  {type: GET_RADIOS }
);
export const storeRadiosInState = ( radios ) => (
  { type : 'STORE_RADIOS', radios : radios }
);

export const storeNewSound = ( sound, radioName ) => (
  { type : 'STORE_NEW_SOUND', newSound : sound, radioName : radioName }
);

export const setStreamLoaderOn = () => (
  { type : 'SET_LOADING_ON'}
);
// export const setStreamLoaderOff = () => (
//   { type : 'SET_LOADING_OFF'}
// );
