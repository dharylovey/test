import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Layout() {
  return (
    <main className="flex max-w-7xl mx-auto">
      <div className="w-full py-4 px-4 md:px-10">
        <Navbar />
        <Outlet />
      </div>
    </main>
  );
}
