// 
// reducer-authenticate.js
// 

// import { useCookies } from 'react-cookie';



// exporteras som default 
// 
//   här finns "state" för en viss data som ska vara global
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';



// 
import jwt from 'jsonwebtoken';
const secretkey = '2134hkjh123k4jhkjh1234';



// här sätts "start" värden på data
const initState = {
  isAuthenticated: false,
  currentUser: {},
  token: ''
}

// const [cookies, setCookie, removeCookie] = useCookies(['consent', 'shoppingcart','accessToken']);

//  action.type action.payload
export default (state = initState, action) => {



  switch (action.type) {

    case actionTypeName().authenticate.REQ:
      return {
        ...state,
        loading: true,
        error: '',
        token: '',
        currentUser: {}
      }

    case actionTypeName().authenticate.REQ_ERROR:
      return {
        ...state,
        error: action.payload
      }

    case actionTypeName().authenticate.LOGIN:
      // console.log(action.payload)

      try {

        state.loading = false
        state.isAuthenticated = action.payload.isAuthenticated
        state.currentUser = action.payload.currentUser
        state.token = action.payload.token

        // med kryptering // detta ska nog bytas mot cookies 
        sessionStorage.setItem('user', jwt.sign(state, secretkey))
        // token
        sessionStorage.setItem('token', state.token)
        // userRole
        // console.log(state.currentUser.userRole)
        sessionStorage.setItem('role', jwt.sign(state.currentUser.userRole, secretkey))


      } catch (error) {

      }
      return state

    // return {
    //   ...state,
    //   loading: false,
    //   isAuthenticated: action.payload.isAuthenticated,
    //   currentUser: action.payload.currentUser,
    //   token: action.payload.token
    // }

    case actionTypeName().authenticate.LOGOUT:

      try {
        state.loading = false
        state.isAuthenticated = false
        state.currentUser = {}
        state.token = ''
        //  detta ska nog bytas mot cookies   'user'
        sessionStorage.clear()

      } catch (error) {
      }
      return state


    // return {
    //   ...state,
    //   loading: false,
    //   token: '',
    //   currentUser: {}
    // }

    default:
      // return state
      // hämta från localstorage
      let user = jwt.decode(sessionStorage.getItem('user'))
      // console.log(user)

      if (user) {
        return {
          ...state,
          loading: false,
          error: '',
          isAuthenticated: user.isAuthenticated,
          token: user.token,
          currentUser:  user.currentUser
        }
      }
      return state

  }



}










