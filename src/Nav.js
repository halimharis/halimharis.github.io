import NavItem from "./NavItem";

function Nav(){
    return(
        <nav className="py-4 flex justify-between">
            <span className="text-lg text-blackbrown font-black font-coba uppercase">Halim</span>
            <div className="flex">
                <NavItem namaItem="About Me"/>
                <NavItem namaItem="Contact Me"/>
                <NavItem namaItem="My Work"/>
            </div>
        </nav>
    );
}


export default Nav;