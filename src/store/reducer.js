import { SELECT_ERA, SELECT_GENRE } from './actions';

const initialState ={
  selectorInput  : {
    musicGenre: '',
    musicEra:'',
  }
};

const reducer = (state = initialState, action) => {
  console.log('reducer action :', action.type);
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
  case 'GET_RADIOS':
    console.log('ok get radios');
    break;

  default:
    return state;
  }

};
export default reducer;