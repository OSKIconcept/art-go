//icon
import { MdOutlineDoubleArrow } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  return (
    <div className="mx-auto justify-center items-center  ">
      <div className="bg-[#716A63] px-[20px] py-[11px] md:py-[19px] w-full ">
        <div className="flex justify-center items-center max-w-[1511px] lg:gap-[150px] gap-[50px] md:gap-[80px]  mx-auto ">
          <h3 className=" text-white ">Checkout</h3>
          <div className=" gap-[12px] text-[#FFFFFFA3] flex justify-center items-center ">
            <Link to="/">
              <p>Back to shop</p>
            </Link>
            <p>
              <MdOutlineDoubleArrow />
            </p>
            <Link to="/cart">
              <p>Back to cart</p>
            </Link>
            <p>
              <MdOutlineDoubleArrow />
            </p>
            <p className="text-white">Payment</p>
            <p>
              <MdOutlineDoubleArrow className="text-white" />
            </p>
            <p>Confimation</p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1511px] px-[20px]">
        <div className=" pb-3 pt-8 ">
          <div className="flex gap-[250px] items-center justify-start pb-6">
            <h3 className="text-[12px] md:text-[20px] lg:text-[40px]  font-bold font-clash ">
              Shipping details
            </h3>
            <div className="flex gap-2 border justify-center items-center md:p-3 p-2  ">
              <p>Change address</p>

              <IoMdArrowDropdown />
            </div>
          </div>

          <div className="flex justify-start gap-6 border-b border-[#16151566]">
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
            <div className="flex gap-[200px] items-center justify-start pb-6">
              <h3 className="font-clash text-[12px] md:text-[20px] lg:text-[40px]  font-bold ">
                Your order (2 items)
              </h3>
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

            <div className="flex gap-3 justify-start items-center text-2xl pt-2">
              <p>Quantity:</p>
              <div className="flex gap-[18px] border justify-center items-center md:px-5 px-3 md:py-2 py-0.5 ml-3  ">
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

            <div className="flex gap-3 justify-start items-center text-2xl pt-2">
              <p>Quantity:</p>
              <div className="flex gap-[18px] border justify-center items-center md:px-5 px-3 md:py-2 py-0.5 ml-3  ">
                <p>1</p>

                <IoMdArrowDropdown className="text-[16px] md:text-2xl" />
              </div>
            </div>

            <p className="text-[#289F51] text-[4px] md:text-[8px] lg:text-[16px] pt-2">
              Guaranteed arrival on 14th July if you order today
            </p>
            <h3 className="font-bold font-campton py-2 border-b">$3000</h3>
          </div>

          <div className="py-8">
            <h2 className="font-bold pb-2 md:pb-4">Payment details</h2>
            <div className="pb-2 md:pb-4">
              <h3 className="pb-2">Card name</h3>
              <div className="font-bold py-3 px-6 border border-[#16151533]  w-[50%] text-left mb-4">
                <h3>Paul Atreids</h3>
              </div>
            </div>

            <div>
              <h3 className="pb-2">Card name</h3>
              <div className="font-bold py-3 px-6 border border-[#16151533] w-[50%] text-left ">
                <h3>1234 5678 9012 3245</h3>
              </div>
            </div>

            <div className="flex justify-between items-center gap-5 md:gap-7 pt-4 md:pt-9">
              <div className="w-1/2">
                <h3 className="pb-2">Valid through</h3>
                <div className="font-bold py-3 px-6 border border-[#16151533]   text-left ">
                  <h3>06/29</h3>
                </div>
              </div>

              <div className="w-1/2">
                <h3 className="pb-2">CVC</h3>
                <div className="font-bold py-3 px-6 border border-[#16151533]   text-left ">
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
        <div className="text-white px-8 py-3 bg-black">
          <h3>Pay $6000</h3>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
