import axios from 'axios';

import {
  GET_RADIOS,
  GET_RADIOS_BY_TAG,
  GET_RADIOS_BY_NAME,
  storeRadiosInState,
} from '../actions';

const getRadiosMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
  
  case GET_RADIOS: {
    const state = store.getState();
    const era = state.selectorInput.musicEra;
    const genre = state.selectorInput.musicGenre;
    const country = state.selectorInput.musicCountry
      ? `&countrycode=${state.selectorInput.musicCountry}`
      : '';
    const offset = `offset=${state.pageOffset}&`;
    const name = state.radioSearchName ? `&name=${state.radioSearchName}` : '';

    const config = {
      method: 'get',
      baseURL: 'https://nl1.api.radio-browser.info/',
      url: `/json/stations/search?${offset}limit=8${country}${name}&tagList=${genre},${era}&hidebroken=true&order=clickcount&reverse=true`,
    };
    axios(config)
      .then((response) => {
        store.dispatch(storeRadiosInState(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
    break;

  case GET_RADIOS_BY_TAG :{
    const state = store.getState();
    const offset = `offset=${state.pageOffset}&`;
    const config = {
      method: 'get',
      baseURL: 'https://nl1.api.radio-browser.info/',
      url: `/json/stations/search?${offset}limit=8&tagList=${action.tag}&hidebroken=true&order=clickcount&reverse=true`,
    };
    axios(config)
      .then((response) => {
        store.dispatch(storeRadiosInState(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
    break;

  case GET_RADIOS_BY_NAME:{
    console.log('ok radio search by name');
    const state = store.getState();
    const config = {
      method: 'get',
      baseURL: 'https://nl1.api.radio-browser.info/',
      url: `/json/stations/search?limit=8&name=${state.radioSearchName}&hidebroken=true&order=clickcount&reverse=true`,
    };
    axios(config)
      .then((response) => {
        store.dispatch(storeRadiosInState(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  }
  next(action);
};

export default getRadiosMiddleware;
