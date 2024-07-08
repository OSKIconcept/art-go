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
import { FaAngleDoubleLeft } from "react-icons/fa";

const Carts = () => {
  return (
    <div className="mx-auto flex-col justify-center items-center md:pt-[80px] pt-[28px] max-w-[1511px] px-[20px]  ">
      <div className="text-[#161515A3] flex gap-[8px] md:gap-[16px] items-center md:pb-8 pb-4 justify-start ">
        <h3>
          <FaAngleDoubleLeft className="text-bold" />
        </h3>
        <Link to="/">
          <h3 className="font-bold">Back to shop</h3>
        </Link>
      </div>

      <div className="flex justify-start md:gap-8 gap-2.5 md:pb-[100px] pb-[32px] border-b border-[#16151566] ">
        <h3>
          <IoIosCheckbox className="" />
        </h3>
        <img
          className="md:w-[440px] lg:w-[540px] w-[200px] h-[200px] md:h-[440px] lg:h-[540px] object-contain "
          src={people}
        />
        <div className="flex md:gap-4 gap-2.5 justify-start items-start">
          <div className="md:pl-8 pl-4">
            <h3 className="font-bold font-clash">Silence</h3>
            <div className=" flex flex-col md:gap-3 gap-1.5 justify-start">
              <p className="font-bold">
                Type:{" "}
                <span className="font-normal md:ml-2 ml-0.5">Digital art</span>
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
                <div className="flex md:gap-[120px] gap-[60px] border justify-center items-center md:px-5 px-2 md:py-2 py-0.5 md:ml-3 ml-1.5  ">
                  <p>1</p>

                  <p>
                    <IoMdArrowDropdown />
                  </p>
                </div>
              </div>
            </div>

            <p className="lg:text-[16px] md:text-[10px] text-[4px] text-[#289F51] md:pt-4 pt-2">
              Guaranteed arrival on 14th July if you order today
            </p>

            <h3 className="font-bold  md:pt-3 pt-0.5 ">$3000</h3>
          </div>
          <p>
            <MdCancel className="" />
          </p>
        </div>
      </div>

      <div className="flex justify- md:gap-8 gap-2.5 md:pb-[100px] pb-[32px]   pt-[32px] md:pt-[100px]">
        <h3>
          <IoIosCheckbox className="" />
        </h3>
        <img
          className="md:w-[440px] lg:w-[540px] w-[200px] h-[200px] md:h-[440px] lg:h-[540px] object-contain "
          src={sun}
        />
        <div className="flex md:gap-4 gap-2.5 justify-start items-start">
          <div className="md:pl-8 pl-4">
            <h3 className="font-bold font-clash">Silence</h3>
            <div className=" flex flex-col md:gap-3 gap-1.5 justify-start">
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
                <div className="flex md:gap-[120px] gap-[60px] border justify-center items-center md:px-5 px-2 md:py-2 py-0.5 md:ml-3 ml-1.5  ">
                  <p>1</p>

                  <p>
                    <IoMdArrowDropdown />
                  </p>
                </div>
              </div>
            </div>

            <p className="lg:text-[16px] md:text-[10px] text-[4px] text-[#289F51] md:pt-4 pt-2">
              Guaranteed arrival on 14th July if you order today
            </p>

            <h3 className="font-bold  md:pt-3 pt-0.5 ">$3000</h3>
          </div>
          <p>
            <MdCancel className="" />
          </p>
        </div>
      </div>

      <div className="flex items-center justify-start md:pb-10 pb-5">
        <div className="text-[40px] text-black text-center font-bold md:px-[55px] px-[20px] md:py-4 py-1.5 border-[#161515A3] border ">
          <h3 className="font-clash">Total: $ 6000</h3>
        </div>

        <div className="text-[40px] text-white text-center font-bold md:px-[56px] px-[21px] md:py-[17px] py-[7px] bg-black ">
          <h3 className="font-clash">
            <Link to="/checkout"> Proceed to checkout (2)</Link>
          </h3>
        </div>
      </div>
      <p className="text-[#289F51] font-bold font-clash ">
        Delivery fee included
      </p>

      <div className="flex items-center justify-start gap-1 md:pt-[60px] pt-[2px] md:pb-[90px] pb-[45px]  border-b border-[#16151566]">
        <h3>
          {" "}
          <IoIosCheckbox className="text" />
        </h3>
        <p className="lg:text-[32px] text-[12px] md:text-[24px]">Select all</p>
      </div>

      <div className="md:py-[60px] py-[30px] md:gap-[30px] gap-[10px] flex flex-col ">
        <h3 className=" font-bold font-clash">More from Digital Art</h3>
        <div className="flex items-center justify-start md:gap-2 gap-1">
          <div className=" flex flex-col md:gap-6 gap-3">
            <img className="w-[88%]" src={bottle} />
            <div className="flex md:gap-[100px] gap-[40px] justify-start items-center md:pl-6 pl-3">
              <div className="flex gap-1.2 justify-center items-center">
                <p className="font-bold lg:text-[32px] md:text-[24px] text-[8px]">
                  Magic
                </p>
                <h3>
                  {" "}
                  <PiLineVertical className="" />
                </h3>
                <p className="lg:text-[32px] text-[8px] md:text-[24px]">
                  $3000
                </p>
              </div>
              <div className="flex md:gap-5 gap-2.5">
                <img
                  className="lg:w-[32px] w-[12px] md:w-[24px] lg:h-[32px] h-[12px] md:h-[24px] "
                  src={heartt}
                />
                <img
                  className="lg:w-[32px] w-[12px] md:w-[24px] lg:h-[32px] h-[12px] md:h-[24px]"
                  src={cartt}
                />
              </div>
            </div>
          </div>
          <div className=" flex flex-col md:gap-6 gap-3">
            <img className="w-[88%]" src={butterfly} />
            <div className="flex md:gap-[100px] gap-[40px] justify-start items-center md:pl-6 pl-3">
              <div className="flex gap-1.2 justify-center items-center">
                <p className="font-bold lg:text-[32px] md:text-[24px] text-[8px]">
                  Magic
                </p>
                <h3>
                  {" "}
                  <PiLineVertical className="" />
                </h3>
                <p className="lg:text-[32px] text-[8px] md:text-[24px]">
                  $3000
                </p>
              </div>
              <div className="flex md:gap-5 gap-2.5">
                <img
                  className="lg:w-[32px] w-[12px] md:w-[24px] lg:h-[32px] h-[12px] md:h-[24px] "
                  src={heartt}
                />
                <img
                  className="lg:w-[32px] w-[12px] md:w-[24px] lg:h-[32px] h-[12px] md:h-[24px]"
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
