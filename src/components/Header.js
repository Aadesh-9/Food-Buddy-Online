import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/hooks/useUserStatus";

const Header = () => {
  const onlineStatus = useUserStatus();
  return (
    <header className="bg-gray-800">
      <div className=" flex justify-between items-center p-2 border-1 border-black border-solid ">
        <div className="w-50vw">
          <img src={logo} className="w-28 p-1 rounded-lg" />
        </div>
        <div
          className="flex justify-end items-center
         p-4"
        >
          <h3>Online status {onlineStatus ? "  🟢  " : "  🔴  "}</h3>
          <Link className="mx-12" to="/" id="home">
            Home
          </Link>
          <Link className="mx-12" to="./contact">
            contact us
          </Link>
          <Link className="mx-12" to="./about">
            About us
          </Link>
          <Link className="mx-12" id="cart">
            cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
