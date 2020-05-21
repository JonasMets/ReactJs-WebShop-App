
// 
//  LoginUser.js
// 

import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

// importera axios
import axios from '../../helpers/helperAxios';
// importerar useSelector
// import { useSelector } from 'react-redux'

// importerar actions från store
import {login} from '../../redux-store/actions/authenticate/action-authenticate';


function LoginUser(props) {
  // console.log(props)

  // initierar en dispatch för att komma åt funktioner i store actions
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const onChangeEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const onChangePassWord = (e) => {
    e.preventDefault()
    setPassWord(e.target.value)
  }


  const onSubmit = (e) => {
    e.preventDefault()

    if (email.length <= 0 || passWord.length <= 0) {
      // felhantering här
      setErrorMsg('Fyll i alla fält')
      return;
    }
    setErrorMsg('')

    const user = {
      email: email,
      password: passWord
    }

    setLoading(true)

    axios.post('/users/login', user)
      .then(response => {
        // response.data
        const res = response.data
        // console.log(res)
        // om ok
        //   Redirect to xxxx
        setEmail('')
        setPassWord('')
        setErrorMsg('')
        setLoading(false)

        // skickar en dispatch till store action för att lagra data
        dispatch(login(res.token, res.user))

        // om ok
        //   Redirect to xxxx  , state: { from: props.location }
        // return <Redirect push to="/login" />
        props.history.push("/")
        // return( <Redirect to={{ pathname: '/login' }}/> ) 
      })
      .catch(error => {
        // error.message
        console.log(error.message)
        setErrorMsg('Det gick inte att logga in, kontrollera email eller lösenord')

      })


  }


  return (
    <div className="container my-5">
      {/* <!-- Section --> */}
      <section>
        {/* <!-- --> */}
        <h3 className="font-weight-normal text-center dark-grey-text pb-2 display-4">
          {/* <!--  --> */}
        </h3>

        {errorMsg !== '' ? <div className="container"> 
        <h4 className="text-center"> {errorMsg} </h4>  
        </div>
          : <></>
        }
        {loading ? <div className="container"> 
        <h5 className="text-center"> Loggar In </h5>  
        </div>
          : <></>
        }

        <hr className="w-header my-4" />

        <form>
          {/* <!--First row--> */}
          <div className="row d-flex justify-content-center">
            {/* <!--First column--> */}
            <div className="col-6">
              {/* <!-- Material outline input --> */}
              <div className="md-form md-outline form-lg">
                <input type="text" id="form2"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={onChangeEmail}
                />
                <label htmlFor="form2">Email</label>
              </div>
              {/* <!-- Material outline input --> */}
              <div className="md-form md-outline form-lg">
                <input
                  type="password"
                  id="form3"
                  className="form-control form-control-lg"
                  value={passWord}
                  onChange={onChangePassWord}
                />
                <label htmlFor="form3">Lösenord</label>
              </div>
              <button
                className="btn btn-block btn-primary btn-lg"
                onClick={onSubmit}
              >Logga in</button>
            </div>
            {/* <!--First column--> */}
          </div>
        </form>
        {/* <!--First row--> */}
      </section>
      {/* <!-- Section --> */}
    </div>
  )
}

export default LoginUser
