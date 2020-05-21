// 
//  AdminCustomerOrdersList.js
// 
//  här ska admin kunna se ordrar för den valda kunden
// 
// import React, { useState, useEffect } from 'react'
import React, {  useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux'
import {getOrders} from '../../../redux-store/actions/order/action-order';


// importera axios
// import axios from '../../../helpers/helperAxios';

// import jwt from 'jsonwebtoken';


import AdminCustomerOrdersCard from './AdminCustomerOrdersCard';

function AdminCustomerOrdersList() {

  // console.log(props)
  const dispatch = useDispatch()

  let { id } = useParams();

  const orders = useSelector(state => state.reducerOrders.orders);
  const loading = useSelector(state => state.reducerOrders.loading);
  const errorMsg = useSelector(state => state.reducerOrders.error);

  // const [orders, setOrders] = useState([])

  // const [orderdata, setOrderdata] = useState([])
  // const [loading, setLoading] = useState(false)
  // const [errorMsg, setErrorMsg] = useState('')

  useEffect(()=>{
   
    dispatch(getOrders(id));

  },[dispatch,id])


  return (
    <div className="container" >
      <div className="d-flex mt-2 mb-3">
        <NavLink to="/admin/admincustomerlist" className="btn"
          activeClassName="selected" > {"< Back"} </NavLink>

        <div>
          {/* <h4 className="text-center mt-2 mb-3" >Ordrar för kund id: {id}</h4> */}
          <div className="d-flex ml-2 mr-auto">
            <strong>Orders for customer id:</strong> <p className="ml-1"> {id}</p>
          </div>
          <div className="d-flex ml-2 mr-auto">
            {

            }
              {/* <strong>Firstname:</strong> <p className="ml-1"> {{orders[0].userData.firstName}}}</p> */}
            </div>
        </div>


      </div>


      {errorMsg !== '' ? <div className="container">
        <h4 className="text-center"> {errorMsg} </h4>
      </div>
        : <></>
      }
      {loading ? <div className="container">
        <h5 className="text-center"> Hämtar ordrar för kund </h5>
      </div>
        : <></>
      }

      {/* ska "loopas" antal gånger en order finns */}
      {orders.length > 0 ?

        orders.map(order => {
          // return ( <p key={order._id} >{order._id} </p>)
          return (<AdminCustomerOrdersCard key={order._id} orderdata={order} customerId={id} ></AdminCustomerOrdersCard>)
        })
        :
        <></>
      }

    </div>
  )
}

export default AdminCustomerOrdersList


//  lokal hämtning
// useEffect(() => {

    
//   // const role = jwt.decode(sessionStorage.getItem('role'))
//   // 
//   // const data = { userRole: role }
//   // 

//   const headers = {
//     'Content-Type': 'application/json'
//     ,
//     'Authorization': 'bearer ' + sessionStorage.getItem('token') 
//   }

//   setLoading(true);

//   axios.get('/orders/customer/' + id, { headers })
//     .then(response => {
//       // response.data
//       const orders = response.data.data
//       // console.log(orders[0].userData);
//       // setOrderdata(orders[0].userData)
//       // console.log(orderdata);

//       setOrders(orders);
//       setLoading(false);
//       setErrorMsg('');

//     })
//     .catch(error => {
//       // error.message
//       console.log(error.message)
//       setErrorMsg('Det gick inte att hämta ordrar')
//     })

// }, [id])
