import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Nav() {
  return (
    <nav className="flex w-full justify-between py-4 max-w-screen-lg absolute px-8">
      <span className="text-xl font-extrabold">
        <Link to={"/portofolio"}>Halim</Link>
      </span>
      <div className="flex space-x-8">
        <NavItem namaItem="Home" linkItem={"/portofolio/"} />
        <NavItem namaItem="Contact Me" linkItem={"/portofolio/ContactMe"} />
        <NavItem namaItem="My Work" linkItem={"/portofolio/"} />
      </div>
    </nav>
  );
}

export default Nav;
