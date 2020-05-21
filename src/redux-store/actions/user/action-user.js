// 
//  action-user.js
//  actions för user/kund 
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';

// importera axios
// import axios from '../../../helpers/helperAxios';

//  funktioner för att sätta state i reducer 
// 

//
export const req = () => {
  return {
    type: actionTypeName().userAction.REQ
  }
}

export const reqError = (error) => {
  return {
    type: actionTypeName().userAction.REQ_ERROR,
    payload: error
  }
}



//  ADD_USER
// 
//  behövs den här ?
// 
// här ska vi anropa api och skicka vidare en ny användare
// om allt gått bra
// skicka response till  componenten om status
// 
export const createNewUser = (newUser) => {
  // console.log(newUser)

  // här innanför ligger async anrop
  return  dispatch => {

    if (newUser) {
      
    }

  }

}
//  slut på ADD_USER action








