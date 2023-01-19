import "./styles/style.css";
import { navbar, header } from "./modules/header";
import { home, featuredItems } from "./modules/home";
import menu from "./modules/menu";
import about from "./modules/about";

const content = document.getElementById("content");

content.addEventListener("click", tabSwitching);
document.body.addEventListener("click", menuToggle);

function defaultPage() {
  content.append(navbar(), home(), featuredItems());
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
    e.target.classList.add("active");
    content.append(header("Specialties"), menu());
    document.querySelector(".menu-link").classList.add("active");
  }

  if (e.target.matches(".about-link")) {
    e.target.classList.add("active");
    content.append(header("About"), about());
  }
}

function menuToggle(e) {
  if (e.target.matches(".nav-toggler")) {
    const navCollapse = document.querySelector(".nav-collapse");
    navCollapse.classList.toggle("display");
  }
}
