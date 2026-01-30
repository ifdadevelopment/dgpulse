// animations.js
export const fadeAnimations = {
  left: {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
  },
  right: {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
  },
  up: {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
  },
  bottom: {
    initial: { opacity: 0, y: -60 },
    whileInView: { opacity: 1, y: 0 },
  },
  zoomIn: {
    initial: { opacity: 0, scale: 0.85 },
    whileInView: { opacity: 1, scale: 1 },
  },
  zoomOut: {
    initial: { opacity: 0, scale: 1.15 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

export const animationConfig = {
  transition: { duration: 1.0, ease: [0.25, 0.1, 0.25, 1.0] }, // smooth cubic-bezier easing
  viewport: { once: false, amount: 0.3 }, // run again when re-entering view
};
