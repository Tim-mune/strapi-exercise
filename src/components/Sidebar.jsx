import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "../Context";
const Sidebar = () => {
  const { closeSideBar, sideBarOpen } = useGlobalContext();
  return (
    <aside className={sideBarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-container">
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page, pageId } = item;
            // console.log(item);
            return (
              <article key={pageId}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((item, index) => {
                    const { url, icon, label, id } = item;
                    return (
                      <a key={id} href={url}>
                        {icon} {label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
