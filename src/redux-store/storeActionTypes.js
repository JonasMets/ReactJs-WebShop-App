// 
//  i den här filen kan man bestämma namn på actions så att de inte kan ändras
//  man kan inte heller råka skriva fel då namnen är definierade på ett ställe
// customer
export const actionTypeName = () => {
  return {
    // customer: {
    //   ADD: 'ADD_CUSTOMER',
    //   UPPDATE: 'UPPDATE_CUSTOMER',
    //   GET: 'GET_CUSTOMER',
    //   DELETE: 'DELETE_CUSTOMER'
    // },
    userAction: {
      REQ:'REQ',
      REQ_ERROR:'REQ_ERROR',
      ADD_USER: 'ADD_USER',
      UPPDATE_USER: 'UPPDATE__USER',
      GET_USER: 'GET_USER',
      DELETE_USER: 'DELETE_USER'
    },
    products: {
      ADD_PRODUCT: 'ADD_PRODUCT',
      GET_PRODUCT: 'GET_PRODUCT',
      GET_PRODUCTS: 'GET_PRODUCTS',
      UPPDATE_PRODUCT: 'UPPDATE_PRODUCT',
      DELETE_PRODUCT: 'DELETE_PRODUCT'
    },
    counter: {
      INCREMENT: 'INCREMENT',
      DECREMENT: 'DECREMENT'
    },
    authenticate: {
      REQ:'REQ',
      REQ_ERROR:'REQ_ERROR',
      LOGIN: 'LOGIN',
      LOGOUT: 'LOGOUT',
      IS_AUTHENTICATED: 'IS_AUTHENTICATED'
    },
    cartAction:{
      ADD_TO_CART:'ADD_TO_CART',
      DELETE_FROM_CART:'DELETE_FROM_CART',
      INCREASE_QUANT_CART_ITEM:'INCREASE_QUANT_CART_ITEM',
      DECREASE_QUANT_CART_ITEM:'DECREASE_QUANT_CART_ITEM',
      REMOVE_FROM_CART:'REMOVE_FROM_CART',
      CLEAR_CART:'CLEAR_CART',
      SET_SHOPPINGCART:'SET_SHOPPINGCART',
      CHECKOUT_CART:'CHECKOUT_CART'
    },

    orderAction:{
      REQ:'REQ',
      REQ_ERROR:'REQ_ERROR',
      CREATE_ORDER:'CREATE_ORDER',
      REMOVE_ORDER:'REMOVE_ORDER',
      UPPDATE_ORDER:'UPPDATE_ORDER',
      GET_ORDERS:'GET_ORDERS',
      GET_ORDER:'GET_ORDER'

    }

  }
}