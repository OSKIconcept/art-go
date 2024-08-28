import bottle from "@/assets/bottle.png";
import butterfly from "@/assets/butterfly.png";
import cartt from "@/assets/cartt.png";
import heartt from "@/assets/heartt.png";

//icons used
// import { IoIosCheckbox } from "react-icons/io";
import { BiSolidRightArrow } from "react-icons/bi";

import { PiLineVertical } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaAngleDoubleLeft } from "react-icons/fa";
import CartItems from "./CartItems";

import useCart from "@/context/CartContext";
import { toast } from "sonner";

const Carts = () => {
  const { cart, clearCart, total } = useCart();
  return (
    <div className="mx-auto flex-col justify-center items-center md:pt-[80px] pt-[28px] max-w-[1511px] px-[20px]  ">
      <div className="text-[#161515A3] flex gap-[4px] md:gap-[16px] items-center md:pb-8 pb-4 justify-start ">
        <h3>
          <FaAngleDoubleLeft className="text-bold" />
        </h3>
        <Link to="/">
          <h3 className="font-bold">Back to shop</h3>
        </Link>
      </div>
      {/*<CartItems />*/}
      <CartItems />
      <div className="flex items-center justify-start md:pb-10 pb-3.5 w-[90%]">
        <div className="text-[40px] text-black text-center font-bold md:px-[55px] px-[20px] md:py-4 py-1.5 border-[#161515A3] border ">
          <h3 className="font-clash text-[10px] sm:text-[15px] md:text-[22px] lg:text-[40px]">
            Total: $ {total}
          </h3>
        </div>

        <div className="text-[40px] text-white text-center font-bold md:px-[56px] px-[21px] md:py-[17px] py-[7px] bg-black hover:bg-gray-800 cursor-pointer ">
          <h3 className="font-clash text-[10px] sm:text-[15px] md:text-[22px] lg:text-[40px]">
            <Link to="/checkout"> Proceed to checkout ({cart.length})</Link>
          </h3>
        </div>
      </div>
      <p className="text-[#289F51] font-bold font-clash ">
        Delivery fee included
      </p>

      <div className="flex pt-3 md:pt-6">
        <div
          onClick={() => {
            clearCart();
            toast.error("cart empty");
          }}
          className="text-[40px] text-black hover:text-white text-center font-bold md:px-[40px] px-[16px] md:py-[13px] py-[5px] border border-gray-800 hover:bg-gray-800 ease-in-out duration-500 cursor-pointer  "
        >
          <p className="font-clash ">Clear cart</p>
        </div>
      </div>

      <div className="md:py-[60px] py-[30px] md:gap-[30px] gap-[10px] flex flex-col w-[90%]">
        <h3 className=" font-bold font-clash">More from Digital Art</h3>
        <div className="flex items-center justify-start md:gap-2 gap-1">
          <div className=" flex flex-col md:gap-6 gap-3">
            <img className="w-[88%]" src={bottle} />
            <div className="flex   justify-between items-center w-[85%]   ">
              <div className="flex gap-1.2 justify-center items-center">
                <p className="font-bold lg:text-[32px] md:text-[18px] sm:text-[14px] text-[8px]">
                  Magic
                </p>
                <h3>
                  {" "}
                  <PiLineVertical className="" />
                </h3>
                <p className="lg:text-[32px] text-[8px] md:text-[18px] sm:text-[14px]">
                  $3000
                </p>
              </div>
              <div className="flex md:gap-5 gap-2.5">
                <img
                  className="lg:w-[32px] w-[12px] md:w-[20px] lg:h-[32px] h-[12px] md:h-[20px] "
                  src={heartt}
                />
                <img
                  className="lg:w-[32px] w-[12px] md:w-[20px] lg:h-[32px] h-[12px] md:h-[20px]"
                  src={cartt}
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:gap-6 gap-3">
            <img className="w-[88%]" src={butterfly} />
            <div className="flex w-[85%] justify-between items-center">
              <div className="flex gap-1.2 justify-center items-center">
                <p className="font-bold lg:text-[32px] md:text-[18px] text-[8px] sm:text-[14px]">
                  Magic
                </p>
                <h3>
                  {" "}
                  <PiLineVertical className="" />
                </h3>
                <p className="lg:text-[32px] text-[8px] md:text-[18px] sm:text-[14px]">
                  $3000
                </p>
              </div>
              <div className="flex md:gap-5 gap-2.5">
                <img
                  className="lg:w-[32px] w-[12px] md:w-[20px] lg:h-[32px] h-[12px] md:h-[20px] "
                  src={heartt}
                />
                <img
                  className="lg:w-[32px] w-[12px] md:w-[20px] lg:h-[32px] h-[12px] md:h-[20px]"
                  src={cartt}
                />
              </div>
            </div>
          </div>
          <div className="md:pl-3 pl-1">
            <Link to="/">
              <BiSolidRightArrow className="md:w-[41.67px] md:h-[83.33px] w-[12.33px] h-[20.67px] " />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
