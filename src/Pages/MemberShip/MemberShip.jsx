import React, { useEffect } from 'react'
import './MemberShip.css'
import checkCircle from './check-circle.svg'
import xSquare from './x-square.svg'
import { useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Khalti from '../../components/Payment/Khalti/Khalti'
import Esewa from "../../components/Payment/Esewa/Esewa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};
const MemberShip = ({signedIn}) => {
    const [open1, setOpen1] = React.useState(false);
  const [memberShip, setMemberShip] = useState(false);
  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(!signedIn){
      navigate('/login')
    }
  },[signedIn])

  useEffect(() => {
    const getMemberShip = async() => {
      const response = await axios.get('http://127.0.0.1:8000/membership/get-membership-details')
    
      setMemberShip(response.data)
    }
    getMemberShip()
  },[])

  return (
      <div className="priceComparisionWrapper">
    <section class="price-comparison">
    
      {
        memberShip?.memberships?.map(item => {
          return <div class="price-column"> 
          
          <div class="price-header">
        <div class="price">
          <div class="dollar-sign">Rs</div>
          {item.price}
          <div class="per-month">/{item.membership_validity_in_months} month</div>
        </div>
        <div class="plan-name">{item.membership_tier}</div>
      </div>
      <div class="divider"></div>

      {item?.features?.map(feature => {
        return feature.is_included ?  <div class="feature">
         <img src={checkCircle} alt = "" />
       {feature.feature_name}
      </div> : 

      <div class="feature">
      <img src={xSquare} alt = "" />
      {feature.feature_name}
      </div> 


      })}
      {/* <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature A
      </div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature B
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature C
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature D
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature E
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature F
      </div> */}
      <h3 className = 'membershipH3'>Duration : {item.membership_validity_in_months} Months</h3>
      <button class="cta" onClick = {handleOpen1}>Start Today</button>
      <Modal
            open={open1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h3 style = {{textAlign : "center", marginBottom : "15px" }}>Select Payment Method</h3>
                    <div style = {{display : "flex", alignItems : "center", justifyContent : "space-between"}}>
                    <Khalti />
                    <Esewa />
                    
                    </div>
                </Box>
                </Modal>
          </div>
        })
      }
      
    
   
  </section>
  </div>
  )
}

export default MemberShip