import React, { useState } from 'react'
// import { useDispatch } from 'react-redux'
// importerar funktioner från react-router-dom så länkar fungerar
import { Link } from 'react-router-dom';

// import { Redirect } from 'react-router-dom'

// import { createNewUser } from '../../redux-store/actions/user/action-user';

// importera axios
import axios from '../../helpers/helperAxios';

function RegisterUser(props) {

  // console.log(props)

  // initierar en dispatch för att komma åt funktioner i store actions
  // const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [passWord, setPassWord] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const onChangeFirstName = (e) => {
    e.preventDefault()
    setFirstName(e.target.value)
  }
  const onChangeLastName = (e) => {
    e.preventDefault()
    setLastName(e.target.value)
  }
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


    if (firstName.length <= 0 || lastName.length <= 0 || email.length <= 0 || passWord.length <= 0) {
      // någon felhantering här
      // skriv ut meddelande
      setErrorMsg('Fyll i alla fält')
      return
    }
    // någon form av validering  här

    // om ok, dispatch till action för user i store
    // console.log(firstName, lastName, email, passWord)

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      passWord: passWord
    }

    // skicka data vidare till redux ?
    

    axios.post('/users/register', newUser)
      .then(response => {
        // response.data
        const res = response.data
        console.log(res)
        // om ok
        //   Redirect to xxxx
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassWord('')
        setErrorMsg('')

        // om ok
        //   Redirect to xxxx  , state: { from: props.location }
        // return <Redirect push to="/login" />
        props.history.push("/login")
        // return( <Redirect to={{ pathname: '/login' }}/> ) 
        
      })
      .catch(error => {
        // error.message
        console.log(error.message)
        setErrorMsg('Det gick inte att skapa konto, kontrollera namn, email, lösenord')
      })

  }

  return (
    <div className="container my-5 m-auto">
      {/* <!-- Section --> */}
      <section>

        {/* <!-- </h4> --> */}
        <hr className="w-header my-4" />

        {errorMsg !== '' ? <div className="container"> 
        <h4 className="text-center"> {errorMsg} </h4>  
        </div>
          : <></>
        }

        <form>
          {/* <!--First row--> */}
          <div className="row d-flex justify-content-center">
            {/* <!--First column--> */}
            <div className="col-6">
              {/* <!-- Material outline input   id="form1"--> */}
              <div className="md-form md-outline form-lg">
                <input type="text"
                  className="form-control form-control-lg"
                  value={firstName}
                  onChange={onChangeFirstName} />
                <label htmlFor="form1">Förnamn</label>
              </div>
              {/* <!-- id="form1" --> */}
              <div className="md-form md-outline form-lg">
                <input type="text"
                  className="form-control form-control-lg"
                  value={lastName}
                  onChange={onChangeLastName} />
                <label htmlFor="form1">Efternamn</label>
              </div>

              {/* <!-- Material outline input id="form2" --> */}
              <div className="md-form md-outline form-lg">
                <input type="text"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={onChangeEmail} />
                <label htmlFor="form2">Email</label>
              </div>

              {/* <!-- Material outline input id="form3" --> */}
              <div className="md-form md-outline form-lg">
                <input type="password"
                  className="form-control form-control-lg"
                  value={passWord}
                  onChange={onChangePassWord} />
                <label htmlFor="form3">Lösenord</label>
              </div>

              <button
                className="btn btn-block btn-primary btn-lg"
                onClick={onSubmit}
              >Registrera</button>
            </div>
            {/* <!--First column--> */}
          </div>
        </form>
        {/* <!--First row--> */}

        <div className="d-flex justify-content-center mt-3">
          <div>
            <p >Har du redan ett konto ?</p>
            <Link to="/login">Logga in</Link>
          </div>

        </div>
      </section>
      {/* <!-- Section --> */}


    </div>
  )
}

export default RegisterUser
