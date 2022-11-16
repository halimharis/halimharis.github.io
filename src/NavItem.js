import { HashLink } from "react-router-hash-link";

function NavItem({ namaItem, linkItem, functionHandler }) {
  return (
    <HashLink smooth onClick={functionHandler} to={linkItem}>
      <div className="group">
        <span className="group-hover:text-darkbrown ">{namaItem}</span>
      </div>
    </HashLink>
  );
}

export default NavItem;
