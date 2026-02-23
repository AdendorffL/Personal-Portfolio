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