import lo from "@/assets/lo.png";
import insta from "@/assets/insta.png";
import twitter from "@/assets/twitter.png";
import tictok from "@/assets/tictok.png";

const Footer = () => {
  return (
    <div className="bg-[#4A4641] text-[#FFFFFFCC]">
      <div className="flex justify-center items-center mx-auto max-w-[1728px] max-h-[887px] md:pb-7 pb-4 ">
        <div className="font-clash text-[48px] flex flex-col border-r border-[#FFFFFF66] w-3/4 md:gap-8 gap-6">
          <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px] border-b border-[#FFFFFF66] md:pt-10 pt-5 px-[20px]   ">
            Contact
          </p>
          <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px] border-b border-[#FFFFFF66] px-[20px] ">
            Services
          </p>
          <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px] border-b border-[#FFFFFF66] px-[20px] ">
            Careers
          </p>
          <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px] border-b border-[#FFFFFF66] px-[20px] ">
            Sustainability
          </p>
          <p className="font-bold text-[12px] md:text-[24px] lg:text-[48px] border-b border-[#FFFFFF66] px-[20px]  ">
            Blog
          </p>

          <div className="px-[20px]">
            <img className="lg:w-[105px] md:w-[66px] w-[28px]" src={lo} />
          </div>
        </div>

        <div className="text-2xl flex flex-col gap-6 flex-1 ">
          <div className="flex flex-col md:gap-8 gap-4 justify-center items-center    ">
            <img
              className="md:w-[60px] w-[30px] lg:w-[80.52px]"
              src={insta}
              alt=""
            />
            <img
              className="md:w-[60px] w-[30px] lg:w-[80.52px]"
              src={twitter}
              alt=""
            />
            <img
              className="md:w-[60px] w-[30px] lg:w-[80.52px]"
              src={tictok}
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center items-center border-t border-[#FFFFFF66] ">
            <p className=" border-[#FFFFFF66] pb-8 pt-7">Privacy policy</p>
            <p className="border-b border-[#FFFFFF66]">Terms and conditions</p>
            <p className="border-t border-[#FFFFFF66]">
              Design by <span className="font-bold">AB</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
