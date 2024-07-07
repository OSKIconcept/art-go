import logo from "@/assets/logo.png";

//icons
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white text-[#161515A3]">
      <div className="flex justify-between items-center mx-auto max-w-[1728px] px-[88px] pt-10 pb-16">
        <img className="w-[105px]" src={logo} />
        <div className="flex gap-[100px] ">
          <div className="flex gap-6 text-2xl">
            <p>Home</p>
            <p className="text-black">Shop</p>
            <p>Collections</p>
            <p>Events</p>
            <p>About</p>
            <p>Search</p>
          </div>
          <div className="text-black flex gap-[32px] text-2xl">
            <IoPersonSharp className="" />
            <div className="flex after:content-['(2)'] after:text-[16px] after:ml-0.5">
              <Link to="/cart">
                <FaShoppingCart className="hover:text-red-600" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
