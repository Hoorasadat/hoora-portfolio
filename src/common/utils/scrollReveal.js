import ScrollReveal from 'scrollreveal';

const initScrollReveal = (targetElements, defaultProps) => {
  if (!targetElements.length) return;

  ScrollReveal({ reset: false });

  targetElements.forEach(({ element, animation }) => {
    ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
  });
};

// Expose the function globally
window.initScrollReveal = initScrollReveal;

export default initScrollReveal;
