import { Link } from "react-router-dom";

function NavItem({ namaItem, linkItem, functionHandler }) {
  return (
    <Link onClick={functionHandler} to={linkItem}>
      <div className="group">
        <span className="group-hover:text-darkbrown ">{namaItem}</span>
      </div>
    </Link>
  );
}

export default NavItem;
