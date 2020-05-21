import React from 'react'

// import './customerorders-style.css'

function AdminCustomerOrderCardContent({ itemdata }) {
  // console.log(itemdata)

  return (
    <div>
      <div className="d-flex">
        <img className="imagewidth" src={itemdata.product.image} alt="produkt bild" />
        <div>
          <p>{itemdata.product.name}</p>
          <p>{itemdata.product.shortdesc}</p>
        </div>
        <div className="ml-auto mr-2">
          <p>Pris: {itemdata.product.price}</p>
          <p>Antal: {itemdata.quantity}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default AdminCustomerOrderCardContent
