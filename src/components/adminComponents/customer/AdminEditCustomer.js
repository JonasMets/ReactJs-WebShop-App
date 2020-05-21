// 
//  AdminEditCustomer.js
// 

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

import jwt from 'jsonwebtoken';

// importera axios
import axios from '../../../helpers/helperAxios';




function AdminEditCustomer() {

  let history = useHistory();

  let { _id } = useParams();

  const [localLoading, setLocalLoading] = useState(false)
  const [localMsg, setLocalMsg] = useState('')

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [localuserRole, setUserRole] = useState('')

  const [newUserRole, setNewUserRole] = useState('')


  const [localUser, setLocalUser] = useState([])


  useEffect(() => {
    // 
    const role = jwt.decode(sessionStorage.getItem('role'))
    //
    const data = { userRole: role }
    //
    const headers = {
      'Content-Type': 'application/json'
      ,
      'Authorization': 'bearer ' + sessionStorage.getItem('token')
    }

    // http://localhost:9999/api/v1/users/getone/:id
    axios.post(`/users/getone/${_id}`, data, { headers })
      .then(response => {
        // response.data
        const oneUser = response.data
        // console.log(oneUser)
        setLocalUser(oneUser)
        setLocalLoading(false);
        setLocalMsg('')
        // console.log(localUser)
        //
      })
      .catch(error => {
        // error.message
        console.log(error.message)
        setLocalLoading(false);
        setLocalMsg('Det gick inte att hämta användare')
        // dispatch(reqError(error.message))
      })

  }, [_id])

  useEffect(() => {
    // console.log('effect run')

    if (localUser.length > 0) {
      // console.log(localUser)
      setUserRole(localUser[0].userRole)
      setFirstName(localUser[0].firstName)
      setLastName(localUser[0].lastName)

    }

  }, [localUser])



  const onChangeFirstName = (e) => {
    e.preventDefault()
    setFirstName(e.target.value)
  }
  const onChangeLastName = (e) => {
    e.preventDefault()
    setLastName(e.target.value)
  }

  const onChangeStatus = (e) => {
    e.preventDefault()
    setNewUserRole(e.target.value)
    setUserRole(e.target.value)
  }


  const onSubmit = (e) => {
    e.preventDefault()

    if (firstName === '' || lastName === '' || newUserRole === '') {
      setLocalMsg(`please fill in all fields`)

      setTimeout(() => {
        setLocalMsg('')
      }, 2000)
      setUserRole(localUser[0].userRole)
      setFirstName(localUser[0].firstName)
      setLastName(localUser[0].lastName)
      return;
    }

    let updatedUser = {
      firstName: firstName,
      lastName: lastName,
      userRole: newUserRole
    }
    // console.log(updatedUser)

    const role = jwt.decode(sessionStorage.getItem('role'))
    // const body = JSON.stringify({ userRole: role })
    const body = {
      userRole: role,
      data: updatedUser
    }
    //
    const config = {
      headers: {
        'Content-Type': 'application/json'
        ,
        'Authorization': 'bearer ' + sessionStorage.getItem('token')
      }
    }

    // skicka uppdaterad user til db
    // http://localhost:9999/api/v1/users/update/:id
    axios.patch(`/users/update/${_id}`, body, config)
      .then(response => {
        // response.data
        // console.log(response)

        setLocalLoading(false);
        setLocalMsg(`User is updated`)
        // setNewOrderStatus('')

        setTimeout(() => {
          setLocalMsg('')
        }, 3000)

      })
      .catch(error => {
        //
        console.log(error.message)
        setLocalLoading(false);
        setLocalMsg('Could not update user')
        //
      })
  }


// ta bort en kund
const removeCustomer = (e)=>{
  e.preventDefault()

  // console.log(`remove customer :${_id}`)

  const role = jwt.decode(sessionStorage.getItem('role'))
    // const body = JSON.stringify({ userRole: role })
    // console.log(role)

    // const body = {
    //   userRole: role,
    //   data:''
    // }
    //
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
// delete tar bara en config
  axios.delete(`/users/delete/${_id}`,config)
  .then((response) => {
    // console.log(response)
    setLocalMsg(`Customer is removed`)

    setTimeout(() => {
      setLocalMsg('')

      history.push(`/admin/admincustomerlist`)

    }, 2000)

  })
  .catch(error => {
    // error.message
    console.log(error.message)
    setLocalLoading(false);
    setLocalMsg('Could not delete customer')
    //
  })

}


  return (
    <div className="container">
      <Link to="/admin/admincustomerlist" className="btn" > {"< Back"} </Link>

      <h4>Edit customer with id: {_id} </h4>
      {localLoading ? <div>  <p>Loading...</p> </div>
        : <></>
      }
      {localMsg !== '' ? <div className="container">
        <h4 className="text-center"> {localMsg} </h4>
      </div>
        : <></>
      }

      <button className="btn btn-warning btn-small" onClick={removeCustomer} >Remove Customer</button>


      <form>
        {/* <!--First row--> */}
        <div className="row d-flex justify-content-center">
          {/* <!--First column--> */}
          <div className="col-6">
            {/* <!-- Material outline input   id="form1"--> */}
            {/* <div className="md-form md-outline form-lg"> */}
            <p className="mb-0">Current user first name :</p>
            <div className="mt-0 mb-2">

              <input type="text"
                className="form-control "
                value={firstName}
                onChange={onChangeFirstName} />
              {/* <label htmlFor="form1">Förnamn</label> */}
            </div>
            {/* <!-- id="form1" --> */}
            <p className="mb-0">Current user last name :</p>
            <div className="mt-0 mb-4">

              <input type="text"
                className="form-control "
                value={lastName}
                onChange={onChangeLastName} />
              {/* <label htmlFor="form1">Efternamn</label> */}
            </div>

            <p>Current user status : {localuserRole} </p>

            <label>Select new user status:
                  <select value={localuserRole}
                onChange={onChangeStatus}>
                <option value="">Choose here</option>
                <option value="customer" >Customer</option>
                <option value="bronzecustomer" >Bronze Customer</option>
                <option value="silvercustomer" >Silver Customer</option>
                <option value="goldcustomer" >Gold Customer</option>
                {/* <option value="admin">Admin</option> */}

              </select>
            </label>

            <button
              className="btn btn-block btn-primary btn-lg"
              onClick={onSubmit}
            >Send update to Db</button>
          </div>
          {/* <!--First column--> */}
        </div>
      </form>


    </div>
  )
}

export default AdminEditCustomer
