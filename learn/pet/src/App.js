import React from 'react';
import { Button } from '@material-ui/core'; // Example import
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Login from './component/Login';
import Registration from './component/Registration';
import Navigation from './component/Navigation';
// import TextBoxComponent from './component/TextBoxComponent';
import Car from './component/Carinfo';
// import Sum from './component/Sum';
import Blog from './component/Blog';
import Pricing from './component/pricing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Container, AppBar, Toolbar } from '@material-ui/core';
import Logout from './component/Logout';
import Profile from './component/Profile';
// import Demoaxios from './component/Demoaxios';
import AccountPage from './component/Account';
import Dashboard from './component/Dashboard';
function App() {
  // const Cars=["Benz","Ferrari","Lamborge","BMW"]
  return(
    <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" style={{ width:"40px", height:"40px" }} />&nbsp;
          <p>Pet Adoption & Accessories Management System </p>
        </div >
        {/* <div align="center">
          <Car myLists={Cars}/>
        </div> */}
        <div className="App-body">
          <Container>
            
            <Navigation />&nbsp;&nbsp;&nbsp;
            {/* <TextBoxComponent /> */}
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/reg' element={<Registration />} />
                <Route path='/pri' element={<Pricing/>}/>
                <Route path='/blo' element={<Blog/>}/>
                <Route path='/logo' element={<Logout/>}/>
                <Route path='/prof' element={<Profile/>}/>
                <Route path='/acco' element={<AccountPage/>}/>
                <Route path='/dash' element={<Dashboard/>}/>
                {/* <Route path='/dem' element={<Demoaxios/>}/>  */}
              </Routes>
            </BrowserRouter>
          </Container>
          
        </div>
      
    </div>
  );
}

export default App;
