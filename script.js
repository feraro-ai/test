const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const yearEl = document.getElementById("year");
const cookieBar = document.getElementById("cookieBar");
const acceptCookies = document.getElementById("acceptCookies");
const declineCookies = document.getElementById("declineCookies");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const cookieKey = "growthwithin_cookie_choice";
const cookieChoice = localStorage.getItem(cookieKey);

if (cookieBar && !cookieChoice) {
  cookieBar.classList.add("visible");
}

function setCookieChoice(choice) {
  localStorage.setItem(cookieKey, choice);
  if (cookieBar) {
    cookieBar.classList.remove("visible");
  }
}

if (acceptCookies) {
  acceptCookies.addEventListener("click", () => setCookieChoice("accepted"));
}

if (declineCookies) {
  declineCookies.addEventListener("click", () => setCookieChoice("declined"));
}
