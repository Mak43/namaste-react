import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
