// 
//  AdminCustomerOrderEdit.js
// 

// import React, { useState, useEffect } from 'react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import {  Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'

import { getOrder, updateOrderStatus } from '../../../redux-store/actions/order/action-order';

import AdminCustomerOrderCardContent from './AdminCustomerOrderCardContent';

import styles from './admincustomerorder-style.module.css'

// importera axios
import axios from '../../../helpers/helperAxios';

import jwt from 'jsonwebtoken';



function AdminCustomerOrderEdit() {

  const [newOrderStatus, setNewOrderStatus] = useState('')
  const [localLoading, setLoading] = useState(false)
  const [localMsg, setMsg] = useState('')
  const [showBtnSendToDb, setshowBtnSendToDb] = useState(false)

  const dispatch = useDispatch()

  let { _id } = useParams();
  let {_userid} =useParams();
  //  console.log(_userid)

  const orderx = useSelector(state => state.reducerOrders.order);
  // const currentOrderStatus = useSelector(state => state.reducerOrders.order.orderStatus);
  const loading = useSelector(state => state.reducerOrders.loading);
  const errorMsg = useSelector(state => state.reducerOrders.error);

  let history = useHistory();

  // hämta vald order /api/v1/orders/ "id"
  useEffect(() => {

    dispatch(getOrder(_id));

  }, [dispatch, _id])


  // console.log(orderx[0])

  const onChangeStatus = (e) => {
    e.preventDefault()
    setNewOrderStatus(e.target.value)
  }
  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(newOrderStatus)
    // skicka en uppdatering till databas med ny orderstatus

    dispatch(updateOrderStatus(newOrderStatus))

    setNewOrderStatus(orderx[0].orderStatus)
    // console.log(newOrderStatus)
    setshowBtnSendToDb(true)

  }


  // här skickar vi uppdatering av order till db
  const sendToDb = (e) => {
    e.preventDefault()
    // console.log('sendToDb')

    const role = jwt.decode(sessionStorage.getItem('role'))
    // const body = JSON.stringify({ userRole: role })
    const body = {
      userRole: role,
      data: orderx[0]
    }
    // console.log(body)

    const config = {
      headers: {
        'Content-Type': 'application/json'
        ,
        'Authorization': 'bearer ' + sessionStorage.getItem('token')
      }

    }

    setshowBtnSendToDb(false)
    setLoading(true);

    // http://localhost:9999/api/v1/orders/ id
    axios.patch(`/orders/${_id}`, body, config)
      .then(response => {
        // response.data
        // console.log(response)

        setLoading(false);
        setshowBtnSendToDb(false)

        setMsg(`Order is updated`)
        setNewOrderStatus('')

        setTimeout(() => {
          setMsg('')
        }, 3000)


      })
      .catch(error => {
        // error.message
        console.log(error.message)
        setLoading(false);
        setMsg('Couldn´t update order')
        // dispatch(reqError(error.message))
      })

  }



  // removeOrder()
  // tar bort en order med _id
  const removeOrder = (e) => {
    e.preventDefault()
    // console.log('remove order' + _id)

    const role = jwt.decode(sessionStorage.getItem('role'))
    // delete tar bara en config
    const config = {
      headers: {
        'Content-Type': 'application/json'
        ,
        'Authorization': 'bearer ' + sessionStorage.getItem('token')
      },
      data:{userRole: role,
        data:''}
    }

    // skicka req till db att ta bort order med _id
    axios.delete(`/orders/${_id}`,config)
      .then((response) => {
        // console.log(response)

        setMsg(`Order is removed`)


        setTimeout(() => {
          setMsg('')
          // admincustomerlist
          // props.history.push("/admin/AdminCustomerOrdersList") 
          // return <Redirect push to={`/admin/AdminCustomerOrdersList/${_userid}`}  />

          // return <Redirect push to={`/admin/admincustomerlist`}  />

          // history.push('/admin/admincustomerlist')
          history.push(`/admin/AdminCustomerOrdersList/${_userid}`)

        }, 2000)

      })
      .catch(error => {
        // error.message
        console.log(error.message)
        setLoading(false);
        setMsg('Could not delete order')
        //
      })

  }






  return (
    <div>

      <NavLink to="/admin/admincustomerlist" className="btn"
        activeClassName="selected" > {"< Back"} </NavLink>

      <h5 className="container" >Edit order : {_id} </h5>

      {errorMsg !== '' ? <div> <h4> {errorMsg} </h4>  </div>
        : <></>
      }
      {loading ? <div>  <p>Loading...</p> </div>
        : <></>
      }

      {localMsg !== '' ? <div> <h4 className="text-center"> {localMsg} </h4>  </div>
        : <></>
      }
      {localLoading ? <div>  <p>Loading...</p> </div>
        : <></>
      }

      {/* {orderx.length > 0 ?
        <p> {orderx[0]._id} </p>
        : <></>

      } */}

      <div>
        {/* visa nedan om orderx.length >0 */}
        {orderx.length > 0 ?

          // card
          <div className=" mb-3">

            {/* remove order */}
          <button className="btn btn-warning" onClick={removeOrder} >Remove order</button>

            <div className={styles.ordercardstatus}>
              <div>
                <h5 className="mr-auto ml-2 mt-2" >
                  {/*                            {orderx._id}  */}
                  {/* <strong>Ordernummer:</strong> {orderx[0]._id} */}

                  {/* <p> {orderx.orderStatus} </p> */}
                  {/* <p> {orderx.orderItems} </p> */}

                </h5>
                <strong className="mr-auto ml-2 mt-2" >
                  {/* Kund namn: {userdata.firstName} {userdata.lastName} */}
                </strong>
              </div>
              <div >

              </div>
            </div>

            <hr />

            {/* .length >0 */}
            {orderx.length > 0 ?
              orderx[0].orderItems.map(item => {
                // console.log(item.product._id)
                return (<AdminCustomerOrderCardContent key={item.product._id} itemdata={item} ></AdminCustomerOrderCardContent>)
              })
              : <></>
            }

            {/* {
               setNewOrderStatus(orderx[0].orderStatus) 
             }  */}
            <div className="container">
              <strong>Current orderStatus : </strong> {orderx[0].orderStatus}
            </div>
            <div className="d-flex container align-content-center align-items-center">



              <form >
                <label>Select new order status:
                  <select value={newOrderStatus}
                    onChange={onChangeStatus}>
                    <option value="">Choose here</option>
                    <option value="created" >created</option>
                    <option value="ready for shipping">ready for shipping</option>
                    <option value="shipped">shipped</option>
                    <option value="on the way">on the way</option>
                    <option value="delivered">delivered</option>
                  </select>
                </label>
                {/* <input type="text" value={newOrderStatus} /> */}

              </form>

              <div className="align-items-center">
                <label htmlFor="form1">New orderstatus : </label>
                <input type="text"
                  className=""
                  value={newOrderStatus}
                  onChange={onChangeStatus} />
              </div>

              <button
                className="btn"
                onClick={onSubmit}
              >Change status</button>


            </div>
            {showBtnSendToDb ?
              <div className="container">
                <button
                  className="btn btn-info"
                  onClick={sendToDb}
                >Send update to Db</button>
              </div>
              :
              <></>
            }




          </div>

          : <></>
        }



      </div>

    </div>
  )
}

export default AdminCustomerOrderEdit
