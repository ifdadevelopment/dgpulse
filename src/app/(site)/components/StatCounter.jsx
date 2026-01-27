"use client";

import { useEffect, useRef, useState } from "react";

export function StatCounter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const animateCount = () => {
      let start = 0;
      const increment = end / (duration / 16);

      const counter = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          animationRef.current = requestAnimationFrame(counter);
        } else {
          setCount(end);
        }
      };

      counter();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCount(0);                 // RESET
          animateCount();              // START AGAIN
        } else {
          cancelAnimationFrame(animationRef.current); // STOP
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationRef.current);
    };
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}
