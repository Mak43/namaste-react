import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState('login');
  const onlineStatus = useOnlineStatus();
  useEffect(()=>{
    console.log(" called");
  },[btnName]);
  return (
    <div className="flex justify-between shadow border-2 to-black m-2">
      <div className="w-56 m-4 p-4">
        <img src={LOGO_URL} alt="rest-logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-10 px-5">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
          <button className="login-btn" onClick={()=>(btnName === "login" ? setBtnName('logout'): setBtnName('login'))}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
