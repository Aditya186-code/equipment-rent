import React from 'react'
import './PostServices.css'


const PostServices = () => {
  return (
    // <div className ="postServicesContainer">
      
    //     <form action="" className = "postServiceForm">
    //     <h1 className = "postServiceHeading">Post Your Service</h1>
    //         <div className = "fields">
    //         <label className = "postServiceLabel" htmlFor="services">Service: </label>
    //         <select className = "fieldsSelect" name="services" id="services">
    //             <option className = "fieldsOption" value="designServices">Design Services</option>
    //             <option  className = "fieldsOption" value="equipmentRental">Equipment Rental</option>
    //             <option  className = "fieldsOption"value="consultancyServices">Consultancy Services</option>
    //         </select>
    //     </div>
    //     <div className="fields">
    //         <label className = "postServiceLabel" htmlFor="">Name of Service: </label>
    //         <input className = "fieldsInput" type="text"  />
    //     </div>
    //     <div className = "fields">
    //         <label htmlFor="Description" className = "postServiceLabel">Description</label>
    //         <textarea className = "fieldsTextArea" name="" id="Description" cols="30" rows="5" />
    //     </div>
        

    //     <div className = "fields">
    //         <label htmlFor="Description" className = "postServiceLabel">Cost:</label>
    //         <input style = {{fontSize : "18px"}}className = "fieldsInput" type="number"  />
    //     </div>
    //     <div style = {{display : "flex", justifyContent : "center"}}>
    //     <button  className = "fieldsButton">Submit</button>
    //     </div>
    //     </form>
    // </div>


<div className="contactWrapper">
    <div class="container">
    <div class="content">
      <div class="right-side">
        <h1>Post Your Service</h1>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Name of Service" />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Link for thumbnail(image link)" />
        </div>
        <div class="input-box message-box">
          <textarea name="" id="" cols="30" rows="10" placeholder = "Write Description..." />
        </div>
        <div className = "input-box">
            <label htmlFor="services" style = {{marginRight : "10px"}}>Service: </label>
             <select className = "fieldsSelect" name="services" id="services">
                <option className = "fieldsOption" value="designServices">Design Services</option>
                 <option  className = "fieldsOption" value="equipmentRental">Equipment Rental</option>
                 <option  className = "fieldsOption"value="consultancyServices">Consultancy Services</option>
             </select>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Price in Rs" />
        </div>
        <div class="button">
          <input type="button" value="Post Service" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>
  )
}

export default PostServices