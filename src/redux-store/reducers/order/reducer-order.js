// 
// reducer för order
// exporteras som default 
// 
//   här finns "state" för en viss data som ska vara global
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';

// här sätts ett "start" värde för vad orderreducer ska innehålla första gången
const initState = {
  orders: [],
  order: {},
  loading: false,
  error: ''
}


//  action.type action.payload
export default (state = initState, action) => {

  switch (action.type) {

    case actionTypeName().orderAction.REQ:
      return {
        ...state,
        loading: true
      }

    case actionTypeName().orderAction.REQ_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }

    case actionTypeName().orderAction.CREATE_ORDER:
      return {
        ...state,
        loading: false
      }

    case actionTypeName().orderAction.GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false,
        error: ''
      }

    case actionTypeName().orderAction.GET_ORDER:
      return {
        ...state,
        order: action.payload,
        loading: false,
        error: ''
      }

    case actionTypeName().orderAction.UPPDATE_ORDER:
      let newOrderStatus = action.payload;
      console.log(newOrderStatus)
      try {
        // itemIndex = state.shoppingcart.findIndex(product => product.product._id === newproduct.product._id)
        // console.log(itemIndex)

        state.order[0].orderStatus = newOrderStatus


      } catch (error) {
        console.log(error)
      }

      console.log(state.order[0].orderStatus)
      return state
    // return {
    //   ...state
    //   // order:action.payload
    // }


    case actionTypeName().orderAction.REMOVE_ORDER:
      return {
        ...state
      }


    default:
      return state
  }

}







