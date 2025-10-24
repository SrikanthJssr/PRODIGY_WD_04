// Add smooth scroll and highlight active link on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".active")?.classList.remove("active");
    link.classList.add("active");
  });
});
