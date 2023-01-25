import "./styles/style.css";
import { navbar, header } from "./modules/header";
import initialPage from "./modules/initialPage";
import menu from "./modules/menu";
import about from "./modules/about";
import navBarToggle from "./modules/navBarToggle";
import navFloatToggle from "./modules/navBarOnScroll";
import toggleNavLinkClasses from "./modules/toggleNavLinkClasses";

initialPage();

const content = document.getElementById("content");

content.addEventListener("click", tabSwitching);
content.addEventListener("click", navBarToggle);
window.addEventListener("scroll", navFloatToggle);

function tabSwitching(e) {
  if (e.target.matches(".nav-item") || e.target.matches(".logo-header")) {
    content.textContent = "";
  }

  if (e.target.matches(".home-link") || e.target.matches(".logo-header")) {
    initialPage();
    return;
  }

  if (e.target.matches(".menu-link")) {
    content.append(navbar(), header("Specialties"), menu());
    toggleNavLinkClasses("menu");
    return;
  }

  if (e.target.matches(".about-link")) {
    content.append(navbar(), header("About"), about());
    toggleNavLinkClasses("about");
  }
}
