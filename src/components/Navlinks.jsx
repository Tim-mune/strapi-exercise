import sublinks from "../data";
import { useGlobalContext } from "../Context";
const Navlinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { page, pageId } = item;
        return (
          <button
            onMouseEnter={() => setPageId(pageId)}
            key={pageId}
            className="nav-link"
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navlinks;
