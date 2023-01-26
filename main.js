/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/header.jpg */ "./src/assets/header.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/backgroundImg.jpg */ "./src/assets/backgroundImg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --color-primary: #fff;\r\n  --color-accent: #c8a97e;\r\n  --color-gray: #666666;\r\n  --color-black: #000000;\r\n  --header-overlay: linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.5));\r\n  --background-overlay: linear-gradient(rgb(0 0 0 / 0.7), rgb(0 0 0 / 0.7));\r\n  --border-settings: 1px solid rgb(255 255 255 / 0.1);\r\n  --ff-primary: \"Poppins\", Arial, sans-serif;\r\n  --ff-accent: \"Great Vibes\", \"Comic Sans MS\", \"Comic Sans\", cursive;\r\n  --ff-bold: 900;\r\n  --ff-semi-bold: 600;\r\n  --stagger-delay: 50ms;\r\n}\r\n\r\n/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n/*\r\n    2. Remove default margin & padding\r\n  */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/*\r\n    3. Allow percentage-based heights in the application\r\n  */\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n}\r\n/*\r\n    Typographic tweaks!\r\n    4. Add accessible line-height\r\n    5. Improve text rendering\r\n  */\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n    6. Improve media defaults\r\n  */\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n    7. Remove built-in form typography styles\r\n  */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n    8. Avoid text overflows\r\n  */\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n/*\r\n    9. Create a root stacking context\r\n  */\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n/* General styles */\r\n\r\n#content {\r\n  font-family: var(--ff-primary);\r\n}\r\n\r\n.menu-section,\r\n.about-section {\r\n  padding-block: 7em;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n}\r\n\r\nli,\r\nbutton,\r\n.logo-header {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Header styles */\r\nheader {\r\n  min-height: 450px;\r\n  background-image: var(--header-overlay), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  color: var(--color-primary);\r\n  display: grid;\r\n  grid-template-rows: auto 1fr 200px;\r\n}\r\n\r\n.main-nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  border-bottom: var(--border-settings);\r\n  padding-block: 1em;\r\n  position: absolute;\r\n  z-index: 999;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.main-nav.scrolled {\r\n  position: fixed;\r\n  padding-block: 0.5em;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-black);\r\n  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);\r\n  transform: translateY(-100px);\r\n}\r\n\r\n.main-nav.sleep {\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav.floating {\r\n  transform: translateY(0);\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav-wrapper,\r\n.container {\r\n  width: min(1140px, 90%);\r\n}\r\n\r\n.main-nav-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-header {\r\n  font-size: 1.5rem;\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.main-nav-links {\r\n  gap: 2.5em;\r\n}\r\n\r\n.nav-item,\r\n.nav-item:is(.active, .active:hover, :hover) {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n.nav-item:is(.active, :hover) {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.nav-item.active:hover {\r\n  color: var(--color-primary);\r\n}\r\n\r\n.main-nav.floating .nav-item.active:hover {\r\n  color: var(--color-black);\r\n}\r\n\r\n.nav-toggler {\r\n  display: none;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: rgb(255 255 255 / 0.5);\r\n  letter-spacing: 1.2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.hamburger {\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-toggler .line {\r\n  fill: var(--color-primary);\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in 200ms,\r\n    rotate 200ms ease-in, opacity 0ms 200ms;\r\n  transform-origin: center;\r\n}\r\n\r\n.nav-toggler .line.open {\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in,\r\n    rotate 200ms ease-in 200ms, opacity 0ms 200ms;\r\n}\r\n\r\n.main-nav.floating .line {\r\n  fill: var(--color-black);\r\n}\r\n\r\n.nav-toggler:hover .line {\r\n  fill: var(--color-accent);\r\n}\r\n\r\n.nav-toggler :is(.line-top.open, .line-bottom.open) {\r\n  y: 45;\r\n}\r\n\r\n.nav-toggler .line-top.open {\r\n  rotate: 45deg;\r\n}\r\n\r\n.nav-toggler .line-bottom.open {\r\n  rotate: -45deg;\r\n}\r\n\r\n.nav-toggler .line-middle.open {\r\n  opacity: 0;\r\n}\r\n\r\n.nav-collapse {\r\n  display: block;\r\n  max-height: 0;\r\n  flex-basis: 100%;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse > ul {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  opacity: 0;\r\n  gap: 2em;\r\n  padding-block: 1em;\r\n  visibility: hidden;\r\n}\r\n\r\n.nav-collapse.display {\r\n  max-height: 150px;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse.display .nav-collapse-links {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 100ms ease-in-out 150ms;\r\n}\r\n\r\n@media screen and (min-width: 981px) {\r\n  .nav-collapse.display,\r\n  .nav-collapse > ul {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .main-nav {\r\n    color: var(--color-primary);\r\n    background-color: var(--color-black);\r\n    border-bottom: none;\r\n    position: static;\r\n  }\r\n\r\n  .main-nav-links {\r\n    display: none;\r\n  }\r\n\r\n  .nav-toggler {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.hero-wrapper {\r\n  grid-row: 3;\r\n  place-self: center;\r\n}\r\n\r\n.hero-text {\r\n  font-size: 3.125rem;\r\n}\r\n\r\n/* Home styles */\r\n.home-section {\r\n  height: 100vh;\r\n  background-image: var(--background-overlay),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  background-position: 50% 10%;\r\n  font-family: var(--ff-primary);\r\n  color: var(--color-primary);\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 0.3fr;\r\n  position: relative;\r\n}\r\n\r\n.info-wrapper {\r\n  align-self: center;\r\n  text-align: center;\r\n  line-height: 1;\r\n}\r\n\r\n.main-logo {\r\n  font-size: 5rem;\r\n}\r\n\r\n.rest-disc {\r\n  font-size: clamp(3rem, 1.75rem + 4vw, 4rem);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.featured-items {\r\n  border-top: var(--border-settings);\r\n  color: var(--color-primary);\r\n  font-size: 1.125rem;\r\n  width: 100%;\r\n}\r\n\r\n.featured-items-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  align-items: center;\r\n  justify-items: center;\r\n  row-gap: 0.5em;\r\n  height: 100%;\r\n  padding-block: 1em;\r\n}\r\n\r\n.featured-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 1em;\r\n}\r\n\r\n.featured-item img {\r\n  border-radius: 50%;\r\n  width: 90px;\r\n  aspect-ratio: 1 / 1;\r\n  object-fit: cover;\r\n  user-select: none;\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .home-section {\r\n    height: calc(100vh - 69px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  .home-section {\r\n    height: calc(100vh + 570px);\r\n  }\r\n\r\n  .featured-items-wrapper {\r\n    grid-template-columns: 1fr;\r\n    padding-block: 2em;\r\n  }\r\n}\r\n\r\n/* Menu style */\r\n\r\n.container {\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-links {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(120px, 100%), 1fr));\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.menu-links > li {\r\n  font-size: 1.2rem;\r\n  font-weight: var(--ff-semi-bold);\r\n  padding: 1em;\r\n}\r\n\r\n.menu-links > li:hover,\r\n.menu-link-active {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  position: relative;\r\n}\r\n\r\n.menu-link-active::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-top: 10px solid var(--color-accent);\r\n  bottom: -10px;\r\n  right: 0;\r\n  left: 0;\r\n  width: 0;\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.menu-item > img {\r\n  height: 100%;\r\n  aspect-ratio: 2 / 1.5;\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-item:nth-child(3) img,\r\n.menu-item:nth-child(4) img {\r\n  order: 1;\r\n}\r\n\r\n.info-container {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 1em;\r\n\r\n  display: grid;\r\n  align-content: space-around;\r\n  row-gap: 5px;\r\n}\r\n\r\n.order-btn {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-accent);\r\n  outline: none;\r\n  padding: 0.5em 1em;\r\n  justify-self: start;\r\n}\r\n\r\n.order-btn:is(:hover, :active) {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.order-btn,\r\n.menu-item {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n:is(.order-btn, .menu-nav-item):is(:hover, :active) {\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.item-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  line-height: 1.3;\r\n}\r\n\r\n.item-header > * {\r\n  font-size: 1.3rem;\r\n  font-weight: var(--ff-semi-bold);\r\n}\r\n\r\n.item-header > h2 {\r\n  max-width: 150px;\r\n}\r\n\r\n.item-price {\r\n  color: var(--color-accent);\r\n}\r\n\r\n@media screen and (max-width: 600px), (max-width: 700px) {\r\n  .menu-links {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item > img {\r\n    aspect-ratio: 3 / 1.5;\r\n  }\r\n\r\n  .menu-item:nth-child(3) img,\r\n  .menu-item:nth-child(4) img {\r\n    order: 0;\r\n  }\r\n\r\n  .menu-link-active::after {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* About styles */\r\n\r\n.about-content {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 2em;\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1em;\r\n}\r\n\r\n.about-imgs-wrapper > img {\r\n  width: 100%;\r\n  height: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n.about {\r\n  transform: translateY(-1.5em);\r\n}\r\n\r\n.about-text-header {\r\n  display: grid;\r\n  gap: 3em;\r\n  line-height: 1;\r\n}\r\n\r\n.about-title {\r\n  font-size: 6.25rem;\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n}\r\n\r\n.about-restaurant-title {\r\n  font-size: 3.125rem;\r\n  grid-row: 1 / 3;\r\n  grid-column: 1;\r\n  align-self: end;\r\n  max-width: 300px;\r\n}\r\n\r\n.about-text,\r\n.work-days {\r\n  font-size: 1rem;\r\n  line-height: 2;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.about-text {\r\n  margin-block: 1.5em 1em;\r\n  max-width: 400px;\r\n}\r\n\r\n.work-days {\r\n  margin-block: 1em;\r\n}\r\n\r\n.work-hours {\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.phone-number {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  .about {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .about-content {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* Animation */\r\n\r\n.info-wrapper,\r\n.hero-wrapper {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translateY(35px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.featured-item,\r\n.menu-nav-item,\r\n.about-imgs-wrapper,\r\n.about-text-wrapper,\r\n.menu-item {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n/* :is(.featured-item, .menu-nav-item):is(:nth-child(1)) {\r\n  animation-delay: 0ms;\r\n} */\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(2)) {\r\n  animation-delay: var(--stagger-delay);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(3)) {\r\n  animation-delay: calc(var(--stagger-delay) + 25ms);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(4)) {\r\n  animation-delay: calc(var(--stagger-delay) + 50ms);\r\n}\r\n\r\n:is(.menu-nav-item, .menu-item):is(:nth-child(5)) {\r\n  animation-delay: calc(var(--stagger-delay) + 75ms);\r\n}\r\n\r\n:is(.menu-item):is(:nth-child(6)) {\r\n  animation-delay: calc(var(--stagger-delay) + 95ms);\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  animation-delay: 0;\r\n}\r\n\r\n.about-text-wrapper {\r\n  animation-delay: 25ms;\r\n}\r\n\r\n/* Utility styles */\r\n\r\n.clr-accent {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.ff-accent {\r\n  font-family: var(--ff-accent);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap\");\r\n\r\n:root {\r\n  --color-primary: #fff;\r\n  --color-accent: #c8a97e;\r\n  --color-gray: #666666;\r\n  --color-black: #000000;\r\n  --header-overlay: linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.5));\r\n  --background-overlay: linear-gradient(rgb(0 0 0 / 0.7), rgb(0 0 0 / 0.7));\r\n  --border-settings: 1px solid rgb(255 255 255 / 0.1);\r\n  --ff-primary: \"Poppins\", Arial, sans-serif;\r\n  --ff-accent: \"Great Vibes\", \"Comic Sans MS\", \"Comic Sans\", cursive;\r\n  --ff-bold: 900;\r\n  --ff-semi-bold: 600;\r\n  --stagger-delay: 50ms;\r\n}\r\n\r\n/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n/*\r\n    2. Remove default margin & padding\r\n  */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/*\r\n    3. Allow percentage-based heights in the application\r\n  */\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n}\r\n/*\r\n    Typographic tweaks!\r\n    4. Add accessible line-height\r\n    5. Improve text rendering\r\n  */\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n    6. Improve media defaults\r\n  */\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n    7. Remove built-in form typography styles\r\n  */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n    8. Avoid text overflows\r\n  */\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n/*\r\n    9. Create a root stacking context\r\n  */\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n/* General styles */\r\n\r\n#content {\r\n  font-family: var(--ff-primary);\r\n}\r\n\r\n.menu-section,\r\n.about-section {\r\n  padding-block: 7em;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n}\r\n\r\nli,\r\nbutton,\r\n.logo-header {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Header styles */\r\nheader {\r\n  min-height: 450px;\r\n  background-image: var(--header-overlay), url(\"../assets/header.jpg\");\r\n  background-size: cover;\r\n  color: var(--color-primary);\r\n  display: grid;\r\n  grid-template-rows: auto 1fr 200px;\r\n}\r\n\r\n.main-nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  border-bottom: var(--border-settings);\r\n  padding-block: 1em;\r\n  position: absolute;\r\n  z-index: 999;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.main-nav.scrolled {\r\n  position: fixed;\r\n  padding-block: 0.5em;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-black);\r\n  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);\r\n  transform: translateY(-100px);\r\n}\r\n\r\n.main-nav.sleep {\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav.floating {\r\n  transform: translateY(0);\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav-wrapper,\r\n.container {\r\n  width: min(1140px, 90%);\r\n}\r\n\r\n.main-nav-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-header {\r\n  font-size: 1.5rem;\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.main-nav-links {\r\n  gap: 2.5em;\r\n}\r\n\r\n.nav-item,\r\n.nav-item:is(.active, .active:hover, :hover) {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n.nav-item:is(.active, :hover) {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.nav-item.active:hover {\r\n  color: var(--color-primary);\r\n}\r\n\r\n.main-nav.floating .nav-item.active:hover {\r\n  color: var(--color-black);\r\n}\r\n\r\n.nav-toggler {\r\n  display: none;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: rgb(255 255 255 / 0.5);\r\n  letter-spacing: 1.2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.hamburger {\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-toggler .line {\r\n  fill: var(--color-primary);\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in 200ms,\r\n    rotate 200ms ease-in, opacity 0ms 200ms;\r\n  transform-origin: center;\r\n}\r\n\r\n.nav-toggler .line.open {\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in,\r\n    rotate 200ms ease-in 200ms, opacity 0ms 200ms;\r\n}\r\n\r\n.main-nav.floating .line {\r\n  fill: var(--color-black);\r\n}\r\n\r\n.nav-toggler:hover .line {\r\n  fill: var(--color-accent);\r\n}\r\n\r\n.nav-toggler :is(.line-top.open, .line-bottom.open) {\r\n  y: 45;\r\n}\r\n\r\n.nav-toggler .line-top.open {\r\n  rotate: 45deg;\r\n}\r\n\r\n.nav-toggler .line-bottom.open {\r\n  rotate: -45deg;\r\n}\r\n\r\n.nav-toggler .line-middle.open {\r\n  opacity: 0;\r\n}\r\n\r\n.nav-collapse {\r\n  display: block;\r\n  max-height: 0;\r\n  flex-basis: 100%;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse > ul {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  opacity: 0;\r\n  gap: 2em;\r\n  padding-block: 1em;\r\n  visibility: hidden;\r\n}\r\n\r\n.nav-collapse.display {\r\n  max-height: 150px;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse.display .nav-collapse-links {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 100ms ease-in-out 150ms;\r\n}\r\n\r\n@media screen and (min-width: 981px) {\r\n  .nav-collapse.display,\r\n  .nav-collapse > ul {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .main-nav {\r\n    color: var(--color-primary);\r\n    background-color: var(--color-black);\r\n    border-bottom: none;\r\n    position: static;\r\n  }\r\n\r\n  .main-nav-links {\r\n    display: none;\r\n  }\r\n\r\n  .nav-toggler {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.hero-wrapper {\r\n  grid-row: 3;\r\n  place-self: center;\r\n}\r\n\r\n.hero-text {\r\n  font-size: 3.125rem;\r\n}\r\n\r\n/* Home styles */\r\n.home-section {\r\n  height: 100vh;\r\n  background-image: var(--background-overlay),\r\n    url(\"../assets/backgroundImg.jpg\");\r\n  background-size: cover;\r\n  background-position: 50% 10%;\r\n  font-family: var(--ff-primary);\r\n  color: var(--color-primary);\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 0.3fr;\r\n  position: relative;\r\n}\r\n\r\n.info-wrapper {\r\n  align-self: center;\r\n  text-align: center;\r\n  line-height: 1;\r\n}\r\n\r\n.main-logo {\r\n  font-size: 5rem;\r\n}\r\n\r\n.rest-disc {\r\n  font-size: clamp(3rem, 1.75rem + 4vw, 4rem);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.featured-items {\r\n  border-top: var(--border-settings);\r\n  color: var(--color-primary);\r\n  font-size: 1.125rem;\r\n  width: 100%;\r\n}\r\n\r\n.featured-items-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  align-items: center;\r\n  justify-items: center;\r\n  row-gap: 0.5em;\r\n  height: 100%;\r\n  padding-block: 1em;\r\n}\r\n\r\n.featured-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 1em;\r\n}\r\n\r\n.featured-item img {\r\n  border-radius: 50%;\r\n  width: 90px;\r\n  aspect-ratio: 1 / 1;\r\n  object-fit: cover;\r\n  user-select: none;\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .home-section {\r\n    height: calc(100vh - 69px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  .home-section {\r\n    height: calc(100vh + 570px);\r\n  }\r\n\r\n  .featured-items-wrapper {\r\n    grid-template-columns: 1fr;\r\n    padding-block: 2em;\r\n  }\r\n}\r\n\r\n/* Menu style */\r\n\r\n.container {\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-links {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(120px, 100%), 1fr));\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.menu-links > li {\r\n  font-size: 1.2rem;\r\n  font-weight: var(--ff-semi-bold);\r\n  padding: 1em;\r\n}\r\n\r\n.menu-links > li:hover,\r\n.menu-link-active {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  position: relative;\r\n}\r\n\r\n.menu-link-active::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-top: 10px solid var(--color-accent);\r\n  bottom: -10px;\r\n  right: 0;\r\n  left: 0;\r\n  width: 0;\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.menu-item > img {\r\n  height: 100%;\r\n  aspect-ratio: 2 / 1.5;\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-item:nth-child(3) img,\r\n.menu-item:nth-child(4) img {\r\n  order: 1;\r\n}\r\n\r\n.info-container {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 1em;\r\n\r\n  display: grid;\r\n  align-content: space-around;\r\n  row-gap: 5px;\r\n}\r\n\r\n.order-btn {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-accent);\r\n  outline: none;\r\n  padding: 0.5em 1em;\r\n  justify-self: start;\r\n}\r\n\r\n.order-btn:is(:hover, :active) {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.order-btn,\r\n.menu-item {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n:is(.order-btn, .menu-nav-item):is(:hover, :active) {\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.item-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  line-height: 1.3;\r\n}\r\n\r\n.item-header > * {\r\n  font-size: 1.3rem;\r\n  font-weight: var(--ff-semi-bold);\r\n}\r\n\r\n.item-header > h2 {\r\n  max-width: 150px;\r\n}\r\n\r\n.item-price {\r\n  color: var(--color-accent);\r\n}\r\n\r\n@media screen and (max-width: 600px), (max-width: 700px) {\r\n  .menu-links {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item > img {\r\n    aspect-ratio: 3 / 1.5;\r\n  }\r\n\r\n  .menu-item:nth-child(3) img,\r\n  .menu-item:nth-child(4) img {\r\n    order: 0;\r\n  }\r\n\r\n  .menu-link-active::after {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* About styles */\r\n\r\n.about-content {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 2em;\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1em;\r\n}\r\n\r\n.about-imgs-wrapper > img {\r\n  width: 100%;\r\n  height: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n.about {\r\n  transform: translateY(-1.5em);\r\n}\r\n\r\n.about-text-header {\r\n  display: grid;\r\n  gap: 3em;\r\n  line-height: 1;\r\n}\r\n\r\n.about-title {\r\n  font-size: 6.25rem;\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n}\r\n\r\n.about-restaurant-title {\r\n  font-size: 3.125rem;\r\n  grid-row: 1 / 3;\r\n  grid-column: 1;\r\n  align-self: end;\r\n  max-width: 300px;\r\n}\r\n\r\n.about-text,\r\n.work-days {\r\n  font-size: 1rem;\r\n  line-height: 2;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.about-text {\r\n  margin-block: 1.5em 1em;\r\n  max-width: 400px;\r\n}\r\n\r\n.work-days {\r\n  margin-block: 1em;\r\n}\r\n\r\n.work-hours {\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.phone-number {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  .about {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .about-content {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* Animation */\r\n\r\n.info-wrapper,\r\n.hero-wrapper {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translateY(35px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.featured-item,\r\n.menu-nav-item,\r\n.about-imgs-wrapper,\r\n.about-text-wrapper,\r\n.menu-item {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n/* :is(.featured-item, .menu-nav-item):is(:nth-child(1)) {\r\n  animation-delay: 0ms;\r\n} */\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(2)) {\r\n  animation-delay: var(--stagger-delay);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(3)) {\r\n  animation-delay: calc(var(--stagger-delay) + 25ms);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(4)) {\r\n  animation-delay: calc(var(--stagger-delay) + 50ms);\r\n}\r\n\r\n:is(.menu-nav-item, .menu-item):is(:nth-child(5)) {\r\n  animation-delay: calc(var(--stagger-delay) + 75ms);\r\n}\r\n\r\n:is(.menu-item):is(:nth-child(6)) {\r\n  animation-delay: calc(var(--stagger-delay) + 95ms);\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  animation-delay: 0;\r\n}\r\n\r\n.about-text-wrapper {\r\n  animation-delay: 25ms;\r\n}\r\n\r\n/* Utility styles */\r\n\r\n.clr-accent {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.ff-accent {\r\n  font-family: var(--ff-accent);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/about.js":
/*!******************************!*\
  !*** ./src/modules/about.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutSectionComponent)
/* harmony export */ });
/* harmony import */ var _assets_about_webp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/about.webp */ "./src/assets/about.webp");
/* harmony import */ var _assets_about_1_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/about-1.webp */ "./src/assets/about-1.webp");



