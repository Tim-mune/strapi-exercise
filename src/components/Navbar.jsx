import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../Context";
import Navlinks from "./Navlinks";
const Navbar = () => {
  const { openSideBar, setPageId } = useGlobalContext();
  const handleSubMenu = (e) => {
    // console.log(e.target.value);
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <Navlinks />
        <button className="toggle-btn" onClick={openSideBar}>
          <FaBars />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
