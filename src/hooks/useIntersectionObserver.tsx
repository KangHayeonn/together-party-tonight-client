import { useEffect, useRef, useState } from "react";

const supportsIntersectionObserver = "IntersectionObserver" in window;

interface IntersectionOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  targetRef: React.RefObject<HTMLElement>,
  options: IntersectionOptions,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (supportsIntersectionObserver && targetRef.current) {
      const handleIntersection: IntersectionObserverCallback = (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
      };

      observerRef.current = new IntersectionObserver(
        handleIntersection,
        options,
      );
      observerRef.current.observe(targetRef.current);

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    } else {
      setIsIntersecting(true);
    }
  }, [targetRef, options]);

  return isIntersecting;
};

export default useIntersectionObserver;
