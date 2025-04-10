// script.js
window.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  document.querySelectorAll(".card, .section, .hero").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });
});