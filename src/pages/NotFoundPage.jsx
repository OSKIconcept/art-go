import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex md:gap-6 gap-4 md:pt-10 pt-5 md:px-10 px-5 justify-center items-center h-screen md:text-2xl text-xl">
      404 Page Not Found
      <span>
        <Link
          className="ease-in-out duration-500 font-bold font-clash hover:bg-red-600   bg-black md:px-5 px-3.5 md:py-3 py-2 text-white "
          to="/"
        >
          Cart-Page
        </Link>
      </span>
    </div>
  );
}
