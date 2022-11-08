import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Nav() {
  return (
    <nav className="py-4 flex justify-center sm:justify-between items-center ">
      <span className="text-lg text-blackbrown font-black font-coba uppercase">
        <Link to={"/portofolio"}>Halim</Link>
      </span>
      <div className="sm:flex hidden">
        <NavItem namaItem="Home" linkItem={"/portofolio/"} />
        <NavItem namaItem="Contact Me" linkItem={"/portofolio/ContactMe"} />
        <NavItem namaItem="My Work" linkItem={"/portofolio/"} />
      </div>
    </nav>
  );
}

export default Nav;
