function NavItem({namaItem, linkItem}){
    return(
        <div className="div w-32 flex justify-center">
            <span className="hover:text-blackbrown hover:font-bold hover:cursor-pointer font-coba">{namaItem}</span>
        </div>
    );
}

export default NavItem;