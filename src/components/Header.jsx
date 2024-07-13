import logo from "@/assets/logo.png";

//icons
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

<AiOutlineClose />;

const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-white text-[#161515A3]">
      <div className="flex justify-between items-center mx-auto max-w-[1511px] px-[20px] sm:pt-14 pt-10 pb-6 md:pb-10">
        <Link to="/">
          <img className="lg:w-[105px] md:w-[66px] w-[33px] " src={logo} />
        </Link>
        <div className="flex md:gap-[80px] lg:gap-[100px] gap-[20px]  ">
          <div className=" md:gap-6 gap-3 text-2xl hidden md:flex ">
            <p>Home</p>
            <p className="text-black">Shop</p>
            <p>Collections</p>
            <p>Events</p>
            <p>About</p>
            <p>Search</p>
          </div>
          <div className="text-black flex md:gap-[32px] gap-[24px] text-2xl">
            <div
              className="cursor-pointer block md:hidden text-[24px] md:text-[32px] lg:text-[40px]"
              onClick={() => setNav((open) => !open)}
            >
              {nav ? "" : <IoMenu />}
            </div>

            <div
              className={
                nav
                  ? " fixed top-0 left-0 h-screen   bg-white w-[60%] px-10  py-12 flex flex-col gap-10  ease-in-out duration-500 isolate  md:hidden border-r border-gray-200"
                  : " fixed left-[-100%] ease-in-out duration-500 h-screen top-0    bg-white w-[60%] px-10  py-12 flex flex-col gap-10 z-10 isolate  md:hidden"
              }
            >
              <div className="flex justify-between items-center">
                <img
                  className="lg:w-[105px] md:w-[66px] w-[33px] "
                  src={logo}
                />
                <div
                  className="cursor-pointer block md:hidden text-[24px] md:text-[32px] lg:text-[40px]"
                  onClick={() => setNav((open) => !open)}
                >
                  {nav ? <AiOutlineClose /> : <IoMenu />}
                </div>
              </div>
              <div className="font-clash gap-5">
                <p className="text-[16px] hover:text-[18px] cursor-pointer">
                  Home
                </p>
                <p className="text-black font-bold text-[16px] hover:text-[18px] cursor-pointer ">
                  Shop
                </p>
                <p className="text-[16px] hover:text-[18px] cursor-pointer">
                  Collections
                </p>
                <p className="text-[16px] hover:text-[18px] cursor-pointer">
                  Events
                </p>
                <p className="text-[16px] hover:text-[18px] cursor-pointer">
                  About
                </p>
                <p className="text-[16px] hover:text-[18px] cursor-pointer">
                  Search
                </p>
              </div>
            </div>

            <IoPersonSharp className="text-[24px] md:text-[32px] lg:text-[40px]" />
            <div className="flex after:content-['(2)'] after:text-[16px] after:ml-0.5">
              <Link to="/cart">
                <FaShoppingCart className="hover:text-gray-800 text-[24px] md:text-[32px] lg:text-[40px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
