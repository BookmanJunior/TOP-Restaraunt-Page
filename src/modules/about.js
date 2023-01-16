import aboutImg from "../assets/about.webp";
import aboutImg2 from "../assets/about-1.webp";

export default function aboutSectionComponent() {
  const aboutSection = document.createElement("section");
  const container = document.createElement("div");

  aboutSection.classList.add("about-section");
  container.classList.add("container");

  aboutSection.appendChild(container);
  aboutSection.appendChild(aboutContent());

  return aboutSection;
}

function aboutContent() {
  const aboutWrapper = document.createElement("div");
  const aboutImgContainer = new Image();
  const aboutImg2Container = new Image();
  const aboutTextWrapper = document.createElement("div");
  const aboutTextHeader = document.createElement("div");
  const aboutTextBody = document.createElement("div");
  const aboutTextFooter = document.createElement("div");

  aboutWrapper.classList.add("about-content");
  aboutImgContainer.classList.add("about");
  aboutImg2Container.classList.add("about-2");

  aboutImgContainer.src = aboutImg;
  aboutImg2Container.src = aboutImg2;
  aboutTextWrapper.append(aboutTextHeader, aboutTextBody, aboutTextFooter);
  aboutWrapper.append(aboutImgContainer, aboutImg2Container, aboutTextWrapper);

  return aboutWrapper;
}
