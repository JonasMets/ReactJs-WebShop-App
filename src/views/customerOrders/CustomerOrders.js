// 
//  CustomerOrders.js
// 
// här ska vi visa de ordrar som finns per kund/id

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'

// componenter
import CustomerOrderCard from '../../components/customerOrders/CustomerOrderCard';

import { getOrders } from '../../redux-store/actions/order/action-order';


function CustomerOrders() {

  const orders = useSelector(state => state.reducerOrders.orders);

  const [activeOrders, setActiveOrders] = useState([])
  const [ordersDone, setOrdersDone] = useState([])

  let { id } = useParams();
  // console.log(id)

  const dispatch = useDispatch()


  useEffect(() => {

    dispatch(getOrders(id));

  }, [dispatch, id])


  useEffect(() => {
    // console.log('effect run')
    if (orders.length > 0) {
      let activeOrders = orders.filter(order => order.orderStatus !== 'delivered')
      // console.log(activeOrders)
      setActiveOrders(activeOrders)

      let ordersDone = orders.filter(order => order.orderStatus === 'delivered')
      // console.log(ordersDone)
      setOrdersDone(ordersDone)
    }
  }, [orders])

  return (
    <div className="container" >

      <h3 className="text-center mt-2 mb-3" ><strong>Dina ordrar</strong></h3>
      {activeOrders.length <= 0 ?
        <h5>Inga nya ordrar finns</h5>
        :
        <></>
      }

      {/* ska "loopas" antal gånger en order finns */}
      {activeOrders.length > 0 ?

        activeOrders.map(order => {
          // console.log(order._id)
          return (<CustomerOrderCard key={order._id} orderdata={order} ></CustomerOrderCard>)
        })
        :
        <></>
      }

      <hr />
      <div className="mt-4 mb-2">
        <h4 className="text-center mb-3"><strong>Dina avslutade ordrar</strong> </h4>
        {ordersDone.length > 0 ?
          ordersDone.map(order => {
            // console.log(order._id)
            return (<CustomerOrderCard key={order._id} orderdata={order} ></CustomerOrderCard>)
          })
          :
          <></>
        }
        {ordersDone.length <= 0 ?
        <h5>Inga avslutade ordrar finns</h5>
        :
        <></>
      }
      </div>


    </div>
  )
}

export default CustomerOrders
