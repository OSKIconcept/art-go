//

import { MdCancel } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";
import useCart from "@/context/CartContext";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import { toast } from "sonner";
///keys

// const data = [
//   {
//     image: people,
//   },

//   {
//     image: sun,
//   },
// ];

const CartItems = () => {
  const { cart, removeFromCart, increaseItemQuantity, reduceItemQuantity } =
    useCart();

  ///data fetching

  if (cart.length === 0)
    return (
      <div className="animate-pulse font-clash font-bold  py-6 md:py-16">
        <h3> Cart is Empty</h3>
      </div>
    );

  return (
    <div className="w-full">
      {cart.map((item, i) => (
        <div
          key={i}
          className="flex justify-start lg:gap-6 md:gap-2 gap-2 md:pb-[100px] pb-[32px]   "
        >
          <h3>
            <IoIosCheckbox className="" />
          </h3>
          <img
            className="md:w-[320px] lg:w-[540px] w-[140px] h-[160px] md:h-[320px] lg:h-[540px] object-cover "
            src={`http://api.timbu.cloud/images/${item.photos[0].url}`}
          />
          <div className="flex md:gap-4 gap-0.5 justify-start items-start">
            <div className="md:pl-8 pl-3">
              <h3 className="font-bold font-clash">Silence</h3>
              <div className=" flex flex-col md:gap-2  justify-start">
                <p className="font-bold">
                  Type:{" "}
                  <span className="font-normal md:ml-2 ml-0.5">
                    Digital art
                  </span>
                </p>

                <p className="font-bold">
                  Category:{" "}
                  <span className="font-normal md:ml-2 ml-0.5">People</span>
                </p>

                <p className="font-bold">
                  Dimensions:{" "}
                  <span className="font-normal md:ml-2 ml-0.5">
                    172.7 W x 172.7 H x 0.3 D cm
                  </span>
                </p>

                <p className="font-bold">
                  Year of creation:{" "}
                  <span className="font-normal md:ml-2 ml-0.5">2016</span>
                </p>

                <div className="flex gap-3 justify-start items-center text-2xl">
                  <p>Quantity:</p>
                  <div className="flex  md:gap-[30px] gap-[15px] border justify-center items-center md:px-5 px-2 md:py-2 py-[1px] md:ml-3 ml-1.5  ">
                    <button
                      disabled={item.quantity <= 1}
                      onClick={() => reduceItemQuantity(item)}
                      className="md:text-[23.5px] text-[12px]   cursor-pointer"
                    >
                      <LuMinusCircle />
                    </button>
                    <p className="text-[13.5px] md:text-[28px]">
                      {item.quantity}
                    </p>

                    <button
                      disabled={item.quantity >= item.available_quantity}
                      onClick={() => increaseItemQuantity(item)}
                      className="md:text-[24px] text-[12.5px] cursor-pointer"
                    >
                      <LuPlusCircle />
                    </button>
                  </div>
                </div>
              </div>

              <p className="lg:text-[16px] md:text-[10px] text-[4px] text-[#289F51] md:pt-4 pt-2">
                Guaranteed arrival on 14th July if you order today
              </p>

              <h3 className="font-bold  md:pt-3 pt-0.5 ">${item.total}</h3>
            </div>
            <p className="cursor-pointer">
              <div
                onClick={() => {
                  removeFromCart(item);
                  toast.error("item removed to cart");
                }}
              >
                <MdCancel
                  className=""
                  onClick={() => removeFromCart(item.unique_id)}
                />
              </div>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
