// Scroll-based Navigation Highlighting

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav li");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navItems.forEach((li) => {
          li.classList.remove("active");

          const link = li.querySelector("a");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            li.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));

// Scroll Indicator Animation

const indicator = document.getElementById("scroll-indicator");

window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    indicator.style.opacity = "0";
  } else {
    indicator.style.opacity = "1";
  }
});