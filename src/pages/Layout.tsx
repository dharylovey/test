import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "sonner";

export default function Layout() {
  return (
    <main className=" ">
      <div className="w-full py-4 px-4 md:px-10 ">
        <div className="max-w-7xl mx-auto">
          <Navbar />
        </div>
      </div>
      <div>
        <Outlet />
        <Toaster
          duration={3000}
          position="top-center"
          icons={{
            success: "👏",
            error: "🚫",
            info: "i️",
            warning: "⚠️",
          }}
          toastOptions={{
            classNames: {
              error: "bg-red-400",
              success: "bg-green-400",
              info: "bg-blue-400",
              warning: "bg-yellow-400",
            },
          }}
        />
      </div>
      <Footer />
    </main>
  );
}
