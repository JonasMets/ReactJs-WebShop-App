// 
//  här skapar vi en navbar component
// 

import React from 'react'
import { useSelector } from 'react-redux'

// importerar funktioner från react-router-dom så länkar fungerar
import { Link, NavLink } from 'react-router-dom';

// importerar styling
import './navbar-style.css'

import ShoppingCart from '../shoppingCart/ShoppingCart';
import UserSettingsMenu from '../user/UserSettingsMenu';

// en test dropdown
import JsDropdown from '../jsdropdown/JsDropdown';


function Navbar() {

  const totalCartQuantity = useSelector(state => state.reducerShoppingCart.totalCartQuantity)
  const isAuthenticated = useSelector(state => state.reducerAuthenticate.isAuthenticated)
  const userName = useSelector(state => state.reducerAuthenticate.currentUser.firstName)
  const userRole = useSelector(state => state.reducerAuthenticate.currentUser.userRole)


  return (
    <div>
      {/* default-color */}
      <nav className="mb-1 navbar navbar-expand-lg navbar-dark  navbar-color">

        <div className="container">

          <Link to="/" className="navbar-brand">
            {/* <i class="fab fa-reddit mr-1"></i> */}
            <i className="fab fa-angellist"></i>
        SHOPWARE
      </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent-333"
            aria-controls="navbarSupportedContent-333"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent-333">
            <ul className="navbar-nav mr-auto">
              {/* <li class="nav-item">
            <NavLink to="/" className="nav-link">Nyheter</NavLink>
          </li> */}

              <li className="nav-item">
                <NavLink to="/products" className="nav-link" activeClassName="selected" >Hemelektronik</NavLink>
              </li>
              {/* om admin är inloggad visas länk till adminsida */}
              {userRole === 'admin' ?
                <li className="nav-item">
                  <NavLink to="/admin" className="nav-link ml-2" activeClassName="selected" >Admin</NavLink>
                </li>
                :
                <></>
              }


            </ul>

            {/* en test dropdown */}
            <JsDropdown>
              {/* props.children */}
              <ShoppingCart />
            </JsDropdown>

            <ul className="navbar-nav ml-auto nav-flex-icons">
              {/* <!-- shopping cart --> */}
              <li className="nav-item dropdown">
                {/* <!-- Basic dropdown --> */}
                <a
                  href="/#"
                  className="nav-link mr-4"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {/* shoppingCartItemCount  */}
                  {totalCartQuantity}


                  <i className="fas fa-shopping-cart"></i>
                </a>

                {/* <!-- dropdown-menu drop-down-menu-right z-depth-2 shopping-cart --> */}
                <div className="dropdown-menu dropdown-menu-right z-depth-2 shopping-cart">

                  {/* <ShoppingCart /> */}
                  <ShoppingCart />

                </div>
                {/* <!-- Basic dropdown --> */}
              </li>

              {/* <!-- user settings --> */}
              <div>
                {isAuthenticated ? <Link to="/" className="nav-link"> {userName} </Link>
                  : <Link to="/login" className="nav-link">Logga in</Link>
                }
              </div>


              <li className="nav-item dropdown">
                <a
                  href="/#"
                  className="nav-link dropdown-toggle mr-4"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-user"></i>
                </a>
                <div className="dropdown-menu dropdown-menu-right z-depth-2">
                  <UserSettingsMenu />
                </div>
              </li>
            </ul>
          </div>

        </div>

      </nav>

    </div>
  )
}

export default Navbar
