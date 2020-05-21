// 
//  ProductList.js
// 

import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'

// importerar component Product
import Product from './Product';

// hämtar in getProduct från store/actions/productsAction
import {getProducts} from '../../redux-store/actions/product/action-product';

function ProductList() {

  // hämtar data från reducerProducts.js genom reducerConfig.js
  // state.reducerProducts.products namnet kommer från reducerConfig.js
  const products = useSelector(state => state.reducerProducts.products);
  //
  


  const dispatch = useDispatch()


  useEffect(()=>{
   
    dispatch(getProducts());

  },[dispatch])


  return (
    
    <div>
      <div className="row row-cols-1 row-cols-md-3">
        {/* här ska vi loopa igenom alla produkter från databas och skicka in till Product som visar dem */}
        {/* <p>loading {error} </p> */}
        
        {
          products.map(product => {
            // console.log(product._id)
            return (<Product key={product._id} product={product} ></Product>)
          })
        }
      </div>
    </div>
  )
}

export default ProductList
