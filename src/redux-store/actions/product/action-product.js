// 
//  actions för product
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';
// importera axios
import axios from '../../../helpers/helperAxios';


//  funktioner för att sätta state i reducer product
// 
export const getProductsReq = () => {
  return {
    type: 'GET_PRODUCTS_REQ'
  }
}

export const reqError = (error)=>{
  return{
    type: 'REQ_ERROR',
    payload: error
  }
}

// hämta alla produkter från databas
export const getProducts = () => {

  // gå till databas och hämta produkter
  // fetch eller axios
  // console.log('getProducts')

  return function (dispatch) {

    dispatch(getProductsReq())

    axios.get('/products')
      .then(response => {
        // response.data
        const products = response.data.data
        dispatch(updateProducts(products))
      })
      .catch(error => {
        // error.message
        console.log(error.message)
        dispatch(reqError(error.message))
      })
  }
}

export const updateProducts = (products)=>{
  return {
    type: actionTypeName().products.GET_PRODUCTS,
    payload: products
  }
}
// slut hämta alla produkter från databas


// hämta en produkt med id
export const getProduct = (_id) => {
  // console.log(_id)
  
  return function (dispatch) {

    dispatch(getProductsReq())

    axios.get('/products/' + _id)
    
      .then(response => {
        // response.data
        // console.log(response.data[0])

        const product = response.data[0]
        dispatch(updateProduct(product))
      })
      .catch(error => {
        // error.message
        console.log(error.message)
        dispatch(reqError(error.message))
      })
  }

}
// uppdaterar aktuell produkt med id
export const updateProduct = (product)=>{
  return {
    type: actionTypeName().products.GET_PRODUCT,
    payload: product
  }
}
// slut hämta en produkt med id






export const addProduct = (newProduct) => {
  return {
    type: actionTypeName().products.ADD_PRODUCT,
    payload: newProduct
  }
}

export const deleteProduct = (id) => {
  return {
    type: actionTypeName().products.DELETE_PRODUCT,
    payload: id
  }
}


// const getProductsFromDatabase = async () => {
//   let res = await axios.get('/products')
//   if (res !== null) {
//     console.log(res.data.data)
//   }
// }

