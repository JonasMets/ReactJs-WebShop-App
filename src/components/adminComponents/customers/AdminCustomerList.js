// 
//  AdminCustomerList.js
// 
//  här ska admin kunna se alla kunder
// 
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

// importera axios
import axios from '../../../helpers/helperAxios';

import jwt from 'jsonwebtoken';

import AdminCustomerCard from './AdminCustomerCard';

function AdminCustomerList() {

  // const [customers, setCustomers] = useState([])
  const [customersFiltered, setCustomersFiltered] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

// detta körs när sidan laddas
  useEffect(()=>{
   
    // const token = sessionStorage.getItem('token');
    // console.log(token)

    const role = jwt.decode(sessionStorage.getItem('role'))
    // const body = JSON.stringify({ userRole: role })
    const data = { userRole: role }
    // console.log(body)

    const headers = {
      'Content-Type': 'application/json'
      ,
      'Authorization': 'bearer ' + sessionStorage.getItem('token') 
    }
    
    setLoading(true);

//  http://localhost:9999/api/v1/users/getall axios.get('/users/getall', {headers})
    axios.post('/users/getall',data,{headers})
      .then(response => {
        // response.data
        const customers = response.data.data
        // setCustomers(customers)

        // filtrera ut kunder från admin
        const filtered = customers.filter(filter => filter.userRole !== 'admin')
        // console.log(filtered)
        setCustomersFiltered(filtered)


        setLoading(false);
        setErrorMsg('')
        // console.log(customers)
        // dispatch(updateOrders(orders))
      })
      .catch(error => {
        // error.message
        console.log(error.message)
        setLoading(false);
        setErrorMsg('Det gick inte att hämta användare')
        // dispatch(reqError(error.message))
      })
    

  },[])



  return (
    <div className="container">
      <Link to="/admin" className="btn" > {"< Back"} </Link>
      <p>Admin customer list</p>
      {errorMsg !== '' ? <div className="container"> 
        <h4 className="text-center"> {errorMsg} </h4>  
        </div>
          : <></>
        }
      {loading ? <div className="container"> 
        <h5 className="text-center"> Hämtar användare </h5>  
        </div>
          : <></>
        }

      { customersFiltered.map(customer =>(
        // <p key={customer._id} >{customer.firstName}</p>
        // {customer.userRole}
        <AdminCustomerCard key={customer._id} customer={customer} customerid={customer._id} />
        
      ) ) 
      }
      
    </div>
  )
}

export default AdminCustomerList
