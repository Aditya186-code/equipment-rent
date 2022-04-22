import './SignUp.css'
import {Link} from 'react-router-dom'
const SignUp = () => {
  return (
   <div className="signUpContainer">
     <div className="signUpWrapper">
        <h1 className="signUpTitle">SIGN UP</h1>
        <form className="signUpForm">
        <input className = "formInput" placeholder="Name" />
          <input  className = "formInput" placeholder="Username" />
          <input  className = "formInput" placeholder="Email" />
          <input  className = "formInput" placeholder="Password" />
          <input  className = "formInput" placeholder="Confirm Password" />
          <span className = "agreement">
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </span>
          <button className = "createAccount">Create account</button>
          </form>
          <Link to = '/login' className = "alreadyAccount"><span>Already have an account?</span></Link> 

     </div>
   </div>
  )
}

export default SignUp