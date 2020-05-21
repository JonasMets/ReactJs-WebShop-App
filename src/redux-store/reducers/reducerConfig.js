// 
// 
//  reducerConfig.js
// 
// hämtar combineReducers från redux så att man kan använda flera reducers
import {combineReducers} from 'redux';

//  hämtar reducerAuthenticate som innehåller store state för autentisering
// import reducerAuthenticate from './reducerAuthenticate';

// hämtar reducer-product
import reducerProducts from './product/reducer-product';
import reducerShoppingCart from './shoppingCart/reducer-shoppingcart';
import reducerOrders from './order/reducer-order';
import reducerUsers from './user/reducer-user';
import reducerAuthenticate from './authenticate/reducer-authenticate';

// exporterar ut combineReducers som innehåller de reducers som valts
// state får det namn som exporteras här tex state.customers state.products
export default combineReducers(
  {
    // reducerAuthenticate
    reducerProducts,
    reducerShoppingCart,
    reducerOrders,
    reducerUsers,
    reducerAuthenticate
  }
)