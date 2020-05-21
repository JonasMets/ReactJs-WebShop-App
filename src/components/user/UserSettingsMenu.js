import React from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

// importerar funktioner från react-router-dom så länkar fungerar
import { Link} from 'react-router-dom';

// importerar actions från store
import {logout} from '../../redux-store/actions/authenticate/action-authenticate';

function UserSettingsMenu() {

  // initierar en dispatch för att komma åt funktioner i store actions
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.reducerAuthenticate.isAuthenticated)
  const userId = useSelector(state => state.reducerAuthenticate.currentUser.id)

  return (
    <div>

      {/* */}
      {/* <!-- {{ user }} --> */}

      <div>
        {!isAuthenticated ? <div>
          {/* */}
          <Link to="/login" className="dropdown-item">Logga in</Link>
          {/*  */}
          <Link to="/register" className="dropdown-item">Skapa konto</Link>
        </div>
          : <div >
            {/*  */}
            <Link to="/customerprofile" className="dropdown-item">Ditt konto</Link>
            {/*  */}
            <Link to={`/customerorders/${userId}`} className="dropdown-item">Dina ordrar</Link>

            <button className="dropdown-item" onClick={()=> dispatch(logout())} >Logga ut</button>
          </div>
        }
      </div>

    </div>
  )
}

export default UserSettingsMenu
