import React from 'react';
import { useDispatch } from 'react-redux'
import {addToCart, removeFromCart} from '../../redux-store/actions/shoppingCart/action-shoppingcart';

import './shoppingCart-style.css';

function ShoppingCartProduct({cartItem}) {
  const dispatch = useDispatch()

  const add = (product) => {
    dispatch(addToCart({product,quantity:1}))
  }

  const remove = (id) => {
    dispatch(removeFromCart(id))
  }

  const deleteAllItem = (id) => {
    dispatch(removeFromCart(id, true))
  }

  // const save = (shoppingcart) => {
  //   dispatch(checkoutCart(shoppingcart))
  // }

  return (
    

    // <!-- anropas från ShoppingCart får in en props: ["cartItem"] -->
  <div>
    <div className="cart-item">
      <div className="p2-d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img className="image-width" src={cartItem.product.image} alt="produkt bild" />
          <div>
            <div>
              {/* <!-- Produkt namn:  --> */}
              <strong>{ cartItem.product.name }</strong>
            </div>
            <div>
              {/* <!-- {cartItem.quantity} x { cartItem.product.price } --> */}
              <small> {cartItem.quantity} x { cartItem.product.price } SEK</small>
            </div>
          </div>

          <div className="ml-3 d-flex align-items-center">
            <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">

              {/* <!-- när man trycker på +/- ska antal för produkt öka/minska --> */}
              {/* <!-- kallar på decreaseQuantity i store actions --> */}
              <button type="button" className="btn btn-grey btn-sm px-3"
              onClick={() => add(cartItem.product)} >+</button>
              {/* // <!-- kallar på increaseQuantity i store actions --> */}
              <button type="button" className="btn btn-grey btn-sm px-3" 
              onClick={() => remove(cartItem.product._id)}>-</button>

            </div>

            <div>
              {/* <!-- deleteProductFromCart kallar på funktion i store som tar bort den valda produkten --> */}
              {/* <!-- skickar med cartItem.product.id   deleteAllItem --> */}
              <button
                className="btn btn-sm btn-danger"
                onClick={() => deleteAllItem(cartItem.product._id)}   
              >
                <i className="far fa-trash-alt"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="dropdown-divider"></div>
  </div>

  )
}

export default ShoppingCartProduct
