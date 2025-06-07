import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";


const Header = () => {
  const [btnName, setBtnName] = useState('login');
  return (
    <div className="res-header">
      <div className="res-logo">
        <img src={LOGO_URL} alt="rest-logo" />
      </div>
      <div className="res-nav-items">
        <ul>
          <li>home</li>
          <li>About</li>
          <li>Jouney</li>
          <button className="login-btn" onClick={()=>(btnName === "login" ? setBtnName('logout'): setBtnName('login'))}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
