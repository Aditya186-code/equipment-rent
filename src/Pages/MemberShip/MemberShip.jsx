import React from 'react'
import './MemberShip.css'
import checkCircle from './check-circle.svg'
import xSquare from './x-square.svg'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Khalti from '../../components/Payment/Khalti/Khalti'
import Esewa from "../../components/Payment/Esewa/Esewa";

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
const MemberShip = () => {
    const [open1, setOpen1] = React.useState(false);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);
  return (
      <div className="priceComparisionWrapper">
    <section class="price-comparison">
    <div class="price-column">
      <div class="price-header">
        <div class="price">
          <div class="dollar-sign">Rs</div>
          10
          <div class="per-month">/3 month</div>
        </div>
        <div class="plan-name">Basic</div>
      </div>
      <div class="divider"></div>
      <div class="feature">
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
      </div>
      <h3 className = 'membershipH3'>Duration : 3 Months</h3>
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
    <div class="price-column popular">
      <div class="most-popular">Most Popular</div>
      <div class="price-header">
        <div class="price">
          <div class="dollar-sign">Rs</div>
          20
          <div class="per-month">/6 month</div>
        </div>
        <div class="plan-name">Professional</div>
      </div>
      <div class="divider"></div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature A
      </div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature B
      </div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature C
      </div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature D
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature E
      </div>
      <div class="feature inactive">
        <img src={xSquare} alt = "" />
        Feature F
      </div>
      <h3 className = "membershipH3">Duration : 6 Months</h3>
      <button class="cta"  onClick = {handleOpen1}>Start Today</button>
    </div>
    <div class="price-column">
      <div class="price-header">
        <div class="price">
          <div class="dollar-sign">Rs</div>
          50
          <div class="per-month">/12 month</div>
        </div>
        <div class="plan-name">Enterprise</div>
      </div>
      <div class="divider"></div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature A
      </div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature B
      </div>
      <div class="feature">
        <img src={checkCircle} alt = ""/>
        Feature C
      </div>
      <div class="feature">
        <img src={checkCircle} alt = ""/>
        Feature D
      </div>
      <div class="feature">
        <img src={checkCircle} alt = ""/>
        Feature E
      </div>
      <div class="feature">
        <img src={checkCircle} alt = "" />
        Feature F
      </div>
      <h3 className = "membershipH3">Duration : 12 Months</h3>
      <button class="cta"  onClick = {handleOpen1}>Start Today</button>
    </div>
  </section>
  </div>
  )
}

export default MemberShip