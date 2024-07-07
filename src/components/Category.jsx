import Art from "./Art";

//icons
import { IoMdArrowDropdown } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";

const Category = () => {
  return (
    <>
      <div className="flex  mx-auto max-w-[1728px] px-[88px]  pb-16 text-[31px] -tracking-tight">
        <div className="flex flex-col   pb-10   ">
          <div className="border-r">
            <p className="pr-5 pt-16 font-bold pb-10">Category</p>
            <div className="flex gap-2 border justify-center items-center p-3 mr-7 mb-14  ">
              <p>illustrations</p>

              <IoMdArrowDropdown />
            </div>

            <div className="flex justify-between items-center border-b pr-7 border-r">
              <p className="pl-5 font-bold pt-2 ">Subject</p>
              <FaMinus />
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

            <p className="text-[28px] text-[#16151566]">Show more</p>
          </div>

          <div className="flex flex-col gap-6 border-r pt-16">
            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <p className="pl-4">Style</p>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <p className="pl-4">Price</p>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <p className="pl-4">Material</p>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <p className="pl-4">Medium</p>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <p className="pl-4">Color</p>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <p className="pl-4">Size</p>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <p className="pl-4">Year</p>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <p className="pl-4">Collection</p>
              <FaPlus className="" />
            </div>
          </div>
        </div>

        {/*Art component goes in here*/}
        <div className="flex flex-col py-16 w-full items-center pl-[75px] gap-10 ">
          <div className="flex justify-between items-center w-[90%]">
            <div className="flex gap-5 text-[#16151566] items-center justify-center">
              <p>Shop</p>
              <MdOutlineDoubleArrow />
              <p>Digital Art</p>
            </div>
            <div className="flex gap-2 border justify-center items-center p-3 ">
              <p>sort</p>

              <IoMdArrowDropdown />
            </div>
          </div>

          <Art />

          <div className="flex gap-12 justify-center items-center py-12">
            <div className="flex gap-5 justify-center items-center">
              <div className="px-6 py-2 border rounded-md text-black border-black">
                1
              </div>
              <div className="px-6 py-2 border rounded-md text-[#16151566]">
                2
              </div>
              <div className="px-6 py-2 border rounded-md text-[#16151566]">
                3
              </div>
              <div className="px-6 py-2 border rounded-md text-[#16151566]">
                4
              </div>
              <div className="px-6 py-2 border rounded-md text-[#16151566]">
                5
              </div>
            </div>

            <BiSolidRightArrow />
          </div>

          <p className="text-center">
            Need help? Contact our{" "}
            <span className="font-bold">Art consultant</span> and we can help
            you choose the best style to represent your vision, brand, or story.{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default Category;
