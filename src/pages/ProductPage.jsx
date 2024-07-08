import Category from "@/components/Category";

const ProductPage = () => {
  return (
    <>
      <div className="bg-[#716A63] text-white mx-auto text-center md:py-16 py-8 flex flex-col justify-center items-center md:gap-4 gap-1 -tracking-tighter">
        <h1 className=" font-bold font-clash">Digital Art</h1>
        <p className="md:text-[16px] text-[8px] lg:text-[20px] w-[75%] md:w-[75%] lg:w-[50%] font-light  ">
          Welcome to our extensive collection of uniquely contemporary digital
          art. We have various styles, mediums, sizes, and subjects to fit any
          interior.
        </p>
      </div>

      <Category />
    </>
  );
};

export default ProductPage;
