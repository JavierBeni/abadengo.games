import { RefObject, useEffect, useCallback } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useClickOutside(ref: RefObject<HTMLElement>, fun: () => void) {
  const memoizedFun = useCallback(fun, [fun]);
  
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        memoizedFun();
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [memoizedFun, ref]);
}