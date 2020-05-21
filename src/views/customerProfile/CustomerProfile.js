import React from 'react'
import { useSelector } from 'react-redux'


function CustomerProfile() {

  const user = useSelector(state => state.reducerAuthenticate.currentUser);

  return (
    <div>
      <h4 className="text-center">Ditt användarkonto visas här</h4>

      <div className="container">
        <div className="card">
          <div className="mt-2 p-2">
            <p>Förnamn:  {user.firstName} </p>
            <p>Efternamn:  {user.lastName}  </p>
            <p>Email:  {user.email}  </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile
