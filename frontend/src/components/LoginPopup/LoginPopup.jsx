import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios"
// import { error } from "console";
const LoginPopup = ({ setShowLogin }) => {

    const {url, setToken}= useContext(StoreContext)
  const [currState, setCurrState] = useState("SignUp");

  const [data,setData]=useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler=(e)=>{
const name=e.target.name;
const value=e.target.value;

setData(data=>({...data,[name]:value}))
  }


  const onLogin= async(e)=>{
e.preventDefault();
  let newUrl;
  if(currState==="Login"){
    newUrl=`${url}/api/user/login`
  }
  else{
    newUrl=`${url}/api/user/register`
  }
  try {
    const response=await axios.post(newUrl, data)
  console.log(response)
  if(response.data.success){
setToken(response.data.token)
localStorage.setItem("token",response.data.token)
setShowLogin(false)
  }
  else{
   alert(response.data.message) 
   console.log(response.data)
  }
  } catch (error) {
    console.log(error)
  }
  }
 
  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder="Your Name" required />
          )}
          <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Your Email" required />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder="Password" required />
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <button type="Submit">{currState === "SignUp" ? "Create account" : "Login"}</button>
        {currState === "Login" ? (
          <p>
            Create a new Account?{" "}
            <span onClick={() => setCurrState("SignUp")}>Click Here</span>
          </p>
        ) : (
          <p>
            ALready have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
