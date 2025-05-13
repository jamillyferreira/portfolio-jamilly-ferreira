document.addEventListener("DOMContentLoaded", function () {
  const isMobile = () => {
    return (
      window.innerWidth < 768 ||
      navigator.userAgent.match(/Android/i) ||
      navigator.userAgent.match(/webOS/i) ||
      navigator.userAgent.match(/iPhone/i) ||
      navigator.userAgent.match(/iPad/i) ||
      navigator.userAgent.match(/iPod/i) ||
      navigator.userAgent.match(/BlackBerry/i) ||
      navigator.userAgent.match(/Windows Phone/i)
    );
  };

  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
    mirror: true,
    anchorPlacement: "top-bottom",
    offset: 120,
    delay: 0,
    disable: isMobile(),
    throttleDelay: 99,
  });

  window.addEventListener("resize", function () {
    AOS.init({ disable: isMobile() });
    AOS.refresh();
  });

  window.addEventListener("load", function () {
    AOS.refresh();
  });
});

const header = document.querySelector(".header");

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
