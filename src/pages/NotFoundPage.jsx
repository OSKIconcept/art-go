import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex gap-6 pt-10 px-10 justify-center items-center h-screen text-2xl">
      404 Not Found
      <span>
        <Link
          className=" rounded-lg border bg-red-700 px-4 py-2 text-white "
          to="/"
        >
          Cart-Page
        </Link>
      </span>
    </div>
  );
}
