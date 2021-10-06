import axios from 'axios';

import { GET_RADIOS, storeRadiosInState } from '../actions';

const getRadiosMiddleware = (store) => (next) => (action) => {
  

  switch( action.type){
  case GET_RADIOS: {
    const state = store.getState();
    const era = state.selectorInput.musicEra;
    const genre = state.selectorInput.musicGenre;
    const country = state.selectorInput.musicCountry ? `&countrycode=${state.selectorInput.musicCountry}` : '';
    // const tag = `${era},${genre}`;
    // const offset = 1;
    console.log('country',country);

    const config = {
      method: 'get',
      baseURL:'https://nl1.api.radio-browser.info/',
      // baseURL:'https://de1.api.radio-browser.info',
      url:`/json/stations/search?limit=15${country}&tagList=${genre},${era}&hidebroken=true&order=clickcount&reverse=true`
    };
    axios(config)
      .then((response) => {
        console.log(response.data); 
        store.dispatch(storeRadiosInState(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }
    

  }
  
  // pour que l'action arrive au reducer, je dois utiliser next :
  next(action);
};

export default getRadiosMiddleware;
