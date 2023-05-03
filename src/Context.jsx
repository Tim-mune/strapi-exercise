import { createContext, useContext, useState } from "react";
const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const openSideBar = () => {
    setSideBarOpen(true);
  };
  const closeSideBar = () => {
    setSideBarOpen(false);
  };
  return (
    <AppContext.Provider
      value={{ sideBarOpen, openSideBar, closeSideBar, setPageId, pageId }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
