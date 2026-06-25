// 1. Scroll Fade-in Animation Logic
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.1 });

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// 2. Tab Switching Logic for "PROJECTS"
window.openTab = function(tabName) {
  // Hide all tab contents
  let contents = document.getElementsByClassName("tab-content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("active-tab");
  }
  
  // Remove active class from all buttons
  let buttons = document.getElementsByClassName("tab-btn");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  
  // Show the selected tab and highlight the button
  document.getElementById(tabName).classList.add("active-tab");
  event.currentTarget.classList.add("active");
}
