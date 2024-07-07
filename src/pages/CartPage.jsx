import Carts from "@/components/Carts";

//icons

import { BiSolidLeftArrow } from "react-icons/bi";

const CartPage = () => {
  return (
    <div>
      <div className="flex flex-col gap-[100px]">
        <BiSolidLeftArrow className="" />

        <div className="bg-[#716A63]">
          <div className="text-white gap-14 flex justify-center items-center py-14">
            <h3 className="text-[48px] font-bold">Shopping cart</h3>
            <p className="text-[32px]">Purchases (12)</p>
            <p className="text-[32px]">Cart items (2)</p>
            <p className="text-[32px]">Favourites (32)</p>
          </div>
        </div>
        <Carts />
      </div>
    </div>
  );
};

export default CartPage;
