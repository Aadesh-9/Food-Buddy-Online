import { LOGO_URL } from "./utils/constants";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img id="logo" src={LOGO_URL} />
        <a id="home">Home</a>
        <a>contact us</a>
        <a>About us</a>
        <a id="cart">cart</a>
      </div>
    </header>
  );
};

export default Header;
