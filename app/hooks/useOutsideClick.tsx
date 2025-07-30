import { useEffect, RefObject } from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}
