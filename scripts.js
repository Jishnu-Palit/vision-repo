// Smooth scroll for internal anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Scroll Reveal effect
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150; // adjust to control trigger point
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);

// Initial call on page load
revealOnScroll();

// Placeholder for future feature JavaScript:
// Timer, Stopwatch, Word Editor, Google Search integration - to be coded here later.


