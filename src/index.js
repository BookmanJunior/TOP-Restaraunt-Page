import "./styles/style.css";
import { navbar, header } from "./modules/header";
import initialPage from "./modules/initialPage";
import menu from "./modules/menu";
import about from "./modules/about";
import navFloatToggle from "./modules/navBarOnScroll";
import { navBarToggle, navLinkClassToggle } from "./modules/navBarFunctions";

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
    navLinkClassToggle("menu");
    return;
  }

  if (e.target.matches(".about-link")) {
    content.append(navbar(), header("About"), about());
    navLinkClassToggle("about");
  }
}
