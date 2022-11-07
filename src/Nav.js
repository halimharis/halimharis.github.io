import NavItem from "./NavItem";

function Nav(){
    return(
        <nav className="py-4 flex justify-center sm:justify-between items-center">
            <span className="text-lg text-blackbrown font-black font-coba uppercase">Halim</span>
            <div className="sm:flex hidden">
                <NavItem namaItem="Home" linkItem={"/"}/>
                <NavItem namaItem="Contact Me" linkItem={"/ContactMe"}/>
                <NavItem namaItem="My Work" linkItem={"/"}/>
            </div>
        </nav>
    );
}


export default Nav;