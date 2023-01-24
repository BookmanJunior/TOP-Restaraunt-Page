export default function navBarToggle(e) {
  if (e.target.matches(".nav-toggler")) {
    const navCollapse = document.querySelector(".nav-collapse");
    const navLines = [...document.getElementsByClassName("line")];

    navCollapse.classList.toggle("display");
    navLines.forEach((line) => {
      line.classList.toggle("open");
    });
  }
}
