// 
//   storeConfig.js
// 
//  här startar redux store med att samla ihop "data" från olika moduler
// 
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
// const applyMiddleware = redux.applyMiddleware
// const thunk = ThunkMiddleware();

// här hämtar vi in våra "reducers" så att de kan läggas till i createStore
import combinedReducers from './reducers/reducerConfig';

// här skapas store funktionen med de reducers som valts i combinedReducers
// vi använder också thunk som middleware och compose för att kunna använda devtools
export const store = createStore(
  combinedReducers,
  compose( applyMiddleware(thunk ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  
  
)


// export const store = createStore(
//   combinedReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )