import React from "react";

// https://usehooks.com/useOnClickOutside/

export default function useOnClickOutside(ref, handler) {
  const callback = React.useRef(handler);
  React.useEffect(() => {
    callback.current = handler;
  }, [handler]);

  React.useEffect(() => {
    const listener = event => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      callback.current(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}
