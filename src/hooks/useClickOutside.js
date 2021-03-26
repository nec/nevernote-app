import { useEffect } from "react";

export default function useOnClickOutside(ref, handleEvent) {
  useEffect(() => {
    const eventListener = e => {
      if (!ref.current.contains(e.target)) {
        handleEvent(e);
      }
    };
    document.addEventListener("click", eventListener);
    return () => document.removeEventListener("click", eventListener);
  }, [ref, handleEvent]);
}
