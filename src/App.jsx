import React, { useEffect } from 'react';
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
import LegalTerms from './Pages/LegalTerms/LegalTerms';
import Badge from '@mui/material/Badge';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import {Link} from 'react-router-dom'
import Cart from './Pages/Cart/Cart';
import { useSelector } from 'react-redux';
import {useState} from 'react'
import Navbar2 from './components/Navbar/Navbar2';
import axios from 'axios'




function App() {
  const quantity = useSelector(state => state.cart.quantity)
  const [signedIn, setSignedIn] = useState(false);
  const localAccessToken =  localStorage.getItem('access')
  const localRefreshToken =  localStorage.getItem('refresh')

  
  

  useEffect(() => {

    if(localAccessToken === ''){
      setSignedIn(false)
    }
    const verifyToken = async () => {
      try{
        const res = await axios.post('http://127.0.0.1:8000/accounts/token/verify/', {
        token : localAccessToken
        })
        if(res.status === 200){
          setSignedIn(true)
        }
        else{
          setSignedIn(false)
        }
    
      }
      catch(error){
        console.log(error)
      }
    }

    verifyToken()
    
  },[localAccessToken, signedIn])


  
  return (
    <>
    <Router>
      <Navbar2 signedIn = {signedIn} setSignedIn = {setSignedIn} />
      {/* <Link className="badgeContainer" to = '/cart'>
      <Badge badgeContent={quantity} color="primary">
        <ShoppingCartCheckoutIcon color="action" />
      </Badge>
      </Link> */}
      
          {/* <button className = "badgeContainer" onClick = {logOut}>Log Out</button> */}
      
      <Routes>
        <Route path='/' exact element={<Home />}/>
        <Route path='/design-services' exact element={<DesignService signedIn = {signedIn}/>}/>
        <Route path='/consultancy-service' exact element={<ConsultancyService signedIn = {signedIn}  />}/>
        <Route path='/equipment-rental' exact element={<EquipmentRental signedIn = {signedIn} />}/>
        <Route path='/technicians' exact element={<Technician />}/>
        <Route path='/sign-up' exact element={<SignUp signedIn = {signedIn} setSignedIn = {setSignedIn} />} />
        <Route path='/login' exact element={<Login signedIn = {signedIn} setSignedIn = {setSignedIn} />} />
        <Route path='/postServices'  exact element = {<PostServices signedIn = {signedIn}/>} />
        <Route path = '/contactUs' exact element = {<ContactUs/>} />
        <Route path = '/aboutUs' exact element = {<AboutUs />} />
        <Route path = '/membership' exact element = {<MemberShip />} />
        <Route path = '/legalTerms' exact element = {<LegalTerms />} />
        {/* <Route path = '/cart' exact element = {<Cart />} /> */}
      </Routes>
    </Router>

    
    </>
  );
}

export default App; 