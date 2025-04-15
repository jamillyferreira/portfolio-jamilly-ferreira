document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector("#mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

 
 
});



const darkModeButton = document.querySelector(".togglDarkMode");
const toggleTheme = () => {
  const body = document.body;
  const icon = darkModeButton.querySelector("i");
  body.classList.toggle("dark-mode");

  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  if (isDarkMode) {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  } else {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
};
darkModeButton.addEventListener("click", toggleTheme);
