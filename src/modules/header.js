function navbar() {
  const links = ["Home", "Menu", "About"];

  const navElement = document.createElement("nav");
  const navWrapper = document.createElement("div");
  const logo = document.createElement("p");
  const navLinks = document.createElement("ul");
  const navLinksCopy = navLinks.cloneNode(true);
  const navToggler = document.createElement("button");
  const navCollapse = document.createElement("div");

  navWrapper.classList.add("nav-wrapper");
  navLinks.classList.add("main-nav");
  logo.classList.add("logo-header");
  navToggler.classList.add("nav-toggler");
  navCollapse.classList.add("nav-collapse");
  logo.textContent = "Luna";
  navToggler.textContent = "menu";

  navElement.appendChild(navWrapper);
  navWrapper.appendChild(logo);
  navWrapper.appendChild(navLinks);
  navWrapper.appendChild(navToggler);
  navWrapper.appendChild(navCollapse);
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
  headerElement.append(navbar(), heroWrapper);

  return headerElement;
}

export { navbar, header };
