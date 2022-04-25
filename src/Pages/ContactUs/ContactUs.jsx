import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
      <div className="contactWrapper">
    <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+977 98********</div>
          
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">buildnepal@gmail.com</div>
         
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div class="input-box message-box">
          <textarea name="" id="" cols="30" rows="10" placeholder = "Write message..." />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your phone Number" />
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your address" />
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
  </div>

  )
}

export default ContactUs

