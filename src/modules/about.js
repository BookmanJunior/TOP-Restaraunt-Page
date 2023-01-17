import aboutImg from "../assets/about.webp";
import aboutImg2 from "../assets/about-1.webp";

export default function aboutSectionComponent() {
  const aboutSection = document.createElement("section");
  const container = document.createElement("div");

  aboutSection.classList.add("about-section");
  container.classList.add("container");

  container.appendChild(aboutContent());
  aboutSection.appendChild(container);

  return aboutSection;
}

function aboutContent() {
  const aboutWrapper = document.createElement("div");
  const aboutImgsContainer = document.createElement("div");
  const aboutImgContainer = new Image();
  const aboutImg2Container = new Image();
  const aboutTextWrapper = document.createElement("div");
  const aboutTextHeader = document.createElement("div");
  const aboutTextBody = document.createElement("div");
  const aboutTextFooter = document.createElement("div");
  const about = document.createElement("p");
  const restTitle = document.createElement("h2");

  aboutWrapper.classList.add("about-content");
  aboutImgsContainer.classList.add("about-imgs-wrapper");
  aboutImgContainer.classList.add("about");
  aboutImg2Container.classList.add("about-2");
  aboutTextWrapper.classList.add("about-text-wrapper");
  aboutTextHeader.classList.add("about-text-header");
  aboutTextBody.classList.add("about-text-body");
  aboutTextFooter.classList.add("about-text-footer");
  about.classList.add("about-title", "accent-class");
  restTitle.classList.add("about-restaurant-title");

  aboutImgContainer.draggable = false;
  aboutImg2Container.draggable = false;

  aboutImgContainer.src = aboutImg;
  aboutImg2Container.src = aboutImg2;
  about.textContent = "About";
  restTitle.textContent = "Luna Restaurant";

  aboutImgsContainer.append(aboutImgContainer, aboutImg2Container);
  aboutTextWrapper.append(aboutTextHeader, aboutTextBody, aboutTextFooter);
  aboutWrapper.append(aboutImgsContainer, aboutTextWrapper);
  aboutTextHeader.append(about, restTitle);

  return aboutWrapper;
}
