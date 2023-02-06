import { useEffect, useRef } from "react";

export default function OnClickOutside(props) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.callback();
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, [wrapperRef]);

  return <div ref={wrapperRef}>{props.children}</div>;
}
