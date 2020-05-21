import React from 'react'
// import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux'



import ProductList from '../../components/product/ProductList';

function Products() {

  const loading = useSelector(state => state.reducerProducts.loading);
  //  error
  const error = useSelector(state => state.reducerProducts.error);

  // console.log(loading,error)
  


  return (
    <div className="container" >
      <h1>Våra Produkter</h1>
      {error !== '' ?  <div> <h4> {error} </h4>  </div>
        : <></>
      }
      {loading ? <div>  <p>Loading...</p> </div>
        : <></>
      }

      <ProductList></ProductList>

    </div>
  )
}

export default Products
