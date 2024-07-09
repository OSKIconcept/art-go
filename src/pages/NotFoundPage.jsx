import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex gap-6 pt-10 px-10 justify-center items-center h-screen text-2xl">
      404 Page Not Found
      <span>
        <Link
          className="ease-in-out duration-500 font-bold font-clash hover:bg-red-700   bg-black px-5 py-3 text-white "
          to="/"
        >
          Cart-Page
        </Link>
      </span>
    </div>
  );
}
