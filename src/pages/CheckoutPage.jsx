//icon
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="mx-auto justify-center items-center  ">
      <div className="bg-[#716A63] px-[20px] py-[11px] md:py-[19px] w-full ">
        <div className="flex justify-center items-center max-w-[1511px] lg:gap-[150px] gap-[18px] md:gap-[80px]  mx-auto ">
          <h3 className=" text-white font-bold font-clash ">Checkout</h3>
          <div className=" md:gap-[12px] gap-[3px] text-[#FFFFFFA3] flex justify-center items-center ">
            <Link to="/">
              <p className="text-[7px] sm:text-[8px] md:text-[16px] lg:text-[24px]">
                Back to shop
              </p>
            </Link>
            <p className="text-[7px] sm:text-[8px] lg:text-[24px] md:text-[16px]">
              <MdOutlineDoubleArrow />
            </p>
            <Link to="/cart">
              <p className="text-[7px] sm:text-[8px] lg:text-[24px] md:text-[16px]">
                Back to cart
              </p>
            </Link>
            <p className="text-[7px] sm:text-[8px] md:text-[24px]">
              <MdOutlineDoubleArrow />
            </p>
            <p className="text-white text-[7px] sm:text-[8px] lg:text-[24px] md:text-[16px]">
              Payment
            </p>
            <p className="text-[7px] sm:text-[8px] md:text-[24px]">
              <MdOutlineDoubleArrow className="text-white" />
            </p>
            <p className="text-[7px] sm:text-[8px] lg:text-[24px] md:text-[16px]">
              Confimation
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1511px] px-[20px]">
        <div className=" pb-3 pt-8 ">
          <div className="flex md:gap-[250px] gap-[80px] items-center justify-start pb-6">
            <h2 className="font-bold font-clash ">Shipping details</h2>
            <div className="flex gap-2 border justify-center items-center md:p-3 p-2  ">
              <p>Change address</p>

              <IoMdArrowDropdown />
            </div>
          </div>

          <div className="flex justify-start md:gap-6 gap-3 border-b ">
            <div className="font-bold">
              <p>Paul Atreides</p>
              <p>15 New World Estate</p>
              <p>Beverly Hills, Carlifornia</p>
              <p>U.S.A</p>
            </div>
            <p className="font-bold">Paulatreides@gmail.com</p>
          </div>
        </div>

        <div className="">
          <div className="pb-12">
            <div className="flex md:gap-[200px] gap-[100px] items-center justify-start pb-6">
              <h2 className="font-clash   font-bold ">Your order (2 items)</h2>
              <div className="border md:p-3 p-2">
                <p>Edit order</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="font-bold font-clash">1. Silence</h2>
              <div className="flex flex-col gap-1 md:2">
                <p className="font-bold">
                  Type: <span className="font-normal">Digital art</span>
                </p>
                <p className="font-bold">
                  Category: <span className="font-normal">People</span>
                </p>
                <p className="font-bold">
                  Dimensions:{" "}
                  <span className="font-normal">
                    172.7 W x 172.7 H x 0.3 D cm
                  </span>
                </p>
                <p className="font-bold">
                  Year of creation: <span className="font-normal">2016</span>
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-start items-center text-2xl md:pt-2 pt-1">
              <p>Quantity:</p>
              <div className="flex gap-[18px] border justify-center items-center md:px-5 px-3 md:py-2 py-0.5 md:ml-3 ml-1.5  ">
                <p>1</p>

                <IoMdArrowDropdown className="text-[16px] md:text-2xl" />
              </div>
            </div>

            <p className="text-[#289F51] text-[4px] md:text-[8px] lg:text-[16px] pt-2">
              Guaranteed arrival on 14th July if you order today
            </p>
            <h3 className="font-bold font-campton pt-2">$3000</h3>
          </div>

          <div className="pb-4 ">
            <div className="flex flex-col gap-3 md:gap-4">
              <h2 className="font-bold font-clash">2. Ethereal</h2>
              <div className="flex flex-col gap-1 md:2">
                <p className="font-bold">
                  Type: <span className="font-normal">Digital art</span>
                </p>
                <p className="font-bold">
                  Category: <span className="font-normal">People</span>
                </p>
                <p className="font-bold">
                  Dimensions:{" "}
                  <span className="font-normal">
                    172.7 W x 172.7 H x 0.3 D cm
                  </span>
                </p>
                <p className="font-bold">
                  Year of creation: <span className="font-normal">2016</span>
                </p>
              </div>
            </div>

            <div className="flex gap-3 justify-start items-center text-2xl md:pt-2 pt-1">
              <p>Quantity:</p>
              <div className="flex gap-[18px] border justify-center items-center md:px-5 px-3 md:py-2 py-0.5 md:ml-3 ml-1.5  ">
                <p>1</p>

                <IoMdArrowDropdown className="text-[16px] md:text-2xl" />
              </div>
            </div>

            <p className="text-[#289F51] text-[4px] md:text-[8px] lg:text-[16px] pt-2">
              Guaranteed arrival on 14th July if you order today
            </p>
            <h3 className="font-bold font-campton py-2 border-b">$3000</h3>
          </div>

          <div className="md:py-8 py-4">
            <h2 className="font-bold pb-3 md:pb-4 font-clash">
              Payment details
            </h2>
            <div className="pb-1 md:pb-3">
              <h3 className="md:pb-2 pb-1">Card name</h3>
              <div className="font-bold md:py-3 py-2.5 md:px-6 px-3 border border-[#16151533]  w-[60%] text-left mb-4">
                <h3>Paul Atreids</h3>
              </div>
            </div>

            <div>
              <h3 className="md:pb-2 pb-1">Card number</h3>
              <div className="font-bold md:py-3 py-2.5 md:px-6 px-3 border border-[#16151533] w-[60%] text-left ">
                <h3>1234 5678 9012 3245</h3>
              </div>
            </div>

            <div className="flex justify-between items-center gap-5 md:gap-7 pt-4 md:pt-9">
              <div className="w-1/2">
                <h3 className="md:pb-2 pb-1">Valid through</h3>
                <div className="font-bold md:py-3 py-2.5 md:px-6 px-3 border border-[#16151533]   text-left ">
                  <h3>06/29</h3>
                </div>
              </div>

              <div className="w-1/2">
                <h3 className="md:pb-2 pb-1">CVC</h3>
                <div className="font-bold md:py-3 py-2.5 md:px-6 px-3 border border-[#16151533]   text-left ">
                  <h3>220</h3>
                </div>
              </div>
            </div>

            <p className="text-[#289F51] pt-3 ">
              Choose another payment method
            </p>
          </div>
        </div>
      </div>

      <div className="items-center justify-center flex font-clash md:pb-12 pb-6">
        <div className="text-white md:px-8 px-4 md:py-3 py-1.5 bg-black">
          <h3 className="font-clash font-bold">Pay $6000</h3>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
