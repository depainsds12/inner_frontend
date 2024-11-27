import { useEffect, useRef, useState } from "react";

function useEventListener(eventType, callback, element = window) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (element == null) return;
    const handler = (e) => callbackRef.current(e);
    element.addEventListener(eventType, handler);

    return () => element.removeEventListener(eventType, handler);
  }, [eventType, element]);
}

export function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(null);
  useEffect(() => {
    const list = window.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);
  useEventListener("change", (e) => setIsMatch(e.matches), mediaQueryList);
  return isMatch;
}

const useBreakpoints = () => {
  const isSm = useMediaQuery("(max-width: 640px");
  const isMd = useMediaQuery("(max-width: 768px");
  const isLg = useMediaQuery("(max-width: 1024px");
  const isXl = useMediaQuery("(max-width: 1280px");
  const is2xl = useMediaQuery("(max-width: 1536px");
  return {
    isSm,
    isMd,
    isLg,
    isXl,
    is2xl,
  };
};

export default useBreakpoints;
