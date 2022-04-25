import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import ConsultancyService from './Pages/ConsultancyService/ConsultancyService'
import DesignService from './Pages/DesignService/DesignService'
import EquipmentRental from './Pages/EquipmentRental/EquipmentRental'
import Technician from './Pages/Technician/Technician'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login';
import PostServices from './Pages/PostServices/PostServices';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import MemberShip from './Pages/MemberShip/MemberShip';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/design-services' exact element={<DesignService />}/>
        <Route path='/consultancy-service' exact element={<ConsultancyService />}/>
        <Route path='/equipment-rental' exact element={<EquipmentRental />}/>
        <Route path='/technicians' exact element={<Technician />}/>
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/postServices' exact element = {<PostServices />} />
        <Route path = '/contactUs' exact element = {<ContactUs/>} />
        <Route path = '/aboutUs' exact element = {<AboutUs />} />
        <Route path = '/membership' exact element = {<MemberShip />} />
      </Routes>
    </Router>

    
    </>
  );
}

export default App; 