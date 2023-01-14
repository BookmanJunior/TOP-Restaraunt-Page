import "./styles/style.css";
import { navbar, header } from "./modules/header";
import home from "./modules/home";
import menu from "./modules/menu";

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
    content.append(header(), menu());
    document.querySelector(".menu-link").classList.add("active");
  }
}
