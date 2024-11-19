import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";
import { navbarVarriants } from "../animation/framerMotion";

const navLinks = [
  { name: "Contact", to: "contact" },
  { name: "About", to: "about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(true);
  return (
    <header className="px-4">
      <nav className="flex justify-between items-center gap-4 w-full">
        <Link to="/">
          <motion.h1
            className="text-2xl md:text-3xl text-cyan-500"
            variants={navbarVarriants}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.0, transition: { duration: 0.5 }, y: -5 }}
            viewport={{ once: true }}
          >
            JustMe
          </motion.h1>
        </Link>
        <div className="gap-4 hidden md:flex">
          {navLinks.map(({ name, to }) => (
            <motion.div
              initial="hidden"
              animate="show"
              variants={navbarVarriants}
              key={name}
            >
              <NavLink
                to={to}
                className={`text-2xl md:text-3xl text-slate-600 hover:underline underline-offset-8  `}
                style={({ isActive }) => ({
                  color: isActive ? "black" : "",
                })}
              >
                {name}
              </NavLink>
            </motion.div>
          ))}
        </div>
        <div className="md:hidden ">
          {open ? (
            <RxHamburgerMenu
              onClick={() => setOpen((prev) => !prev)}
              size={25}
              className="cursor-pointer opacity-90"
            />
          ) : (
            <IoMdClose
              onClick={() => setOpen((prev) => !prev)}
              size={25}
              className="curosr-pointer opacity-90"
            />
          )}

          {!open && (
            <div className="absolute top-10 left-10 right-10 mx-auto w-[300px] h-[200px] bg-transparent backdrop-blur-md flex flex-col items-center justify-center gap-4  mt-2 rounded-md border border-slate-200 ">
              {navLinks.map(({ name, to }) => (
                <NavLink
                  key={name}
                  to={to}
                  className={`text-2xl md:text-3xl text-slate-900 hover:underline underline-offset-8  `}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "",
                  })}
                  onClick={() => setOpen((prev) => !prev)}
                >
                  {name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
