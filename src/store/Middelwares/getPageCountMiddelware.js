import axios from 'axios';
import {
  storeRadiosQuantity,
  GET_RADIOS,
  GET_RADIOS_BY_TAG,
  GET_RADIOS_BY_NAME
  // GET_RADIOS_BY_TAG
} from '../actions';

const getPageCountMiddelware = (store) => (next) => (action) => {

  if(action.type === GET_RADIOS || action.type === GET_RADIOS_BY_TAG || action.type === GET_RADIOS_BY_NAME ) {
    const state = store.getState();
    const era = state.selectorInput.musicEra;
    const genre = state.selectorInput.musicGenre;
    const country = state.selectorInput.musicCountry;
    const name = state.radioSearchName ? `&name=${state.radioSearchName}` : '';

    const configTotalPages = {
      method: 'get',
      baseURL: 'https://nl1.api.radio-browser.info/',
      url: `/json/stations/search?${country}${name}&tagList=${genre},${era}&hidebroken=true&order=clickcount&reverse=true`,
    };
    axios(configTotalPages)
      .then((response) => {
        store.dispatch(storeRadiosQuantity(response.data.length));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  next(action);
};

export default getPageCountMiddelware;
