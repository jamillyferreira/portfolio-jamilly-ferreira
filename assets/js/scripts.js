const darkModeButton = document.querySelector(".toggleDarkMode");
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dataUpdate = document.querySelector(".data-update");
const links = document.querySelectorAll("a[href]");
const body = document.body;

const updateIcon = (isDarkMode) => {
  const icon = darkModeButton.querySelector("i");
  if (!icon) return;
  icon.classList.remove(isDarkMode ? "fa-sun" : "fa-moon");
  icon.classList.add(isDarkMode ? "fa-moon" : "fa-sun");
};

const saveTheme = localStorage.getItem("theme");
if (saveTheme === "dark") {
  body.classList.add("dark-mode");
  updateIcon(true);
} else {
  updateIcon(false);
}

const toggleTheme = () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  updateIcon(isDarkMode);
};

const isMobile = () => {
  return (
    window.innerWidth < 768 ||
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
      navigator.userAgent
    )
  );
};

if (darkModeButton) {
  darkModeButton.addEventListener("click", toggleTheme);
}

if (dropdownToggle) {
  dropdownToggle.addEventListener("click", () => {
    const menu = document.querySelector(".dropdown-menu");
    menu.classList.toggle("visible");
  });
}

if (dataUpdate) {
  const lastModified = new Date(document.lastModified);
  dataUpdate.textContent = `Última atualização: ${lastModified.toLocaleDateString(
    "pt-BR"
  )} • v1.1`;
}

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (link.target === "_blank" || href.startsWith("#")) return;
    e.preventDefault();
    document.body.classList.add("fade-out");

    setTimeout(() => {
      window.location.href = href;
    }, 300);
  });
});

body.classList.add("loaded");

// --- Inicialização de plugins ---
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
