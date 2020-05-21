// 
// 
// 

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
// import {  Redirect } from 'react-router-dom'
// import { useHistory } from "react-router-dom";
// import { useDispatch } from 'react-redux'
// import {getOrders} from '../../../redux-store/actions/order/action-order';



import AdminCustomerOrderCardContent from './AdminCustomerOrderCardContent';

import styles from './admincustomerorder-style.module.css'


// importera axios
// import axios from '../../../helpers/helperAxios';


function AdminCustomerOrdersCard({ orderdata, customerId }) {

  const [userdata, setUserdata] = useState({})

  // const [localLoading, setLoading] = useState(false)
  // const [localMsg, setMsg] = useState('')

  // let history = useHistory();

  // const dispatch = useDispatch()

  // 
  useEffect(() => {
    setUserdata(orderdata.userData)
    // 
  }, [setUserdata, orderdata.userData])

  // useEffect(() => {
  //   console.log(userdata)
  //   // 
  // }, [userdata])


  // // removeOrder()
  // // tar bort en order med _id
  // const removeOrder = (e) => {
  //   e.preventDefault()
  //   console.log('remove order' + orderdata._id)

  //   // skicka req till db att ta bort order med _id
  //   axios.delete(`/orders/${orderdata._id}`)
  //     .then((response) => {
  //       console.log(response)

  //       setMsg(`Order är bortagen`)

  //       // kallar på funktion i store som hämtar ordrar förkund med id
  //       // dispatch(getOrders(customerId));

  //       setTimeout(() => {
  //         setMsg('')
  //         // admincustomerlist
  //         // props.history.push("/admin/AdminCustomerOrdersList") 
  //         // return <Redirect push to={`/admin/AdminCustomerOrdersList/${customerId}`}  />

  //         // return <Redirect push to={`/admin/admincustomerlist`}  />

  //         // history.push('/admin/admincustomerlist')
  //         history.push(`/admin/AdminCustomerOrdersList/${customerId}`)


  //         // gör en ny req till db för att få den senaste order status för kund


  //       }, 2000)

  //     })
  //     .catch(error => {
  //       // error.message
  //       console.log(error.message)
  //       setLoading(false);
  //       setMsg('Could not delete order')
  //       //
  //     })

  // }

  return (
    <div>
      <div className="card mb-3">

        <div className={styles.ordercardstatus}>
          <div>

            {/* {localMsg !== '' ? <div> <h4 className="text-center"> {localMsg} </h4>  </div>
              : <></>
            } */}
            {/* {localLoading ? <div>  <p>Loading...</p> </div>
              : <></>
            } */}

            <h5 className="mr-auto ml-2 mt-2" >
              <strong>Ordernummer:</strong>  {orderdata._id}
            </h5>
            <strong className="mr-auto ml-2 mt-2" >
              Kund namn: {userdata.firstName} {userdata.lastName} {userdata._id}
            </strong>
          </div>
          <div >
            {/* <button>Edit order</button> */}
            {/* <NavLink to={`/admin/admincustomerorderedit/${orderdata._id}`} className="btn btn-info"
              activeClassName="selected" > Edit order </NavLink> */}
            <NavLink to={`/admin/admincustomerorderedit/${orderdata._id},${customerId}`
            } className="btn btn-info"
              activeClassName="selected" > Edit order </NavLink>
          </div>

          {/* remove order */}
          {/* <button className="btn btn-warning" onClick={removeOrder} >Remove order</button> */}

        </div>

        <hr />

        {/* {console.log(orderdata.userData)} */}

        {
          orderdata.orderItems.map(item => {
            // console.log(item.product._id)
            return (<AdminCustomerOrderCardContent key={item.product._id} itemdata={item} ></AdminCustomerOrderCardContent>)
          })
        }

        {/* mr-auto ml-2  className="mr-auto ml-2"  className={styles.ordercardstatus} */}
        <div className={styles.ordercardstatus}  >
          <h4> <strong>Orderstatus:</strong>  {orderdata.orderStatus} </h4>


        </div>

      </div>

    </div>
  )
}

export default AdminCustomerOrdersCard
