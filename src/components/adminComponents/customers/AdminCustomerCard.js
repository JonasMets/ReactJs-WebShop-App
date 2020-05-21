// 
// AdminCustomerCard.js
// 

import React from 'react'

import { NavLink } from 'react-router-dom';

import styles from './admincustomer-style.module.css'




function AdminCustomerCard({ customer}) {

  // console.log(customerid)

  return (
    <div className="col mb-2">
      <div className="card">
        <div className={styles.items}>

          <div >
            <div className="d-flex ml-2 mr-auto">
              <strong>Customer Id:</strong> <p className="ml-1"> {customer._id}</p>
            </div>
            <div className="d-flex ml-2 mr-auto">
              <strong>Firstname:</strong> <p className="ml-1"> {customer.firstName}</p>
            </div>
            <div className="d-flex ml-2 mr-auto">
              <strong>Lastname:</strong> <p className="ml-1"> {customer.lastName}</p>
            </div>
            <div className="d-flex ml-2 mr-auto">
              <strong>Email:</strong> <p className="ml-1"> {customer.email}</p>
            </div>
          </div>

          <div>
            {/* <button className="mt-2 btn">Edit Customer</button> */}
            <NavLink to={`/admin/admineditcustomer/${customer._id}`}  className="btn" 
            activeClassName="selected" >Edit Customer</NavLink>
          </div>
          <div>
            {/* <button className="mt-2" >Visa ordrar</button> */}
            <NavLink to={`/admin/AdminCustomerOrdersList/${customer._id}`} customer={customer} className="btn" 
            activeClassName="selected" >Show orders</NavLink>
          </div>

        </div>



      </div>
    </div>
  )
}

export default AdminCustomerCard
