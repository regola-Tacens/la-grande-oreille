export const SELECT_ERA = 'SELECT_ERA'; 
export const SELECT_GENRE = 'SELECT_GENRE'; 
export const SELECT_COUNTRY = 'SELECT_COUNTRY'; 
export const GET_RADIOS = 'GET_RADIOS'; 
export const STORE_RADIOS = 'STORE_RADIOS'; 
export const STORE_NEW_SOUND = 'STORE_NEW_SOUND'; 
export const CHANGE_PAGE = 'CHANGE_PAGE'; 
export const RESET_PAGE_SETTINGS = 'RESET_PAGE_SETTINGS';
export const GET_RADIOS_BY_TAG =  'GET_RADIOS_BY_TAG';

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
export const getRadiosByTagFromAPI = (tag) => (
  { type: GET_RADIOS_BY_TAG, tag : tag}
);
export const storeRadiosInState = ( radios ) => (
  { type : STORE_RADIOS, radios : radios }
);
export const storeRadiosQuantity = ( radiosQuantity ) => (
  { type: 'STORE_RADIOS_QUANTITY', radiosQuantity: radiosQuantity}
);

export const storeNewSound = ( sound, radioName ) => (
  { type : STORE_NEW_SOUND, newSound : sound, radioName : radioName }
);

export const changePage = (newOffset) => (
  { type : CHANGE_PAGE, newOffset : newOffset}
);
export const resetPageSetting = () => (
  { type: RESET_PAGE_SETTINGS}
);

export const StartEqualizer = () => (
  { type: 'START_EQUALIZER'}
);
export const stopEqualizer = () => (
  { type: 'STOP_EQUALIZER' }
);

export const startLoader = () => (
  { type : 'START_LOADER'}
);
export const stopLoader = () => (
  { type : 'STOP_LOADER'}
);

