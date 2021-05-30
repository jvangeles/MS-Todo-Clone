import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hamburger from "./Hamburger";

const TodoItem = ({ icon, label, focusIndex }) => {
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const itemRef = useRef(null);
  const [isHoveredOver, setIsHoveredOver] = useState(false);

  const handleMouseEnter = (e) => {
    // DEBUGGING - show task name
    console.log(itemRef.current.children[1].innerText);
    setIsHoveredOver(true);
  };

  const handleMouseLeave = (e) => {
    setIsHoveredOver(false);
  };

  // DEBUGGING
  useEffect(() => {
    console.log(`[${label}]\tisHoveredOver: ${isHoveredOver}`);
  }, [isHoveredOver]);

  return (
    <div
      className="todoItem"
      data-task-name={label}
      tabIndex={focusIndex}
      ref={itemRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      <div className="todoItem--label">
        <span>{label}</span>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
};

TodoItem.defaultProps = {
  icon: <Hamburger />,
  label: "Placeholder Text",
};

export default TodoItem;
