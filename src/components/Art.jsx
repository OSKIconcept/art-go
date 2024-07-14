import people from "@/assets/people.png";
import heart from "@/assets/heart.png";
import heartt from "@/assets/heartt.png";
import cart from "@/assets/cart.png";
import cartt from "@/assets/cartt.png";
import blue from "@/assets/blue.png";
import sun from "@/assets/sun.png";
import animal from "@/assets/animal.png";
import princess from "@/assets/princess.png";
import painting from "@/assets/painting.png";
import bottle from "@/assets/bottle.png";
import butterfly from "@/assets/butterfly.png";

//pagination

//icon
import { PiLineVertical } from "react-icons/pi";
import { useEffect, useState } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { useCartContext } from "./context";

///data

/*const data = [
  {
    image: people,
    name: "Silence",
    amount: "$3000",
    like: heart,
    chart: cart,
  },

  {
    image: blue,
    name: "Blue",
    amount: "$3000",
    like: heartt,
    chart: cartt,
  },

  {
    image: sun,
    name: "Ethereal",
    amount: "$3000",
    like: heart,
    chart: cart,
  },

  {
    image: animal,
    name: "E.T",
    amount: "$3000",
    like: heartt,
    chart: cartt,
  },

  {
    image: princess,
    name: "Queen",
    amount: "$3000",
    like: heartt,
    chart: cartt,
  },

  {
    image: painting,
    name: "Petre",
    amount: "$3000",
    like: heartt,
    chart: cartt,
  },

  {
    image: bottle,
    name: "Magic",
    amount: "$3000",
    like: heartt,
    chart: cartt,
  },

  {
    image: butterfly,
    name: "Adaline",
    amount: "$3000",
    like: heartt,
    chart: cartt,
  },
];*/

const KEY = "01c2da102abe4334b2a19ce5ca68b25e20240712172939613969";
const ID = "PU1OHTCAJV4A77N";
const ORG = "210afe4850e1499b9b958d62083e5fe4";

///pagination

const Art = () => {
  const [products, setProducts] = useState([]);
  //yh
  const [error, setError] = useState("");
  const [click, setClick] = useState(false);
  const [page, setPage] = useState(1);
  const { cart, setCart } = useCartContext();
  const [num, setNum] = useState(0);
  const [selectedId, setSelectedId] = useState(null);

  //pagination
  const { isLoading, setIsloading } = useCartContext();
  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setIsloading(true);
        const res = await fetch(
          `https://api.timbu.cloud/products?organization_id=${ORG}&reverse_sort=false&page=${page}&size=10&Appid=${ID}&Apikey=${KEY} `,
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("details not found");
        const data = await res.json();
        if (data.Response === "False") throw new Error("something wrong");
        console.log(data);
        setProducts(data.items);
      } catch (err) {
        if (err.mesage !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsloading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, [page, setIsloading]);

  if (isLoading) {
    return <div>is Loading...</div>;
  }

  ///handlings
  function handleAddItem(item) {
    setCart((cart) => [...cart, item]); //yh
  }

  function handleSelected(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  return (
    <>
      <div className="flex md:gap-12 gap-7 flex-wrap w-full ">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              onClick={() => handleSelected(product.unique_id)}
              className="flex-1 basis-1/3 flex flex-col md:gap-6 gap-3"
              key={product.id}
            >
              <img
                className="w-full h-full object-cover"
                src={`http://api.timbu.cloud/images/${product.photos[0].url}`}
                alt={product.name}
              />
              <div className="flex  justify-between items-center md:px-4 ">
                <div className="flex justify-center items-center">
                  <h3 className="font-bold text-[13px] sm:text-[15px] md:text-[20px] lg:text-[32px]">
                    {product.name}
                  </h3>
                  <PiLineVertical className="md:text-[20px] lg:text-[30px] text-[15px]" />
                  <h3 className="pl-[-20px] text-[13px] sm:text-[15px] md:text-[20px] lg:text-[32px]">
                    {" "}
                    ${product.current_price[0].NGN}
                  </h3>
                </div>
                <div className="flex md:gap-3 gap-2 ">
                  <img
                    className="md:w-[20px] lg:w-[32px]  w-[12px] "
                    src={click ? heart : heartt}
                    value={click}
                    //onClick={() => setClick((clic) => !clic)}
                  />{" "}
                  <div>
                    <img
                      onClick={handleAddItem}
                      className="md:w-[20px] lg:w-[32px]   w-[12px] "
                      src={cartt}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="animate-pulse">No product available</h3>
        )}
      </div>

      {/*Buttons*/}
      <div className="flex md:gap-12 gap-8 justify-center items-center md:py-14 py-10">
        <div className="flex md:gap-5 gap-2 justify-center items-center">
          <div
            onClick={() => setPage(1)}
            className={
              page === 1
                ? "md:px-6 px-4 py-1 md:py-2 border rounded-md text-black border-black cursor-pointer"
                : "md:px-6 px-4 py-1 md:py-2 border rounded-md text-[#16151566] cursor-pointer"
            }
          >
            <p>1</p>
          </div>
          <div
            onClick={() => setPage(2)}
            className={
              page === 2
                ? "md:px-6 px-4 py-1 md:py-2 border rounded-md text-black border-black cursor-pointer"
                : "md:px-6 px-4 py-1 md:py-2 border rounded-md text-[#16151566] cursor-pointer"
            }
          >
            <p>2</p>
          </div>
          <div
            onClick={() => setPage(3)}
            className={
              page === 3
                ? "md:px-6 px-4 py-1 md:py-2 border rounded-md text-black border-black cursor-pointer"
                : "md:px-6 px-4 py-1 md:py-2 border rounded-md text-[#16151566] cursor-pointer"
            }
          >
            <p>3</p>
          </div>
        </div>

        <h2
          className="cursor-pointer"
          onClick={() => {
            setPage((c) => c + 1);
            if (page > 2) setPage(1);
          }}
        >
          <BiSolidRightArrow />
        </h2>
      </div>
    </>
  );
};

export default Art;
