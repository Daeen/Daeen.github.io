// Dark/Light Mode Toggle Functionality
const modeToggle = document.getElementById('modeToggle');
modeToggle.addEventListener('click', function () {
  const body = document.body;
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Hamburger toggle: Show/hide nav-links dropdown
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when clicking on a nav-link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Scroll reveal animation for sections
const sections = document.querySelectorAll('section');
function checkSections() {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('active');
    }
  });
}
window.addEventListener('load', checkSections);
window.addEventListener('scroll', checkSections);
