// Dark / Light Mode Toggle
const modeBtn = document.getElementById("toggleMode");
modeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Scroll Animation Reveal
const animatedItems = document.querySelectorAll(
  ".animate-slide-up, .animate-slide-left, .animate-slide-right, .animate-zoom, .animate-fade-delay"
);

window.addEventListener("scroll", () => {
  animatedItems.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) el.classList.add("visible");
  });
});
