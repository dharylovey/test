import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
          <p className="text-2xl font-semibold text-gray-600">
            Oops! Page not found
          </p>
          <p className="text-md text-gray-500">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="mt-8">
          <Link
            to={"/"}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[#FF6464] hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
          >
            Go back home
          </Link>
        </div>
      </div>
      <div className="mt-16 flex justify-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-yellow-400 animate-bounce"></div>
        <div
          className="w-12 h-12 rounded-full bg-blue-400 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></div>
        <div
          className="w-12 h-12 rounded-full bg-pink-400 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></div>
      </div>
    </div>
  );
}