function aboutSectionComponent() {
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

  aboutWrapper.classList.add("about-content");
  aboutImgsContainer.classList.add("about-imgs-wrapper");
  aboutImgContainer.classList.add("about");
  aboutImg2Container.classList.add("about-2");

  aboutImgContainer.draggable = false;
  aboutImg2Container.draggable = false;

  aboutImgContainer.src = _assets_about_webp__WEBPACK_IMPORTED_MODULE_0__;
  aboutImg2Container.src = _assets_about_1_webp__WEBPACK_IMPORTED_MODULE_1__;

  aboutImgsContainer.append(aboutImgContainer, aboutImg2Container);
  aboutWrapper.append(aboutImgsContainer, aboutBodyText());

  return aboutWrapper;
}

function aboutBodyText() {
  const aboutTextWrapper = document.createElement("div");
  const aboutTextHeader = document.createElement("div");
  const aboutTextBody = document.createElement("div");
  const aboutTextFooter = document.createElement("div");
  const about = document.createElement("p");
  const restTitle = document.createElement("h2");
  const bodyContent = document.createElement("p");
  const days = document.createElement("p");
  const hours = document.createElement("span");
  const phoneNumber = document.createElement("p");

  aboutTextWrapper.classList.add("about-text-wrapper");
  aboutTextHeader.classList.add("about-text-header");
  aboutTextBody.classList.add("about-text-body");
  aboutTextFooter.classList.add("about-text-footer");
  about.classList.add("about-title", "clr-accent", "ff-accent");
  restTitle.classList.add("about-restaurant-title");
  phoneNumber.classList.add("phone-number", "clr-accent");
  bodyContent.classList.add("about-text");
  days.classList.add("work-days");
  hours.classList.add("work-hours");

  about.textContent = "About";
  restTitle.textContent = "Luna Restaurant";
  bodyContent.textContent =
    "A small river named Duden flows by their place and supplies it with the necessary regelialia." +
    "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.";
  days.textContent = "Mon - Fri";
  hours.textContent = " 8 AM - 11 PM";
  phoneNumber.textContent = "+1-978-123-4567";

  days.appendChild(hours);
  aboutTextBody.append(bodyContent, days, phoneNumber);
  aboutTextWrapper.append(aboutTextHeader, aboutTextBody, aboutTextFooter);
  aboutTextHeader.append(about, restTitle);

  return aboutTextWrapper;
}


