import Category from "@/components/Category";

const ProductPage = () => {
  return (
    <>
      <div className="bg-[#716A63] text-white mx-auto text-center py-16 flex flex-col justify-center items-center gap-5 -tracking-tighter">
        <h3 className="text-6xl font-bold">Digital Art</h3>
        <p className="text-xl max-w-[40%] font-light  ">
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
