import './Login.css'
import {Link} from 'react-router-dom'
const SignUp = () => {
  return (
   <div className="loginContainer">
     <div className="loginWrapper">
        <h1 className="loginTitle">Sign In</h1>
        <form className="loginForm">
        
          <input  className = "formInput" placeholder="Username" />
          <input type = "email" className = "formInput" placeholder="Email" />
          <input type = "password"  className = "formInput" placeholder="Password" />
          
         
          <button className = "loginAccount">Login</button>
          </form>
          <Link to = '/sign-up' className = "newAccount"><span>Don't have an account?</span></Link> 

     </div>
   </div>
  )
}

export default SignUp