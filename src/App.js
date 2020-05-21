import React from 'react';

// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navigation/Navbar';

// importerar componenter som visas när link anropas
import NotFound from './views/notFound/NotFound';
import LandingPage from './views/home/LandingPage';
import Products from './views/products/Products';
import ProductDetails from './views/products/ProductDetails';
import RegisterUser from './views/registerUser/RegisterUser';
import LoginUser from './views/login/LoginUser';

import ProtectedRoute from './routes/ProtectedRoute';
// endast inloggad
import CheckOut from './views/checkOut/CheckOut';
import CheckOutSuccess from './views/checkOut/CheckOutSuccess';
import CustomerOrders from './views/customerOrders/CustomerOrders';
import CustomerProfile from './views/customerProfile/CustomerProfile';
// endast admin
import AdminPage from './views/admin/AdminPage';
import AdminCustomerList from './components/adminComponents/customers/AdminCustomerList';
import AdminCustomerOrdersList from './components/adminComponents/orders/AdminCustomerOrdersList';
import AdminCustomerOrderEdit from './components/adminComponents/orders/AdminCustomerOrderEdit';
import AdminEditCustomer from './components/adminComponents/customer/AdminEditCustomer';


function App() {
  return (
    <BrowserRouter className="App">
      {/* navbar ska alltid visas */}
      <Navbar />

      {/* alla länkar med "Route" visas separat när de anropas */}
      <Switch>
        {/* homepage */}
        <Route path="/" exact component={LandingPage}></Route>
        {/* produktsida  Products*/}
        <Route path="/products" exact component={Products} ></Route>
        <Route path="/products/details/:id" exact component={ProductDetails} ></Route>
        {/* skapa en användare */}
        <Route path="/register" exact component={RegisterUser} ></Route>

        {/* logga in en användare */}
        <Route path="/login" exact component={LoginUser} ></Route>




        {/*  visas om man är inloggad */}
        <ProtectedRoute path="/checkout" exact component={CheckOut} ></ProtectedRoute>
        <ProtectedRoute path="/checkout/CheckOutSuccess" exact component={CheckOutSuccess} ></ProtectedRoute>
        <ProtectedRoute path="/customerorders/:id" exact component={CustomerOrders} ></ProtectedRoute>
        <ProtectedRoute path="/customerprofile" exact component={CustomerProfile} ></ProtectedRoute>
        {/* här ska bara sidor visas om man är inloggad */}

        {/*  visas om man är inloggad admin*/}
        <ProtectedRoute path="/admin" exact component={AdminPage} ></ProtectedRoute>
        <ProtectedRoute path="/admin/admincustomerlist" component={AdminCustomerList} ></ProtectedRoute>
        <ProtectedRoute path="/admin/admincustomerorderslist/:id" exact component={AdminCustomerOrdersList} ></ProtectedRoute>
        <ProtectedRoute path="/admin/admincustomerorderedit/:_id,:_userid" exact 
        component={AdminCustomerOrderEdit} ></ProtectedRoute>
        <ProtectedRoute path="/admin/admineditcustomer/:_id" exact component={AdminEditCustomer} ></ProtectedRoute>

        {/*  visas om man är inloggad admin*/}





        {/* om ingen sida finns med "rätt" route link */}
        <Route path="*" component={NotFound} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
