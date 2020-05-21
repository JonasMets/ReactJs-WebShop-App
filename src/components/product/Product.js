

import React from 'react'
// importerar funktioner från react-router-dom så länkar fungerar
// NavLink
import { Link } from 'react-router-dom';

import './product-style.css';

function Product({ product }) {


  
  return (
    <div>
      {/* {product.id}
      {product.name}
      {product.short}
      {product.desc}
      {product.price}
      {product.image} */}

      <div className="col mb-4">
        {/* <!-- Card --> */}
        <div className="card">

          <div className="view overlay">
            <img className="card-img-top list-image" src={product.image} alt="" />
            {/* <!-- när man trycker på bilden skickas man till Product.vue --> */}
            {/* <!-- vi skickar med vilken produkt som ska visas mha params id --> */}
            <Link to={`/products/details/${product._id}`} >
              <div className="mask rgba-white-slight"></div>
            </Link>
          </div>

          {/* <!--Card content--> */}
          <div className="card-body">
            {/* <!--Title--> */}
            <h4 className="card-title"> {product.name} </h4>
            {/* <!--Text  short --> */}
            <p className="card-text"> {product.description} </p>

            {/* <!-- när man trycker på knappen skickas man till Product.vue --> */}
            {/* <!-- vi skickar med vilken produkt som ska visas mha params id --> */}
            <span>{product._id}</span>
            <Link to={`/products/details/${product._id}`}>
              <div className="mask rgba-white-slight btn btn-light-blue btn-md">Läs mer</div>
            </Link>

          </div>
        </div>
      </div>



    </div>
  )
}

export default Product
