import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <main className=" ">
      <div className="w-full py-4 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </main>
  );
}
