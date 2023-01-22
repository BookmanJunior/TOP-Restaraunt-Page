import { navbar } from "./header";
import home from "./home";

export default function initialPage() {
  document.getElementById("content").append(navbar(), home());
  const homeLinks = document.querySelectorAll(".home-link");
  homeLinks.forEach((link) => {
    link.classList.add("active");
  });
}
