import { SELECT_ERA, SELECT_GENRE,SELECT_COUNTRY, STORE_RADIOS } from './actions';

const initialState ={
  radios:[],
  selectorInput  : {
    musicGenre: '',
    musicEra:'',
  },
  isStreamLoading: false,
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
  case 'STORE_NEW_SOUND':
    return {
      ...state,
      radioStream : action.newSound,
      radioName : action.radioName
    };
  case 'SET_LOADING_ON':
    return {
      ...state,
      isStreamLoading : true
    };
  case 'SET_LOADING_OFF':
    return {
      ...state,
      isStreamLoading: false,
    };

  default:
    return state;
  }

};
export default reducer;