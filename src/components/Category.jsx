import Art from "./Art";

//icons
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";

import { Link } from "react-router-dom";

const Category = () => {
  return (
    <>
      <div className="flex  mx-auto max-w-[1511px] px-[20px]  md:pb-16 pb-6 text-[31px] -tracking-tight">
        <div className=" flex-col pb-10 hidden md:block">
          <div className="border-r ">
            <h2 className="pr-5 pt-16 font-bold pb-10 font-clash">Category</h2>
            <div className="flex gap-2 border justify-center items-center md:p-3 p-2 mr-7 mb-14  ">
              <p>illustrations</p>

              <IoMdArrowDropdown />
            </div>

            <div className="flex justify-between items-center border-b pr-7 border-r">
              <h3 className="pl-5 font-bold pt-2 font-clash ">Subject</h3>
              <p>
                <FaMinus />
              </p>
            </div>
          </div>
          <div className="pr-7 flex flex-col items-start text-light gap-3 border-r pt-16">
            <div className="flex gap-3 items-center justify-center">
              <IoIosCheckbox />
              <p>Random</p>
            </div>

            <div className="flex gap-3 items-center justify-center">
              <MdCheckBoxOutlineBlank />
              <p>Abstract</p>
            </div>

            <div className="flex gap-3 items-center justify-center">
              <MdCheckBoxOutlineBlank />
              <p>People</p>
            </div>

            <div className="flex gap-3 items-center justify-center">
              <MdCheckBoxOutlineBlank />
              <p>Portrait</p>
            </div>

            <div className="flex gap-3 items-center justify-center">
              <MdCheckBoxOutlineBlank />
              <p>Animal</p>
            </div>

            <div className="flex gap-3 items-center justify-center">
              <MdCheckBoxOutlineBlank />
              <p>Landscape</p>
            </div>

            <p className=" text-[#16151566]">Show more</p>
          </div>

          <div className="flex flex-col gap-6 border-r pt-16 font-clash">
            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Style</h3>
              <p>
                <FaPlus />
              </p>
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Price</h3>
              <p>
                <FaPlus />
              </p>
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Material</h3>
              <p>
                <FaPlus />
              </p>
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Medium</h3>
              <p>
                <FaPlus />
              </p>
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Color</h3>
              <p>
                <FaPlus />
              </p>
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Size</h3>
              <p>
                <FaPlus />
              </p>
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Year</h3>
              <p>
                <FaPlus />
              </p>
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Collection</h3>
              <p>
                <FaPlus />
              </p>
            </div>
          </div>
        </div>

        {/*Art component goes in here*/}
        <div className="flex flex-col md:py-16 py-10 w-full items-center md:pl-[75px] gap-5 md:gap-10   ">
          <div className="flex justify-between items-center w-[90%]">
            <div className="flex md:gap-4 gap-2 text-[#16151566] items-center justify-center">
              <h3 className="font-bold">Shop</h3>
              <h3>
                {" "}
                <MdOutlineDoubleArrow />
              </h3>
              <h3 className="font-bold">Digital Art</h3>
            </div>
            <div className="flex cursor-pointer gap-2 border justify-center items-center md:p-3 p-2 ">
              <p>sort</p>

              <p>
                <IoMdArrowDropdown />
              </p>
            </div>
          </div>

          <Art />

          <div className="pb-3 md:pb-6">
            {" "}
            <p className="text-center min-w-[20%]">
              Need help? Contact our{" "}
              <span className="font-bold">Art consultant</span> and we can help
              you choose the best style to represent your vision, brand, or
              story.{" "}
            </p>
          </div>

          <div className="text-[40px] text-white text-center font-bold md:px-8 px-4 md:py-3 py-1.5 bg-black hover:bg-gray-800 ">
            <h3 className="font-clash">
              <Link to="/cart">Go to cart</Link>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