/***/ }),

/***/ "./src/modules/header.js":
/*!*******************************!*\
  !*** ./src/modules/header.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
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
  navToggler.id = "navToggler";
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


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/modules/menuItems.js");


function home() {
  const homeSection = document.createElement("section");

  homeSection.classList.add("home-section");

  homeSection.append(infoComponent(), featuredItems());

  return homeSection;
}

function infoComponent() {
  const infoWrapper = document.createElement("div");
  const logo = document.createElement("p");
  const restaurantDisc = document.createElement("h1");

  infoWrapper.classList.add("info-wrapper");
  logo.classList.add("main-logo", "clr-accent", "ff-accent");
  restaurantDisc.classList.add("rest-disc");

  logo.textContent = "Luna";
  restaurantDisc.textContent = "Delicious Specialties";

  infoWrapper.appendChild(logo);
  infoWrapper.appendChild(restaurantDisc);

  return infoWrapper;
}

function featuredItems() {
  const featuredItemsContainer = document.createElement("section");
  const featuredItemsWrapper = document.createElement("div");

  featuredItemsContainer.classList.add("featured-items");
  featuredItemsWrapper.classList.add("featured-items-wrapper");

  Object.values(_menuItems__WEBPACK_IMPORTED_MODULE_0__["default"])
    .slice(0, 4)
    .forEach((item) => {
      const featuredItem = document.createElement("div");
      const itemImg = new Image();
      const itemName = document.createElement("p");

      featuredItem.classList.add("featured-item");

      itemImg.src = item.img;
      itemImg.alt = item.name;
      itemImg.draggable = false;
      itemName.textContent = item.name;

      featuredItem.appendChild(itemImg);
      featuredItem.appendChild(itemName);
      featuredItemsWrapper.appendChild(featuredItem);
    });

  featuredItemsContainer.appendChild(featuredItemsWrapper);

  return featuredItemsContainer;
}


/***/ }),

/***/ "./src/modules/initialPage.js":
/*!************************************!*\
  !*** ./src/modules/initialPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initialPage)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/modules/header.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");



function initialPage() {
  document.getElementById("content").append((0,_header__WEBPACK_IMPORTED_MODULE_0__.navbar)(), (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])());
  const homeLinks = document.querySelectorAll(".home-link");
  homeLinks.forEach((link) => {
    link.classList.add("active");
  });
}


/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuSection)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/modules/menuItems.js");


function menuSection() {
  const menuContainer = document.createElement("section");
  const container = document.createElement("div");

  menuContainer.classList.add("menu-section");
  container.classList.add("container");

  menuContainer.appendChild(container);
  container.appendChild(menuNav());
  container.appendChild(menuItemsComponent());

  return menuContainer;
}

function menuNav() {
  const navNames = ["Breakfast", "Lunch", "Dinner", "Drinks", "Desserts"];

  const navList = document.createElement("ul");

  navList.classList.add("menu-links");

  navNames.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item;
    if (item === "Dinner") {
      liElement.classList.add("menu-nav-item", "menu-link-active");
    }
    liElement.classList.add("menu-nav-item");

    navList.appendChild(liElement);
  });

  return navList;
}

function menuItemsComponent() {
  const menuWrapper = document.createElement("div");

  menuWrapper.classList.add("menu-wrapper");

  Object.values(_menuItems__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach((item) => {
    const itemContainer = document.createElement("div");
    const itemImg = new Image();
    const itemInfoContainter = document.createElement("div");
    const itemHeader = document.createElement("div");
    const itemTitle = document.createElement("h2");
    const itemPrice = document.createElement("span");
    const itemIngredients = document.createElement("p");
    const orderBtn = document.createElement("button");

    itemContainer.classList.add("menu-item");
    itemImg.classList.add("item-img");
    itemTitle.classList.add("item-name");
    itemIngredients.classList.add("item-ingredients");
    itemPrice.classList.add("item-price");
    itemInfoContainter.classList.add("info-container");
    itemHeader.classList.add("item-header");
    orderBtn.classList.add("order-btn");

    itemImg.src = item.img;
    itemImg.alt = item.name;
    itemTitle.textContent = item.name;
    itemPrice.textContent = `$${item.price}`;
    itemIngredients.textContent = item.ingredients.join(", ");
    orderBtn.textContent = "Order Now";

    itemContainer.append(itemImg, itemInfoContainter);
    itemInfoContainter.append(itemHeader, itemIngredients, orderBtn);
    itemHeader.append(itemTitle, itemPrice);
    menuWrapper.appendChild(itemContainer);
  });

  return menuWrapper;
}


/***/ }),

/***/ "./src/modules/menuItems.js":
/*!**********************************!*\
  !*** ./src/modules/menuItems.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_fish_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/fish-tacos.jpg */ "./src/assets/fish-tacos.jpg");
/* harmony import */ var _assets_chicken_tostadas_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/chicken-tostadas.jpg */ "./src/assets/chicken-tostadas.jpg");
/* harmony import */ var _assets_Baked_Chicken_Quesadillas_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/Baked-Chicken-Quesadillas.jpg */ "./src/assets/Baked-Chicken-Quesadillas.jpg");
/* harmony import */ var _assets_chicken_enchiladas_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/chicken-enchiladas.jpg */ "./src/assets/chicken-enchiladas.jpg");
/* harmony import */ var _assets_pico_de_gallo_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/pico-de-gallo.jpg */ "./src/assets/pico-de-gallo.jpg");
/* harmony import */ var _assets_black_bean_burrito_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/black-bean-burrito.jpg */ "./src/assets/black-bean-burrito.jpg");







const menuItems = {
  item1: {
    name: "Fish Tacos",
    img: _assets_fish_tacos_jpg__WEBPACK_IMPORTED_MODULE_0__,
    price: 13,
    ingredients: ["Fish", "Sriracha", "Garlic powder", "Lime juice"],
  },
  item2: {
    name: "Chicken Tostadas",
    img: _assets_chicken_tostadas_jpg__WEBPACK_IMPORTED_MODULE_1__,
    price: 8,
    ingredients: [
      "Pinto beans",
      "Refried beans",
      "Sour cream",
      "White corn tortillas",
    ],
  },
  item3: {
    name: "Chicken Quesadillas",
    img: _assets_Baked_Chicken_Quesadillas_jpg__WEBPACK_IMPORTED_MODULE_2__,
    price: 20,
    ingredients: ["Sour cream", "Pepper jack cheese", "Shredded chicken"],
  },
  item4: {
    name: "Chicken Enchiladas",
    img: _assets_chicken_enchiladas_jpg__WEBPACK_IMPORTED_MODULE_3__,
    price: 15,
    ingredients: ["Sour cream", "Easy enchilada sauce", "Shredded chicken"],
  },
  item5: {
    name: "Pico De Gallo",
    img: _assets_pico_de_gallo_jpg__WEBPACK_IMPORTED_MODULE_4__,
    price: 10,
    ingredients: ["Tomatoes", "Cilantro", "Black pepper", "Jalapeno pepper"],
  },
  item6: {
    name: "Black Bean Burrito",
    img: _assets_black_bean_burrito_jpg__WEBPACK_IMPORTED_MODULE_5__,
    price: 12,
    ingredients: [
      "Black beans",
      "Sour cream",
      "Flour tortillas",
      "Tomato",
      "Green pepper",
    ],
  },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuItems);


/***/ }),

/***/ "./src/modules/navBarFunctions.js":
/*!****************************************!*\
  !*** ./src/modules/navBarFunctions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navBarToggle": () => (/* binding */ navBarToggle),
/* harmony export */   "navLinkClassToggle": () => (/* binding */ navLinkClassToggle)
/* harmony export */ });
function navBarToggle(e) {
  if (e.target.matches(".nav-toggler")) {
    const navCollapse = document.querySelector(".nav-collapse");
    const navLines = [...document.getElementsByClassName("line")];

    navCollapse.classList.toggle("display");
    navLines.forEach((line) => {
      line.classList.toggle("open");
    });
  }
}

function navLinkClassToggle(element) {
  const items = [...document.getElementsByClassName(`${element}-link`)];
  items.forEach((item) => {
    item.classList.add("active");
  });
}




/***/ }),

/***/ "./src/modules/navBarOnScroll.js":
/*!***************************************!*\
  !*** ./src/modules/navBarOnScroll.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navFloatToggle)
/* harmony export */ });
let lastScroll = 0;

function navFloatToggle() {
  const navBar = document.getElementById("mainNav");
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    toggleClassesOnScrollDown(currentScroll, navBar);
    lastScroll = currentScroll;
    return;
  }

  if (currentScroll < lastScroll) {
    toggleClassesOnScrollUp(currentScroll, navBar);
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

  if (currentScroll >= 350) {
    mainNav.classList.add("floating");
  }
}

function toggleClassesOnScrollUp(currentScroll, mainNav) {
  if (currentScroll <= 350) {
    mainNav.classList.add("sleep");
  }

  if (currentScroll <= 250) {
    mainNav.classList.remove("floating");
  }

  if (currentScroll <= 150) {
    mainNav.classList.remove("sleep", "scrolled");
  }
}


/***/ }),

/***/ "./src/assets/Baked-Chicken-Quesadillas.jpg":
/*!**************************************************!*\
  !*** ./src/assets/Baked-Chicken-Quesadillas.jpg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/Baked-Chicken-Quesadillasd7f31c1d35828c9ec3da.jpg";

/***/ }),

/***/ "./src/assets/about-1.webp":
/*!*********************************!*\
  !*** ./src/assets/about-1.webp ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/about-110ba71405b00006deb3c.webp";

/***/ }),

/***/ "./src/assets/about.webp":
/*!*******************************!*\
  !*** ./src/assets/about.webp ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/aboutea4d6ccbcb93129f98ff.webp";

/***/ }),

/***/ "./src/assets/backgroundImg.jpg":
/*!**************************************!*\
  !*** ./src/assets/backgroundImg.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/backgroundImg3aba02fe33129a779116.jpg";

/***/ }),

/***/ "./src/assets/black-bean-burrito.jpg":
/*!*******************************************!*\
  !*** ./src/assets/black-bean-burrito.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/black-bean-burrito94b5a48938f6728ab3f8.jpg";

/***/ }),

