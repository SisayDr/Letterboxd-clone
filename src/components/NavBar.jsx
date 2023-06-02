import { NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
const Nav = () => {
  return (
    <div className="bg-black/50 hover:bg-black/70">
      <nav className="max-w-6xl mx-auto p-2  flex items-center gap-5 lg:gap-16 justify-between md:justify-center text-white">
        <NavLink to="/" className="flex items-center">
          <span className="inline-block w-5 h-5 rounded-full bg-orange-400"></span>
          <span className="inline-block w-5 h-5 rounded-full bg-green-400"></span>
          <span className="inline-block w-5 h-5 rounded-full bg-blue-400"></span>
          <h1 className="inline px-3  md:text-3xl font-bold font-sans">
            Letterboxd
          </h1>
        </NavLink>
        <ul className="hidden p-3 md:flex gap-4 items-center text-sm font-semibold">
          <button>SIGN IN</button>
          <button>CREATE ACCOUNT</button>
          <NavLink to="/films">FILMS</NavLink>
          <NavLink to="/members">MEMBERS</NavLink>
          <NavLink to="/journal">JOURNAL</NavLink>
        </ul>
        <form className="relative max-w-[150px]">
          <input
            type="text"
            className="text-gray-400 bg-white/20 w-full outline-none py-1 px-3 rounded-full focus:bg-white"
          />
          <BiSearch className="absolute right-2 top-1/2 -translate-y-1/2" />
        </form>
      </nav>
    </div>
  );
};

export default Nav;
