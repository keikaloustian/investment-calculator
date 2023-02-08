import { useEffect, useRef } from "react";

// export default function OnClickOutside(props) {
//   const wrapperRef = useRef(null);

//   useEffect(() => {
//     const handler = (event) => {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         props.callback();
//       }
//     };

//     document.addEventListener("click", handler);

//     return () => {
//       document.removeEventListener("click", handler);
//     };
//   }, [wrapperRef]);

//   return <div ref={wrapperRef}>{props.children}</div>;
// }

function useOutsideAlerter(ref, cb) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        cb();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

export default function OutsideClickHandler(props) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, props.callback);

  return <div ref={wrapperRef}>{props.children}</div>;
}
