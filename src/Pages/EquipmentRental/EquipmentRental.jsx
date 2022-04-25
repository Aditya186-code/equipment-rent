import EquipmentRentalData from "../../data/EquipmentRentalData";
import './EquipmentRental.css'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react'
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
  

const EquipmentRental = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  console.log(EquipmentRentalData);
  const listItems = EquipmentRentalData.map((item) =>
      <div className="card" key={item.id}>
          <div className="card_img">
              <img src={item.thumb} alt = "" />
          </div>
          <div className="card_header">
              <h2>{item.product_name}</h2>
              <p>{item.description}</p>
              <p className="price">${item.price}<span>{item.currency}</span></p>
              <button className="bttn" onClick = {handleOpen}>Add To Cart</button>
                <Modal
                open={open}
                onClose={handleClose}
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
      </div>

    );  
    return (
      <div className="equipmentRentalContainer">
         <h3>Equipment Rental</h3>
        <div className="main_content">
            {listItems}
            
        </div>
        </div>
    )
}
export default EquipmentRental;