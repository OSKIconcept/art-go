import lo from "@/assets/lo.png";
import insta from "@/assets/insta.png";
import twitter from "@/assets/twitter.png";
import tictok from "@/assets/tictok.png";

const Footer = () => {
  return (
    <div className="bg-[#4A4641] text-[#FFFFFFCC]">
      <div className="flex flex-col  items-start mx-auto max-w-[1511px] max-h-[887px]  ">
        <div className="flex w-full justify-between items-center border-b border-[#FFFFFF66]">
          <div className=" font-clash text-[48px] flex flex-col border-r border-[#FFFFFF66]  w-[70%] md:gap-8 gap-6 ">
            <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px] border-b border-[#FFFFFF66] md:pt-10 pt-5 px-[20px]   ">
              Contact
            </p>
            <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px] border-b border-[#FFFFFF66] px-[20px] ">
              Services
            </p>
            <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px] border-b border-[#FFFFFF66] px-[20px] ">
              Careers
            </p>
            <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px]  px-[20px] ">
              Sustainability
            </p>
          </div>

          <div className="flex flex-col mx-auto md:gap-3 gap-1.5 w-[30%] justify-center items-center  ">
            <img
              className="md:w-[60px] w-[25px] lg:w-[80.52px] mb-2 "
              src={insta}
              alt=""
            />
            <img
              className="md:w-[60px] w-[25px] lg:w-[80.52px] mb-2"
              src={twitter}
              alt=""
            />
            <img
              className="md:w-[60px] w-[25px] lg:w-[80.52px] "
              src={tictok}
              alt=""
            />
          </div>
        </div>

        <div className="flex w-full justify-center items-center">
          <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px]  md:pt-10 pt-5 px-[20px] w-[70%] border-r border-[#FFFFFF66]">
            Blog
          </p>

          <div className="text-center mx-auto ] w-[30%]  ">
            <p className=" ">Privacy policy</p>
          </div>
        </div>

        <div className="flex w-full justify-between items-center border-t border-[#FFFFFF66]">
          <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px]  md:py-8 py-3 px-[20px] w-[70%] border-r  border-[#FFFFFF66]  ">
            <img className="lg:w-[105px] md:w-[66px] w-[28px]" src={lo} />
          </p>

          <div className="w-[30%] flex flex-col text-center md:gap-7 gap-2 ">
            <p className="border-b border-[#FFFFFF66] md:pb-5 pb-2">
              Terms and conditions
            </p>
            <p className="text-[6px] md:text-[12px] lg:text-[18px] ">
              Design by <span className="font-bold">AB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
