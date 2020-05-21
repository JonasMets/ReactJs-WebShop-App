// 
// i den här helper modulen finns setup för att hämta data med axios
// 
import axios from 'axios';
// 
// import jwt from 'jsonwebtoken';

// const role = jwt.decode(sessionStorage.getItem('role'))
// const body = JSON.stringify({ userRole: role })
// console.log(body)
// 
// ,
// 'Authentication': 'bearer ' + sessionStorage.getItem('token') 
// headers: {
//   'Content-Type': 'application/json'
//   ,
//   'Authorization': 'bearer ' + sessionStorage.getItem('token') 
// }
//  http://localhost:9999/api/v1/products
export default axios.create({
  baseURL: 'http://localhost:9999/api/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})







