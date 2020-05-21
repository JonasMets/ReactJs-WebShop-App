// 
//  action-authenticate
//  actions för autentisering av användare
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';

// import { useCookies } from 'react-cookie';


export const req = () => {
  return {
    type: actionTypeName().authenticate.REQ
  }
}

export const reqError = (error) => {
  return {
    type: actionTypeName().authenticate.REQ_ERROR,
    payload: error
  }
}


export const login = (token, currentUser)=>{

  // här kommer data från component LoginUser.js
  // om användare finns skickar vi med den datan i payload currentUser{}
  
  
    return{
      type: actionTypeName().authenticate.LOGIN,
      payload:{isAuthenticated: true, token , currentUser} 
    }
  }
  
  export const logout = ()=>{
    return{
      type: actionTypeName().authenticate.LOGOUT,
      // payload: {isAuthenticated: false } 
      payload: false
    }
  }


