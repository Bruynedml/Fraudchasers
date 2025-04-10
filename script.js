
document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll navigation
  document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Contact form handler
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(event) {
      alert("Votre message a bien été envoyé ! Nous reviendrons vers vous très vite.");
      form.reset();
    });
  }

  // Reveal animations on scroll using IntersectionObserver
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".section, .card").forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
