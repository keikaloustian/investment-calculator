import { useEffect, useRef } from "react";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    // Execute callback function if clicked element is outside of OutsideCLickHandler's DOM subtree
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
};

export default function OutsideClickHandler(props) {
  const wrapperRef = useRef(null);
  useOutsideClick(wrapperRef, props.callback);

  return <div ref={wrapperRef}>{props.children}</div>;
}
