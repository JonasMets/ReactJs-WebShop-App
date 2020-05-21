// 
// reducer för users
// exporteras som default 
// 
//   här finns "state" för en viss data som ska vara global
// 
// importerar actionTypeName som innehåller namn på actions
import { actionTypeName } from '../../storeActionTypes';



// här sätts ett "start" värde för vad orderreducer ska innehålla första gången
const initState = {
  user: {},
  userToken: "",
  isUserLoggedIn: false,
  userRole:'',
  loading: false,
  error: ''
}



//  action.type action.payload
export default (state = initState, action) => {

  switch (action.type) {

    case actionTypeName().userAction.REQ:
      return {
        ...state,
        loading: true
      }

      case actionTypeName().userAction.REQ_ERROR:
        return{
          ...state,
          error: action.payload
        }

    case actionTypeName().userAction.ADD_USER:
      return {
        ...state
      }

    case actionTypeName().userAction.GET_USER:
      return {
        ...state
      }

    case actionTypeName().userAction.UPPDATE_USER:
      return {
        ...state
      }

    case actionTypeName().userAction.DELETE_USER:
      return {
        ...state
      }
    


    default:
      return state
  }

}




