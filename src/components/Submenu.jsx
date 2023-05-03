import sublinks from "../data";
import { useGlobalContext } from "../Context";
import { useRef } from "react";
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  //   console.log(pageId);
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  //   console.log(currentPage);
  const container = useRef(null);
  const handleMouseLeave = (event) => {
    const submenu = container.current;
    const { right, left, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;
    // console.log(clientX, clientY);
    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };

  return (
    <div
      ref={container}
      onMouseLeave={handleMouseLeave}
      className={currentPage ? "submenu show-submenu" : "submenu"}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a href={url} key={id}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
