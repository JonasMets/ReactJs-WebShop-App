// 
//  CheckOut.js
// 

import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

// importera axios
import axios from '../../helpers/helperAxios';

import ShoppingCartProduct from '../../components/shoppingCart/ShoppingCartProduct';

// import { createNewOrder } from '../../redux-store/actions/order/action-order';
import {clearCart} from '../../redux-store/actions/shoppingCart/action-shoppingcart';



function CheckOut(props) {


  // initierar en dispatch för att komma åt funktioner i store actions
  const dispatch = useDispatch()


  const shoppingcart = useSelector(state => state.reducerShoppingCart.shoppingcart)
  // const totalCartQuantity = useSelector(state => state.reducerShoppingCart.totalCartQuantity)
  const totalCartAmount = useSelector(state => state.reducerShoppingCart.totalCartAmount)
  const userId = useSelector(state => state.reducerAuthenticate.currentUser.id)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const [errorMsg, setErrorMsg] = useState('')


  const onChangeFirstName = (e) => {
    e.preventDefault()
    setFirstName(e.target.value)
  }
  const onChangeLastName = (e) => {
    e.preventDefault()
    setLastName(e.target.value)
  }
  const onChangeEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const onChangeAddress = (e) => {
    e.preventDefault()
    setAddress(e.target.value)
  }

  const onChangeZip = (e) => {
    e.preventDefault()
    setZip(e.target.value)
  }

  const onChangeCity = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }

  const onChangeCountry = (e) => {
    e.preventDefault()
    setCountry(e.target.value)
  }

  //  onSubmit anropas från formuläret
  // här används koppling till dispatch som skapades tidigare
  // dispatch() kallar på funktion addCustomer i customerActions.js i store mappen
  const onSubmit = (e) => {
    e.preventDefault()

    if (firstName.length <= 0 || lastName.length <= 0 || email.length <= 0 || address.length <= 0 || zip.length <= 0 || city.length <= 0) {
      // någon felhantering här
      // skriv ut meddelande
      return
    }
    // console.log(firstName, lastName, email, address, zip, city)

    // skapa ett objekt med leveransaddress
    const shippingData = {
      address: address,
      zip: zip,
      city: city,
      country: country
    };
    // console.log(shippingData)

    const recipientData = {
      firstName,
      lastName,
      email
    }


    // 
    const newOrder = {
      userId: userId,
      userData: recipientData,
      shippingData: shippingData,
      orderItems: shoppingcart,
      orderTotalAmount: totalCartAmount,
      orderStatus: 'created'
    };

    // console.log(newOrder)

    const headers = {
      'Content-Type': 'application/json'
      ,
      'Authorization': 'bearer ' + sessionStorage.getItem('token') 
    }

    axios.post('/orders', newOrder,{headers})
      .then(response => {
        // response.data
        // const res = response.data
        // console.log(res)

        // om ok
        dispatch(clearCart())

        // rensa formuläret
      setFirstName('')
      setLastName('')
      setEmail('')
      setAddress('')
      setZip('')
      setCity('')
      setCountry('')

      // skicka användare till ?
      props.history.push("/checkout/CheckOutSuccess")

      })
      .catch(error => {
        // error.message
        console.log(error.message)
        setErrorMsg('Det gick inte att skapa order, kontrollera namn, email, adress')
      })
  }


  return (
    <div className="container">
      <h4 className="text-center mt-3">Skapa och skicka order</h4>

      <div className="container">
        {
          shoppingcart.map(cartItem => {
            return (
              <ShoppingCartProduct key={cartItem.product._id} cartItem={cartItem} >

              </ShoppingCartProduct>
            )
          })
        }
      </div>


      <div className="container">
        <div className="total-price">
          Totalt:
        {/* <!-- shoppingCartTotal visar det totala beloppet genom att multiplicera antal(item.quantity) av en produkt med priset (item.product.price) --> */}
          <span className="ml-1">{totalCartAmount} sek</span>
        </div>
        <small className="text-muted">inkl.moms</small>
      </div>

      <div>
        <div className="container mt-5">
          {/* <!--Section: Content--> */}
          <section className="dark-grey-text">
            <div className="card">
              <div className="card-body">
                {/* <!--Grid row--> */}
                <div className="row">
                  {/* <!--Grid column--> */}
                  <div className="col-lg-12">
                    {/* */}
                    <div className="text-center font-weight-bold">
                      <div>Leverans adress</div>
                    </div>

                    {errorMsg !== '' ? <div className="container">
                      <h4 className="text-center"> {errorMsg} </h4>
                    </div>
                      : <></>
                    }

                    {/* <!-- Pills panels --> */}
                    <div className="tab-content pt-4">
                      {/* <!--Panel 1--> */}
                      <div
                        className="tab-pane fade in show active"
                        id="tabCheckoutBilling123"
                        role="tabpanel"
                      >
                        {/* <!--Card content--> */}
                        <form>
                          {/* <!--Grid row--> */}
                          <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="col-md-6 mb-4">
                              {/* <!--firstName     v-model="firstName"     --> */}
                              <label htmlFor="firstName" >Förnamn</label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                value={firstName}
                                onChange={onChangeFirstName}
                              />
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-md-6 mb-2">
                              {/* <!--lastName      v-model="lastName" --> */}
                              <label htmlFor="lastName" >Efternamn</label>
                              <input
                                type="text"
                                id="lastName"
                                className="form-control"
                                value={lastName}
                                onChange={onChangeLastName}
                              />
                            </div>
                            {/* <!--Grid column--> */}
                          </div>
                          {/* <!--Grid row--> */}

                          {/* <!--email        v-model="email"   --> */}
                          <label htmlFor="email" >Email</label>
                          <input
                            type="text"
                            id="email"
                            // value="user.email"
                            className="form-control mb-4"
                            placeholder="youremail@example.com"
                            value={email}
                            onChange={onChangeEmail}
                          />

                          {/* <!--address--> */}
                          <label htmlFor="address" >Gatu Adress</label>
                          <input
                            type="text"
                            id="address"
                            className="form-control mb-4"
                            placeholder=" ex. Vägen 1"
                            value={address}
                            onChange={onChangeAddress}
                          />

                          {/* <!--Grid row--> */}
                          <div className="row">
                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-6 mb-4">
                              <label htmlFor="zip">Postnummer</label>
                              {/* <label htmlhtmlFor="zip"></label> */}
                              <input
                                type="text"
                                className="form-control"
                                id="zip"
                                value={zip}
                                onChange={onChangeZip}

                                // placeholder
                                required
                              />
                              <div className="invalid-feedback">Postnummer krävs</div>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-6 mb-4">
                              <label htmlFor="state">Stad</label>
                              <select
                                className="custom-select d-block w-100"
                                id="state"
                                value={city}
                                onChange={onChangeCity}
                                required
                              >
                                <option value>{city}</option>
                                <option>Stockholm</option>
                              </select>
                              <div className="invalid-feedback">Välj en stad</div>
                            </div>
                            {/* <!--Grid column--> */}

                            {/* <!--Grid column--> */}
                            <div className="col-lg-4 col-md-12 mb-4">
                              <label htmlFor="country">Land</label>
                              <select
                                className="custom-select d-block w-100"
                                id="country"
                                value={country}
                                onChange={onChangeCountry}
                                required
                              >
                                <option value>{country}</option>
                                <option>Sverige</option>
                              </select>
                              <div className="invalid-feedback">Välj ett land</div>
                            </div>
                            {/* <!--Grid column--> */}
                          </div>
                          {/* <!--Grid row--> */}

                          <hr />

                          <hr />



                          {/* <!--Panel 3 className="tab-pane fade" id="tabCheckoutPayment123"  role="tabpanel" --> */}
                          <div >
                            <div className="d-block my-3 ml-3">
                              <h4>Någon betalningsmetod här</h4>
                              <div className="mb-2">
                                <input
                                  name="group2"
                                  type="radio"
                                  className="form-check-input with-gap"
                                  id="radioWithGap4"
                                  required
                                />
                                <label className="form-check-label" htmlFor="radioWithGap4">Kredit kort</label>
                              </div>

                              <div className="mb-2">
                                <input
                                  name="group2"
                                  type="radio"
                                  className="form-check-input with-gap"
                                  id="radioWithGap6"
                                  required
                                />
                                <label className="form-check-label" htmlFor="radioWithGap6">Paypal</label>
                              </div>
                            </div>

                            <hr className="mb-4" />

                            {/* <!-- <button className="btn btn-primary btn-lg btn-block" type="submit" v-on:click.stop>Godkänn och skicka</button> --> */}
                          </div>
                          {/* <!--/.Panel 3--> */}

                          {/* <!-- Godkänn och skicka --> */}
                          <div className="justify-content-center">
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              type="submit"
                              onClick={onSubmit}

                            >Godkänn och skicka</button>
                          </div>

                        </form>
                      </div>

                    </div>
                    {/* <!-- Pills panels --> */}
                  </div>
                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}

                  {/* <!--Grid column--> */}
                </div>
                {/* <!--Grid row--> */}
              </div>
            </div>
          </section>
          {/* <!--Section: Content--> */}
        </div>
      </div>
    </div>
  )
}

export default CheckOut
