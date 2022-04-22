import ConsultancyServiceData from "../../data/ConsultancyServiceData";
import './ConsultancyService.css'
const DesignService = () => {
  console.log(ConsultancyServiceData);
  const listItems = ConsultancyServiceData.map((item) =>
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
      <div className="consultContainer">
         <h3>Consultancy Services</h3>
        <div className="main_content">
           
           

            {listItems}
            
        </div>
        </div>
    )
}
export default DesignService;