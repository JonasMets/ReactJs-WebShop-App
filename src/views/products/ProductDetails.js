// 
//  ProductDetails.js
// 
// import React , {useState,useEffect} from 'react'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

// hämtar in dispatc funktion från react-redux library
import { useDispatch, useSelector } from 'react-redux'

// hämtar in getProduct från store/actions/productsAction
import { getProduct } from '../../redux-store/actions/product/action-product';
import {addToCart} from '../../redux-store/actions/shoppingCart/action-shoppingcart';


// 
function ProductDetails({ match }) {

  // aktiverar dispatch funktion i react-redux
  // med dispatch kan man kalla på funktioner som finns i tex. /store/actions/productsAction
  const dispatch = useDispatch()

  let { id } = useParams();

  // hämtar data från reducerProducts.js genom reducerConfig.js
  // state.reducerProducts.products namnet kommer från reducerConfig.js
  const product = useSelector(state => state.reducerProducts.product);

  // detta körs när sidan skapas/laddas
  useEffect(() => {
    //   
    dispatch(getProduct(id))

  }, [dispatch, id])


  const addproductToCart =()=>{
    console.log('add')

    dispatch(addToCart({product,quantity:1}))

  }


  return (
    // <div>
    //   <h3>Product details</h3>
    //   <p>Product id :  {product._id}</p>
    //   <p>Product :  {product.name}</p> 
    // </div>


    <div className="container my-5 py-5 z-depth-1">
      {/* <!--Section: Content--> */}
      <section className="text-center">
        {/* <!-- Section heading --> */}
        <h3 className="font-weight-bold mb-5">Produkt info</h3>

        <div className="row">
          <div className="col-lg-6">

            {/* <!--Carousel Wrapper--> */}
            <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">

              {/* <!--Slides--> */}
              <div className="carousel-inner text-center text-md-left" role="listbox">
                <div className="carousel-item active">
                  <img src={product.image}
                    alt="First slide" className="img-fluid">
                  </img>
                </div>

              </div>
              {/* <!--/.Slides--> */}
            </div>
            {/* <!--/.Carousel Wrapper--> */}
          </div>

          <div className="col-lg-5 text-center text-md-left">
            <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
              <strong>  {product.name}  </strong>
            </h2>

            <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
              <span className=" font-weight-bold">
                <strong> {product.price}  SEK</strong>
              </span>
            </h3>

            {/* <!--Accordion wrapper--> */}
            <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

              {/* <!-- Accordion card --> */}
              <div className="card">
                {/* <!-- Card header --> */}
                <div className="card-header" role="tab" id="headingOne1">
                  <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                    aria-controls="collapseOne1">
                    <h5 className="mb-0">
                      Beskrivning
                <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                {/* <!-- Card body --> */}
                <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                  data-parent="#accordionEx">
                  <div className="card-body">
                    {product.description}
            </div>
                </div>
              </div>
              {/* <!-- Accordion card --> */}

              {/* <!-- Accordion card --> */}
              <div className="card">

                {/* <!-- Card header --> */}
                <div className="card-header" role="tab" id="headingTwo2">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
                    aria-expanded="false" aria-controls="collapseTwo2">
                    <h5 className="mb-0">
                      Detaljer
                <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                {/* <!-- Card body --> */}
                <div id="collapseTwo2" className="collapse" role="tabpanel" aria-labelledby="headingTwo2"
                  data-parent="#accordionEx">
                  <div className="card-body">
                    <ul>
                      <li>tabpanel</li>
                      <li>accordionEx</li>
                      <li>rotate</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <!-- Accordion card --> */}

              {/* <!-- Accordion card --> */}
              <div className="card">

                {/* <!-- Card header --> */}
                <div className="card-header" role="tab" id="headingThree3">
                  <a className="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
                    aria-expanded="false" aria-controls="collapseThree3">
                    <h5 className="mb-0">
                      Orderinfo
                <i className="fas fa-angle-down rotate-icon"></i>
                    </h5>
                  </a>
                </div>

                {/* <!-- Card body --> */}
                <div id="collapseThree3" className="collapse" role="tabpanel" aria-labelledby="headingThree3"
                  data-parent="#accordionEx">
                  <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                    3 wolf moon officia aute,
                    non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                    moon
                    tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            </div>
                </div>
              </div>
              {/* <!-- Accordion card --> */}

            </div>
            {/* <!--/.Accordion wrapper--> */}

            {/* <!-- Add to Cart --> */}
            <section className="color">
              <div className="mt-5">

                {/* <div class="row text-center text-md-left"> */}
                {/* </div> */}

                <div className="row mt-3">
                  <div className="col-md-12 text-center text-md-left text-md-right">
                    {/* <!-- addProductToCart kallar på funktion i store --> */}
                    {/* <!-- vi skickar med ett objekt som innehåller vald product och quantity --> */}
                    <button className="btn btn-primary btn-rounded" onClick={addproductToCart}>
                      <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Lägg till varukorg</button>
                  </div>
                </div>
              </div>
            </section>
            {/* <!-- /.Add to Cart --> */}

          </div>
        </div>

      </section>
      {/* <!--Section: Content--> */}
    </div>


  )
}

export default ProductDetails
