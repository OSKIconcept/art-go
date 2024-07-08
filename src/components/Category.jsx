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
      <div className="flex  mx-auto max-w-[1728px] px-[20px]  pb-16 text-[31px] -tracking-tight">
        <div className="flex flex-col   pb-10   ">
          <div className="border-r">
            <h2 className="pr-5 pt-16 font-bold pb-10 font-clash">Category</h2>
            <div className="flex gap-2 border justify-center items-center md:p-3 p-2 mr-7 mb-14  ">
              <p>illustrations</p>

              <IoMdArrowDropdown />
            </div>

            <div className="flex justify-between items-center border-b pr-7 border-r">
              <h3 className="pl-5 font-bold pt-2 font-clash ">Subject</h3>
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

          <div className="flex flex-col gap-6 border-r pt-16 font-clash">
            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Style</h3>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Price</h3>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Material</h3>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Medium</h3>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Color</h3>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Size</h3>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Year</h3>
              <FaPlus className="" />
            </div>

            <div className="flex justify-between items-center border-b pb-3 pr-1">
              <h3 className="pl-4">Collection</h3>
              <FaPlus className="" />
            </div>
          </div>
        </div>

        {/*Art component goes in here*/}
        <div className="flex flex-col py-16 w-full items-center pl-[75px] gap-10 ">
          <div className="flex justify-between items-center w-[90%]">
            <div className="flex gap-5 text-[#16151566] items-center justify-center">
              <p>Shop</p>
              <p>
                {" "}
                <MdOutlineDoubleArrow />
              </p>
              <p>Digital Art</p>
            </div>
            <div className="flex gap-2 border justify-center items-center md:p-3 p-2 ">
              <p>sort</p>

              <p>
                <IoMdArrowDropdown />
              </p>
            </div>
          </div>

          <Art />

          <div className="flex gap-12 justify-center items-center py-12">
            <div className="flex gap-5 justify-center items-center">
              <div className="px-6 py-2 border rounded-md text-black border-black">
                <p>1</p>
              </div>
              <div className="px-6 py-2 border rounded-md text-[#16151566]">
                <p>2</p>
              </div>
              <div className="px-6 py-2 border rounded-md text-[#16151566]">
                <p>3</p>
              </div>
              <div className="px-6 py-2 border rounded-md text-[#16151566]">
                <p>4</p>
              </div>
              <div className="px-6 py-2 border rounded-md text-[#16151566]">
                <p>5</p>
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
