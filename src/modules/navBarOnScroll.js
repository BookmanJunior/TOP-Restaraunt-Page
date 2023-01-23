let lastScroll = 0;

export default function navFloatToggle(mainNav) {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    toggleClassesOnScrollDown(currentScroll, mainNav);
    lastScroll = currentScroll;
    return;
  }

  if (currentScroll < lastScroll) {
    toggleClassesOnScrollUp(currentScroll, mainNav);
    // reset lastScroll
    if (currentScroll === 0) {
      lastScroll = 0;
    }
  }
}

function toggleClassesOnScrollDown(currentScroll, mainNav) {
  if (currentScroll >= 100) {
    mainNav.classList.add("scrolled");
  }

  if (currentScroll >= 400) {
    mainNav.classList.add("floating");
  }
}

function toggleClassesOnScrollUp(currentScroll, mainNav) {
  if (currentScroll <= 400) {
    mainNav.classList.add("sleep");
  }

  if (currentScroll <= 250) {
    mainNav.classList.remove("floating");
  }

  if (currentScroll <= 150) {
    mainNav.classList.remove("sleep", "scrolled");
  }
}
