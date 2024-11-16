import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { name: "Contact", to: "contact" },
  { name: "About", to: "about" },
];
export default function Navbar() {
  return (
    <header className="">
      <nav className="flex justify-between items-center gap-4 w-full">
        <Link to="/">
          <h1 className="text-3xl text-slate-600">LOGO</h1>
        </Link>
        <div className="flex gap-4">
          {navLinks.map(({ name, to }) => (
            <NavLink key={name} to={to} className="text-3xl text-slate-600">
              {name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
