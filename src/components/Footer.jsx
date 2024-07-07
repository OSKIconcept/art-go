import lo from "@/assets/lo.png";
import insta from "@/assets/insta.png";
import twitter from "@/assets/twitter.png";
import tictok from "@/assets/tictok.png";

const Footer = () => {
  return (
    <div className="bg-[#4A4641] text-[#FFFFFFCC]">
      <div className="flex justify-center items-center mx-auto max-w-[1728px] max-h-[887px] pb-8   ">
        <div className="text-[48px] flex md:flex-col border-r-2 w-3/4 gap-9">
          <p className=" border-b border-[#FFFFFF66] mt-12 px-[88px]   ">
            Contact
          </p>
          <p className=" border-b border-[#FFFFFF66] px-[88px] ">Services</p>
          <p className=" border-b border-[#FFFFFF66] px-[88px] ">Careers</p>
          <p className=" border-b border-[#FFFFFF66] px-[88px] ">
            Sustainability
          </p>
          <p className=" border-b border-[#FFFFFF66] px-[88px]  ">Blog</p>

          <div className="px-[88px]">
            <img className=" w-[105px]" src={lo} />
          </div>
        </div>

        <div className="text-2xl flex md:flex-col gap-6 ">
          <div className="flex md:flex-col gap-8 justify-center items-center    ">
            <img className="w-[100.52px]" src={insta} alt="" />
            <img className="w-[100.52px]" src={twitter} alt="" />
            <img className="w-[100.52px]" src={tictok} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className="border-y border-[#FFFFFF66] pb-8 pt-7">
              Privacy policy
            </p>
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
