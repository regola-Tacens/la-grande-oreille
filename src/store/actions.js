export const SELECT_ERA = 'SELECT_ERA'; 
export const SELECT_GENRE = 'SELECT_GENRE'; 
export const GET_RADIOS = 'GET_RADIOS'; 

export const selectEra = (musicEraInputValue) => (
  {type:SELECT_ERA, musicEraInputValue: musicEraInputValue}
);
export const selectGenre = (musicGenreInputValue) => (
  {type:SELECT_GENRE, musicGenreInputValue: musicGenreInputValue}
);
export const getRadiosFromAPI = () => (
  {type: GET_RADIOS }
);

export const storeRadiosInState = ( radios ) => (
  { type : 'STORE_RADIOS', radios : radios }
);
