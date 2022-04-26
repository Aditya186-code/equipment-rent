import './SignUp.css'
import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUp = ({signedIn, setSignedIn}) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [name, setName] = useState("")
  // const [token, setToken] = useState("")

  useEffect(() => {
    if(signedIn){
      navigate('/')
    }
  },[signedIn])

  const handleClick = async(e) => {
    
    e.preventDefault();
    // console.log(email, password, username, confirmPassword, name)
   const response =  await axios.post('http://127.0.0.1:8000/accounts/signup/', {
      email : email,
      password : password,
      username : username,
      confirmPassword : confirmPassword,
      full_name : name
    })
    console.log(response.data)
    

    
    navigate('/login')
  }


  return (
   <div className="signUpContainer">
     <div className="signUpWrapper">
        <h1 className="signUpTitle">SIGN UP</h1>
        <form className="signUpForm">
        <input value = {name} onChange = {(e) => setName(e.target.value)} className = "formInput" placeholder="Name" />
          <input value = {username} onChange = {(e) => setUsername(e.target.value)} className = "formInput" placeholder="Username" />
          <input  value = {email} onChange = {(e) => setEmail(e.target.value)} type = "email" className = "formInput" placeholder="Email" />
          <input value = {password}  onChange = {(e) => setPassword(e.target.value)} type = 'password'  className = "formInput" placeholder="Password" />
          <input value = {confirmPassword} onChange = {(e) => setConfirmPassword(e.target.value)} type = 'password' className = "formInput" placeholder="Confirm Password" />
          <span className = "agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button onClick = {handleClick} className = "createAccount">Create account</button>
          </form>
          <Link to = '/login' className = "alreadyAccount"><span>Already have an account? Click To Login!</span></Link> 

     </div>
   </div>
  )
}

export default SignUp