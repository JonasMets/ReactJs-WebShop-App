// 
// reducer för shoppingcart
// exporteras som default 
// 
//   här finns "state" för en viss data som ska vara global
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';

import jwt from 'jsonwebtoken';
const secretkey = '2134hkjh123k4jhkjh1234';

// här sätts ett "start" värde för vad cartreducer ska innehålla första gången
const initState = {
  shoppingcart: [],
  totalCartQuantity: 0,
  totalCartAmount: 0,
  error: ''
}


export default (state = initState, action) => {
  let itemIndex

  switch (action.type) {

    case actionTypeName().cartAction.ADD_TO_CART:

      // let quantity = action.payload.quantity;
      // let newproduct = action.payload.product ;
      let newproduct = action.payload;
      // console.log(newproduct)

      try {
        itemIndex = state.shoppingcart.findIndex(product => product.product._id === newproduct.product._id)

        itemIndex < 0
          ? state.shoppingcart = [...state.shoppingcart, newproduct]
          : state.shoppingcart[itemIndex].quantity += 1

        state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
        state.totalCartAmount = getTotalAmount(state.shoppingcart)

        // local storage
        // localStorage.setItem('cart', JSON.stringify(state))
        // med kryptering
        localStorage.setItem('cart', jwt.sign(state, secretkey))

      }
      catch { }

      return state


    case actionTypeName().cartAction.REMOVE_FROM_CART:
      let id = action.payload.id;
      let removeAll = action.payload.removeAll;
      console.log(removeAll)
      try {
        // 
        itemIndex = state.shoppingcart.findIndex(product => product.product._id === id)
        // console.log(itemIndex)
        // om vi skickar med removeAll = true tar vi bort alla av den produkten
        if (removeAll) {
          state.shoppingcart = state.shoppingcart.filter(item => item.product._id !== id)
        } else {
          // hittar den produkt som ska minskas med 1
          state.shoppingcart[itemIndex].quantity === 1
            ? state.shoppingcart = state.shoppingcart.filter(item => item.product._id !== id)
            : state.shoppingcart[itemIndex].quantity -= 1
        }


        state.totalCartQuantity = getTotalQuantity(state.shoppingcart)
        state.totalCartAmount = getTotalAmount(state.shoppingcart)

        // local storage
        // localStorage.setItem('cart', JSON.stringify(state))
        // med kryptering
        localStorage.setItem('cart', jwt.sign(state, secretkey))

      }
      catch { }

      return state



    case actionTypeName().cartAction.CLEAR_CART:
      
      state.totalCartQuantity = 0
      state.totalCartAmount = 0
      state.shoppingcart = []
      localStorage.clear('cart')

      return state

    default:
      // hämta från localstorage
      let cart = jwt.decode(localStorage.getItem('cart'))

      if (cart) {
        return cart
      }
      return state

  }

}


// funktioner som används av reducer

const getTotalQuantity = (items) => {
  let totalQuantity = 0

  items.forEach(product => {
    totalQuantity += product.quantity
  });

  return totalQuantity
}

const getTotalAmount = (items) => {
  let totalAmount = 0

  items.forEach(item => {
    // console.log(item.product.price)
    totalAmount += item.product.price * item.quantity
  });

  return totalAmount
}


