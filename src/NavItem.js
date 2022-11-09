import { Link } from "react-router-dom";

function NavItem({ namaItem, linkItem }) {
  return (
    <Link to={linkItem}>
      <div className="group">
        <span className="group-hover:text-darkbrown ">{namaItem}</span>
      </div>
    </Link>
  );
}

export default NavItem;
