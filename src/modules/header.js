function navbar() {
  const links = ["Home", "Menu", "About"];

  const navElement = document.createElement("nav");
  const navWrapper = document.createElement("div");
  const logo = document.createElement("p");
  const navLinks = document.createElement("ul");
  const navLinksCopy = navLinks.cloneNode(true);
  const navToggler = document.createElement("button");
  const navCollapse = document.createElement("div");

  navElement.id = "mainNav";
  navElement.classList.add("main-nav");
  navWrapper.classList.add("main-nav-wrapper");
  navLinks.classList.add("main-nav-links");
  logo.classList.add("logo-header");
  navToggler.classList.add("nav-toggler");
  navCollapse.classList.add("nav-collapse");
  navLinksCopy.classList.add("nav-collapse-links");
  logo.textContent = "Luna";

  navElement.appendChild(navWrapper);
  navWrapper.appendChild(logo);
  navWrapper.appendChild(navLinks);
  navWrapper.appendChild(navToggler);
  navWrapper.appendChild(navCollapse);
  navToggler.appendChild(svgHam());
  navCollapse.appendChild(navLinksCopy);

  links.forEach((link) => {
    const li = document.createElement("li");
    li.textContent = link;
    li.classList.add("nav-item", `${link.toLowerCase()}-link`);
    navLinks.appendChild(li);
    navLinksCopy.appendChild(li.cloneNode(true));
  });

  return navElement;
}

function header(page) {
  const headerElement = document.createElement("header");
  const heroWrapper = document.createElement("div");
  const heroText = document.createElement("h1");

  heroText.textContent = page;

  heroWrapper.classList.add("hero-wrapper");
  heroText.classList.add("hero-text");

  heroWrapper.appendChild(heroText);
  headerElement.appendChild(heroWrapper);

  return headerElement;
}

export { navbar, header };

function svgHam() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const rectOne = rectComponent("line-top", "25");
  const rectTwo = rectComponent("line-middle", "45");
  const rectThree = rectComponent("line-bottom", "65");

  svg.classList.add("hamburger");

  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("width", "35");

  svg.append(rectOne, rectTwo, rectThree);

  return svg;
}

function rectComponent(classTwo, y, x = 10, classOne = "line") {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  rect.classList.add(classOne, classTwo);

  rect.setAttribute("width", "80");
  rect.setAttribute("height", "10");
  rect.setAttribute("x", x);
  rect.setAttribute("y", y);
  rect.setAttribute("rx", "5");
  rect.setAttribute("fill", "white");

  return rect;
}
