import logo from "@/assets/logo.png";

//icons
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="bg-white text-[#161515A3]">
      <div className="flex justify-between items-center mx-auto max-w-[1511px] px-[20px] pt-14 pb-6 md:pb-10">
        <img className="lg:w-[105px] md:w-[66px] w-[33px] " src={logo} />
        <div className="flex md:gap-[100px] gap-[20px]  ">
          <div className=" md:gap-6 gap-3 text-2xl hidden md:flex ">
            <p>Home</p>
            <p className="text-black">Shop</p>
            <p>Collections</p>
            <p>Events</p>
            <p>About</p>
            <p>Search</p>
          </div>
          <div className="text-black flex md:gap-[32px] gap-[24px] text-2xl">
            <IoMenu className="block md:hidden text-[24px] md:text-[32px] lg:text-[40px]" />

            <IoPersonSharp className="text-[24px] md:text-[32px] lg:text-[40px]" />
            <div className="flex after:content-['(2)'] after:text-[16px] after:ml-0.5">
              <Link to="/cart">
                <FaShoppingCart className="hover:text-red-600 text-[24px] md:text-[32px] lg:text-[40px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