/***/ "./src/assets/chicken-enchiladas.jpg":
/*!*******************************************!*\
  !*** ./src/assets/chicken-enchiladas.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/chicken-enchiladascb49dd995fa3461af7f8.jpg";

/***/ }),

/***/ "./src/assets/chicken-tostadas.jpg":
/*!*****************************************!*\
  !*** ./src/assets/chicken-tostadas.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/chicken-tostadas8850a8b96eb5741779aa.jpg";

/***/ }),

/***/ "./src/assets/fish-tacos.jpg":
/*!***********************************!*\
  !*** ./src/assets/fish-tacos.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/fish-tacos54d33caaad0c24ea7813.jpg";

/***/ }),

/***/ "./src/assets/header.jpg":
/*!*******************************!*\
  !*** ./src/assets/header.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/header812993bdbd4df0ed3e6e.jpg";

/***/ }),

/***/ "./src/assets/pico-de-gallo.jpg":
/*!**************************************!*\
  !*** ./src/assets/pico-de-gallo.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/pico-de-gallof7711ca17cc981c829e3.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/header */ "./src/modules/header.js");
/* harmony import */ var _modules_initialPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initialPage */ "./src/modules/initialPage.js");
/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ "./src/modules/menu.js");
/* harmony import */ var _modules_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/about */ "./src/modules/about.js");
/* harmony import */ var _modules_navBarOnScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/navBarOnScroll */ "./src/modules/navBarOnScroll.js");
/* harmony import */ var _modules_navBarFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/navBarFunctions */ "./src/modules/navBarFunctions.js");








(0,_modules_initialPage__WEBPACK_IMPORTED_MODULE_2__["default"])();

const content = document.getElementById("content");

content.addEventListener("click", tabSwitching);
content.addEventListener("click", _modules_navBarFunctions__WEBPACK_IMPORTED_MODULE_6__.navBarToggle);
window.addEventListener("scroll", _modules_navBarOnScroll__WEBPACK_IMPORTED_MODULE_5__["default"]);

