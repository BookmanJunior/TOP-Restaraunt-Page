import "./styles/style.css";
import { navbar, header } from "./modules/header";
import home from "./modules/home";
import menu from "./modules/menu";
import about from "./modules/about";

const content = document.getElementById("content");

content.addEventListener("click", tabSwitching);
content.addEventListener("click", menuToggle);
window.addEventListener("scroll", navFloatToggle);

function defaultPage() {
  content.append(navbar(), home());
  document.querySelector(".home-link").classList.add("active");
}

defaultPage();

function tabSwitching(e) {
  if (e.target.matches(".nav-item")) {
    content.textContent = "";
  }

  if (e.target.matches(".home-link")) {
    defaultPage();
  }

  if (e.target.matches(".menu-link")) {
    content.append(header("Specialties"), menu());
    document.querySelector(".menu-link").classList.add("active");
  }

  if (e.target.matches(".about-link")) {
    content.append(header("About"), about());
    document.querySelector(".about-link").classList.add("active");
  }
}

function menuToggle(e) {
  if (e.target.matches(".nav-toggler")) {
    const navCollapse = document.querySelector(".nav-collapse");
    navCollapse.classList.toggle("display");
  }
}

function navFloatToggle() {
  const mainNav = document.querySelector("nav");
  if (window.scrollY >= 400) {
    mainNav.classList.add("floating");
  } else {
    mainNav.classList.remove("floating");
  }
}
