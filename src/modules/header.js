function navbar() {
  const links = ["Home", "Menu", "About"];

  const navElement = document.createElement("nav");
  const navWrapper = document.createElement("div");
  const logo = document.createElement("p");
  const navLinks = document.createElement("ul");

  navWrapper.classList.add("nav-wrapper");
  logo.classList.add("logo-header");
  logo.textContent = "Luna";

  navElement.appendChild(navWrapper);
  navWrapper.appendChild(logo);
  navWrapper.appendChild(navLinks);

  links.forEach((link) => {
    const li = document.createElement("li");
    li.textContent = link;
    li.classList.add("nav-item");
    navLinks.appendChild(li);
  });

  return navElement;
}

function header() {
  const headerElement = document.createElement("header");

  headerElement.appendChild(navbar());

  return headerElement;
}

export { navbar, header };
