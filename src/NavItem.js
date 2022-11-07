import { Link } from "react-router-dom";

function NavItem({namaItem, linkItem}){
    return(
        <Link to={linkItem}>
            <div className="div w-32 flex justify-center">
                <span className="hover:text-blackbrown hover:font-bold hover:cursor-pointer font-coba">{namaItem}</span>
            </div>
        </Link>
    );
}

export default NavItem;