import { SELECT_ERA, SELECT_GENRE, STORE_RADIOS } from './actions';

const initialState ={
  radios:[
    // {
    //   'changeuuid': '',
    //   'stationuuid': '',
    //   'name': '',
    //   'url': '',
    //   'url_resolved': '',
    //   'homepage': '',
    //   'favicon': '',
    //   'tags': '',
    //   'country': '',
    //   'countrycode': '',
    //   'iso_3166_2': null,
    //   'state': '',
    //   'language': '',
    //   'languagecodes': '',
    //   'votes': 0,
    //   'lastchangetime': '',
    //   'lastchangetime_iso8601': '',
    //   'codec': '',
    //   'bitrate': 0,
    //   'hls': 0,
    //   'lastcheckok': 0,
    //   'lastchecktime': '',
    //   'lastchecktime_iso8601': '',
    //   'lastcheckoktime': '',
    //   'lastcheckoktime_iso8601': '',
    //   'lastlocalchecktime': '',
    //   'lastlocalchecktime_iso8601': '',
    //   'clicktimestamp': '',
    //   'clicktimestamp_iso8601': '',
    //   'clickcount': 0,
    //   'clicktrend': 0,
    //   'ssl_error': 0,
    //   'geo_lat': null,
    //   'geo_long': null,
    //   'has_extended_info': false
    // }
  ],
  selectorInput  : {
    musicGenre: '',
    musicEra:'',
  }
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
  case STORE_RADIOS:
    return {
      ...state,
      radios: action.radios,
    };
  case 'STORE_NEW_SOUND':
    return {
      ...state,
      radioStream : action.newSound
    };

  default:
    return state;
  }

};
export default reducer;