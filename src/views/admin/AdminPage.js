// 
//  AdminPage.js
// 
//  här ska man som admin kunna se alla kunder och ordrar
// 

import React from 'react'

// importerar funktioner från react-router-dom så länkar fungerar
//      Link, 
import { NavLink } from 'react-router-dom';

// import AdminCustomerList from '../../components/adminComponents/customers/AdminCustomerList';

function AdminPage() {
  return (
    <div className="container">
      <h4 className="text-center mt-3 mb-2">Admin page</h4>

      <NavLink to="/admin/admincustomerlist" className="btn btn-info" 
      activeClassName="selected" >Admin Customers & order</NavLink>

      
    </div>
  )
}

export default AdminPage
