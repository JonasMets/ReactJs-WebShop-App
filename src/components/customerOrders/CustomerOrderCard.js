import React from 'react'

import CustomerOrderCardContent from './CustomerOrderCardContent';

function CustomerOrderCard( {orderdata} ) {

  // console.log(orderdata)

  return (
    // OrderCardContent
    <div>
    <div className="col mb-4">
      {/* <!-- Card --> */}
      <div className="card">
        <h4 className="mr-auto ml-2 mt-2" > <strong>Ordernummer:</strong>  {orderdata._id} </h4>
        <hr/>

        {
          orderdata.orderItems.map(item => {
            // console.log(item.product._id)
            return (<CustomerOrderCardContent key={item.product._id} itemdata={item} ></CustomerOrderCardContent>)
          })
        }
        <hr/>
        <div className="mr-auto ml-2">
          <h4> <strong>Orderstatus:</strong>  {orderdata.orderStatus} </h4>
        </div>
        <div className="ml-auto mr-2">
          <div className="total-price ">
            Totalt:
            <span className="ml-1">  {orderdata.orderTotalAmount}  sek</span>
          </div>
          <small className="text-muted">inkl.moms</small>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CustomerOrderCard
