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
    content.append(navbar(), header("Specialties"), menu());
    document.querySelector(".menu-link").classList.add("active");
  }

  if (e.target.matches(".about-link")) {
    content.append(navbar(), header("About"), about());
    document.querySelector(".about-link").classList.add("active");
  }
}

function menuToggle(e) {
  if (e.target.matches(".nav-toggler")) {
    const navCollapse = document.querySelector(".nav-collapse");
    const navLines = [...document.getElementsByClassName("line")];

    navCollapse.classList.toggle("display");
    navLines.forEach((line) => {
      line.classList.toggle("open");
    });
  }
}

function navFloatToggle() {
  const mainNav = document.querySelector("nav");

  if (window.scrollY >= 100) {
    mainNav.classList.add("scrolled");
  }

  if (window.scrollY >= 400) {
    mainNav.classList.add("floating");
  }

  if (window.scrollY >= 100 && window.scrollY <= 200) {
    mainNav.classList.add("sleep");
  }

  if (window.scrollY <= 250) {
    mainNav.classList.remove("floating");
  }

  if (window.scrollY <= 150) {
    mainNav.classList.remove("sleep", "scrolled");
  }
}
