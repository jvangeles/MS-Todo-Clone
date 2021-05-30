import React, { useState, useEffect, useRef, ReactDOM } from "react";

const useContextMenu = () => {
  const [selectedItem, setSelectedItem] = useState();
  const [showMenu, setShowMenu] = useState(false);

  //   const handleContextMenu = useCallback(
  //     (e) => {
  //       e.preventDefault();
  //     },
  //     [input]
  //   );

  const handleClick = useCallback(() => {
    showMenu && setShowMenu(false);
  }, [showMenu]);

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("click", handleClick);
    };
  });

  return { selectedItem, showMenu };
};

export default useContextMenu;
