import people from "@/assets/people.png";
import sun from "@/assets/sun.png";
import bottle from "@/assets/bottle.png";
import butterfly from "@/assets/butterfly.png";

//icons
import { IoIosCheckbox } from "react-icons/io";
import { BiSolidRightArrow } from "react-icons/bi";

<BiSolidRightArrow />;

const Carts = () => {
  return (
    <div className="flex justify-start">
      <IoIosCheckbox />
      <img src={people} />
      <div>
        <h3>Silence</h3>
        <div>
          <p className="font-bold">
            Type: <span className="font-normal">Digital art</span>
          </p>

          <p className="font-bold">
            Category: <span className="font-normal">People</span>
          </p>

          <p className="font-bold">
            Dimensions:{" "}
            <span className="font-normal">172.7 W x 172.7 H x 0.3 D cm</span>
          </p>

          <p className="font-bold">
            Year of creation: <span className="font-normal">2016</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Carts;
