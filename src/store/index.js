import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import getRadiosMiddleware from './Middelwares/getRadiosMiddleware';
import reducer from './reducer';

const store = createStore(
  reducer,
  // permet d'avoir les devtools (c'est aussi un middleware en fait)
  composeWithDevTools(
    // on donne nos middlewares a nous avec applyMiddleware
    applyMiddleware(getRadiosMiddleware),
  ),
);

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;