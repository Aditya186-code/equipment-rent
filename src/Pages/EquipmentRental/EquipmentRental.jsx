import EquipmentRentalData from "../../data/EquipmentRentalData";
import './EquipmentRental.css'
const EquipmentRental = () => {
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
              <div className="bttn">Add to cart</div>
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