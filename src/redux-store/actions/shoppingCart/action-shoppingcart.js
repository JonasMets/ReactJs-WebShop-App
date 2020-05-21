// 
//  action-shoppingcart.js
//  actions för shoppingcart
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';



//  funktioner för att sätta state i reducer 
// 
//  ADD_TO_CART
export const addToCart = (productAndquantity) => {
// console.log(productAndquantity)

  return {
    type: actionTypeName().cartAction.ADD_TO_CART,
    payload:productAndquantity
  }
}

// REMOVE_FROM_CART
export const removeFromCart = (id, removeAll=false ) => {
  return {
      type: actionTypeName().cartAction.REMOVE_FROM_CART,
      payload:{
        id,
        removeAll
      } 
  }
}

// CLEAR_CART
export const clearCart = () => {
  return {
      type: actionTypeName().cartAction.CLEAR_CART,
      payload: false
  }
}







