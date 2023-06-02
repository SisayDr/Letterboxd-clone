import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="py-6 lg:pb-16 mt-auto bg-gray-800 w-full">
      <div className="lg:px-10 max-w-5xl mx-auto flex gap-4 justify-center lg:justify-normal flex-wrap text-center text-slate-400">
        <ul className="flex gap-4 flex-wrap justify-center">
          <li className="hover:text-gray-100">
            <NavLink to="/">About</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">News</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">Pro</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">Apps</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">Podcast</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">Year in Review</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">Gift Guide</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">Help</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">Terms</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">API</NavLink>
          </li>
          <li className="hover:text-gray-100">
            <NavLink to="/">Contact</NavLink>
          </li>
        </ul>
        <ul className="flex gap-4">
          <li className="hover:text-gray-100">
            <a href="">TW</a>
          </li>
          <li className="hover:text-gray-100">
            <a href="">FB</a>
          </li>
          <li className="hover:text-gray-100">
            <a href="">IN</a>
          </li>
          <li className="hover:text-gray-100">
            <a href="">YT</a>
          </li>
          <li className="hover:text-gray-100">
            <a href="">Tk</a>
          </li>
        </ul>
        <p className="block w-full text-sm lg:text-left space-y">
          &copy;Letterboxd Limited. Made by fans in Aotearoa New Zealand. Film
          data from TMDb. Mobile site.
          <br />
          cloned by @SisayDr
        </p>
      </div>
    </footer>
  );
};
export default Footer;
