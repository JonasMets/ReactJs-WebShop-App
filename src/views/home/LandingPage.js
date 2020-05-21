import React from 'react'

import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

// importerar actions från store
import {logout} from '../../redux-store/actions/authenticate/action-authenticate';

// importerar funktioner från react-router-dom så länkar fungerar
import { Link } from 'react-router-dom';

function LandingPage() {
  // initierar en dispatch för att komma åt funktioner i store actions
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(state => state.reducerAuthenticate.isAuthenticated)

  return (
    <div className="container" >
      <h1>Shopware</h1>
      <h3>Vad vi gör</h3>
      <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident sit dolorum voluptates corrupti. Voluptatibus perferendis recusandae maiores tenetur nisi nostrum quis sint laudantium aperiam ad quisquam iusto, consequatur repudiandae omnis!</p>
      <br />
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A quas ut voluptas beatae fugit at sed qui eaque. Alias ipsam doloribus labore voluptatum a aut quam, officiis quo culpa, tempore explicabo pariatur voluptates nostrum eum reiciendis deserunt exercitationem nisi vitae.</p>


      <div className="d-flex justify-content-center mt-3">
    
        {isAuthenticated ? <button className="btn btn-primary" onClick={()=> dispatch(logout())} > Logga Ut </button> 
          : <div>
          <h5 className="text-center">Logga in eller skapa konto</h5>
          <Link to="/login" className="btn btn-primary" >Logga in</Link>
          <Link to="/register" className="btn" >Skapa konto</Link>
        </div>
        }
        
      </div>

    </div>
  )
}

export default LandingPage
