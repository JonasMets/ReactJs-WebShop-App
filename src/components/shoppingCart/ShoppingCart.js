import React from 'react'
import { useSelector } from 'react-redux'
// importerar funktioner från react-router-dom så länkar fungerar
import { Link } from 'react-router-dom';

import ShoppingCartProduct from './ShoppingCartProduct';

function ShoppingCart() {

  const totalCartQuantity = useSelector(state => state.reducerShoppingCart.totalCartQuantity)
  const totalCartAmount = useSelector(state => state.reducerShoppingCart.totalCartAmount)
  const shoppingcart = useSelector(state => state.reducerShoppingCart.shoppingcart)
  const isAuthenticated = useSelector(state => state.reducerAuthenticate.isAuthenticated)


// lokal component som visar olika knappar i cart
  const CartButtons = () => {
    if (isAuthenticated) {
      if (totalCartQuantity <= 0) {
        return <div className="btn">Varukorg tom </div>
      } else {
        return <Link to="/checkout" className="btn btn-info" > Gå till kassan </Link>
      }
    } else {
      return (
        <div >
          <p className="text-muted">Logga in för att beställa</p>
        </div>
      )
    }
  }


  return (
    <div>
      {/* <!-- ShoppingCart  --> */}
      {/* <!-- anropas från Navbar som en dropdown --> */}
      <div>
        <h4>Dina Produkter</h4>

        {/* om varukorg är tom visas detta */}
        {totalCartQuantity <= 0 && (
          <div >
            <p>Inga Produkter</p>
          </div>
        )}

        <div >
          {
            shoppingcart.map(cartItem => {
              return (
                <ShoppingCartProduct key={cartItem.product._id} cartItem={cartItem} >
                </ShoppingCartProduct>
              )
            })
          }
        </div>

        <div className="p-2 d-flex justify-content-between align-items-center">
          {isAuthenticated ?
            <div>
              <div className="total-price">
                Totalt:
                <span className="ml-1"> {totalCartAmount}  sek</span>
              </div>
              <small className="text-muted">inkl.moms</small>
            </div>
            :
            <></>
          }
          <div>
            <CartButtons />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShoppingCart
