import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img id="logo" src={LOGO_URL} />
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
    </header>
  );
};

export default Header;
