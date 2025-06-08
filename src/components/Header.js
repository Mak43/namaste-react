import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router"

const Header = () => {
  const [btnName, setBtnName] = useState('login');
  useEffect(()=>{
    console.log(" called");
  },[btnName]);
  return (
    <div className="res-header">
      <div className="res-logo">
        <img src={LOGO_URL} alt="rest-logo" />
      </div>
      <div className="res-nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <button className="login-btn" onClick={()=>(btnName === "login" ? setBtnName('logout'): setBtnName('login'))}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