function tabSwitching(e) {
  if (e.target.matches(".nav-item") || e.target.matches(".logo-header")) {
    content.textContent = "";
  }

  if (e.target.matches(".home-link") || e.target.matches(".logo-header")) {
    (0,_modules_initialPage__WEBPACK_IMPORTED_MODULE_2__["default"])();
    return;
  }

  if (e.target.matches(".menu-link")) {
    content.append((0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.navbar)(), (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.header)("Specialties"), (0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__["default"])());
    (0,_modules_navBarFunctions__WEBPACK_IMPORTED_MODULE_6__.navLinkClassToggle)("menu");
    return;
  }

  if (e.target.matches(".about-link")) {
    content.append((0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.navbar)(), (0,_modules_header__WEBPACK_IMPORTED_MODULE_1__.header)("About"), (0,_modules_about__WEBPACK_IMPORTED_MODULE_4__["default"])());
    (0,_modules_navBarFunctions__WEBPACK_IMPORTED_MODULE_6__.navLinkClassToggle)("about");
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLFFBQVEsVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFlBQVksTUFBTSxNQUFNLEtBQUssTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxPQUFPLFVBQVUsT0FBTyxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sT0FBTyxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLEtBQUssT0FBTyxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFlBQVksWUFBWSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxhQUFhLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxL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UTtBQUNsQywyQkFBMkIsaURBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG1CQUFtQjtBQUN2RDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Rm9DO0FBQ3BDO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDc0I7QUFDRjtBQUNkO0FBQ0U7QUFDa0I7QUFDdUI7QUFDN0U7QUFDQSxnRUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtFQUFZO0FBQzlDLGtDQUFrQywrREFBYztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0VBQVc7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBTSxJQUFJLHVEQUFNLGlCQUFpQix5REFBSTtBQUN4RCxJQUFJLDRFQUFrQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQix1REFBTSxJQUFJLHVEQUFNLFdBQVcsMERBQUs7QUFDbkQsSUFBSSw0RUFBa0I7QUFDdEI7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvaW5pdGlhbFBhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnVJdGVtcy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvbmF2QmFyRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9uYXZCYXJPblNjcm9sbC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9oZWFkZXIuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vYXNzZXRzL2JhY2tncm91bmRJbWcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcclxcbiAgLS1jb2xvci1wcmltYXJ5OiAjZmZmO1xcclxcbiAgLS1jb2xvci1hY2NlbnQ6ICNjOGE5N2U7XFxyXFxuICAtLWNvbG9yLWdyYXk6ICM2NjY2NjY7XFxyXFxuICAtLWNvbG9yLWJsYWNrOiAjMDAwMDAwO1xcclxcbiAgLS1oZWFkZXItb3ZlcmxheTogbGluZWFyLWdyYWRpZW50KHJnYigwIDAgMCAvIDAuNSksIHJnYigwIDAgMCAvIDAuNSkpO1xcclxcbiAgLS1iYWNrZ3JvdW5kLW92ZXJsYXk6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAgLyAwLjcpLCByZ2IoMCAwIDAgLyAwLjcpKTtcXHJcXG4gIC0tYm9yZGVyLXNldHRpbmdzOiAxcHggc29saWQgcmdiKDI1NSAyNTUgMjU1IC8gMC4xKTtcXHJcXG4gIC0tZmYtcHJpbWFyeTogXFxcIlBvcHBpbnNcXFwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIC0tZmYtYWNjZW50OiBcXFwiR3JlYXQgVmliZXNcXFwiLCBcXFwiQ29taWMgU2FucyBNU1xcXCIsIFxcXCJDb21pYyBTYW5zXFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIC0tZmYtYm9sZDogOTAwO1xcclxcbiAgLS1mZi1zZW1pLWJvbGQ6IDYwMDtcXHJcXG4gIC0tc3RhZ2dlci1kZWxheTogNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuLypcXHJcXG4gIDEuIFVzZSBhIG1vcmUtaW50dWl0aXZlIGJveC1zaXppbmcgbW9kZWwuXFxyXFxuKi9cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICAyLiBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gJiBwYWRkaW5nXFxyXFxuICAqL1xcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgMy4gQWxsb3cgcGVyY2VudGFnZS1iYXNlZCBoZWlnaHRzIGluIHRoZSBhcHBsaWNhdGlvblxcclxcbiAgKi9cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgVHlwb2dyYXBoaWMgdHdlYWtzIVxcclxcbiAgICA0LiBBZGQgYWNjZXNzaWJsZSBsaW5lLWhlaWdodFxcclxcbiAgICA1LiBJbXByb3ZlIHRleHQgcmVuZGVyaW5nXFxyXFxuICAqL1xcclxcbmJvZHkge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA2LiBJbXByb3ZlIG1lZGlhIGRlZmF1bHRzXFxyXFxuICAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlLFxcclxcbnZpZGVvLFxcclxcbmNhbnZhcyxcXHJcXG5zdmcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDcuIFJlbW92ZSBidWlsdC1pbiBmb3JtIHR5cG9ncmFwaHkgc3R5bGVzXFxyXFxuICAqL1xcclxcbmlucHV0LFxcclxcbmJ1dHRvbixcXHJcXG50ZXh0YXJlYSxcXHJcXG5zZWxlY3Qge1xcclxcbiAgZm9udDogaW5oZXJpdDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgOC4gQXZvaWQgdGV4dCBvdmVyZmxvd3NcXHJcXG4gICovXFxyXFxucCxcXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA5LiBDcmVhdGUgYSByb290IHN0YWNraW5nIGNvbnRleHRcXHJcXG4gICovXFxyXFxuI3Jvb3QsXFxyXFxuI19fbmV4dCB7XFxyXFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxyXFxufVxcclxcblxcclxcbi8qIEdlbmVyYWwgc3R5bGVzICovXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1zZWN0aW9uLFxcclxcbi5hYm91dC1zZWN0aW9uIHtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDdlbTtcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmxpLFxcclxcbmJ1dHRvbixcXHJcXG4ubG9nby1oZWFkZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgc3R5bGVzICovXFxyXFxuaGVhZGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDQ1MHB4O1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0taGVhZGVyLW92ZXJsYXkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLXNldHRpbmdzKTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDFlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuc2Nyb2xsZWQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZy1ibG9jazogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiKDAgMCAwIC8gMC4yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuc2xlZXAge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtd3JhcHBlcixcXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiBtaW4oMTE0MHB4LCA5MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLWJvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtbGlua3Mge1xcclxcbiAgZ2FwOiAyLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLFxcclxcbi5uYXYtaXRlbTppcyguYWN0aXZlLCAuYWN0aXZlOmhvdmVyLCA6aG92ZXIpIHtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbTppcyguYWN0aXZlLCA6aG92ZXIpIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0uYWN0aXZlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LmZsb2F0aW5nIC5uYXYtaXRlbS5hY3RpdmU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMC41KTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZSB7XFxyXFxuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZS1pbi1vdXQsIHkgMjAwbXMgZWFzZS1pbiAyMDBtcyxcXHJcXG4gICAgcm90YXRlIDIwMG1zIGVhc2UtaW4sIG9wYWNpdHkgMG1zIDIwMG1zO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUub3BlbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UtaW4tb3V0LCB5IDIwMG1zIGVhc2UtaW4sXFxyXFxuICAgIHJvdGF0ZSAyMDBtcyBlYXNlLWluIDIwMG1zLCBvcGFjaXR5IDBtcyAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LmZsb2F0aW5nIC5saW5lIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyOmhvdmVyIC5saW5lIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciA6aXMoLmxpbmUtdG9wLm9wZW4sIC5saW5lLWJvdHRvbS5vcGVuKSB7XFxyXFxuICB5OiA0NTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lLXRvcC5vcGVuIHtcXHJcXG4gIHJvdGF0ZTogNDVkZWc7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZS1ib3R0b20ub3BlbiB7XFxyXFxuICByb3RhdGU6IC00NWRlZztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lLW1pZGRsZS5vcGVuIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtaGVpZ2h0OiAwO1xcclxcbiAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2UgPiB1bCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGdhcDogMmVtO1xcclxcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbGxhcHNlLmRpc3BsYXkge1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbGxhcHNlLmRpc3BsYXkgLm5hdi1jb2xsYXBzZS1saW5rcyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgZWFzZS1pbi1vdXQgMTUwbXM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MXB4KSB7XFxyXFxuICAubmF2LWNvbGxhcHNlLmRpc3BsYXksXFxyXFxuICAubmF2LWNvbGxhcHNlID4gdWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xcclxcbiAgLm1haW4tbmF2IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1uYXYtbGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi10b2dnbGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXdyYXBwZXIge1xcclxcbiAgZ3JpZC1yb3c6IDM7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAzLjEyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSBzdHlsZXMgKi9cXHJcXG4uaG9tZS1zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLW92ZXJsYXkpLFxcclxcbiAgICB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMCU7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC4zZnI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXdyYXBwZXIge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWxvZ28ge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1kaXNjIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgMS43NXJlbSArIDR2dywgNHJlbSk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbXMge1xcclxcbiAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLXNldHRpbmdzKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW1zLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDAuNWVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW0gaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxyXFxuICAuaG9tZS1zZWN0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjlweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxyXFxuICAuaG9tZS1zZWN0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgNTcwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZlYXR1cmVkLWl0ZW1zLXdyYXBwZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51IHN0eWxlICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oMTIwcHgsIDEwMCUpLCAxZnIpKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgPiBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mZi1zZW1pLWJvbGQpO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyA+IGxpOmhvdmVyLFxcclxcbi5tZW51LWxpbmstYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmstYWN0aXZlOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgYm90dG9tOiAtMTBweDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oNDAwcHgsIDEwMCUpLCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSA+IGltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDIgLyAxLjU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTpudGgtY2hpbGQoMykgaW1nLFxcclxcbi5tZW51LWl0ZW06bnRoLWNoaWxkKDQpIGltZyB7XFxyXFxuICBvcmRlcjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcm93LWdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46aXMoOmhvdmVyLCA6YWN0aXZlKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuLFxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5vcmRlci1idG4sIC5tZW51LW5hdi1pdGVtKTppcyg6aG92ZXIsIDphY3RpdmUpIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWhlYWRlciA+ICoge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZmYtc2VtaS1ib2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0taGVhZGVyID4gaDIge1xcclxcbiAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcHJpY2Uge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSwgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gIC5tZW51LWxpbmtzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtID4gaW1nIHtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAzIC8gMS41O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbTpudGgtY2hpbGQoMykgaW1nLFxcclxcbiAgLm1lbnUtaXRlbTpudGgtY2hpbGQoNCkgaW1nIHtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1saW5rLWFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjJmciAxZnI7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZ3Mtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNWVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDNlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzLjEyNXJlbTtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMztcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQsXFxyXFxuLndvcmstZGF5cyB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQge1xcclxcbiAgbWFyZ2luLWJsb2NrOiAxLjVlbSAxZW07XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1kYXlzIHtcXHJcXG4gIG1hcmdpbi1ibG9jazogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1ob3VycyB7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZmYtYm9sZCk7XFxyXFxufVxcclxcblxcclxcbi5waG9uZS1udW1iZXIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRlbnQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuLmluZm8td3JhcHBlcixcXHJcXG4uaGVyby13cmFwcGVyIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IDUwMG1zIGVhc2UtaW4tb3V0IHNsaWRlSW5VcCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM1cHgpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtLFxcclxcbi5tZW51LW5hdi1pdGVtLFxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIsXFxyXFxuLmFib3V0LXRleHQtd3JhcHBlcixcXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IDUwMG1zIGVhc2UtaW4tb3V0IHNsaWRlSW5VcCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLyogOmlzKC5mZWF0dXJlZC1pdGVtLCAubWVudS1uYXYtaXRlbSk6aXMoOm50aC1jaGlsZCgxKSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwbXM7XFxyXFxufSAqL1xcclxcblxcclxcbjppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoMikpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tc3RhZ2dlci1kZWxheSk7XFxyXFxufVxcclxcblxcclxcbjppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoMykpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDI1bXMpO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLmZlYXR1cmVkLWl0ZW0sIC5tZW51LW5hdi1pdGVtLCAubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDQpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tc3RhZ2dlci1kZWxheSkgKyA1MG1zKTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5tZW51LW5hdi1pdGVtLCAubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDUpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tc3RhZ2dlci1kZWxheSkgKyA3NW1zKTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoNikpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDk1bXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1ncy13cmFwcGVyIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQtd3JhcHBlciB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDI1bXM7XFxyXFxufVxcclxcblxcclxcbi8qIFV0aWxpdHkgc3R5bGVzICovXFxyXFxuXFxyXFxuLmNsci1hY2NlbnQge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5mZi1hY2NlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHFFQUFxRTtFQUNyRSx5RUFBeUU7RUFDekUsbURBQW1EO0VBQ25ELDBDQUEwQztFQUMxQyxrRUFBa0U7RUFDbEUsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7O0NBRUM7QUFDRDs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7O0dBRUc7QUFDSDtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTs7R0FFRztBQUNIOztFQUVFLGFBQWE7QUFDZjtBQUNBOzs7O0dBSUc7QUFDSDtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7R0FFRztBQUNIOzs7OztFQUtFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7O0dBRUc7QUFDSDs7OztFQUlFLGFBQWE7QUFDZjtBQUNBOztHQUVHO0FBQ0g7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7R0FFRztBQUNIOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQSxtQkFBbUI7O0FBRW5CO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7O0VBR0UsZUFBZTtBQUNqQjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxpQkFBaUI7RUFDakIsZ0ZBQW9FO0VBQ3BFLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLHNDQUFzQztFQUN0Qyx5QkFBeUI7RUFDekIsc0NBQXNDO0VBQ3RDLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixvQ0FBb0M7QUFDdEM7O0FBRUE7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUI7MkNBQ3lDO0VBQ3pDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFO2lEQUMrQztBQUNqRDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLEtBQUs7QUFDUDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBd0M7QUFDMUM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFOztJQUVFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0Isb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYjsyQ0FDb0M7RUFDcEMsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsMkJBQTJCOztFQUUzQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJEQUEyRDtFQUMzRCxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsZUFBZTs7QUFFZjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzRUFBc0U7RUFDdEUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7RUFDaEMsWUFBWTtBQUNkOztBQUVBOztFQUVFLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxhQUFhO0VBQ2IsUUFBUTtFQUNSLE9BQU87RUFDUCxRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNFQUFzRTtBQUN4RTs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTs7RUFFWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQywyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0NBQXNDO0VBQ3RDLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTs7SUFFRSxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7QUFFQSxpQkFBaUI7O0FBRWpCO0VBQ0UsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQSxjQUFjOztBQUVkOztFQUVFLFVBQVU7RUFDViwrQ0FBK0M7QUFDakQ7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBOzs7OztFQUtFLFVBQVU7RUFDViwrQ0FBK0M7QUFDakQ7O0FBRUE7O0dBRUc7O0FBRUg7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxrREFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItcHJpbWFyeTogI2ZmZjtcXHJcXG4gIC0tY29sb3ItYWNjZW50OiAjYzhhOTdlO1xcclxcbiAgLS1jb2xvci1ncmF5OiAjNjY2NjY2O1xcclxcbiAgLS1jb2xvci1ibGFjazogIzAwMDAwMDtcXHJcXG4gIC0taGVhZGVyLW92ZXJsYXk6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAgLyAwLjUpLCByZ2IoMCAwIDAgLyAwLjUpKTtcXHJcXG4gIC0tYmFja2dyb3VuZC1vdmVybGF5OiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwIC8gMC43KSwgcmdiKDAgMCAwIC8gMC43KSk7XFxyXFxuICAtLWJvcmRlci1zZXR0aW5nczogMXB4IHNvbGlkIHJnYigyNTUgMjU1IDI1NSAvIDAuMSk7XFxyXFxuICAtLWZmLXByaW1hcnk6IFxcXCJQb3BwaW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWZmLWFjY2VudDogXFxcIkdyZWF0IFZpYmVzXFxcIiwgXFxcIkNvbWljIFNhbnMgTVNcXFwiLCBcXFwiQ29taWMgU2Fuc1xcXCIsIGN1cnNpdmU7XFxyXFxuICAtLWZmLWJvbGQ6IDkwMDtcXHJcXG4gIC0tZmYtc2VtaS1ib2xkOiA2MDA7XFxyXFxuICAtLXN0YWdnZXItZGVsYXk6IDUwbXM7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcclxcbiovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICYgcGFkZGluZ1xcclxcbiAgKi9cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXHJcXG4gICovXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIFR5cG9ncmFwaGljIHR3ZWFrcyFcXHJcXG4gICAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXHJcXG4gICAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcclxcbiAgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgNi4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcclxcbiAgKi9cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcclxcbiAgKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxyXFxuICAqL1xcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgOS4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxyXFxuICAqL1xcclxcbiNyb290LFxcclxcbiNfX25leHQge1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc2VjdGlvbixcXHJcXG4uYWJvdXQtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiA3ZW07XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSxcXHJcXG5idXR0b24sXFxyXFxuLmxvZ28taGVhZGVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIHN0eWxlcyAqL1xcclxcbmhlYWRlciB7XFxyXFxuICBtaW4taGVpZ2h0OiA0NTBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWhlYWRlci1vdmVybGF5KSwgdXJsKFxcXCIuLi9hc3NldHMvaGVhZGVyLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLXNldHRpbmdzKTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDFlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuc2Nyb2xsZWQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZy1ibG9jazogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiKDAgMCAwIC8gMC4yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuc2xlZXAge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtd3JhcHBlcixcXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiBtaW4oMTE0MHB4LCA5MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLWJvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtbGlua3Mge1xcclxcbiAgZ2FwOiAyLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLFxcclxcbi5uYXYtaXRlbTppcyguYWN0aXZlLCAuYWN0aXZlOmhvdmVyLCA6aG92ZXIpIHtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbTppcyguYWN0aXZlLCA6aG92ZXIpIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWl0ZW0uYWN0aXZlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LmZsb2F0aW5nIC5uYXYtaXRlbS5hY3RpdmU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gMC41KTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAxLjJweDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5oYW1idXJnZXIge1xcclxcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZSB7XFxyXFxuICBmaWxsOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZS1pbi1vdXQsIHkgMjAwbXMgZWFzZS1pbiAyMDBtcyxcXHJcXG4gICAgcm90YXRlIDIwMG1zIGVhc2UtaW4sIG9wYWNpdHkgMG1zIDIwMG1zO1xcclxcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUub3BlbiB7XFxyXFxuICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UtaW4tb3V0LCB5IDIwMG1zIGVhc2UtaW4sXFxyXFxuICAgIHJvdGF0ZSAyMDBtcyBlYXNlLWluIDIwMG1zLCBvcGFjaXR5IDBtcyAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LmZsb2F0aW5nIC5saW5lIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyOmhvdmVyIC5saW5lIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciA6aXMoLmxpbmUtdG9wLm9wZW4sIC5saW5lLWJvdHRvbS5vcGVuKSB7XFxyXFxuICB5OiA0NTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lLXRvcC5vcGVuIHtcXHJcXG4gIHJvdGF0ZTogNDVkZWc7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZS1ib3R0b20ub3BlbiB7XFxyXFxuICByb3RhdGU6IC00NWRlZztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lLW1pZGRsZS5vcGVuIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2Uge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBtYXgtaGVpZ2h0OiAwO1xcclxcbiAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2UgPiB1bCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGdhcDogMmVtO1xcclxcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcclxcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbGxhcHNlLmRpc3BsYXkge1xcclxcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbGxhcHNlLmRpc3BsYXkgLm5hdi1jb2xsYXBzZS1saW5rcyB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMTAwbXMgZWFzZS1pbi1vdXQgMTUwbXM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk4MXB4KSB7XFxyXFxuICAubmF2LWNvbGxhcHNlLmRpc3BsYXksXFxyXFxuICAubmF2LWNvbGxhcHNlID4gdWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xcclxcbiAgLm1haW4tbmF2IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWFpbi1uYXYtbGlua3Mge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm5hdi10b2dnbGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXdyYXBwZXIge1xcclxcbiAgZ3JpZC1yb3c6IDM7XFxyXFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5oZXJvLXRleHQge1xcclxcbiAgZm9udC1zaXplOiAzLjEyNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSG9tZSBzdHlsZXMgKi9cXHJcXG4uaG9tZS1zZWN0aW9uIHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1iYWNrZ3JvdW5kLW92ZXJsYXkpLFxcclxcbiAgICB1cmwoXFxcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kSW1nLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSAxMCU7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMC4zZnI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLXdyYXBwZXIge1xcclxcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5tYWluLWxvZ28ge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucmVzdC1kaXNjIHtcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgMS43NXJlbSArIDR2dywgNHJlbSk7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbXMge1xcclxcbiAgYm9yZGVyLXRvcDogdmFyKC0tYm9yZGVyLXNldHRpbmdzKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW1zLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDAuNWVtO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZy1ibG9jazogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW0gaW1nIHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIHdpZHRoOiA5MHB4O1xcclxcbiAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxyXFxuICAuaG9tZS1zZWN0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjlweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyMHB4KSB7XFxyXFxuICAuaG9tZS1zZWN0aW9uIHtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgNTcwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmZlYXR1cmVkLWl0ZW1zLXdyYXBwZXIge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgcGFkZGluZy1ibG9jazogMmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBNZW51IHN0eWxlICovXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oMTIwcHgsIDEwMCUpLCAxZnIpKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgPiBsaSB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mZi1zZW1pLWJvbGQpO1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyA+IGxpOmhvdmVyLFxcclxcbi5tZW51LWxpbmstYWN0aXZlIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmstYWN0aXZlOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgYm90dG9tOiAtMTBweDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heChtaW4oNDAwcHgsIDEwMCUpLCAxZnIpKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSA+IGltZyB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBhc3BlY3QtcmF0aW86IDIgLyAxLjU7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbTpudGgtY2hpbGQoMykgaW1nLFxcclxcbi5tZW51LWl0ZW06bnRoLWNoaWxkKDQpIGltZyB7XFxyXFxuICBvcmRlcjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tY29udGFpbmVyIHtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgcm93LWdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcXHJcXG4gIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG46aXMoOmhvdmVyLCA6YWN0aXZlKSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuLFxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5vcmRlci1idG4sIC5tZW51LW5hdi1pdGVtKTppcyg6aG92ZXIsIDphY3RpdmUpIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWhlYWRlciA+ICoge1xcclxcbiAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZmYtc2VtaS1ib2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0taGVhZGVyID4gaDIge1xcclxcbiAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tcHJpY2Uge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSwgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gIC5tZW51LWxpbmtzIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtID4gaW1nIHtcXHJcXG4gICAgYXNwZWN0LXJhdGlvOiAzIC8gMS41O1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbTpudGgtY2hpbGQoMykgaW1nLFxcclxcbiAgLm1lbnUtaXRlbTpudGgtY2hpbGQoNCkgaW1nIHtcXHJcXG4gICAgb3JkZXI6IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1saW5rLWFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uYWJvdXQtY29udGVudCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxLjJmciAxZnI7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZ3Mtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIgPiBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNWVtKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBnYXA6IDNlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiA2LjI1cmVtO1xcclxcbiAgZ3JpZC1yb3c6IDE7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXJlc3RhdXJhbnQtdGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAzLjEyNXJlbTtcXHJcXG4gIGdyaWQtcm93OiAxIC8gMztcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbiAgYWxpZ24tc2VsZjogZW5kO1xcclxcbiAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQsXFxyXFxuLndvcmstZGF5cyB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQge1xcclxcbiAgbWFyZ2luLWJsb2NrOiAxLjVlbSAxZW07XFxyXFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1kYXlzIHtcXHJcXG4gIG1hcmdpbi1ibG9jazogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yay1ob3VycyB7XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZmYtYm9sZCk7XFxyXFxufVxcclxcblxcclxcbi5waG9uZS1udW1iZXIge1xcclxcbiAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NzBweCkge1xcclxcbiAgLmFib3V0IHtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmFib3V0LWNvbnRlbnQge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQW5pbWF0aW9uICovXFxyXFxuXFxyXFxuLmluZm8td3JhcHBlcixcXHJcXG4uaGVyby13cmFwcGVyIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IDUwMG1zIGVhc2UtaW4tb3V0IHNsaWRlSW5VcCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzbGlkZUluVXAge1xcclxcbiAgZnJvbSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDM1cHgpO1xcclxcbiAgfVxcclxcbiAgdG8ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtLFxcclxcbi5tZW51LW5hdi1pdGVtLFxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIsXFxyXFxuLmFib3V0LXRleHQtd3JhcHBlcixcXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBhbmltYXRpb246IDUwMG1zIGVhc2UtaW4tb3V0IHNsaWRlSW5VcCBmb3J3YXJkcztcXHJcXG59XFxyXFxuXFxyXFxuLyogOmlzKC5mZWF0dXJlZC1pdGVtLCAubWVudS1uYXYtaXRlbSk6aXMoOm50aC1jaGlsZCgxKSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwbXM7XFxyXFxufSAqL1xcclxcblxcclxcbjppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoMikpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tc3RhZ2dlci1kZWxheSk7XFxyXFxufVxcclxcblxcclxcbjppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoMykpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDI1bXMpO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLmZlYXR1cmVkLWl0ZW0sIC5tZW51LW5hdi1pdGVtLCAubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDQpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tc3RhZ2dlci1kZWxheSkgKyA1MG1zKTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5tZW51LW5hdi1pdGVtLCAubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDUpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tc3RhZ2dlci1kZWxheSkgKyA3NW1zKTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoNikpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDk1bXMpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1ncy13cmFwcGVyIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQtd3JhcHBlciB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDI1bXM7XFxyXFxufVxcclxcblxcclxcbi8qIFV0aWxpdHkgc3R5bGVzICovXFxyXFxuXFxyXFxuLmNsci1hY2NlbnQge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5mZi1hY2NlbnQge1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLWFjY2VudCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgYWJvdXRJbWcgZnJvbSBcIi4uL2Fzc2V0cy9hYm91dC53ZWJwXCI7XHJcbmltcG9ydCBhYm91dEltZzIgZnJvbSBcIi4uL2Fzc2V0cy9hYm91dC0xLndlYnBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0U2VjdGlvbkNvbXBvbmVudCgpIHtcclxuICBjb25zdCBhYm91dFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBhYm91dFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImFib3V0LXNlY3Rpb25cIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dENvbnRlbnQoKSk7XHJcbiAgYWJvdXRTZWN0aW9uLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiBhYm91dFNlY3Rpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3V0Q29udGVudCgpIHtcclxuICBjb25zdCBhYm91dFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFib3V0SW1nc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWJvdXRJbWdDb250YWluZXIgPSBuZXcgSW1hZ2UoKTtcclxuICBjb25zdCBhYm91dEltZzJDb250YWluZXIgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgYWJvdXRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1jb250ZW50XCIpO1xyXG4gIGFib3V0SW1nc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtaW1ncy13cmFwcGVyXCIpO1xyXG4gIGFib3V0SW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dFwiKTtcclxuICBhYm91dEltZzJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LTJcIik7XHJcblxyXG4gIGFib3V0SW1nQ29udGFpbmVyLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gIGFib3V0SW1nMkNvbnRhaW5lci5kcmFnZ2FibGUgPSBmYWxzZTtcclxuXHJcbiAgYWJvdXRJbWdDb250YWluZXIuc3JjID0gYWJvdXRJbWc7XHJcbiAgYWJvdXRJbWcyQ29udGFpbmVyLnNyYyA9IGFib3V0SW1nMjtcclxuXHJcbiAgYWJvdXRJbWdzQ29udGFpbmVyLmFwcGVuZChhYm91dEltZ0NvbnRhaW5lciwgYWJvdXRJbWcyQ29udGFpbmVyKTtcclxuICBhYm91dFdyYXBwZXIuYXBwZW5kKGFib3V0SW1nc0NvbnRhaW5lciwgYWJvdXRCb2R5VGV4dCgpKTtcclxuXHJcbiAgcmV0dXJuIGFib3V0V3JhcHBlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gYWJvdXRCb2R5VGV4dCgpIHtcclxuICBjb25zdCBhYm91dFRleHRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhYm91dFRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFib3V0VGV4dEJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFib3V0VGV4dEZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCByZXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgY29uc3QgYm9keUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cclxuICBhYm91dFRleHRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0LXdyYXBwZXJcIik7XHJcbiAgYWJvdXRUZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0LWhlYWRlclwiKTtcclxuICBhYm91dFRleHRCb2R5LmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0LWJvZHlcIik7XHJcbiAgYWJvdXRUZXh0Rm9vdGVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC10ZXh0LWZvb3RlclwiKTtcclxuICBhYm91dC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGl0bGVcIiwgXCJjbHItYWNjZW50XCIsIFwiZmYtYWNjZW50XCIpO1xyXG4gIHJlc3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtcmVzdGF1cmFudC10aXRsZVwiKTtcclxuICBwaG9uZU51bWJlci5jbGFzc0xpc3QuYWRkKFwicGhvbmUtbnVtYmVyXCIsIFwiY2xyLWFjY2VudFwiKTtcclxuICBib2R5Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dFwiKTtcclxuICBkYXlzLmNsYXNzTGlzdC5hZGQoXCJ3b3JrLWRheXNcIik7XHJcbiAgaG91cnMuY2xhc3NMaXN0LmFkZChcIndvcmstaG91cnNcIik7XHJcblxyXG4gIGFib3V0LnRleHRDb250ZW50ID0gXCJBYm91dFwiO1xyXG4gIHJlc3RUaXRsZS50ZXh0Q29udGVudCA9IFwiTHVuYSBSZXN0YXVyYW50XCI7XHJcbiAgYm9keUNvbnRlbnQudGV4dENvbnRlbnQgPVxyXG4gICAgXCJBIHNtYWxsIHJpdmVyIG5hbWVkIER1ZGVuIGZsb3dzIGJ5IHRoZWlyIHBsYWNlIGFuZCBzdXBwbGllcyBpdCB3aXRoIHRoZSBuZWNlc3NhcnkgcmVnZWxpYWxpYS5cIiArXHJcbiAgICBcIkl0IGlzIGEgcGFyYWRpc2VtYXRpYyBjb3VudHJ5LCBpbiB3aGljaCByb2FzdGVkIHBhcnRzIG9mIHNlbnRlbmNlcyBmbHkgaW50byB5b3VyIG1vdXRoLlwiO1xyXG4gIGRheXMudGV4dENvbnRlbnQgPSBcIk1vbiAtIEZyaVwiO1xyXG4gIGhvdXJzLnRleHRDb250ZW50ID0gXCIgOCBBTSAtIDExIFBNXCI7XHJcbiAgcGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIisxLTk3OC0xMjMtNDU2N1wiO1xyXG5cclxuICBkYXlzLmFwcGVuZENoaWxkKGhvdXJzKTtcclxuICBhYm91dFRleHRCb2R5LmFwcGVuZChib2R5Q29udGVudCwgZGF5cywgcGhvbmVOdW1iZXIpO1xyXG4gIGFib3V0VGV4dFdyYXBwZXIuYXBwZW5kKGFib3V0VGV4dEhlYWRlciwgYWJvdXRUZXh0Qm9keSwgYWJvdXRUZXh0Rm9vdGVyKTtcclxuICBhYm91dFRleHRIZWFkZXIuYXBwZW5kKGFib3V0LCByZXN0VGl0bGUpO1xyXG5cclxuICByZXR1cm4gYWJvdXRUZXh0V3JhcHBlcjtcclxufVxyXG4iLCJmdW5jdGlvbiBuYXZiYXIoKSB7XHJcbiAgY29uc3QgbGlua3MgPSBbXCJIb21lXCIsIFwiTWVudVwiLCBcIkFib3V0XCJdO1xyXG5cclxuICBjb25zdCBuYXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBjb25zdCBuYXZXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgbmF2TGlua3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgY29uc3QgbmF2TGlua3NDb3B5ID0gbmF2TGlua3MuY2xvbmVOb2RlKHRydWUpO1xyXG4gIGNvbnN0IG5hdlRvZ2dsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGNvbnN0IG5hdkNvbGxhcHNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgbmF2RWxlbWVudC5pZCA9IFwibWFpbk5hdlwiO1xyXG4gIG5hdlRvZ2dsZXIuaWQgPSBcIm5hdlRvZ2dsZXJcIjtcclxuICBuYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdlwiKTtcclxuICBuYXZXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdi13cmFwcGVyXCIpO1xyXG4gIG5hdkxpbmtzLmNsYXNzTGlzdC5hZGQoXCJtYWluLW5hdi1saW5rc1wiKTtcclxuICBsb2dvLmNsYXNzTGlzdC5hZGQoXCJsb2dvLWhlYWRlclwiKTtcclxuICBuYXZUb2dnbGVyLmNsYXNzTGlzdC5hZGQoXCJuYXYtdG9nZ2xlclwiKTtcclxuICBuYXZDb2xsYXBzZS5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbGxhcHNlXCIpO1xyXG4gIG5hdkxpbmtzQ29weS5jbGFzc0xpc3QuYWRkKFwibmF2LWNvbGxhcHNlLWxpbmtzXCIpO1xyXG4gIGxvZ28udGV4dENvbnRlbnQgPSBcIkx1bmFcIjtcclxuXHJcbiAgbmF2RWxlbWVudC5hcHBlbmRDaGlsZChuYXZXcmFwcGVyKTtcclxuICBuYXZXcmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pO1xyXG4gIG5hdldyYXBwZXIuYXBwZW5kQ2hpbGQobmF2TGlua3MpO1xyXG4gIG5hdldyYXBwZXIuYXBwZW5kQ2hpbGQobmF2VG9nZ2xlcik7XHJcbiAgbmF2V3JhcHBlci5hcHBlbmRDaGlsZChuYXZDb2xsYXBzZSk7XHJcbiAgbmF2VG9nZ2xlci5hcHBlbmRDaGlsZChzdmdIYW0oKSk7XHJcbiAgbmF2Q29sbGFwc2UuYXBwZW5kQ2hpbGQobmF2TGlua3NDb3B5KTtcclxuXHJcbiAgbGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBsaS50ZXh0Q29udGVudCA9IGxpbms7XHJcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwibmF2LWl0ZW1cIiwgYCR7bGluay50b0xvd2VyQ2FzZSgpfS1saW5rYCk7XHJcbiAgICBuYXZMaW5rcy5hcHBlbmRDaGlsZChsaSk7XHJcbiAgICBuYXZMaW5rc0NvcHkuYXBwZW5kQ2hpbGQobGkuY2xvbmVOb2RlKHRydWUpKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5hdkVsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhlYWRlcihwYWdlKSB7XHJcbiAgY29uc3QgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgaGVyb1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuICBoZXJvVGV4dC50ZXh0Q29udGVudCA9IHBhZ2U7XHJcblxyXG4gIGhlcm9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJoZXJvLXdyYXBwZXJcIik7XHJcbiAgaGVyb1RleHQuY2xhc3NMaXN0LmFkZChcImhlcm8tdGV4dFwiKTtcclxuXHJcbiAgaGVyb1dyYXBwZXIuYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xyXG4gIGhlYWRlckVsZW1lbnQuYXBwZW5kQ2hpbGQoaGVyb1dyYXBwZXIpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyRWxlbWVudDtcclxufVxyXG5cclxuZXhwb3J0IHsgbmF2YmFyLCBoZWFkZXIgfTtcclxuXHJcbmZ1bmN0aW9uIHN2Z0hhbSgpIHtcclxuICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuICBjb25zdCByZWN0T25lID0gcmVjdENvbXBvbmVudChcImxpbmUtdG9wXCIsIFwiMjVcIik7XHJcbiAgY29uc3QgcmVjdFR3byA9IHJlY3RDb21wb25lbnQoXCJsaW5lLW1pZGRsZVwiLCBcIjQ1XCIpO1xyXG4gIGNvbnN0IHJlY3RUaHJlZSA9IHJlY3RDb21wb25lbnQoXCJsaW5lLWJvdHRvbVwiLCBcIjY1XCIpO1xyXG5cclxuICBzdmcuY2xhc3NMaXN0LmFkZChcImhhbWJ1cmdlclwiKTtcclxuXHJcbiAgc3ZnLnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMTAwIDEwMFwiKTtcclxuICBzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCIzNVwiKTtcclxuXHJcbiAgc3ZnLmFwcGVuZChyZWN0T25lLCByZWN0VHdvLCByZWN0VGhyZWUpO1xyXG5cclxuICByZXR1cm4gc3ZnO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWN0Q29tcG9uZW50KGNsYXNzVHdvLCB5LCB4ID0gMTAsIGNsYXNzT25lID0gXCJsaW5lXCIpIHtcclxuICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpO1xyXG5cclxuICByZWN0LmNsYXNzTGlzdC5hZGQoY2xhc3NPbmUsIGNsYXNzVHdvKTtcclxuXHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjgwXCIpO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiMTBcIik7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ4XCIsIHgpO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKFwieVwiLCB5KTtcclxuICByZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiNVwiKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcclxuXHJcbiAgcmV0dXJuIHJlY3Q7XHJcbn1cclxuIiwiaW1wb3J0IG1lbnVJdGVtcyBmcm9tIFwiLi9tZW51SXRlbXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhvbWUoKSB7XHJcbiAgY29uc3QgaG9tZVNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuXHJcbiAgaG9tZVNlY3Rpb24uY2xhc3NMaXN0LmFkZChcImhvbWUtc2VjdGlvblwiKTtcclxuXHJcbiAgaG9tZVNlY3Rpb24uYXBwZW5kKGluZm9Db21wb25lbnQoKSwgZmVhdHVyZWRJdGVtcygpKTtcclxuXHJcbiAgcmV0dXJuIGhvbWVTZWN0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmZvQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0IGluZm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgcmVzdGF1cmFudERpc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcblxyXG4gIGluZm9XcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLXdyYXBwZXJcIik7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibWFpbi1sb2dvXCIsIFwiY2xyLWFjY2VudFwiLCBcImZmLWFjY2VudFwiKTtcclxuICByZXN0YXVyYW50RGlzYy5jbGFzc0xpc3QuYWRkKFwicmVzdC1kaXNjXCIpO1xyXG5cclxuICBsb2dvLnRleHRDb250ZW50ID0gXCJMdW5hXCI7XHJcbiAgcmVzdGF1cmFudERpc2MudGV4dENvbnRlbnQgPSBcIkRlbGljaW91cyBTcGVjaWFsdGllc1wiO1xyXG5cclxuICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBpbmZvV3JhcHBlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGlzYyk7XHJcblxyXG4gIHJldHVybiBpbmZvV3JhcHBlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZmVhdHVyZWRJdGVtcygpIHtcclxuICBjb25zdCBmZWF0dXJlZEl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgY29uc3QgZmVhdHVyZWRJdGVtc1dyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBmZWF0dXJlZEl0ZW1zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmZWF0dXJlZC1pdGVtc1wiKTtcclxuICBmZWF0dXJlZEl0ZW1zV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiZmVhdHVyZWQtaXRlbXMtd3JhcHBlclwiKTtcclxuXHJcbiAgT2JqZWN0LnZhbHVlcyhtZW51SXRlbXMpXHJcbiAgICAuc2xpY2UoMCwgNClcclxuICAgIC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZlYXR1cmVkSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgIGNvbnN0IGl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgICAgIGZlYXR1cmVkSXRlbS5jbGFzc0xpc3QuYWRkKFwiZmVhdHVyZWQtaXRlbVwiKTtcclxuXHJcbiAgICAgIGl0ZW1JbWcuc3JjID0gaXRlbS5pbWc7XHJcbiAgICAgIGl0ZW1JbWcuYWx0ID0gaXRlbS5uYW1lO1xyXG4gICAgICBpdGVtSW1nLmRyYWdnYWJsZSA9IGZhbHNlO1xyXG4gICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcclxuXHJcbiAgICAgIGZlYXR1cmVkSXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcclxuICAgICAgZmVhdHVyZWRJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcclxuICAgICAgZmVhdHVyZWRJdGVtc1dyYXBwZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZWRJdGVtKTtcclxuICAgIH0pO1xyXG5cclxuICBmZWF0dXJlZEl0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSXRlbXNXcmFwcGVyKTtcclxuXHJcbiAgcmV0dXJuIGZlYXR1cmVkSXRlbXNDb250YWluZXI7XHJcbn1cclxuIiwiaW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcIi4vaGVhZGVyXCI7XHJcbmltcG9ydCBob21lIGZyb20gXCIuL2hvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxQYWdlKCkge1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKS5hcHBlbmQobmF2YmFyKCksIGhvbWUoKSk7XHJcbiAgY29uc3QgaG9tZUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ob21lLWxpbmtcIik7XHJcbiAgaG9tZUxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufVxyXG4iLCJpbXBvcnQgbWVudUl0ZW1zIGZyb20gXCIuL21lbnVJdGVtc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudVNlY3Rpb24oKSB7XHJcbiAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtc2VjdGlvblwiKTtcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TmF2KCkpO1xyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbXNDb21wb25lbnQoKSk7XHJcblxyXG4gIHJldHVybiBtZW51Q29udGFpbmVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51TmF2KCkge1xyXG4gIGNvbnN0IG5hdk5hbWVzID0gW1wiQnJlYWtmYXN0XCIsIFwiTHVuY2hcIiwgXCJEaW5uZXJcIiwgXCJEcmlua3NcIiwgXCJEZXNzZXJ0c1wiXTtcclxuXHJcbiAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcclxuXHJcbiAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKFwibWVudS1saW5rc1wiKTtcclxuXHJcbiAgbmF2TmFtZXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbGlFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGlFbGVtZW50LnRleHRDb250ZW50ID0gaXRlbTtcclxuICAgIGlmIChpdGVtID09PSBcIkRpbm5lclwiKSB7XHJcbiAgICAgIGxpRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWVudS1uYXYtaXRlbVwiLCBcIm1lbnUtbGluay1hY3RpdmVcIik7XHJcbiAgICB9XHJcbiAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtbmF2LWl0ZW1cIik7XHJcblxyXG4gICAgbmF2TGlzdC5hcHBlbmRDaGlsZChsaUVsZW1lbnQpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gbmF2TGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudUl0ZW1zQ29tcG9uZW50KCkge1xyXG4gIGNvbnN0IG1lbnVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgbWVudVdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIm1lbnUtd3JhcHBlclwiKTtcclxuXHJcbiAgT2JqZWN0LnZhbHVlcyhtZW51SXRlbXMpLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaXRlbUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29uc3QgaXRlbUluZm9Db250YWludGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGl0ZW1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaXRlbVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICBjb25zdCBpdGVtSW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgICBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWltZ1wiKTtcclxuICAgIGl0ZW1UaXRsZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1uYW1lXCIpO1xyXG4gICAgaXRlbUluZ3JlZGllbnRzLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWluZ3JlZGllbnRzXCIpO1xyXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoXCJpdGVtLXByaWNlXCIpO1xyXG4gICAgaXRlbUluZm9Db250YWludGVyLmNsYXNzTGlzdC5hZGQoXCJpbmZvLWNvbnRhaW5lclwiKTtcclxuICAgIGl0ZW1IZWFkZXIuY2xhc3NMaXN0LmFkZChcIml0ZW0taGVhZGVyXCIpO1xyXG4gICAgb3JkZXJCdG4uY2xhc3NMaXN0LmFkZChcIm9yZGVyLWJ0blwiKTtcclxuXHJcbiAgICBpdGVtSW1nLnNyYyA9IGl0ZW0uaW1nO1xyXG4gICAgaXRlbUltZy5hbHQgPSBpdGVtLm5hbWU7XHJcbiAgICBpdGVtVGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBgJCR7aXRlbS5wcmljZX1gO1xyXG4gICAgaXRlbUluZ3JlZGllbnRzLnRleHRDb250ZW50ID0gaXRlbS5pbmdyZWRpZW50cy5qb2luKFwiLCBcIik7XHJcbiAgICBvcmRlckJ0bi50ZXh0Q29udGVudCA9IFwiT3JkZXIgTm93XCI7XHJcblxyXG4gICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbUltZywgaXRlbUluZm9Db250YWludGVyKTtcclxuICAgIGl0ZW1JbmZvQ29udGFpbnRlci5hcHBlbmQoaXRlbUhlYWRlciwgaXRlbUluZ3JlZGllbnRzLCBvcmRlckJ0bik7XHJcbiAgICBpdGVtSGVhZGVyLmFwcGVuZChpdGVtVGl0bGUsIGl0ZW1QcmljZSk7XHJcbiAgICBtZW51V3JhcHBlci5hcHBlbmRDaGlsZChpdGVtQ29udGFpbmVyKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG1lbnVXcmFwcGVyO1xyXG59XHJcbiIsImltcG9ydCBmaXNoVGFjb3MgZnJvbSBcIi4uL2Fzc2V0cy9maXNoLXRhY29zLmpwZ1wiO1xyXG5pbXBvcnQgY2hpY2tlblRvc3RhZGFzIGZyb20gXCIuLi9hc3NldHMvY2hpY2tlbi10b3N0YWRhcy5qcGdcIjtcclxuaW1wb3J0IGJha2VkQ2hpY2tlblF1ZXNhZGlsbGFzIGZyb20gXCIuLi9hc3NldHMvQmFrZWQtQ2hpY2tlbi1RdWVzYWRpbGxhcy5qcGdcIjtcclxuaW1wb3J0IGNoaWNrZW5FbmNoaWxhZGFzIGZyb20gXCIuLi9hc3NldHMvY2hpY2tlbi1lbmNoaWxhZGFzLmpwZ1wiO1xyXG5pbXBvcnQgcGljb0RlR2FsbG8gZnJvbSBcIi4uL2Fzc2V0cy9waWNvLWRlLWdhbGxvLmpwZ1wiO1xyXG5pbXBvcnQgYmxhY2tCZWFuQnVycml0byBmcm9tIFwiLi4vYXNzZXRzL2JsYWNrLWJlYW4tYnVycml0by5qcGdcIjtcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IHtcclxuICBpdGVtMToge1xyXG4gICAgbmFtZTogXCJGaXNoIFRhY29zXCIsXHJcbiAgICBpbWc6IGZpc2hUYWNvcyxcclxuICAgIHByaWNlOiAxMyxcclxuICAgIGluZ3JlZGllbnRzOiBbXCJGaXNoXCIsIFwiU3JpcmFjaGFcIiwgXCJHYXJsaWMgcG93ZGVyXCIsIFwiTGltZSBqdWljZVwiXSxcclxuICB9LFxyXG4gIGl0ZW0yOiB7XHJcbiAgICBuYW1lOiBcIkNoaWNrZW4gVG9zdGFkYXNcIixcclxuICAgIGltZzogY2hpY2tlblRvc3RhZGFzLFxyXG4gICAgcHJpY2U6IDgsXHJcbiAgICBpbmdyZWRpZW50czogW1xyXG4gICAgICBcIlBpbnRvIGJlYW5zXCIsXHJcbiAgICAgIFwiUmVmcmllZCBiZWFuc1wiLFxyXG4gICAgICBcIlNvdXIgY3JlYW1cIixcclxuICAgICAgXCJXaGl0ZSBjb3JuIHRvcnRpbGxhc1wiLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGl0ZW0zOiB7XHJcbiAgICBuYW1lOiBcIkNoaWNrZW4gUXVlc2FkaWxsYXNcIixcclxuICAgIGltZzogYmFrZWRDaGlja2VuUXVlc2FkaWxsYXMsXHJcbiAgICBwcmljZTogMjAsXHJcbiAgICBpbmdyZWRpZW50czogW1wiU291ciBjcmVhbVwiLCBcIlBlcHBlciBqYWNrIGNoZWVzZVwiLCBcIlNocmVkZGVkIGNoaWNrZW5cIl0sXHJcbiAgfSxcclxuICBpdGVtNDoge1xyXG4gICAgbmFtZTogXCJDaGlja2VuIEVuY2hpbGFkYXNcIixcclxuICAgIGltZzogY2hpY2tlbkVuY2hpbGFkYXMsXHJcbiAgICBwcmljZTogMTUsXHJcbiAgICBpbmdyZWRpZW50czogW1wiU291ciBjcmVhbVwiLCBcIkVhc3kgZW5jaGlsYWRhIHNhdWNlXCIsIFwiU2hyZWRkZWQgY2hpY2tlblwiXSxcclxuICB9LFxyXG4gIGl0ZW01OiB7XHJcbiAgICBuYW1lOiBcIlBpY28gRGUgR2FsbG9cIixcclxuICAgIGltZzogcGljb0RlR2FsbG8sXHJcbiAgICBwcmljZTogMTAsXHJcbiAgICBpbmdyZWRpZW50czogW1wiVG9tYXRvZXNcIiwgXCJDaWxhbnRyb1wiLCBcIkJsYWNrIHBlcHBlclwiLCBcIkphbGFwZW5vIHBlcHBlclwiXSxcclxuICB9LFxyXG4gIGl0ZW02OiB7XHJcbiAgICBuYW1lOiBcIkJsYWNrIEJlYW4gQnVycml0b1wiLFxyXG4gICAgaW1nOiBibGFja0JlYW5CdXJyaXRvLFxyXG4gICAgcHJpY2U6IDEyLFxyXG4gICAgaW5ncmVkaWVudHM6IFtcclxuICAgICAgXCJCbGFjayBiZWFuc1wiLFxyXG4gICAgICBcIlNvdXIgY3JlYW1cIixcclxuICAgICAgXCJGbG91ciB0b3J0aWxsYXNcIixcclxuICAgICAgXCJUb21hdG9cIixcclxuICAgICAgXCJHcmVlbiBwZXBwZXJcIixcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVJdGVtcztcclxuIiwiZnVuY3Rpb24gbmF2QmFyVG9nZ2xlKGUpIHtcclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5uYXYtdG9nZ2xlclwiKSkge1xyXG4gICAgY29uc3QgbmF2Q29sbGFwc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5hdi1jb2xsYXBzZVwiKTtcclxuICAgIGNvbnN0IG5hdkxpbmVzID0gWy4uLmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5lXCIpXTtcclxuXHJcbiAgICBuYXZDb2xsYXBzZS5jbGFzc0xpc3QudG9nZ2xlKFwiZGlzcGxheVwiKTtcclxuICAgIG5hdkxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgbGluZS5jbGFzc0xpc3QudG9nZ2xlKFwib3BlblwiKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbmF2TGlua0NsYXNzVG9nZ2xlKGVsZW1lbnQpIHtcclxuICBjb25zdCBpdGVtcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGAke2VsZW1lbnR9LWxpbmtgKV07XHJcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgeyBuYXZCYXJUb2dnbGUsIG5hdkxpbmtDbGFzc1RvZ2dsZSB9O1xyXG4iLCJsZXQgbGFzdFNjcm9sbCA9IDA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZGbG9hdFRvZ2dsZSgpIHtcclxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5OYXZcIik7XHJcbiAgY29uc3QgY3VycmVudFNjcm9sbCA9IHdpbmRvdy5zY3JvbGxZO1xyXG5cclxuICBpZiAoY3VycmVudFNjcm9sbCA+IGxhc3RTY3JvbGwpIHtcclxuICAgIHRvZ2dsZUNsYXNzZXNPblNjcm9sbERvd24oY3VycmVudFNjcm9sbCwgbmF2QmFyKTtcclxuICAgIGxhc3RTY3JvbGwgPSBjdXJyZW50U2Nyb2xsO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGwgPCBsYXN0U2Nyb2xsKSB7XHJcbiAgICB0b2dnbGVDbGFzc2VzT25TY3JvbGxVcChjdXJyZW50U2Nyb2xsLCBuYXZCYXIpO1xyXG4gICAgLy8gcmVzZXQgbGFzdFNjcm9sbFxyXG4gICAgaWYgKGN1cnJlbnRTY3JvbGwgPT09IDApIHtcclxuICAgICAgbGFzdFNjcm9sbCA9IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDbGFzc2VzT25TY3JvbGxEb3duKGN1cnJlbnRTY3JvbGwsIG1haW5OYXYpIHtcclxuICBpZiAoY3VycmVudFNjcm9sbCA+PSAxMDApIHtcclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LmFkZChcInNjcm9sbGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGwgPj0gMzUwKSB7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoXCJmbG9hdGluZ1wiKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzZXNPblNjcm9sbFVwKGN1cnJlbnRTY3JvbGwsIG1haW5OYXYpIHtcclxuICBpZiAoY3VycmVudFNjcm9sbCA8PSAzNTApIHtcclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LmFkZChcInNsZWVwXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGwgPD0gMjUwKSB7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJmbG9hdGluZ1wiKTtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50U2Nyb2xsIDw9IDE1MCkge1xyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QucmVtb3ZlKFwic2xlZXBcIiwgXCJzY3JvbGxlZFwiKTtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBuYXZiYXIsIGhlYWRlciB9IGZyb20gXCIuL21vZHVsZXMvaGVhZGVyXCI7XHJcbmltcG9ydCBpbml0aWFsUGFnZSBmcm9tIFwiLi9tb2R1bGVzL2luaXRpYWxQYWdlXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vbW9kdWxlcy9hYm91dFwiO1xyXG5pbXBvcnQgbmF2RmxvYXRUb2dnbGUgZnJvbSBcIi4vbW9kdWxlcy9uYXZCYXJPblNjcm9sbFwiO1xyXG5pbXBvcnQgeyBuYXZCYXJUb2dnbGUsIG5hdkxpbmtDbGFzc1RvZ2dsZSB9IGZyb20gXCIuL21vZHVsZXMvbmF2QmFyRnVuY3Rpb25zXCI7XHJcblxyXG5pbml0aWFsUGFnZSgpO1xyXG5cclxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcclxuXHJcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRhYlN3aXRjaGluZyk7XHJcbmNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhclRvZ2dsZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG5hdkZsb2F0VG9nZ2xlKTtcclxuXHJcbmZ1bmN0aW9uIHRhYlN3aXRjaGluZyhlKSB7XHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIubmF2LWl0ZW1cIikgfHwgZS50YXJnZXQubWF0Y2hlcyhcIi5sb2dvLWhlYWRlclwiKSkge1xyXG4gICAgY29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5ob21lLWxpbmtcIikgfHwgZS50YXJnZXQubWF0Y2hlcyhcIi5sb2dvLWhlYWRlclwiKSkge1xyXG4gICAgaW5pdGlhbFBhZ2UoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLm1lbnUtbGlua1wiKSkge1xyXG4gICAgY29udGVudC5hcHBlbmQobmF2YmFyKCksIGhlYWRlcihcIlNwZWNpYWx0aWVzXCIpLCBtZW51KCkpO1xyXG4gICAgbmF2TGlua0NsYXNzVG9nZ2xlKFwibWVudVwiKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLmFib3V0LWxpbmtcIikpIHtcclxuICAgIGNvbnRlbnQuYXBwZW5kKG5hdmJhcigpLCBoZWFkZXIoXCJBYm91dFwiKSwgYWJvdXQoKSk7XHJcbiAgICBuYXZMaW5rQ2xhc3NUb2dnbGUoXCJhYm91dFwiKTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9