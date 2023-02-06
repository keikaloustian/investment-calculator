import { useEffect, useRef } from "react";

export default function useClickedOutside(props) {
  const wrapperRef = useRef(null);
  const callback = props.callback;

  useEffect(() => {
    const handler = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("onclick", handler);

    return () => {
      document.removeEventListener("onclick", handler);
    };
  }, [wrapperRef]);

  return <div ref={wrapperRef}>{props.children}</div>;
}
