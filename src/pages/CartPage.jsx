import Carts from "@/components/Carts";

//icons

import { BiSolidLeftArrow } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartPage = () => {
  return (
    <div className="mx-auto   flex flex-col  ">
      <div className="px-[88px]">
        <Link to="/">
          <BiSolidLeftArrow className="text-[22px]" />
        </Link>
      </div>

      <div className="text-white gap-14 flex justify-center items-center bg-[#716A63] py-14 w-full">
        <h3 className="text-[48px] font-bold">Shopping cart</h3>
        <p className="text-[32px]">Purchases (12)</p>
        <p className="text-[32px]">Cart items (2)</p>
        <p className="text-[32px]">Favourites (32)</p>
      </div>

      <div className="">
        <Carts />
      </div>
    </div>
  );
};

export default CartPage;
