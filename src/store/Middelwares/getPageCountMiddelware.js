import axios from 'axios';
import {
  storeRadiosQuantity,
  GET_RADIOS
} from '../actions';

const getPageCountMiddelware = (store) => (next) => (action) => {

  if(action.type === GET_RADIOS) {
    const state = store.getState();
    const era = state.selectorInput.musicEra;
    const genre = state.selectorInput.musicGenre;
    const country = state.selectorInput.musicCountry;

    const configTotalPages = {
      method: 'get',
      baseURL: 'https://nl1.api.radio-browser.info/',
      url: `/json/stations/search?${country}&tagList=${genre},${era}&hidebroken=true&order=clickcount&reverse=true`,
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
