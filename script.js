// Typing animation for roles
const roles = ["Front-End Developer", "Digital Marketer", "Freelancer", "Content Creator"];
let i = 0, j = 0, currentRole = "", isDeleting = false;
const typed = document.getElementById("typed-roles");

function typeRole() {
  if (!typed) return;
  if (i >= roles.length) i = 0;
  let fullRole = roles[i];
  if (!isDeleting) {
    currentRole = fullRole.substring(0, j+1);
    typed.textContent = currentRole;
    j++;
    if (currentRole === fullRole) { isDeleting = true; setTimeout(typeRole, 1500); return; }
  } else {
    currentRole = fullRole.substring(0, j-1);
    typed.textContent = currentRole;
    j--;
    if (currentRole === "") { isDeleting = false; i++; }
  }
  setTimeout(typeRole, isDeleting ? 50 : 150);
}
typeRole();

// Progress bars animation on scroll
const progressBars = document.querySelectorAll(".progress-bar");
function animateProgress() {
  const triggerBottom = window.innerHeight * 0.9;
  progressBars.forEach(bar => {
    const barTop = bar.getBoundingClientRect().top;
    if (barTop < triggerBottom) {
      bar.style.width = bar.dataset.width;
    }
  });
}
window.addEventListener("scroll", animateProgress);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Back to top button
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) backToTop.style.display = "flex";
  else backToTop.style.display = "none";
});
backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
