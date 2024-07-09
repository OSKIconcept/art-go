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

//icon
import { PiLineVertical } from "react-icons/pi";

///data

const data = [
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
];

const Art = () => {
  return (
    <div className="flex md:gap-12 gap-7 flex-wrap w-full ">
      {data.map((art, i) => (
        <div className="flex-1 basis-1/3 flex flex-col md:gap-6 gap-3" key={i}>
          <img className="w-full h-full object-cover" src={art.image} />
          <div className="flex  justify-between items-center md:px-4 ">
            <div className="flex justify-center items-center">
              <h3 className="font-bold text-[13px] sm:text-[15px] md:text-[20px] lg:text-[32px]">
                {art.name}
              </h3>
              <PiLineVertical className="md:text-[20px] lg:text-[30px] text-[15px]" />
              <h3 className="pl-[-20px] text-[13px] sm:text-[15px] md:text-[20px] lg:text-[32px]">
                {" "}
                {art.amount}
              </h3>
            </div>
            <div className="flex md:gap-3 gap-2 ">
              <img
                className="md:w-[20px] lg:w-[32px]  w-[12px] "
                src={art.like}
              />{" "}
              <img
                className="md:w-[20px] lg:w-[32px]   w-[12px] "
                src={art.chart}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Art;
