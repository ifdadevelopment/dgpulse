'use client';

import { useEffect } from 'react';

export default function ScrollAnimator() {
  useEffect(() => {
    const animatedClass = 'animate';
    const visibleClass = 'in-view';

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
          } else {
            // 🔁 allow re-animation on scroll back
            entry.target.classList.remove(visibleClass);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    const observeElements = () => {
      document
        .querySelectorAll(`.${animatedClass}:not([data-observed])`)
        .forEach(el => {
          io.observe(el);
          el.setAttribute('data-observed', 'true');
        });
    };

    observeElements();
    const mo = new MutationObserver(observeElements);
    mo.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
