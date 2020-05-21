// 
//  action-order.js
//  actions för order som kund har lagt
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';

// importera axios
import axios from '../../../helpers/helperAxios';

//  funktioner för att sätta state i reducer 
// 

//
export const req = () => {
  return {
    type: actionTypeName().orderAction.REQ
  }
}

export const reqError = (error)=>{
  return{
    type: actionTypeName().orderAction.REQ_ERROR,
    payload: error
  }
}




//  CREATE_ORDER
// 
// här ska vi anropa api och skicka vidare newOrder
// om allt gått bra ska vi skicka in data till reducer och sedan 
// skicka response till CheckOut.js componenten om status
// 
export const createNewOrder = (newOrder) => {
  // console.log(newOrder)

  // här innanför ligger async anrop
   return dispatch =>{
      if (newOrder) {
        // sätter state loading till true
        dispatch(req())
        // gå till api och skicka newOrder
        // om det gick bra  
        return {status:'201', msg:'Order created'}
        // annars dispatcha error
        //  dispatch(reqError())
      }
   }
  }


  // hämta alla order för kund från databas
export const getOrders = (customerId) => {
  // gå till databas och hämta alla order med userid
  // console.log('getOrders')


  return function (dispatch) {

    const headers = {
      'Content-Type': 'application/json'
      ,
      'Authorization': 'bearer ' + sessionStorage.getItem('token') 
    }

    dispatch(req())

    axios.get('/orders/customer/' + customerId , {headers})
      .then(response => {
        // response.data
        const orders = response.data.data
        dispatch(updateGetOrders(orders))
      })
      .catch(error => {
        // error.message
        console.log(error.message)
        dispatch(reqError(error.message))
      })
  }
}

export const updateGetOrders = (orders)=>{
  return {
    type: actionTypeName().orderAction.GET_ORDERS,
    payload: orders
  }
}
// slut hämta alla order för kund från databas





//******** hämta en order från databas ***************
  export const getOrder = (Id) => {
    // gå till databas och hämta en order med id
    // console.log('getOrder by id'+ Id)
  
  
    return function (dispatch) {
  
      const headers = {
        'Content-Type': 'application/json'
        ,
        'Authorization': 'bearer ' + sessionStorage.getItem('token') 
      }
  
      dispatch(req())
  
      axios.get(`/orders/${Id}` , {headers})
        .then(response => {
          // response.data
          const orderres = response.data
          // console.log(orderres[0])

          dispatch(updateGetOrder(orderres))
        })
        .catch(error => {
          // error.message
          console.log(error.message)
          dispatch(reqError(error.message))
        })
    }
  }
  
  export const updateGetOrder = (orderres)=>{
    return {
      type: actionTypeName().orderAction.GET_ORDER,
      payload: orderres
    }
  }
  // slut hämta alla produkter från databas


  export const updateOrderStatus = (newOrderStatus) => {
    // console.log(newOrderStatus)
  
    return {
      type: actionTypeName().orderAction.UPPDATE_ORDER,
      payload: newOrderStatus
    }
    
    }

