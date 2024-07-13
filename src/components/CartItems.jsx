import people from "@/assets/people.png";
import sun from "@/assets/sun.png";

//
import { IoMdArrowDropdown } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import { IoIosCheckbox } from "react-icons/io";

///keys

const data = [
  {
    image: people,
  },

  {
    image: sun,
  },
];

const CartItems = () => {
  return (
    <div>
      {data.map((dat, i) => (
        <div
          key={i}
          className="flex justify-start lg:gap-6 md:gap-2 gap-2 md:pb-[100px] pb-[32px]   "
        >
          <h3>
            <IoIosCheckbox className="" />
          </h3>
          <img
            className="md:w-[320px] lg:w-[540px] w-[160px] h-[160px] md:h-[320px] lg:h-[540px] object-contain "
            src={dat.image}
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
                  <div className="flex md:gap-[120px] gap-[30px] border justify-center items-center md:px-5 px-2 md:py-2 py-[1px] md:ml-3 ml-1.5  ">
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
      ))}
    </div>
  );
};

export default CartItems;
