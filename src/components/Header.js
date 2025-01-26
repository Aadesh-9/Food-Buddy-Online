import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/hooks/useUserStatus";

const Header = () => {
  const onlineStatus = useUserStatus();
  return (
    <header>
      <div className="header-container">
        <div className="logo-container">
          <img id="logo" src={LOGO_URL} />
        </div>
        <div className="links">
          <h3>Online status {onlineStatus ? "🟢" : "🔴"}</h3>
          <Link className="Link-tag" to="/" id="home">
            Home
          </Link>
          <Link className="Link-tag" to="./contact">
            contact us
          </Link>
          <Link className="Link-tag" to="./about">
            About us
          </Link>
          <Link className="Link-tag" id="cart">
            cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
