import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

function Nav() {
  const [navBar, setNavBar] = useState(false);

  function handlerNavBar() {
    if (window.innerWidth > 640) {
      setNavBar(false);
      return;
    }
    setNavBar(!navBar);
    console.log(navBar);
  }

  return (
    <nav className="flex w-full items-center justify-between py-4 max-w-screen-lg absolute px-8">
      <span className="text-xl font-extrabold">
        <Link to={"/portofolio"}>Halim</Link>
      </span>
      <div onClick={handlerNavBar} className={`block sm:hidden space-y-1 z-20`}>
        <div
          className={`${
            navBar ? "rotate-45 translate-y-2" : "rotate-0"
          } w-6 h-1 bg-blackbrown rounded-xl`}
        ></div>
        <div
          className={`${
            navBar ? "scale-0" : "scale-100"
          } w-6  h-1 bg-blackbrown rounded-xl origin-left `}
        ></div>
        <div
          className={`${
            navBar ? "-rotate-45 -translate-y-2" : "rotate-0"
          } w-6 h-1 bg-blackbrown rounded-xl`}
        ></div>
      </div>
      <div
        className={`${
          navBar
            ? "flex flex-col justify-center items-center space-y-8 fixed h-screen w-screen bg-darkbrown top-0 left-0 z-10"
            : "hidden"
        } space-x-0 sm:space-x-8 sm:flex`}
      >
        <NavItem
          functionHandler={handlerNavBar}
          namaItem="Home"
          linkItem={"/portofolio/"}
        />
        <NavItem
          functionHandler={handlerNavBar}
          namaItem="Contact Me"
          linkItem={"/portofolio/ContactMe"}
        />
        <NavItem
          functionHandler={handlerNavBar}
          namaItem="My Work"
          linkItem={"/portofolio/"}
        />
      </div>
    </nav>
  );
}

export default Nav;
