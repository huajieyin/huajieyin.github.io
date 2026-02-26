const reveals = document.querySelectorAll('.reveal');

if (reveals.length === 0) {
  // No reveal nodes on this page.
} else if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  reveals.forEach((node) => node.classList.add('show'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach((node, index) => {
    node.style.transitionDelay = `${index * 60}ms`;
    observer.observe(node);
  });
}
