import "./register.css";
import { useRef} from "react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";

export default function Register() {
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const passwordagain = useRef();
  const history=useNavigate();
  const handleClick = async (e) => {
    e.preventDefault();
    console.log(passwordagain.current.value,password.current.value)
    if(passwordagain.current.value!==password.current.value){
      
      password.current.setCustomValidity("passwords dont match");
    }
    else{
      const user={
        username:username.current.value,
        email:email.current.value,
        password:password.current.value
      }
      try{
      await axios.post("/auth/register",user);
      history("/login");

      }
      catch(err){
        console.log(err);
      }
    }

  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Gnanasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Gnanasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" className="loginInput" ref={username} required/>
            <input placeholder="Email" type="email" className="loginInput" ref={email} required />
            <input placeholder="Password" type="password" className="loginInput" ref={password} required minLength="5" />
            <input placeholder="Password Again" type='password' className="loginInput" ref={passwordagain} required  minLength="5" />
            <button className="loginButton" type="submit" >Sign Up</button>
            <Link to="/login">

            <button className="loginRegisterButton">
              Log into Account
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}