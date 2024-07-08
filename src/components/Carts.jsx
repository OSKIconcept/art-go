import people from "@/assets/people.png";
import sun from "@/assets/sun.png";
import bottle from "@/assets/bottle.png";
import butterfly from "@/assets/butterfly.png";
import cartt from "@/assets/cartt.png";
import heartt from "@/assets/heartt.png";

//icons
import { IoIosCheckbox } from "react-icons/io";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { PiLineVertical } from "react-icons/pi";
import { Link } from "react-router-dom";

<BiSolidRightArrow />;

const Carts = () => {
  return (
    <div className="mx-auto flex-col justify-center items-center min-w-[1728px] ">
      <div className="flex justify-start gap-8 pb-[100px] border-b border-[#16151566] px-[88px]">
        <IoIosCheckbox className="text-[39px]" />
        <img src={people} />
        <div className="flex gap-4 justify-start items-start">
          <div className="pl-8">
            <h3 className="text-[40px]">Silence</h3>
            <div className="text-2xl flex flex-col gap-3 justify-start">
              <p className="font-bold">
                Type: <span className="font-normal ml-2">Digital art</span>
              </p>

              <p className="font-bold">
                Category: <span className="font-normal ml-2">People</span>
              </p>

              <p className="font-bold">
                Dimensions:{" "}
                <span className="font-normal ml-2">
                  172.7 W x 172.7 H x 0.3 D cm
                </span>
              </p>

              <p className="font-bold">
                Year of creation: <span className="font-normal ml-2">2016</span>
              </p>

              <div className="flex gap-3 justify-start items-center text-2xl">
                <p>Quantity:</p>
                <div className="flex gap-[120px] border justify-center items-center px-5 py-2 ml-3  ">
                  <p>1</p>

                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>

            <p className="text-[16px] text-[#289F51] pt-4">
              Guaranteed arrival on 14th July if you order today
            </p>

            <h2 className="font-bold text-[32px] pt-3 ">$3000</h2>
          </div>
          <MdCancel className="text-[39px]" />
        </div>
      </div>

      <div className="px-[88px] flex justify-start gap-8 pt-[100px] pb-[100px] ">
        <IoIosCheckbox className="text-[39px]" />
        <img src={sun} />
        <div className="flex gap-4 justify-start items-start">
          <div className="pl-8">
            <h3 className="text-[40px]">Silence</h3>
            <div className="text-2xl flex flex-col gap-3 justify-start">
              <p className="font-bold">
                Type: <span className="font-normal ml-2">Digital art</span>
              </p>

              <p className="font-bold">
                Category: <span className="font-normal ml-2">People</span>
              </p>

              <p className="font-bold">
                Dimensions:{" "}
                <span className="font-normal ml-2">
                  172.7 W x 172.7 H x 0.3 D cm
                </span>
              </p>

              <p className="font-bold">
                Year of creation: <span className="font-normal ml-2">2016</span>
              </p>

              <div className="flex gap-3 justify-start items-center text-2xl">
                <p>Quantity:</p>
                <div className="flex gap-[120px] border justify-center items-center px-5 py-2 ml-3  ">
                  <p>1</p>

                  <IoMdArrowDropdown />
                </div>
              </div>
            </div>

            <p className="text-[16px] text-[#289F51] pt-4">
              Guaranteed arrival on 14th July if you order today
            </p>

            <h2 className="font-bold text-[32px] pt-3 ">$3000</h2>
          </div>
          <MdCancel className="text-[39px]" />
        </div>
      </div>

      <div className="flex items-center justify-start pb-10">
        <div className="text-[40px] text-black text-center font-bold px-[55px] py-4 border border-[#161515A3] ">
          Total: $ 6000
        </div>

        <div className="text-[40px] text-white text-center font-bold px-[55px] py-4 bg-black ">
          <Link to="/checkout"> Proceed to checkout (2)</Link>
        </div>
      </div>
      <p className="text-[#289F51] text-2xl font-bold ">
        Delivery fee included
      </p>

      <div className="flex items-center justify-start gap-1 pt-[60px] pb-[90px]  border-b border-[#16151566]">
        <IoIosCheckbox className="text-[39px]" />
        <p className="text-[32px]">Select all</p>
      </div>

      <div className="py-[80px] gap-[50px] flex flex-col ">
        <p className="text-[40px] font-bold">More from Digital Art</p>
        <div className="flex items-center justify-start gap-6">
          <div className=" flex flex-col gap-6">
            <img className="w-[98%]" src={bottle} />
            <div className="flex gap-[100px] justify-center items-center">
              <div className="flex gap-1.2 justify-center items-center">
                <p className="font-bold text-[32px]">Magic</p>
                <PiLineVertical className="text-[42px]" />
                <p className="text-[32px]">$3000</p>
              </div>
              <div className="flex gap-6">
                <img className="w-[35px]" src={heartt} />
                <img className="w-[35px]" src={cartt} />
              </div>
            </div>
          </div>

          <div className=" flex flex-col gap-6">
            <img className="w-[98%]" src={butterfly} />
            <div className="flex gap-[100px] justify-center items-center">
              <div className="flex gap-1.2 justify-center items-center">
                <p className="font-bold text-[32px]">Magic</p>
                <PiLineVertical className="text-[42px]" />
                <p className="text-[32px]">$3000</p>
              </div>
              <div className="flex gap-6">
                <img className="w-[35px]" src={heartt} />
                <img className="w-[35px]" src={cartt} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
