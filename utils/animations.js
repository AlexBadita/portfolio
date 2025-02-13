export const animationFromLeft = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const animationFromTop = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export const animationFromTopSmooth = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

export const animationFromLeftSmooth = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 1, delay: delay } },
});

export const animationCards = (index) => ({
  hidden: { x: index % 2 === 0 ? -100 : 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.75, delay: 0.5 } },
});

export const animationNavbar = () => ({
  hidden: { y: -100, x: "-50%", opacity: 0 },
  visible: { y: 0, x: "-50%", opacity: 1, transition: { duration: 0.5 } },
});

export const animationCloseButton = (isOpen) => ({
  initial: { rotate: 0 },
  whileInView: { rotate: isOpen ? 180 : 0, duration: 1 },
  whileHover: { rotate: 90, scale: 1.2, transition: { duration: 0.4 } },
  whileTap: { rotate: -90, scale: 1, transition: { duration: 0.4 } },
  transition: { type: "spring", stiffness: 300, duration: 1 },
});
