import "./styles/style.css";
import { header } from "./modules/header";
import home from "./modules/home";
import menu from "./modules/menu";
import about from "./modules/about";

const content = document.getElementById("content");

content.addEventListener("click", tabSwitching);

function defaultPage() {
  content.appendChild(home());
  document.querySelector(".home-link").classList.add("active");
}

defaultPage();

function tabSwitching(e) {
  if (e.target.matches(".nav-item")) {
    content.textContent = "";
  }

  if (e.target.matches(".home-link")) {
    content.append(home());
    document.querySelector(".home-link").classList.add("active");
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
