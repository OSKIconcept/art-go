import Carts from "@/components/Carts";

//icons

const CartPage = () => {
  return (
    <div className="mx-auto   flex flex-col  ">
      <div className="text-white md:gap-14 gap-8 flex justify-center items-center bg-[#716A63] md:py-14 py-10 w-full">
        <h3 className=" font-bold font-clash">Shopping cart</h3>
        <p className="">Purchases (12)</p>
        <p className="">Cart items (2)</p>
        <p className="">Favourites (32)</p>
      </div>

      <div className="">
        <Carts />
      </div>
    </div>
  );
};

export default CartPage;
