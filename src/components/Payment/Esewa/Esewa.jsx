import React from 'react'
import './Esewa.css'
var path="https://uat.esewa.com.np/epay/main";
var params= {
    amt: 100,
    psc: 0,
    pdc: 0,
    txAmt: 0,
    tAmt: 100,
    pid: "ee2c3ca1-696b-4cc5-a6be-2c40d929d453",
    scd: "EPAYTEST",
    su: "http://merchant.com.np/page/esewa_payment_success",
    // fu: "http://merchant.com.np/page/esewa_payment_failed"
    fu : "http://localhost:3000"
}

const Esewa = () => {
  return (
    
    <form className = "esewaForm" action={path} method = "POST">
    {  Object.entries(params).map(([key, value]) => {
        return <input type = "hidden" value = {value} name = {key}/>
      })}
       <button type = "submit" style = {{cursor : "pointer", border : "none", outline : "none"}}>
                        <img style = {{width : "130px", objectFit : "cover", height : "40px"}} src="https://i2.wp.com/insidergeeks.com/wp-content/uploads/2020/09/eSewa-Digital-Wallet-Nepal.jpeg?resize=696%2C464&ssl=1
                    " alt="" />                    
                        
                    </button>


    </form>
   
 )
}

export default Esewa