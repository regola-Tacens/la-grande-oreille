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
  radiosQuantity:0,
  selectorInput  : {
    musicGenre: '',
    musicEra:'',
  },
  pageOffset: 0,
  startEqualizer:false,
  isLoading:false,
  radioSearchName:'',
  loadError:false,
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
  case 'STORE_RADIOS_QUANTITY':
    return {
      ...state, 
      radiosQuantity: action.radiosQuantity
    };
  case STORE_NEW_SOUND:
    return {
      ...state,
      radioStream : action.newSound,
      radioName : action.radioName,
      startEqualizer: true
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
  case 'START_EQUALIZER':
    return{
      ...state,
      startEqualizer:true
    };
  case 'STOP_EQUALIZER':
    return {
      ...state,
      startEqualizer: false
    };
  case 'START_LOADER':
    return {
      ...state,
      isLoading: true,
    };
  case 'STOP_LOADER':
    return {
      ...state,
      isLoading: false,
    };
  case 'GET_RADIOS_BY_TAG':
    return {
      ...state,
      selectorInput: {
        ...state.selectorInput,
        musicGenre: action.tag,
        musicEra:'',
        musicCountry: '',
      }
    };
  case 'CHANGE_SEARCH_BY_NAME_INPUT':
    return {
      ...state, 
      radioSearchName: action.nameInput,
      selectorInput: {
        ...state.selectorInput,
        musicGenre: '',
        musicEra:'',
        musicCountry: '',
      },
      pageOffset: 0
    };

  case 'SET_LOADERROR_TRUE' :
    return {
      ...state,
      loadError:true,
    };
  case 'SET_LOADERROR_FALSE' :
    return {
      ...state,
      loadError:false,
    };
  default:
    return state;
  }

};
export default reducer;