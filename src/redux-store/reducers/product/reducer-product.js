// 
// reducer för products
// exporteras som default 
// 
//   här finns "state" för en viss data som ska vara global
// 
// importerar actionTypeName som innehåller namn på actions
import {actionTypeName} from '../../storeActionTypes';
// import {v4 as uuidv4} from 'uuid';

// här sätts ett "start" värde för vad products/product ska innehålla första gången
const initState ={
// test produkter
  products:
      [
        { _id: 1, name: 'Default', short: 'Default', desc: 'Default', price: 0, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg' },
        { _id: 2, name: 'Default', short: 'Default', desc: 'Default', price: 0, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/15.jpg' }
      ],
    product:[ { _id: 1, name: 'Default', short: 'Default', desc: 'Default', price: 0, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg' }],

    loading: false,
    error:''
}
  

//  man kan köra axios i reducerdelen
// skapa en funktion som är async och hämta data



//  action.type action.payload
export default (state = initState, action)=>{
  switch (action.type) {

    case 'GET_PRODUCTS_REQ':
      return{
        ...state,
        loading: true
      }

    case 'REQ_ERROR':
      return{
        ...state,
        error: action.payload
      }

    case actionTypeName().products.GET_PRODUCT:
      // console.log(action.payload)
      // console.log(state.product[0])
      // 
      return {
        ...state,
        product: action.payload,
        loading: false,
        error:''
      }


    case actionTypeName().products.GET_PRODUCTS:
      // console.log(action.payload)
      return{
        ...state,
        products: action.payload,
        loading: false,
        error:''
      }




      case actionTypeName().products.ADD_PRODUCT :
        return [...state, action.payload ]
          
      case actionTypeName().products.DELETE_PRODUCT:
          return  state.filter(product=> product.id !== action.payload)

    default:
      return state
  }
}
