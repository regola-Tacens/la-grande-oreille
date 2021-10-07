import { SELECT_ERA,
  SELECT_GENRE,
  SELECT_COUNTRY,
  STORE_RADIOS,
  STORE_NEW_SOUND,
  CHANGE_PAGE,
  RESET_PAGE_SETTINGS,
} from './actions';

const initialState ={
  radios:[],
  selectorInput  : {
    musicGenre: '',
    musicEra:'',
  },
  pageOffset: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type){

  case SELECT_ERA:
    return {
      ...state,
      selectorInput: {
        ...state.selectorInput,
        musicEra: action.musicEraInputValue,
      }
    };
  case SELECT_GENRE:
    return {
      ...state,
      selectorInput: {
        ...state.selectorInput,
        musicGenre: action.musicGenreInputValue,
      }
    };
  case SELECT_COUNTRY:
    return {
      ...state,
      selectorInput: {
        ...state.selectorInput,
        musicCountry: action.musicCountryInputValue
      }
    };
  case STORE_RADIOS:
    return {
      ...state,
      radios: action.radios,
    };
  case STORE_NEW_SOUND:
    return {
      ...state,
      radioStream : action.newSound,
      radioName : action.radioName
    };
  case CHANGE_PAGE:
    return {
      ...state,
      pageOffset: action.newOffset
    };
  case RESET_PAGE_SETTINGS:
    return {
      ...state,
      pageOffset: 0
    };

  default:
    return state;
  }

};
export default reducer;