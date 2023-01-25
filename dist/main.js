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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\r\n  --color-primary: #fff;\r\n  --color-accent: #c8a97e;\r\n  --color-gray: #666666;\r\n  --color-black: #000000;\r\n  --header-overlay: linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.5));\r\n  --background-overlay: linear-gradient(rgb(0 0 0 / 0.7), rgb(0 0 0 / 0.7));\r\n  --border-settings: 1px solid rgb(255 255 255 / 0.1);\r\n  --ff-primary: \"Poppins\", Arial, sans-serif;\r\n  --ff-accent: \"Great Vibes\", \"Comic Sans MS\", \"Comic Sans\", cursive;\r\n  --ff-bold: 900;\r\n  --ff-semi-bold: 600;\r\n  --stagger-delay: 50ms;\r\n}\r\n\r\n/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n/*\r\n    2. Remove default margin & padding\r\n  */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/*\r\n    3. Allow percentage-based heights in the application\r\n  */\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n}\r\n/*\r\n    Typographic tweaks!\r\n    4. Add accessible line-height\r\n    5. Improve text rendering\r\n  */\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n    6. Improve media defaults\r\n  */\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n    7. Remove built-in form typography styles\r\n  */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n    8. Avoid text overflows\r\n  */\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n/*\r\n    9. Create a root stacking context\r\n  */\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n/* General styles */\r\n\r\n#content {\r\n  font-family: var(--ff-primary);\r\n}\r\n\r\n.menu-section,\r\n.about-section {\r\n  padding-block: 7em;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n}\r\n\r\nli,\r\nbutton,\r\n.logo-header {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Header styles */\r\nheader {\r\n  min-height: 450px;\r\n  background-image: var(--header-overlay), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  background-size: cover;\r\n  color: var(--color-primary);\r\n  display: grid;\r\n  grid-template-rows: auto 1fr 200px;\r\n}\r\n\r\n.main-nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  border-bottom: var(--border-settings);\r\n  padding-block: 1em;\r\n  position: absolute;\r\n  z-index: 999;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.main-nav.scrolled {\r\n  position: fixed;\r\n  padding-block: 0.5em;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-black);\r\n  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);\r\n  transform: translateY(-100px);\r\n}\r\n\r\n.main-nav.sleep {\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav.floating {\r\n  transform: translateY(0);\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav-wrapper,\r\n.container {\r\n  width: min(1140px, 90%);\r\n}\r\n\r\n.main-nav-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-header {\r\n  font-size: 1.5rem;\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.main-nav-links {\r\n  gap: 2.5em;\r\n}\r\n\r\n.nav-item.active {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.nav-item:hover,\r\n.nav-item.active:hover {\r\n  color: var(--color-primary);\r\n}\r\n\r\n.main-nav.floating .nav-item:hover,\r\n.main-nav.floating .nav-item.active:hover {\r\n  color: var(--color-black);\r\n}\r\n\r\n.nav-toggler {\r\n  display: none;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: rgb(255 255 255 / 0.5);\r\n  letter-spacing: 1.2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.hamburger {\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-toggler .line {\r\n  fill: var(--color-primary);\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in 200ms,\r\n    rotate 200ms ease-in, opacity 0ms 200ms;\r\n  transform-origin: center;\r\n}\r\n\r\n.nav-toggler .line.open {\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in,\r\n    rotate 200ms ease-in 200ms, opacity 0ms 200ms;\r\n}\r\n\r\n.main-nav.floating .line {\r\n  fill: var(--color-black);\r\n}\r\n\r\n.nav-toggler:hover .line {\r\n  fill: var(--color-accent);\r\n}\r\n\r\n.nav-toggler :is(.line-top.open, .line-bottom.open) {\r\n  y: 45;\r\n}\r\n\r\n.nav-toggler .line-top.open {\r\n  rotate: 45deg;\r\n}\r\n\r\n.nav-toggler .line-bottom.open {\r\n  rotate: -45deg;\r\n}\r\n\r\n.nav-toggler .line-middle.open {\r\n  opacity: 0;\r\n}\r\n\r\n.nav-collapse {\r\n  display: block;\r\n  max-height: 0;\r\n  flex-basis: 100%;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse > ul {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  opacity: 0;\r\n  gap: 2em;\r\n  padding-block: 1em;\r\n  visibility: hidden;\r\n}\r\n\r\n.nav-collapse.display {\r\n  max-height: 150px;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse.display .nav-collapse-links {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 100ms ease-in-out 150ms;\r\n}\r\n\r\n@media screen and (min-width: 981px) {\r\n  .nav-collapse.display,\r\n  .nav-collapse > ul {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .main-nav {\r\n    color: var(--color-primary);\r\n    background-color: var(--color-black);\r\n    border-bottom: none;\r\n    position: static;\r\n  }\r\n\r\n  .main-nav-links {\r\n    display: none;\r\n  }\r\n\r\n  .nav-toggler {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.hero-wrapper {\r\n  grid-row: 3;\r\n  place-self: center;\r\n}\r\n\r\n.hero-text {\r\n  font-size: 3.125rem;\r\n}\r\n\r\n/* Home styles */\r\n.home-section {\r\n  height: 100vh;\r\n  background-image: var(--background-overlay),\r\n    url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  background-size: cover;\r\n  background-position: 50% 10%;\r\n  font-family: var(--ff-primary);\r\n  color: var(--color-primary);\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 0.3fr;\r\n  position: relative;\r\n}\r\n\r\n.info-wrapper {\r\n  align-self: center;\r\n  text-align: center;\r\n  line-height: 1;\r\n}\r\n\r\n.main-logo {\r\n  font-size: 5rem;\r\n}\r\n\r\n.rest-disc {\r\n  font-size: clamp(3rem, 1.75rem + 4vw, 4rem);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.featured-items {\r\n  border-top: var(--border-settings);\r\n  color: var(--color-primary);\r\n  font-size: 1.125rem;\r\n  width: 100%;\r\n}\r\n\r\n.featured-items-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  align-items: center;\r\n  justify-items: center;\r\n  row-gap: 0.5em;\r\n  height: 100%;\r\n  padding-block: 1em;\r\n}\r\n\r\n.featured-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 1em;\r\n}\r\n\r\n.featured-item img {\r\n  border-radius: 50%;\r\n  width: 90px;\r\n  aspect-ratio: 1 / 1;\r\n  object-fit: cover;\r\n  user-select: none;\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .home-section {\r\n    height: calc(100vh - 69px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  .home-section {\r\n    height: calc(100vh + 570px);\r\n  }\r\n\r\n  .featured-items-wrapper {\r\n    grid-template-columns: 1fr;\r\n    padding-block: 2em;\r\n  }\r\n}\r\n\r\n/* Menu style */\r\n\r\n.container {\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-links {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(120px, 100%), 1fr));\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.menu-links > li {\r\n  font-size: 1.2rem;\r\n  font-weight: var(--ff-semi-bold);\r\n  padding: 1em;\r\n}\r\n\r\n.menu-links > li:hover,\r\n.menu-link-active {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  position: relative;\r\n}\r\n\r\n.menu-link-active::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-top: 10px solid var(--color-accent);\r\n  bottom: -10px;\r\n  right: 0;\r\n  left: 0;\r\n  width: 0;\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.menu-item > img {\r\n  height: 100%;\r\n  aspect-ratio: 2 / 1.5;\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-item:nth-child(3) img,\r\n.menu-item:nth-child(4) img {\r\n  order: 1;\r\n}\r\n\r\n.info-container {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 1em;\r\n\r\n  display: grid;\r\n  align-content: space-around;\r\n  row-gap: 5px;\r\n}\r\n\r\n.order-btn {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-accent);\r\n  outline: none;\r\n  padding: 0.5em 1em;\r\n  justify-self: start;\r\n}\r\n\r\n.order-btn:is(:hover, :active) {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.order-btn,\r\n.menu-item {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n:is(.order-btn, .menu-nav-item):is(:hover, :active) {\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.item-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  line-height: 1.3;\r\n}\r\n\r\n.item-header > * {\r\n  font-size: 1.3rem;\r\n  font-weight: var(--ff-semi-bold);\r\n}\r\n\r\n.item-header > h2 {\r\n  max-width: 150px;\r\n}\r\n\r\n.item-price {\r\n  color: var(--color-accent);\r\n}\r\n\r\n@media screen and (max-width: 600px), (max-width: 700px) {\r\n  .menu-links {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item > img {\r\n    aspect-ratio: 3 / 1.5;\r\n  }\r\n\r\n  .menu-item:nth-child(3) img,\r\n  .menu-item:nth-child(4) img {\r\n    order: 0;\r\n  }\r\n\r\n  .menu-link-active::after {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* About styles */\r\n\r\n.about-content {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 2em;\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1em;\r\n}\r\n\r\n.about-imgs-wrapper > img {\r\n  width: 100%;\r\n  height: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n.about {\r\n  transform: translateY(-1.5em);\r\n}\r\n\r\n.about-text-header {\r\n  display: grid;\r\n  gap: 3em;\r\n  line-height: 1;\r\n}\r\n\r\n.about-title {\r\n  font-size: 6.25rem;\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n}\r\n\r\n.about-restaurant-title {\r\n  font-size: 3.125rem;\r\n  grid-row: 1 / 3;\r\n  grid-column: 1;\r\n  align-self: end;\r\n  max-width: 300px;\r\n}\r\n\r\n.about-text,\r\n.work-days {\r\n  font-size: 1rem;\r\n  line-height: 2;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.about-text {\r\n  margin-block: 1.5em 1em;\r\n  max-width: 400px;\r\n}\r\n\r\n.work-days {\r\n  margin-block: 1em;\r\n}\r\n\r\n.work-hours {\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.phone-number {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  .about {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .about-content {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* Animation */\r\n\r\n.info-wrapper,\r\n.hero-wrapper {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translateY(35px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.featured-item,\r\n.menu-nav-item,\r\n.about-imgs-wrapper,\r\n.about-text-wrapper,\r\n.menu-item {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n/* :is(.featured-item, .menu-nav-item):is(:nth-child(1)) {\r\n  animation-delay: 0ms;\r\n} */\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(2)) {\r\n  animation-delay: var(--stagger-delay);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(3)) {\r\n  animation-delay: calc(var(--stagger-delay) + 25ms);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(4)) {\r\n  animation-delay: calc(var(--stagger-delay) + 50ms);\r\n}\r\n\r\n:is(.menu-nav-item, .menu-item):is(:nth-child(5)) {\r\n  animation-delay: calc(var(--stagger-delay) + 75ms);\r\n}\r\n\r\n:is(.menu-item):is(:nth-child(6)) {\r\n  animation-delay: calc(var(--stagger-delay) + 95ms);\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  animation-delay: 0;\r\n}\r\n\r\n.about-text-wrapper {\r\n  animation-delay: 25ms;\r\n}\r\n\r\n/* Utility styles */\r\n\r\n.clr-accent {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.ff-accent {\r\n  font-family: var(--ff-accent);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Poppins&display=swap\");\r\n@import url(\"https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap\");\r\n\r\n:root {\r\n  --color-primary: #fff;\r\n  --color-accent: #c8a97e;\r\n  --color-gray: #666666;\r\n  --color-black: #000000;\r\n  --header-overlay: linear-gradient(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.5));\r\n  --background-overlay: linear-gradient(rgb(0 0 0 / 0.7), rgb(0 0 0 / 0.7));\r\n  --border-settings: 1px solid rgb(255 255 255 / 0.1);\r\n  --ff-primary: \"Poppins\", Arial, sans-serif;\r\n  --ff-accent: \"Great Vibes\", \"Comic Sans MS\", \"Comic Sans\", cursive;\r\n  --ff-bold: 900;\r\n  --ff-semi-bold: 600;\r\n  --stagger-delay: 50ms;\r\n}\r\n\r\n/*\r\n  1. Use a more-intuitive box-sizing model.\r\n*/\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n/*\r\n    2. Remove default margin & padding\r\n  */\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n/*\r\n    3. Allow percentage-based heights in the application\r\n  */\r\nhtml,\r\nbody {\r\n  height: 100vh;\r\n}\r\n/*\r\n    Typographic tweaks!\r\n    4. Add accessible line-height\r\n    5. Improve text rendering\r\n  */\r\nbody {\r\n  line-height: 1.5;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n/*\r\n    6. Improve media defaults\r\n  */\r\nimg,\r\npicture,\r\nvideo,\r\ncanvas,\r\nsvg {\r\n  display: block;\r\n  max-width: 100%;\r\n}\r\n/*\r\n    7. Remove built-in form typography styles\r\n  */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n/*\r\n    8. Avoid text overflows\r\n  */\r\np,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  overflow-wrap: break-word;\r\n}\r\n/*\r\n    9. Create a root stacking context\r\n  */\r\n#root,\r\n#__next {\r\n  isolation: isolate;\r\n}\r\n\r\n/* General styles */\r\n\r\n#content {\r\n  font-family: var(--ff-primary);\r\n}\r\n\r\n.menu-section,\r\n.about-section {\r\n  padding-block: 7em;\r\n}\r\n\r\nul {\r\n  display: flex;\r\n  list-style: none;\r\n  font-size: 0.9rem;\r\n  font-weight: 400;\r\n}\r\n\r\nli,\r\nbutton,\r\n.logo-header {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Header styles */\r\nheader {\r\n  min-height: 450px;\r\n  background-image: var(--header-overlay), url(\"../assets/header.jpg\");\r\n  background-size: cover;\r\n  color: var(--color-primary);\r\n  display: grid;\r\n  grid-template-rows: auto 1fr 200px;\r\n}\r\n\r\n.main-nav {\r\n  display: flex;\r\n  justify-content: center;\r\n  border-bottom: var(--border-settings);\r\n  padding-block: 1em;\r\n  position: absolute;\r\n  z-index: 999;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.main-nav.scrolled {\r\n  position: fixed;\r\n  padding-block: 0.5em;\r\n  background-color: var(--color-primary);\r\n  color: var(--color-black);\r\n  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);\r\n  transform: translateY(-100px);\r\n}\r\n\r\n.main-nav.sleep {\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav.floating {\r\n  transform: translateY(0);\r\n  transition: transform 300ms ease-out;\r\n}\r\n\r\n.main-nav-wrapper,\r\n.container {\r\n  width: min(1140px, 90%);\r\n}\r\n\r\n.main-nav-wrapper {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.logo-header {\r\n  font-size: 1.5rem;\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.main-nav-links {\r\n  gap: 2.5em;\r\n}\r\n\r\n.nav-item.active {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.nav-item:hover,\r\n.nav-item.active:hover {\r\n  color: var(--color-primary);\r\n}\r\n\r\n.main-nav.floating .nav-item:hover,\r\n.main-nav.floating .nav-item.active:hover {\r\n  color: var(--color-black);\r\n}\r\n\r\n.nav-toggler {\r\n  display: none;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n  color: rgb(255 255 255 / 0.5);\r\n  letter-spacing: 1.2px;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.hamburger {\r\n  pointer-events: none;\r\n}\r\n\r\n.nav-toggler .line {\r\n  fill: var(--color-primary);\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in 200ms,\r\n    rotate 200ms ease-in, opacity 0ms 200ms;\r\n  transform-origin: center;\r\n}\r\n\r\n.nav-toggler .line.open {\r\n  transition: fill 200ms ease-in-out, y 200ms ease-in,\r\n    rotate 200ms ease-in 200ms, opacity 0ms 200ms;\r\n}\r\n\r\n.main-nav.floating .line {\r\n  fill: var(--color-black);\r\n}\r\n\r\n.nav-toggler:hover .line {\r\n  fill: var(--color-accent);\r\n}\r\n\r\n.nav-toggler :is(.line-top.open, .line-bottom.open) {\r\n  y: 45;\r\n}\r\n\r\n.nav-toggler .line-top.open {\r\n  rotate: 45deg;\r\n}\r\n\r\n.nav-toggler .line-bottom.open {\r\n  rotate: -45deg;\r\n}\r\n\r\n.nav-toggler .line-middle.open {\r\n  opacity: 0;\r\n}\r\n\r\n.nav-collapse {\r\n  display: block;\r\n  max-height: 0;\r\n  flex-basis: 100%;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse > ul {\r\n  flex-direction: column;\r\n  align-items: start;\r\n  opacity: 0;\r\n  gap: 2em;\r\n  padding-block: 1em;\r\n  visibility: hidden;\r\n}\r\n\r\n.nav-collapse.display {\r\n  max-height: 150px;\r\n  transition: max-height 300ms ease-in-out;\r\n}\r\n\r\n.nav-collapse.display .nav-collapse-links {\r\n  opacity: 1;\r\n  visibility: visible;\r\n  transition: opacity 100ms ease-in-out 150ms;\r\n}\r\n\r\n@media screen and (min-width: 981px) {\r\n  .nav-collapse.display,\r\n  .nav-collapse > ul {\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .main-nav {\r\n    color: var(--color-primary);\r\n    background-color: var(--color-black);\r\n    border-bottom: none;\r\n    position: static;\r\n  }\r\n\r\n  .main-nav-links {\r\n    display: none;\r\n  }\r\n\r\n  .nav-toggler {\r\n    display: block;\r\n  }\r\n}\r\n\r\n.hero-wrapper {\r\n  grid-row: 3;\r\n  place-self: center;\r\n}\r\n\r\n.hero-text {\r\n  font-size: 3.125rem;\r\n}\r\n\r\n/* Home styles */\r\n.home-section {\r\n  height: 100vh;\r\n  background-image: var(--background-overlay),\r\n    url(\"../assets/backgroundImg.jpg\");\r\n  background-size: cover;\r\n  background-position: 50% 10%;\r\n  font-family: var(--ff-primary);\r\n  color: var(--color-primary);\r\n\r\n  display: grid;\r\n  grid-template-rows: 1fr 0.3fr;\r\n  position: relative;\r\n}\r\n\r\n.info-wrapper {\r\n  align-self: center;\r\n  text-align: center;\r\n  line-height: 1;\r\n}\r\n\r\n.main-logo {\r\n  font-size: 5rem;\r\n}\r\n\r\n.rest-disc {\r\n  font-size: clamp(3rem, 1.75rem + 4vw, 4rem);\r\n  text-transform: uppercase;\r\n}\r\n\r\n.featured-items {\r\n  border-top: var(--border-settings);\r\n  color: var(--color-primary);\r\n  font-size: 1.125rem;\r\n  width: 100%;\r\n}\r\n\r\n.featured-items-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  align-items: center;\r\n  justify-items: center;\r\n  row-gap: 0.5em;\r\n  height: 100%;\r\n  padding-block: 1em;\r\n}\r\n\r\n.featured-item {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n  gap: 1em;\r\n}\r\n\r\n.featured-item img {\r\n  border-radius: 50%;\r\n  width: 90px;\r\n  aspect-ratio: 1 / 1;\r\n  object-fit: cover;\r\n  user-select: none;\r\n}\r\n\r\n@media screen and (max-width: 980px) {\r\n  .home-section {\r\n    height: calc(100vh - 69px);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 820px) {\r\n  .home-section {\r\n    height: calc(100vh + 570px);\r\n  }\r\n\r\n  .featured-items-wrapper {\r\n    grid-template-columns: 1fr;\r\n    padding-block: 2em;\r\n  }\r\n}\r\n\r\n/* Menu style */\r\n\r\n.container {\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-links {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(120px, 100%), 1fr));\r\n  text-align: center;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.menu-links > li {\r\n  font-size: 1.2rem;\r\n  font-weight: var(--ff-semi-bold);\r\n  padding: 1em;\r\n}\r\n\r\n.menu-links > li:hover,\r\n.menu-link-active {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  position: relative;\r\n}\r\n\r\n.menu-link-active::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  border-left: 10px solid transparent;\r\n  border-right: 10px solid transparent;\r\n  border-top: 10px solid var(--color-accent);\r\n  bottom: -10px;\r\n  right: 0;\r\n  left: 0;\r\n  width: 0;\r\n  margin-inline: auto;\r\n}\r\n\r\n.menu-wrapper {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(min(400px, 100%), 1fr));\r\n}\r\n\r\n.menu-item {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n}\r\n\r\n.menu-item > img {\r\n  height: 100%;\r\n  aspect-ratio: 2 / 1.5;\r\n  object-fit: cover;\r\n}\r\n\r\n.menu-item:nth-child(3) img,\r\n.menu-item:nth-child(4) img {\r\n  order: 1;\r\n}\r\n\r\n.info-container {\r\n  border: 1px solid #e6e6e6;\r\n  padding: 1em;\r\n\r\n  display: grid;\r\n  align-content: space-around;\r\n  row-gap: 5px;\r\n}\r\n\r\n.order-btn {\r\n  background-color: var(--color-accent);\r\n  color: var(--color-primary);\r\n  border: 1px solid var(--color-accent);\r\n  outline: none;\r\n  padding: 0.5em 1em;\r\n  justify-self: start;\r\n}\r\n\r\n.order-btn:is(:hover, :active) {\r\n  background-color: var(--color-primary);\r\n  color: var(--color-accent);\r\n}\r\n\r\n.order-btn,\r\n.menu-item {\r\n  transition: 200ms ease-in;\r\n}\r\n\r\n:is(.order-btn, .menu-nav-item):is(:hover, :active) {\r\n  transition: all 200ms ease-in;\r\n}\r\n\r\n.item-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  line-height: 1.3;\r\n}\r\n\r\n.item-header > * {\r\n  font-size: 1.3rem;\r\n  font-weight: var(--ff-semi-bold);\r\n}\r\n\r\n.item-header > h2 {\r\n  max-width: 150px;\r\n}\r\n\r\n.item-price {\r\n  color: var(--color-accent);\r\n}\r\n\r\n@media screen and (max-width: 600px), (max-width: 700px) {\r\n  .menu-links {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item {\r\n    grid-template-columns: 1fr;\r\n  }\r\n\r\n  .menu-item > img {\r\n    aspect-ratio: 3 / 1.5;\r\n  }\r\n\r\n  .menu-item:nth-child(3) img,\r\n  .menu-item:nth-child(4) img {\r\n    order: 0;\r\n  }\r\n\r\n  .menu-link-active::after {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n/* About styles */\r\n\r\n.about-content {\r\n  display: grid;\r\n  grid-template-columns: 1.2fr 1fr;\r\n  gap: 2em;\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 1em;\r\n}\r\n\r\n.about-imgs-wrapper > img {\r\n  width: 100%;\r\n  height: 500px;\r\n  object-fit: cover;\r\n}\r\n\r\n.about {\r\n  transform: translateY(-1.5em);\r\n}\r\n\r\n.about-text-header {\r\n  display: grid;\r\n  gap: 3em;\r\n  line-height: 1;\r\n}\r\n\r\n.about-title {\r\n  font-size: 6.25rem;\r\n  grid-row: 1;\r\n  grid-column: 1;\r\n}\r\n\r\n.about-restaurant-title {\r\n  font-size: 3.125rem;\r\n  grid-row: 1 / 3;\r\n  grid-column: 1;\r\n  align-self: end;\r\n  max-width: 300px;\r\n}\r\n\r\n.about-text,\r\n.work-days {\r\n  font-size: 1rem;\r\n  line-height: 2;\r\n  color: var(--color-gray);\r\n}\r\n\r\n.about-text {\r\n  margin-block: 1.5em 1em;\r\n  max-width: 400px;\r\n}\r\n\r\n.work-days {\r\n  margin-block: 1em;\r\n}\r\n\r\n.work-hours {\r\n  font-weight: var(--ff-bold);\r\n}\r\n\r\n.phone-number {\r\n  font-size: 2.5rem;\r\n  font-weight: 700;\r\n}\r\n\r\n@media screen and (max-width: 770px) {\r\n  .about {\r\n    transform: translateY(0);\r\n  }\r\n\r\n  .about-content {\r\n    grid-template-columns: 1fr;\r\n  }\r\n}\r\n\r\n/* Animation */\r\n\r\n.info-wrapper,\r\n.hero-wrapper {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n@keyframes slideInUp {\r\n  from {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transform: translateY(35px);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    visibility: visible;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n.featured-item,\r\n.menu-nav-item,\r\n.about-imgs-wrapper,\r\n.about-text-wrapper,\r\n.menu-item {\r\n  opacity: 0;\r\n  animation: 500ms ease-in-out slideInUp forwards;\r\n}\r\n\r\n/* :is(.featured-item, .menu-nav-item):is(:nth-child(1)) {\r\n  animation-delay: 0ms;\r\n} */\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(2)) {\r\n  animation-delay: var(--stagger-delay);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(3)) {\r\n  animation-delay: calc(var(--stagger-delay) + 25ms);\r\n}\r\n\r\n:is(.featured-item, .menu-nav-item, .menu-item):is(:nth-child(4)) {\r\n  animation-delay: calc(var(--stagger-delay) + 50ms);\r\n}\r\n\r\n:is(.menu-nav-item, .menu-item):is(:nth-child(5)) {\r\n  animation-delay: calc(var(--stagger-delay) + 75ms);\r\n}\r\n\r\n:is(.menu-item):is(:nth-child(6)) {\r\n  animation-delay: calc(var(--stagger-delay) + 95ms);\r\n}\r\n\r\n.about-imgs-wrapper {\r\n  animation-delay: 0;\r\n}\r\n\r\n.about-text-wrapper {\r\n  animation-delay: 25ms;\r\n}\r\n\r\n/* Utility styles */\r\n\r\n.clr-accent {\r\n  color: var(--color-accent);\r\n}\r\n\r\n.ff-accent {\r\n  font-family: var(--ff-accent);\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxLQUFLLFdBQVcsWUFBWSxNQUFNLE1BQU0sS0FBSyxNQUFNLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE9BQU8sVUFBVSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxPQUFPLGFBQWEsT0FBTyxLQUFLLEtBQUssT0FBTyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFdBQVcsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxNQUFNLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUs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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQzBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEZvQztBQUNwQztBQUNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isa0RB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QTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ3NCO0FBQ0Y7QUFDZDtBQUNFO0FBQ2tCO0FBQ3VCO0FBQzdFO0FBQ0EsZ0VBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrRUFBWTtBQUM5QyxrQ0FBa0MsK0RBQWM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQU0sSUFBSSx1REFBTSxpQkFBaUIseURBQUk7QUFDeEQsSUFBSSw0RUFBa0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdURBQU0sSUFBSSx1REFBTSxXQUFXLDBEQUFLO0FBQ25ELElBQUksNEVBQWtCO0FBQ3RCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz9mZjk0Iiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL2luaXRpYWxQYWdlLmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51SXRlbXMuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS8uL3NyYy9tb2R1bGVzL25hdkJhckZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL21vZHVsZXMvbmF2QmFyT25TY3JvbGwuanMiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1yZXN0YXJhdW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9wLXJlc3RhcmF1bnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b3AtcmVzdGFyYXVudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaGVhZGVyLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uL2Fzc2V0cy9iYWNrZ3JvdW5kSW1nLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1HcmVhdCtWaWJlcyZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXHJcXG4gIC0tY29sb3ItcHJpbWFyeTogI2ZmZjtcXHJcXG4gIC0tY29sb3ItYWNjZW50OiAjYzhhOTdlO1xcclxcbiAgLS1jb2xvci1ncmF5OiAjNjY2NjY2O1xcclxcbiAgLS1jb2xvci1ibGFjazogIzAwMDAwMDtcXHJcXG4gIC0taGVhZGVyLW92ZXJsYXk6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAgLyAwLjUpLCByZ2IoMCAwIDAgLyAwLjUpKTtcXHJcXG4gIC0tYmFja2dyb3VuZC1vdmVybGF5OiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwIC8gMC43KSwgcmdiKDAgMCAwIC8gMC43KSk7XFxyXFxuICAtLWJvcmRlci1zZXR0aW5nczogMXB4IHNvbGlkIHJnYigyNTUgMjU1IDI1NSAvIDAuMSk7XFxyXFxuICAtLWZmLXByaW1hcnk6IFxcXCJQb3BwaW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWZmLWFjY2VudDogXFxcIkdyZWF0IFZpYmVzXFxcIiwgXFxcIkNvbWljIFNhbnMgTVNcXFwiLCBcXFwiQ29taWMgU2Fuc1xcXCIsIGN1cnNpdmU7XFxyXFxuICAtLWZmLWJvbGQ6IDkwMDtcXHJcXG4gIC0tZmYtc2VtaS1ib2xkOiA2MDA7XFxyXFxuICAtLXN0YWdnZXItZGVsYXk6IDUwbXM7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcclxcbiovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICYgcGFkZGluZ1xcclxcbiAgKi9cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXHJcXG4gICovXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIFR5cG9ncmFwaGljIHR3ZWFrcyFcXHJcXG4gICAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXHJcXG4gICAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcclxcbiAgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgNi4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcclxcbiAgKi9cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcclxcbiAgKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxyXFxuICAqL1xcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgOS4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxyXFxuICAqL1xcclxcbiNyb290LFxcclxcbiNfX25leHQge1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc2VjdGlvbixcXHJcXG4uYWJvdXQtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiA3ZW07XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSxcXHJcXG5idXR0b24sXFxyXFxuLmxvZ28taGVhZGVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIHN0eWxlcyAqL1xcclxcbmhlYWRlciB7XFxyXFxuICBtaW4taGVpZ2h0OiA0NTBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWhlYWRlci1vdmVybGF5KSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJvcmRlci1zZXR0aW5ncyk7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxZW07XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB6LWluZGV4OiA5OTk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LnNjcm9sbGVkIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDAuNWVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IHJnYigwIDAgMCAvIDAuMik7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LnNsZWVwIHtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LmZsb2F0aW5nIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LXdyYXBwZXIsXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogbWluKDExNDBweCwgOTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5sb2dvLWhlYWRlciB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mZi1ib2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LWxpbmtzIHtcXHJcXG4gIGdhcDogMi41ZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbS5hY3RpdmUge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtaXRlbTpob3ZlcixcXHJcXG4ubmF2LWl0ZW0uYWN0aXZlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbmF2LmZsb2F0aW5nIC5uYXYtaXRlbTpob3ZlcixcXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcgLm5hdi1pdGVtLmFjdGl2ZTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyAwLjUpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMnB4O1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmhhbWJ1cmdlciB7XFxyXFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lIHtcXHJcXG4gIGZpbGw6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgdHJhbnNpdGlvbjogZmlsbCAyMDBtcyBlYXNlLWluLW91dCwgeSAyMDBtcyBlYXNlLWluIDIwMG1zLFxcclxcbiAgICByb3RhdGUgMjAwbXMgZWFzZS1pbiwgb3BhY2l0eSAwbXMgMjAwbXM7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZS5vcGVuIHtcXHJcXG4gIHRyYW5zaXRpb246IGZpbGwgMjAwbXMgZWFzZS1pbi1vdXQsIHkgMjAwbXMgZWFzZS1pbixcXHJcXG4gICAgcm90YXRlIDIwMG1zIGVhc2UtaW4gMjAwbXMsIG9wYWNpdHkgMG1zIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcgLmxpbmUge1xcclxcbiAgZmlsbDogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXI6aG92ZXIgLmxpbmUge1xcclxcbiAgZmlsbDogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIDppcygubGluZS10b3Aub3BlbiwgLmxpbmUtYm90dG9tLm9wZW4pIHtcXHJcXG4gIHk6IDQ1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUtdG9wLm9wZW4ge1xcclxcbiAgcm90YXRlOiA0NWRlZztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lLWJvdHRvbS5vcGVuIHtcXHJcXG4gIHJvdGF0ZTogLTQ1ZGVnO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUtbWlkZGxlLm9wZW4ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb2xsYXBzZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIG1heC1oZWlnaHQ6IDA7XFxyXFxuICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb2xsYXBzZSA+IHVsIHtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgZ2FwOiAyZW07XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxZW07XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2UuZGlzcGxheSB7XFxyXFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMzAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5uYXYtY29sbGFwc2UuZGlzcGxheSAubmF2LWNvbGxhcHNlLWxpbmtzIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlLWluLW91dCAxNTBtcztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTgxcHgpIHtcXHJcXG4gIC5uYXYtY29sbGFwc2UuZGlzcGxheSxcXHJcXG4gIC5uYXYtY29sbGFwc2UgPiB1bCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XFxyXFxuICAubWFpbi1uYXYge1xcclxcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsYWNrKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tYWluLW5hdi1saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubmF2LXRvZ2dsZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8td3JhcHBlciB7XFxyXFxuICBncmlkLXJvdzogMztcXHJcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmhlcm8tdGV4dCB7XFxyXFxuICBmb250LXNpemU6IDMuMTI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIb21lIHN0eWxlcyAqL1xcclxcbi5ob21lLXNlY3Rpb24ge1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWJhY2tncm91bmQtb3ZlcmxheSksXFxyXFxuICAgIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDEwJTtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAwLjNmcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8td3JhcHBlciB7XFxyXFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm1haW4tbG9nbyB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxufVxcclxcblxcclxcbi5yZXN0LWRpc2Mge1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCAxLjc1cmVtICsgNHZ3LCA0cmVtKTtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtcyB7XFxyXFxuICBib3JkZXItdG9wOiB2YXIoLS1ib3JkZXItc2V0dGluZ3MpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbXMtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgcm93LWdhcDogMC41ZW07XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbSBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgd2lkdGg6IDkwcHg7XFxyXFxuICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXHJcXG4gIC5ob21lLXNlY3Rpb24ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2OXB4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcXHJcXG4gIC5ob21lLXNlY3Rpb24ge1xcclxcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggKyA1NzBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZmVhdHVyZWQtaXRlbXMtd3JhcHBlciB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBwYWRkaW5nLWJsb2NrOiAyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIE1lbnUgc3R5bGUgKi9cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KG1pbigxMjBweCwgMTAwJSksIDFmcikpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rcyA+IGxpIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLXNlbWktYm9sZCk7XFxyXFxuICBwYWRkaW5nOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzID4gbGk6aG92ZXIsXFxyXFxuLm1lbnUtbGluay1hY3RpdmUge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGluay1hY3RpdmU6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItdG9wOiAxMHB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBib3R0b206IC0xMHB4O1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgd2lkdGg6IDA7XFxyXFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KG1pbig0MDBweCwgMTAwJSksIDFmcikpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtID4gaW1nIHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMiAvIDEuNTtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtOm50aC1jaGlsZCgzKSBpbWcsXFxyXFxuLm1lbnUtaXRlbTpudGgtY2hpbGQoNCkgaW1nIHtcXHJcXG4gIG9yZGVyOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1jb250YWluZXIge1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG5cXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICByb3ctZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4ge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xcclxcbiAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0bjppcyg6aG92ZXIsIDphY3RpdmUpIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5vcmRlci1idG4sXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLm9yZGVyLWJ0biwgLm1lbnUtbmF2LWl0ZW0pOmlzKDpob3ZlciwgOmFjdGl2ZSkge1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMztcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0taGVhZGVyID4gKiB7XFxyXFxuICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mZi1zZW1pLWJvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1oZWFkZXIgPiBoMiB7XFxyXFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1wcmljZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpLCAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgLm1lbnUtbGlua3Mge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW0ge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW0gPiBpbWcge1xcclxcbiAgICBhc3BlY3QtcmF0aW86IDMgLyAxLjU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAubWVudS1pdGVtOm50aC1jaGlsZCgzKSBpbWcsXFxyXFxuICAubWVudS1pdGVtOm50aC1jaGlsZCg0KSBpbWcge1xcclxcbiAgICBvcmRlcjogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWxpbmstYWN0aXZlOjphZnRlciB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIEFib3V0IHN0eWxlcyAqL1xcclxcblxcclxcbi5hYm91dC1jb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEuMmZyIDFmcjtcXHJcXG4gIGdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1ncy13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBnYXA6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZ3Mtd3JhcHBlciA+IGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41ZW0pO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dC1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdhcDogM2VtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDYuMjVyZW07XFxyXFxuICBncmlkLXJvdzogMTtcXHJcXG4gIGdyaWQtY29sdW1uOiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtcmVzdGF1cmFudC10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDMuMTI1cmVtO1xcclxcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuICBhbGlnbi1zZWxmOiBlbmQ7XFxyXFxuICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCxcXHJcXG4ud29yay1kYXlzIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXkpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dCB7XFxyXFxuICBtYXJnaW4tYmxvY2s6IDEuNWVtIDFlbTtcXHJcXG4gIG1heC13aWR0aDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi53b3JrLWRheXMge1xcclxcbiAgbWFyZ2luLWJsb2NrOiAxZW07XFxyXFxufVxcclxcblxcclxcbi53b3JrLWhvdXJzIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiB2YXIoLS1mZi1ib2xkKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBob25lLW51bWJlciB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3MHB4KSB7XFxyXFxuICAuYWJvdXQge1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQtY29udGVudCB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBBbmltYXRpb24gKi9cXHJcXG5cXHJcXG4uaW5mby13cmFwcGVyLFxcclxcbi5oZXJvLXdyYXBwZXIge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQgc2xpZGVJblVwIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG5Aa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XFxyXFxuICBmcm9tIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzVweCk7XFxyXFxuICB9XFxyXFxuICB0byB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW0sXFxyXFxuLm1lbnUtbmF2LWl0ZW0sXFxyXFxuLmFib3V0LWltZ3Mtd3JhcHBlcixcXHJcXG4uYWJvdXQtdGV4dC13cmFwcGVyLFxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIGFuaW1hdGlvbjogNTAwbXMgZWFzZS1pbi1vdXQgc2xpZGVJblVwIGZvcndhcmRzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA6aXMoLmZlYXR1cmVkLWl0ZW0sIC5tZW51LW5hdi1pdGVtKTppcyg6bnRoLWNoaWxkKDEpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDBtcztcXHJcXG59ICovXFxyXFxuXFxyXFxuOmlzKC5mZWF0dXJlZC1pdGVtLCAubWVudS1uYXYtaXRlbSwgLm1lbnUtaXRlbSk6aXMoOm50aC1jaGlsZCgyKSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1zdGFnZ2VyLWRlbGF5KTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5mZWF0dXJlZC1pdGVtLCAubWVudS1uYXYtaXRlbSwgLm1lbnUtaXRlbSk6aXMoOm50aC1jaGlsZCgzKSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXN0YWdnZXItZGVsYXkpICsgMjVtcyk7XFxyXFxufVxcclxcblxcclxcbjppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoNCkpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDUwbXMpO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLm1lbnUtbmF2LWl0ZW0sIC5tZW51LWl0ZW0pOmlzKDpudGgtY2hpbGQoNSkpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogY2FsYyh2YXIoLS1zdGFnZ2VyLWRlbGF5KSArIDc1bXMpO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLm1lbnUtaXRlbSk6aXMoOm50aC1jaGlsZCg2KSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXN0YWdnZXItZGVsYXkpICsgOTVtcyk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dC13cmFwcGVyIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMjVtcztcXHJcXG59XFxyXFxuXFxyXFxuLyogVXRpbGl0eSBzdHlsZXMgKi9cXHJcXG5cXHJcXG4uY2xyLWFjY2VudCB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLmZmLWFjY2VudCB7XFxyXFxuICBmb250LWZhbWlseTogdmFyKC0tZmYtYWNjZW50KTtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7RUFDRSxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUVBQXFFO0VBQ3JFLHlFQUF5RTtFQUN6RSxtREFBbUQ7RUFDbkQsMENBQTBDO0VBQzFDLGtFQUFrRTtFQUNsRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQTs7Q0FFQztBQUNEOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTs7R0FFRztBQUNIO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBOztHQUVHO0FBQ0g7O0VBRUUsYUFBYTtBQUNmO0FBQ0E7Ozs7R0FJRztBQUNIO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQztBQUNBOztHQUVHO0FBQ0g7Ozs7O0VBS0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFDQTs7R0FFRztBQUNIOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7O0dBRUc7QUFDSDs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjtBQUNBOztHQUVHO0FBQ0g7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBLG1CQUFtQjs7QUFFbkI7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLGlCQUFpQjtFQUNqQixnRkFBb0U7RUFDcEUsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNs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REFBa0Q7QUFDcEQ7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdyZWF0K1ZpYmVzJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tY29sb3ItcHJpbWFyeTogI2ZmZjtcXHJcXG4gIC0tY29sb3ItYWNjZW50OiAjYzhhOTdlO1xcclxcbiAgLS1jb2xvci1ncmF5OiAjNjY2NjY2O1xcclxcbiAgLS1jb2xvci1ibGFjazogIzAwMDAwMDtcXHJcXG4gIC0taGVhZGVyLW92ZXJsYXk6IGxpbmVhci1ncmFkaWVudChyZ2IoMCAwIDAgLyAwLjUpLCByZ2IoMCAwIDAgLyAwLjUpKTtcXHJcXG4gIC0tYmFja2dyb3VuZC1vdmVybGF5OiBsaW5lYXItZ3JhZGllbnQocmdiKDAgMCAwIC8gMC43KSwgcmdiKDAgMCAwIC8gMC43KSk7XFxyXFxuICAtLWJvcmRlci1zZXR0aW5nczogMXB4IHNvbGlkIHJnYigyNTUgMjU1IDI1NSAvIDAuMSk7XFxyXFxuICAtLWZmLXByaW1hcnk6IFxcXCJQb3BwaW5zXFxcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XFxyXFxuICAtLWZmLWFjY2VudDogXFxcIkdyZWF0IFZpYmVzXFxcIiwgXFxcIkNvbWljIFNhbnMgTVNcXFwiLCBcXFwiQ29taWMgU2Fuc1xcXCIsIGN1cnNpdmU7XFxyXFxuICAtLWZmLWJvbGQ6IDkwMDtcXHJcXG4gIC0tZmYtc2VtaS1ib2xkOiA2MDA7XFxyXFxuICAtLXN0YWdnZXItZGVsYXk6IDUwbXM7XFxyXFxufVxcclxcblxcclxcbi8qXFxyXFxuICAxLiBVc2UgYSBtb3JlLWludHVpdGl2ZSBib3gtc2l6aW5nIG1vZGVsLlxcclxcbiovXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgMi4gUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICYgcGFkZGluZ1xcclxcbiAgKi9cXHJcXG4qIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDMuIEFsbG93IHBlcmNlbnRhZ2UtYmFzZWQgaGVpZ2h0cyBpbiB0aGUgYXBwbGljYXRpb25cXHJcXG4gICovXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIFR5cG9ncmFwaGljIHR3ZWFrcyFcXHJcXG4gICAgNC4gQWRkIGFjY2Vzc2libGUgbGluZS1oZWlnaHRcXHJcXG4gICAgNS4gSW1wcm92ZSB0ZXh0IHJlbmRlcmluZ1xcclxcbiAgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgNi4gSW1wcm92ZSBtZWRpYSBkZWZhdWx0c1xcclxcbiAgKi9cXHJcXG5pbWcsXFxyXFxucGljdHVyZSxcXHJcXG52aWRlbyxcXHJcXG5jYW52YXMsXFxyXFxuc3ZnIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4vKlxcclxcbiAgICA3LiBSZW1vdmUgYnVpbHQtaW4gZm9ybSB0eXBvZ3JhcGh5IHN0eWxlc1xcclxcbiAgKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcbi8qXFxyXFxuICAgIDguIEF2b2lkIHRleHQgb3ZlcmZsb3dzXFxyXFxuICAqL1xcclxcbnAsXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUsXFxyXFxuaDYge1xcclxcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXHJcXG59XFxyXFxuLypcXHJcXG4gICAgOS4gQ3JlYXRlIGEgcm9vdCBzdGFja2luZyBjb250ZXh0XFxyXFxuICAqL1xcclxcbiNyb290LFxcclxcbiNfX25leHQge1xcclxcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBHZW5lcmFsIHN0eWxlcyAqL1xcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtc2VjdGlvbixcXHJcXG4uYWJvdXQtc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nLWJsb2NrOiA3ZW07XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5saSxcXHJcXG5idXR0b24sXFxyXFxuLmxvZ28taGVhZGVyIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyIHN0eWxlcyAqL1xcclxcbmhlYWRlciB7XFxyXFxuICBtaW4taGVpZ2h0OiA0NTBweDtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHZhcigtLWhlYWRlci1vdmVybGF5KSwgdXJsKFxcXCIuLi9hc3NldHMvaGVhZGVyLmpwZ1xcXCIpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyIDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYm9yZGVyLXNldHRpbmdzKTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDFlbTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHotaW5kZXg6IDk5OTtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuc2Nyb2xsZWQge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgcGFkZGluZy1ibG9jazogMC41ZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxuICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiKDAgMCAwIC8gMC4yKTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwcHgpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuc2xlZXAge1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2Utb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtd3JhcHBlcixcXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiBtaW4oMTE0MHB4LCA5MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtd3JhcHBlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taGVhZGVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLWJvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYtbGlua3Mge1xcclxcbiAgZ2FwOiAyLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtLmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmhvdmVyLFxcclxcbi5uYXYtaXRlbS5hY3RpdmU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1uYXYuZmxvYXRpbmcgLm5hdi1pdGVtOmhvdmVyLFxcclxcbi5tYWluLW5hdi5mbG9hdGluZyAubmF2LWl0ZW0uYWN0aXZlOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIDAuNSk7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMS4ycHg7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGFtYnVyZ2VyIHtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUge1xcclxcbiAgZmlsbDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICB0cmFuc2l0aW9uOiBmaWxsIDIwMG1zIGVhc2UtaW4tb3V0LCB5IDIwMG1zIGVhc2UtaW4gMjAwbXMsXFxyXFxuICAgIHJvdGF0ZSAyMDBtcyBlYXNlLWluLCBvcGFjaXR5IDBtcyAyMDBtcztcXHJcXG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi10b2dnbGVyIC5saW5lLm9wZW4ge1xcclxcbiAgdHJhbnNpdGlvbjogZmlsbCAyMDBtcyBlYXNlLWluLW91dCwgeSAyMDBtcyBlYXNlLWluLFxcclxcbiAgICByb3RhdGUgMjAwbXMgZWFzZS1pbiAyMDBtcywgb3BhY2l0eSAwbXMgMjAwbXM7XFxyXFxufVxcclxcblxcclxcbi5tYWluLW5hdi5mbG9hdGluZyAubGluZSB7XFxyXFxuICBmaWxsOiB2YXIoLS1jb2xvci1ibGFjayk7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlcjpob3ZlciAubGluZSB7XFxyXFxuICBmaWxsOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgOmlzKC5saW5lLXRvcC5vcGVuLCAubGluZS1ib3R0b20ub3Blbikge1xcclxcbiAgeTogNDU7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZS10b3Aub3BlbiB7XFxyXFxuICByb3RhdGU6IDQ1ZGVnO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LXRvZ2dsZXIgLmxpbmUtYm90dG9tLm9wZW4ge1xcclxcbiAgcm90YXRlOiAtNDVkZWc7XFxyXFxufVxcclxcblxcclxcbi5uYXYtdG9nZ2xlciAubGluZS1taWRkbGUub3BlbiB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbGxhcHNlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgbWF4LWhlaWdodDogMDtcXHJcXG4gIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWNvbGxhcHNlID4gdWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBnYXA6IDJlbTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDFlbTtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb2xsYXBzZS5kaXNwbGF5IHtcXHJcXG4gIG1heC1oZWlnaHQ6IDE1MHB4O1xcclxcbiAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1jb2xsYXBzZS5kaXNwbGF5IC5uYXYtY29sbGFwc2UtbGlua3Mge1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGVhc2UtaW4tb3V0IDE1MG1zO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5ODFweCkge1xcclxcbiAgLm5hdi1jb2xsYXBzZS5kaXNwbGF5LFxcclxcbiAgLm5hdi1jb2xsYXBzZSA+IHVsIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcXHJcXG4gIC5tYWluLW5hdiB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmxhY2spO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1haW4tbmF2LWxpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5uYXYtdG9nZ2xlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaGVyby13cmFwcGVyIHtcXHJcXG4gIGdyaWQtcm93OiAzO1xcclxcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVyby10ZXh0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMy4xMjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qIEhvbWUgc3R5bGVzICovXFxyXFxuLmhvbWUtc2VjdGlvbiB7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdmFyKC0tYmFja2dyb3VuZC1vdmVybGF5KSxcXHJcXG4gICAgdXJsKFxcXCIuLi9hc3NldHMvYmFja2dyb3VuZEltZy5qcGdcXFwiKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMTAlO1xcclxcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZmLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDAuM2ZyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby13cmFwcGVyIHtcXHJcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbi1sb2dvIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3QtZGlzYyB7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDNyZW0sIDEuNzVyZW0gKyA0dncsIDRyZW0pO1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW1zIHtcXHJcXG4gIGJvcmRlci10b3A6IHZhcigtLWJvcmRlci1zZXR0aW5ncyk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtcy13cmFwcGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICByb3ctZ2FwOiAwLjVlbTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmctYmxvY2s6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZlYXR1cmVkLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZ2FwOiAxZW07XFxyXFxufVxcclxcblxcclxcbi5mZWF0dXJlZC1pdGVtIGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICB3aWR0aDogOTBweDtcXHJcXG4gIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5ODBweCkge1xcclxcbiAgLmhvbWUtc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY5cHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xcclxcbiAgLmhvbWUtc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDB2aCArIDU3MHB4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5mZWF0dXJlZC1pdGVtcy13cmFwcGVyIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIHBhZGRpbmctYmxvY2s6IDJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWVudSBzdHlsZSAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3Mge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgobWluKDEyMHB4LCAxMDAlKSwgMWZyKSk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5tZW51LWxpbmtzID4gbGkge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBmb250LXdlaWdodDogdmFyKC0tZmYtc2VtaS1ib2xkKTtcXHJcXG4gIHBhZGRpbmc6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtbGlua3MgPiBsaTpob3ZlcixcXHJcXG4ubWVudS1saW5rLWFjdGl2ZSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1saW5rLWFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlci10b3A6IDEwcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIGJvdHRvbTogLTEwcHg7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB3aWR0aDogMDtcXHJcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5tZW51LXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgobWluKDQwMHB4LCAxMDAlKSwgMWZyKSk7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0gPiBpbWcge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYXNwZWN0LXJhdGlvOiAyIC8gMS41O1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW06bnRoLWNoaWxkKDMpIGltZyxcXHJcXG4ubWVudS1pdGVtOm50aC1jaGlsZCg0KSBpbWcge1xcclxcbiAgb3JkZXI6IDE7XFxyXFxufVxcclxcblxcclxcbi5pbmZvLWNvbnRhaW5lciB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xcclxcbiAgcGFkZGluZzogMWVtO1xcclxcblxcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gIHJvdy1nYXA6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAxZW07XFxyXFxuICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4ub3JkZXItYnRuOmlzKDpob3ZlciwgOmFjdGl2ZSkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm9yZGVyLWJ0bixcXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gIHRyYW5zaXRpb246IDIwMG1zIGVhc2UtaW47XFxyXFxufVxcclxcblxcclxcbjppcygub3JkZXItYnRuLCAubWVudS1uYXYtaXRlbSk6aXMoOmhvdmVyLCA6YWN0aXZlKSB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0taGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBsaW5lLWhlaWdodDogMS4zO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1oZWFkZXIgPiAqIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLXNlbWktYm9sZCk7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWhlYWRlciA+IGgyIHtcXHJcXG4gIG1heC13aWR0aDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLXByaWNlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCksIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxyXFxuICAubWVudS1saW5rcyB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbSB7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtaXRlbSA+IGltZyB7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMyAvIDEuNTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5tZW51LWl0ZW06bnRoLWNoaWxkKDMpIGltZyxcXHJcXG4gIC5tZW51LWl0ZW06bnRoLWNoaWxkKDQpIGltZyB7XFxyXFxuICAgIG9yZGVyOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLm1lbnUtbGluay1hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogQWJvdXQgc3R5bGVzICovXFxyXFxuXFxyXFxuLmFib3V0LWNvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4yZnIgMWZyO1xcclxcbiAgZ2FwOiAyZW07XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1pbWdzLXdyYXBwZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXHJcXG4gIGdhcDogMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtaW1ncy13cmFwcGVyID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjVlbSk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10ZXh0LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ2FwOiAzZW07XFxyXFxuICBsaW5lLWhlaWdodDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogNi4yNXJlbTtcXHJcXG4gIGdyaWQtcm93OiAxO1xcclxcbiAgZ3JpZC1jb2x1bW46IDE7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC1yZXN0YXVyYW50LXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMy4xMjVyZW07XFxyXFxuICBncmlkLXJvdzogMSAvIDM7XFxyXFxuICBncmlkLWNvbHVtbjogMTtcXHJcXG4gIGFsaWduLXNlbGY6IGVuZDtcXHJcXG4gIG1heC13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10ZXh0LFxcclxcbi53b3JrLWRheXMge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDI7XFxyXFxuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheSk7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10ZXh0IHtcXHJcXG4gIG1hcmdpbi1ibG9jazogMS41ZW0gMWVtO1xcclxcbiAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstZGF5cyB7XFxyXFxuICBtYXJnaW4tYmxvY2s6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmstaG91cnMge1xcclxcbiAgZm9udC13ZWlnaHQ6IHZhcigtLWZmLWJvbGQpO1xcclxcbn1cXHJcXG5cXHJcXG4ucGhvbmUtbnVtYmVyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzcwcHgpIHtcXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dC1jb250ZW50IHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIEFuaW1hdGlvbiAqL1xcclxcblxcclxcbi5pbmZvLXdyYXBwZXIsXFxyXFxuLmhlcm8td3JhcHBlciB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uOiA1MDBtcyBlYXNlLWluLW91dCBzbGlkZUluVXAgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbkBrZXlmcmFtZXMgc2xpZGVJblVwIHtcXHJcXG4gIGZyb20ge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzNXB4KTtcXHJcXG4gIH1cXHJcXG4gIHRvIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmVhdHVyZWQtaXRlbSxcXHJcXG4ubWVudS1uYXYtaXRlbSxcXHJcXG4uYWJvdXQtaW1ncy13cmFwcGVyLFxcclxcbi5hYm91dC10ZXh0LXdyYXBwZXIsXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgYW5pbWF0aW9uOiA1MDBtcyBlYXNlLWluLW91dCBzbGlkZUluVXAgZm9yd2FyZHM7XFxyXFxufVxcclxcblxcclxcbi8qIDppcyguZmVhdHVyZWQtaXRlbSwgLm1lbnUtbmF2LWl0ZW0pOmlzKDpudGgtY2hpbGQoMSkpIHtcXHJcXG4gIGFuaW1hdGlvbi1kZWxheTogMG1zO1xcclxcbn0gKi9cXHJcXG5cXHJcXG46aXMoLmZlYXR1cmVkLWl0ZW0sIC5tZW51LW5hdi1pdGVtLCAubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDIpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IHZhcigtLXN0YWdnZXItZGVsYXkpO1xcclxcbn1cXHJcXG5cXHJcXG46aXMoLmZlYXR1cmVkLWl0ZW0sIC5tZW51LW5hdi1pdGVtLCAubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDMpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tc3RhZ2dlci1kZWxheSkgKyAyNW1zKTtcXHJcXG59XFxyXFxuXFxyXFxuOmlzKC5mZWF0dXJlZC1pdGVtLCAubWVudS1uYXYtaXRlbSwgLm1lbnUtaXRlbSk6aXMoOm50aC1jaGlsZCg0KSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXN0YWdnZXItZGVsYXkpICsgNTBtcyk7XFxyXFxufVxcclxcblxcclxcbjppcygubWVudS1uYXYtaXRlbSwgLm1lbnUtaXRlbSk6aXMoOm50aC1jaGlsZCg1KSkge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiBjYWxjKHZhcigtLXN0YWdnZXItZGVsYXkpICsgNzVtcyk7XFxyXFxufVxcclxcblxcclxcbjppcygubWVudS1pdGVtKTppcyg6bnRoLWNoaWxkKDYpKSB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IGNhbGModmFyKC0tc3RhZ2dlci1kZWxheSkgKyA5NW1zKTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LWltZ3Mtd3JhcHBlciB7XFxyXFxuICBhbmltYXRpb24tZGVsYXk6IDA7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10ZXh0LXdyYXBwZXIge1xcclxcbiAgYW5pbWF0aW9uLWRlbGF5OiAyNW1zO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBVdGlsaXR5IHN0eWxlcyAqL1xcclxcblxcclxcbi5jbHItYWNjZW50IHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uZmYtYWNjZW50IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1mZi1hY2NlbnQpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGFib3V0SW1nIGZyb20gXCIuLi9hc3NldHMvYWJvdXQud2VicFwiO1xyXG5pbXBvcnQgYWJvdXRJbWcyIGZyb20gXCIuLi9hc3NldHMvYWJvdXQtMS53ZWJwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFNlY3Rpb25Db21wb25lbnQoKSB7XHJcbiAgY29uc3QgYWJvdXRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgYWJvdXRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJhYm91dC1zZWN0aW9uXCIpO1xyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xyXG5cclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRDb250ZW50KCkpO1xyXG4gIGFib3V0U2VjdGlvbi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gYWJvdXRTZWN0aW9uO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhYm91dENvbnRlbnQoKSB7XHJcbiAgY29uc3QgYWJvdXRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhYm91dEltZ3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFib3V0SW1nQ29udGFpbmVyID0gbmV3IEltYWdlKCk7XHJcbiAgY29uc3QgYWJvdXRJbWcyQ29udGFpbmVyID0gbmV3IEltYWdlKCk7XHJcblxyXG4gIGFib3V0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtY29udGVudFwiKTtcclxuICBhYm91dEltZ3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFib3V0LWltZ3Mtd3JhcHBlclwiKTtcclxuICBhYm91dEltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYWJvdXRcIik7XHJcbiAgYWJvdXRJbWcyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhYm91dC0yXCIpO1xyXG5cclxuICBhYm91dEltZ0NvbnRhaW5lci5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICBhYm91dEltZzJDb250YWluZXIuZHJhZ2dhYmxlID0gZmFsc2U7XHJcblxyXG4gIGFib3V0SW1nQ29udGFpbmVyLnNyYyA9IGFib3V0SW1nO1xyXG4gIGFib3V0SW1nMkNvbnRhaW5lci5zcmMgPSBhYm91dEltZzI7XHJcblxyXG4gIGFib3V0SW1nc0NvbnRhaW5lci5hcHBlbmQoYWJvdXRJbWdDb250YWluZXIsIGFib3V0SW1nMkNvbnRhaW5lcik7XHJcbiAgYWJvdXRXcmFwcGVyLmFwcGVuZChhYm91dEltZ3NDb250YWluZXIsIGFib3V0Qm9keVRleHQoKSk7XHJcblxyXG4gIHJldHVybiBhYm91dFdyYXBwZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFib3V0Qm9keVRleHQoKSB7XHJcbiAgY29uc3QgYWJvdXRUZXh0V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgYWJvdXRUZXh0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhYm91dFRleHRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBhYm91dFRleHRGb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgcmVzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGNvbnN0IGJvZHlDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgZGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHJcbiAgYWJvdXRUZXh0V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dC13cmFwcGVyXCIpO1xyXG4gIGFib3V0VGV4dEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dC1oZWFkZXJcIik7XHJcbiAgYWJvdXRUZXh0Qm9keS5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dC1ib2R5XCIpO1xyXG4gIGFib3V0VGV4dEZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiYWJvdXQtdGV4dC1mb290ZXJcIik7XHJcbiAgYWJvdXQuY2xhc3NMaXN0LmFkZChcImFib3V0LXRpdGxlXCIsIFwiY2xyLWFjY2VudFwiLCBcImZmLWFjY2VudFwiKTtcclxuICByZXN0VGl0bGUuY2xhc3NMaXN0LmFkZChcImFib3V0LXJlc3RhdXJhbnQtdGl0bGVcIik7XHJcbiAgcGhvbmVOdW1iZXIuY2xhc3NMaXN0LmFkZChcInBob25lLW51bWJlclwiLCBcImNsci1hY2NlbnRcIik7XHJcbiAgYm9keUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImFib3V0LXRleHRcIik7XHJcbiAgZGF5cy5jbGFzc0xpc3QuYWRkKFwid29yay1kYXlzXCIpO1xyXG4gIGhvdXJzLmNsYXNzTGlzdC5hZGQoXCJ3b3JrLWhvdXJzXCIpO1xyXG5cclxuICBhYm91dC50ZXh0Q29udGVudCA9IFwiQWJvdXRcIjtcclxuICByZXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkx1bmEgUmVzdGF1cmFudFwiO1xyXG4gIGJvZHlDb250ZW50LnRleHRDb250ZW50ID1cclxuICAgIFwiQSBzbWFsbCByaXZlciBuYW1lZCBEdWRlbiBmbG93cyBieSB0aGVpciBwbGFjZSBhbmQgc3VwcGxpZXMgaXQgd2l0aCB0aGUgbmVjZXNzYXJ5IHJlZ2VsaWFsaWEuXCIgK1xyXG4gICAgXCJJdCBpcyBhIHBhcmFkaXNlbWF0aWMgY291bnRyeSwgaW4gd2hpY2ggcm9hc3RlZCBwYXJ0cyBvZiBzZW50ZW5jZXMgZmx5IGludG8geW91ciBtb3V0aC5cIjtcclxuICBkYXlzLnRleHRDb250ZW50ID0gXCJNb24gLSBGcmlcIjtcclxuICBob3Vycy50ZXh0Q29udGVudCA9IFwiIDggQU0gLSAxMSBQTVwiO1xyXG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCIrMS05NzgtMTIzLTQ1NjdcIjtcclxuXHJcbiAgZGF5cy5hcHBlbmRDaGlsZChob3Vycyk7XHJcbiAgYWJvdXRUZXh0Qm9keS5hcHBlbmQoYm9keUNvbnRlbnQsIGRheXMsIHBob25lTnVtYmVyKTtcclxuICBhYm91dFRleHRXcmFwcGVyLmFwcGVuZChhYm91dFRleHRIZWFkZXIsIGFib3V0VGV4dEJvZHksIGFib3V0VGV4dEZvb3Rlcik7XHJcbiAgYWJvdXRUZXh0SGVhZGVyLmFwcGVuZChhYm91dCwgcmVzdFRpdGxlKTtcclxuXHJcbiAgcmV0dXJuIGFib3V0VGV4dFdyYXBwZXI7XHJcbn1cclxuIiwiZnVuY3Rpb24gbmF2YmFyKCkge1xyXG4gIGNvbnN0IGxpbmtzID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJBYm91dFwiXTtcclxuXHJcbiAgY29uc3QgbmF2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgY29uc3QgbmF2V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IG5hdkxpbmtzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGNvbnN0IG5hdkxpbmtzQ29weSA9IG5hdkxpbmtzLmNsb25lTm9kZSh0cnVlKTtcclxuICBjb25zdCBuYXZUb2dnbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb25zdCBuYXZDb2xsYXBzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIG5hdkVsZW1lbnQuaWQgPSBcIm1haW5OYXZcIjtcclxuICBuYXZUb2dnbGVyLmlkID0gXCJuYXZUb2dnbGVyXCI7XHJcbiAgbmF2RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXZcIik7XHJcbiAgbmF2V3JhcHBlci5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXYtd3JhcHBlclwiKTtcclxuICBuYXZMaW5rcy5jbGFzc0xpc3QuYWRkKFwibWFpbi1uYXYtbGlua3NcIik7XHJcbiAgbG9nby5jbGFzc0xpc3QuYWRkKFwibG9nby1oZWFkZXJcIik7XHJcbiAgbmF2VG9nZ2xlci5jbGFzc0xpc3QuYWRkKFwibmF2LXRvZ2dsZXJcIik7XHJcbiAgbmF2Q29sbGFwc2UuY2xhc3NMaXN0LmFkZChcIm5hdi1jb2xsYXBzZVwiKTtcclxuICBuYXZMaW5rc0NvcHkuY2xhc3NMaXN0LmFkZChcIm5hdi1jb2xsYXBzZS1saW5rc1wiKTtcclxuICBsb2dvLnRleHRDb250ZW50ID0gXCJMdW5hXCI7XHJcblxyXG4gIG5hdkVsZW1lbnQuYXBwZW5kQ2hpbGQobmF2V3JhcHBlcik7XHJcbiAgbmF2V3JhcHBlci5hcHBlbmRDaGlsZChsb2dvKTtcclxuICBuYXZXcmFwcGVyLmFwcGVuZENoaWxkKG5hdkxpbmtzKTtcclxuICBuYXZXcmFwcGVyLmFwcGVuZENoaWxkKG5hdlRvZ2dsZXIpO1xyXG4gIG5hdldyYXBwZXIuYXBwZW5kQ2hpbGQobmF2Q29sbGFwc2UpO1xyXG4gIG5hdlRvZ2dsZXIuYXBwZW5kQ2hpbGQoc3ZnSGFtKCkpO1xyXG4gIG5hdkNvbGxhcHNlLmFwcGVuZENoaWxkKG5hdkxpbmtzQ29weSk7XHJcblxyXG4gIGxpbmtzLmZvckVhY2goKGxpbmspID0+IHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkudGV4dENvbnRlbnQgPSBsaW5rO1xyXG4gICAgbGkuY2xhc3NMaXN0LmFkZChcIm5hdi1pdGVtXCIsIGAke2xpbmsudG9Mb3dlckNhc2UoKX0tbGlua2ApO1xyXG4gICAgbmF2TGlua3MuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgbmF2TGlua3NDb3B5LmFwcGVuZENoaWxkKGxpLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBuYXZFbGVtZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBoZWFkZXIocGFnZSkge1xyXG4gIGNvbnN0IGhlYWRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGhlcm9XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuXHJcbiAgaGVyb1RleHQudGV4dENvbnRlbnQgPSBwYWdlO1xyXG5cclxuICBoZXJvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaGVyby13cmFwcGVyXCIpO1xyXG4gIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoXCJoZXJvLXRleHRcIik7XHJcblxyXG4gIGhlcm9XcmFwcGVyLmFwcGVuZENoaWxkKGhlcm9UZXh0KTtcclxuICBoZWFkZXJFbGVtZW50LmFwcGVuZENoaWxkKGhlcm9XcmFwcGVyKTtcclxuXHJcbiAgcmV0dXJuIGhlYWRlckVsZW1lbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7IG5hdmJhciwgaGVhZGVyIH07XHJcblxyXG5mdW5jdGlvbiBzdmdIYW0oKSB7XHJcbiAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XHJcbiAgY29uc3QgcmVjdE9uZSA9IHJlY3RDb21wb25lbnQoXCJsaW5lLXRvcFwiLCBcIjI1XCIpO1xyXG4gIGNvbnN0IHJlY3RUd28gPSByZWN0Q29tcG9uZW50KFwibGluZS1taWRkbGVcIiwgXCI0NVwiKTtcclxuICBjb25zdCByZWN0VGhyZWUgPSByZWN0Q29tcG9uZW50KFwibGluZS1ib3R0b21cIiwgXCI2NVwiKTtcclxuXHJcbiAgc3ZnLmNsYXNzTGlzdC5hZGQoXCJoYW1idXJnZXJcIik7XHJcblxyXG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDEwMCAxMDBcIik7XHJcbiAgc3ZnLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiMzVcIik7XHJcblxyXG4gIHN2Zy5hcHBlbmQocmVjdE9uZSwgcmVjdFR3bywgcmVjdFRocmVlKTtcclxuXHJcbiAgcmV0dXJuIHN2ZztcclxufVxyXG5cclxuZnVuY3Rpb24gcmVjdENvbXBvbmVudChjbGFzc1R3bywgeSwgeCA9IDEwLCBjbGFzc09uZSA9IFwibGluZVwiKSB7XHJcbiAgY29uc3QgcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicmVjdFwiKTtcclxuXHJcbiAgcmVjdC5jbGFzc0xpc3QuYWRkKGNsYXNzT25lLCBjbGFzc1R3byk7XHJcblxyXG4gIHJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI4MFwiKTtcclxuICByZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjEwXCIpO1xyXG4gIHJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCB4KTtcclxuICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgeSk7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjVcIik7XHJcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwid2hpdGVcIik7XHJcblxyXG4gIHJldHVybiByZWN0O1xyXG59XHJcbiIsImltcG9ydCBtZW51SXRlbXMgZnJvbSBcIi4vbWVudUl0ZW1zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xyXG4gIGNvbnN0IGhvbWVTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblxyXG4gIGhvbWVTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJob21lLXNlY3Rpb25cIik7XHJcblxyXG4gIGhvbWVTZWN0aW9uLmFwcGVuZChpbmZvQ29tcG9uZW50KCksIGZlYXR1cmVkSXRlbXMoKSk7XHJcblxyXG4gIHJldHVybiBob21lU2VjdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5mb0NvbXBvbmVudCgpIHtcclxuICBjb25zdCBpbmZvV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IHJlc3RhdXJhbnREaXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG5cclxuICBpbmZvV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaW5mby13cmFwcGVyXCIpO1xyXG4gIGxvZ28uY2xhc3NMaXN0LmFkZChcIm1haW4tbG9nb1wiLCBcImNsci1hY2NlbnRcIiwgXCJmZi1hY2NlbnRcIik7XHJcbiAgcmVzdGF1cmFudERpc2MuY2xhc3NMaXN0LmFkZChcInJlc3QtZGlzY1wiKTtcclxuXHJcbiAgbG9nby50ZXh0Q29udGVudCA9IFwiTHVuYVwiO1xyXG4gIHJlc3RhdXJhbnREaXNjLnRleHRDb250ZW50ID0gXCJEZWxpY2lvdXMgU3BlY2lhbHRpZXNcIjtcclxuXHJcbiAgaW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcbiAgaW5mb1dyYXBwZXIuYXBwZW5kQ2hpbGQocmVzdGF1cmFudERpc2MpO1xyXG5cclxuICByZXR1cm4gaW5mb1dyYXBwZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZlYXR1cmVkSXRlbXMoKSB7XHJcbiAgY29uc3QgZmVhdHVyZWRJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG4gIGNvbnN0IGZlYXR1cmVkSXRlbXNXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgZmVhdHVyZWRJdGVtc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmVhdHVyZWQtaXRlbXNcIik7XHJcbiAgZmVhdHVyZWRJdGVtc1dyYXBwZXIuY2xhc3NMaXN0LmFkZChcImZlYXR1cmVkLWl0ZW1zLXdyYXBwZXJcIik7XHJcblxyXG4gIE9iamVjdC52YWx1ZXMobWVudUl0ZW1zKVxyXG4gICAgLnNsaWNlKDAsIDQpXHJcbiAgICAuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICBjb25zdCBmZWF0dXJlZEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICBjb25zdCBpdGVtSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcblxyXG4gICAgICBmZWF0dXJlZEl0ZW0uY2xhc3NMaXN0LmFkZChcImZlYXR1cmVkLWl0ZW1cIik7XHJcblxyXG4gICAgICBpdGVtSW1nLnNyYyA9IGl0ZW0uaW1nO1xyXG4gICAgICBpdGVtSW1nLmFsdCA9IGl0ZW0ubmFtZTtcclxuICAgICAgaXRlbUltZy5kcmFnZ2FibGUgPSBmYWxzZTtcclxuICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XHJcblxyXG4gICAgICBmZWF0dXJlZEl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUltZyk7XHJcbiAgICAgIGZlYXR1cmVkSXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XHJcbiAgICAgIGZlYXR1cmVkSXRlbXNXcmFwcGVyLmFwcGVuZENoaWxkKGZlYXR1cmVkSXRlbSk7XHJcbiAgICB9KTtcclxuXHJcbiAgZmVhdHVyZWRJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmZWF0dXJlZEl0ZW1zV3JhcHBlcik7XHJcblxyXG4gIHJldHVybiBmZWF0dXJlZEl0ZW1zQ29udGFpbmVyO1xyXG59XHJcbiIsImltcG9ydCB7IG5hdmJhciB9IGZyb20gXCIuL2hlYWRlclwiO1xyXG5pbXBvcnQgaG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0aWFsUGFnZSgpIHtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIikuYXBwZW5kKG5hdmJhcigpLCBob21lKCkpO1xyXG4gIGNvbnN0IGhvbWVMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaG9tZS1saW5rXCIpO1xyXG4gIGhvbWVMaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XHJcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IG1lbnVJdGVtcyBmcm9tIFwiLi9tZW51SXRlbXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVTZWN0aW9uKCkge1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXNlY3Rpb25cIik7XHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XHJcblxyXG4gIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudU5hdigpKTtcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUl0ZW1zQ29tcG9uZW50KCkpO1xyXG5cclxuICByZXR1cm4gbWVudUNvbnRhaW5lcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbWVudU5hdigpIHtcclxuICBjb25zdCBuYXZOYW1lcyA9IFtcIkJyZWFrZmFzdFwiLCBcIkx1bmNoXCIsIFwiRGlubmVyXCIsIFwiRHJpbmtzXCIsIFwiRGVzc2VydHNcIl07XHJcblxyXG4gIGNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gIG5hdkxpc3QuY2xhc3NMaXN0LmFkZChcIm1lbnUtbGlua3NcIik7XHJcblxyXG4gIG5hdk5hbWVzLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IGxpRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpRWxlbWVudC50ZXh0Q29udGVudCA9IGl0ZW07XHJcbiAgICBpZiAoaXRlbSA9PT0gXCJEaW5uZXJcIikge1xyXG4gICAgICBsaUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1lbnUtbmF2LWl0ZW1cIiwgXCJtZW51LWxpbmstYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gICAgbGlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51LW5hdi1pdGVtXCIpO1xyXG5cclxuICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGlFbGVtZW50KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIG5hdkxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lbnVJdGVtc0NvbXBvbmVudCgpIHtcclxuICBjb25zdCBtZW51V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIG1lbnVXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJtZW51LXdyYXBwZXJcIik7XHJcblxyXG4gIE9iamVjdC52YWx1ZXMobWVudUl0ZW1zKS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvbnN0IGl0ZW1JbmZvQ29udGFpbnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb25zdCBpdGVtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnN0IGl0ZW1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgY29uc3QgaXRlbUluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gICAgaXRlbUltZy5jbGFzc0xpc3QuYWRkKFwiaXRlbS1pbWdcIik7XHJcbiAgICBpdGVtVGl0bGUuY2xhc3NMaXN0LmFkZChcIml0ZW0tbmFtZVwiKTtcclxuICAgIGl0ZW1JbmdyZWRpZW50cy5jbGFzc0xpc3QuYWRkKFwiaXRlbS1pbmdyZWRpZW50c1wiKTtcclxuICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKFwiaXRlbS1wcmljZVwiKTtcclxuICAgIGl0ZW1JbmZvQ29udGFpbnRlci5jbGFzc0xpc3QuYWRkKFwiaW5mby1jb250YWluZXJcIik7XHJcbiAgICBpdGVtSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJpdGVtLWhlYWRlclwiKTtcclxuICAgIG9yZGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJvcmRlci1idG5cIik7XHJcblxyXG4gICAgaXRlbUltZy5zcmMgPSBpdGVtLmltZztcclxuICAgIGl0ZW1JbWcuYWx0ID0gaXRlbS5uYW1lO1xyXG4gICAgaXRlbVRpdGxlLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xyXG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gYCQke2l0ZW0ucHJpY2V9YDtcclxuICAgIGl0ZW1JbmdyZWRpZW50cy50ZXh0Q29udGVudCA9IGl0ZW0uaW5ncmVkaWVudHMuam9pbihcIiwgXCIpO1xyXG4gICAgb3JkZXJCdG4udGV4dENvbnRlbnQgPSBcIk9yZGVyIE5vd1wiO1xyXG5cclxuICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1JbWcsIGl0ZW1JbmZvQ29udGFpbnRlcik7XHJcbiAgICBpdGVtSW5mb0NvbnRhaW50ZXIuYXBwZW5kKGl0ZW1IZWFkZXIsIGl0ZW1JbmdyZWRpZW50cywgb3JkZXJCdG4pO1xyXG4gICAgaXRlbUhlYWRlci5hcHBlbmQoaXRlbVRpdGxlLCBpdGVtUHJpY2UpO1xyXG4gICAgbWVudVdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbUNvbnRhaW5lcik7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBtZW51V3JhcHBlcjtcclxufVxyXG4iLCJpbXBvcnQgZmlzaFRhY29zIGZyb20gXCIuLi9hc3NldHMvZmlzaC10YWNvcy5qcGdcIjtcclxuaW1wb3J0IGNoaWNrZW5Ub3N0YWRhcyBmcm9tIFwiLi4vYXNzZXRzL2NoaWNrZW4tdG9zdGFkYXMuanBnXCI7XHJcbmltcG9ydCBiYWtlZENoaWNrZW5RdWVzYWRpbGxhcyBmcm9tIFwiLi4vYXNzZXRzL0Jha2VkLUNoaWNrZW4tUXVlc2FkaWxsYXMuanBnXCI7XHJcbmltcG9ydCBjaGlja2VuRW5jaGlsYWRhcyBmcm9tIFwiLi4vYXNzZXRzL2NoaWNrZW4tZW5jaGlsYWRhcy5qcGdcIjtcclxuaW1wb3J0IHBpY29EZUdhbGxvIGZyb20gXCIuLi9hc3NldHMvcGljby1kZS1nYWxsby5qcGdcIjtcclxuaW1wb3J0IGJsYWNrQmVhbkJ1cnJpdG8gZnJvbSBcIi4uL2Fzc2V0cy9ibGFjay1iZWFuLWJ1cnJpdG8uanBnXCI7XHJcblxyXG5jb25zdCBtZW51SXRlbXMgPSB7XHJcbiAgaXRlbTE6IHtcclxuICAgIG5hbWU6IFwiRmlzaCBUYWNvc1wiLFxyXG4gICAgaW1nOiBmaXNoVGFjb3MsXHJcbiAgICBwcmljZTogMTMsXHJcbiAgICBpbmdyZWRpZW50czogW1wiRmlzaFwiLCBcIlNyaXJhY2hhXCIsIFwiR2FybGljIHBvd2RlclwiLCBcIkxpbWUganVpY2VcIl0sXHJcbiAgfSxcclxuICBpdGVtMjoge1xyXG4gICAgbmFtZTogXCJDaGlja2VuIFRvc3RhZGFzXCIsXHJcbiAgICBpbWc6IGNoaWNrZW5Ub3N0YWRhcyxcclxuICAgIHByaWNlOiA4LFxyXG4gICAgaW5ncmVkaWVudHM6IFtcclxuICAgICAgXCJQaW50byBiZWFuc1wiLFxyXG4gICAgICBcIlJlZnJpZWQgYmVhbnNcIixcclxuICAgICAgXCJTb3VyIGNyZWFtXCIsXHJcbiAgICAgIFwiV2hpdGUgY29ybiB0b3J0aWxsYXNcIixcclxuICAgIF0sXHJcbiAgfSxcclxuICBpdGVtMzoge1xyXG4gICAgbmFtZTogXCJDaGlja2VuIFF1ZXNhZGlsbGFzXCIsXHJcbiAgICBpbWc6IGJha2VkQ2hpY2tlblF1ZXNhZGlsbGFzLFxyXG4gICAgcHJpY2U6IDIwLFxyXG4gICAgaW5ncmVkaWVudHM6IFtcIlNvdXIgY3JlYW1cIiwgXCJQZXBwZXIgamFjayBjaGVlc2VcIiwgXCJTaHJlZGRlZCBjaGlja2VuXCJdLFxyXG4gIH0sXHJcbiAgaXRlbTQ6IHtcclxuICAgIG5hbWU6IFwiQ2hpY2tlbiBFbmNoaWxhZGFzXCIsXHJcbiAgICBpbWc6IGNoaWNrZW5FbmNoaWxhZGFzLFxyXG4gICAgcHJpY2U6IDE1LFxyXG4gICAgaW5ncmVkaWVudHM6IFtcIlNvdXIgY3JlYW1cIiwgXCJFYXN5IGVuY2hpbGFkYSBzYXVjZVwiLCBcIlNocmVkZGVkIGNoaWNrZW5cIl0sXHJcbiAgfSxcclxuICBpdGVtNToge1xyXG4gICAgbmFtZTogXCJQaWNvIERlIEdhbGxvXCIsXHJcbiAgICBpbWc6IHBpY29EZUdhbGxvLFxyXG4gICAgcHJpY2U6IDEwLFxyXG4gICAgaW5ncmVkaWVudHM6IFtcIlRvbWF0b2VzXCIsIFwiQ2lsYW50cm9cIiwgXCJCbGFjayBwZXBwZXJcIiwgXCJKYWxhcGVubyBwZXBwZXJcIl0sXHJcbiAgfSxcclxuICBpdGVtNjoge1xyXG4gICAgbmFtZTogXCJCbGFjayBCZWFuIEJ1cnJpdG9cIixcclxuICAgIGltZzogYmxhY2tCZWFuQnVycml0byxcclxuICAgIHByaWNlOiAxMixcclxuICAgIGluZ3JlZGllbnRzOiBbXHJcbiAgICAgIFwiQmxhY2sgYmVhbnNcIixcclxuICAgICAgXCJTb3VyIGNyZWFtXCIsXHJcbiAgICAgIFwiRmxvdXIgdG9ydGlsbGFzXCIsXHJcbiAgICAgIFwiVG9tYXRvXCIsXHJcbiAgICAgIFwiR3JlZW4gcGVwcGVyXCIsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51SXRlbXM7XHJcbiIsImZ1bmN0aW9uIG5hdkJhclRvZ2dsZShlKSB7XHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIubmF2LXRvZ2dsZXJcIikpIHtcclxuICAgIGNvbnN0IG5hdkNvbGxhcHNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXYtY29sbGFwc2VcIik7XHJcbiAgICBjb25zdCBuYXZMaW5lcyA9IFsuLi5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGluZVwiKV07XHJcblxyXG4gICAgbmF2Q29sbGFwc2UuY2xhc3NMaXN0LnRvZ2dsZShcImRpc3BsYXlcIik7XHJcbiAgICBuYXZMaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICAgIGxpbmUuY2xhc3NMaXN0LnRvZ2dsZShcIm9wZW5cIik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG5hdkxpbmtDbGFzc1RvZ2dsZShlbGVtZW50KSB7XHJcbiAgY29uc3QgaXRlbXMgPSBbLi4uZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgJHtlbGVtZW50fS1saW5rYCldO1xyXG4gIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgbmF2QmFyVG9nZ2xlLCBuYXZMaW5rQ2xhc3NUb2dnbGUgfTtcclxuIiwibGV0IGxhc3RTY3JvbGwgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmF2RmxvYXRUb2dnbGUoKSB7XHJcbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluTmF2XCIpO1xyXG4gIGNvbnN0IGN1cnJlbnRTY3JvbGwgPSB3aW5kb3cuc2Nyb2xsWTtcclxuXHJcbiAgaWYgKGN1cnJlbnRTY3JvbGwgPiBsYXN0U2Nyb2xsKSB7XHJcbiAgICB0b2dnbGVDbGFzc2VzT25TY3JvbGxEb3duKGN1cnJlbnRTY3JvbGwsIG5hdkJhcik7XHJcbiAgICBsYXN0U2Nyb2xsID0gY3VycmVudFNjcm9sbDtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50U2Nyb2xsIDwgbGFzdFNjcm9sbCkge1xyXG4gICAgdG9nZ2xlQ2xhc3Nlc09uU2Nyb2xsVXAoY3VycmVudFNjcm9sbCwgbmF2QmFyKTtcclxuICAgIC8vIHJlc2V0IGxhc3RTY3JvbGxcclxuICAgIGlmIChjdXJyZW50U2Nyb2xsID09PSAwKSB7XHJcbiAgICAgIGxhc3RTY3JvbGwgPSAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlQ2xhc3Nlc09uU2Nyb2xsRG93bihjdXJyZW50U2Nyb2xsLCBtYWluTmF2KSB7XHJcbiAgaWYgKGN1cnJlbnRTY3JvbGwgPj0gMTAwKSB7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoXCJzY3JvbGxlZFwiKTtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50U2Nyb2xsID49IDM1MCkge1xyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QuYWRkKFwiZmxvYXRpbmdcIik7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVDbGFzc2VzT25TY3JvbGxVcChjdXJyZW50U2Nyb2xsLCBtYWluTmF2KSB7XHJcbiAgaWYgKGN1cnJlbnRTY3JvbGwgPD0gMzUwKSB7XHJcbiAgICBtYWluTmF2LmNsYXNzTGlzdC5hZGQoXCJzbGVlcFwiKTtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50U2Nyb2xsIDw9IDI1MCkge1xyXG4gICAgbWFpbk5hdi5jbGFzc0xpc3QucmVtb3ZlKFwiZmxvYXRpbmdcIik7XHJcbiAgfVxyXG5cclxuICBpZiAoY3VycmVudFNjcm9sbCA8PSAxNTApIHtcclxuICAgIG1haW5OYXYuY2xhc3NMaXN0LnJlbW92ZShcInNsZWVwXCIsIFwic2Nyb2xsZWRcIik7XHJcbiAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IHsgbmF2YmFyLCBoZWFkZXIgfSBmcm9tIFwiLi9tb2R1bGVzL2hlYWRlclwiO1xyXG5pbXBvcnQgaW5pdGlhbFBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9pbml0aWFsUGFnZVwiO1xyXG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tb2R1bGVzL21lbnVcIjtcclxuaW1wb3J0IGFib3V0IGZyb20gXCIuL21vZHVsZXMvYWJvdXRcIjtcclxuaW1wb3J0IG5hdkZsb2F0VG9nZ2xlIGZyb20gXCIuL21vZHVsZXMvbmF2QmFyT25TY3JvbGxcIjtcclxuaW1wb3J0IHsgbmF2QmFyVG9nZ2xlLCBuYXZMaW5rQ2xhc3NUb2dnbGUgfSBmcm9tIFwiLi9tb2R1bGVzL25hdkJhckZ1bmN0aW9uc1wiO1xyXG5cclxuaW5pdGlhbFBhZ2UoKTtcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcblxyXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0YWJTd2l0Y2hpbmcpO1xyXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXJUb2dnbGUpO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBuYXZGbG9hdFRvZ2dsZSk7XHJcblxyXG5mdW5jdGlvbiB0YWJTd2l0Y2hpbmcoZSkge1xyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLm5hdi1pdGVtXCIpIHx8IGUudGFyZ2V0Lm1hdGNoZXMoXCIubG9nby1oZWFkZXJcIikpIHtcclxuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIuaG9tZS1saW5rXCIpIHx8IGUudGFyZ2V0Lm1hdGNoZXMoXCIubG9nby1oZWFkZXJcIikpIHtcclxuICAgIGluaXRpYWxQYWdlKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5tZW51LWxpbmtcIikpIHtcclxuICAgIGNvbnRlbnQuYXBwZW5kKG5hdmJhcigpLCBoZWFkZXIoXCJTcGVjaWFsdGllc1wiKSwgbWVudSgpKTtcclxuICAgIG5hdkxpbmtDbGFzc1RvZ2dsZShcIm1lbnVcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi5hYm91dC1saW5rXCIpKSB7XHJcbiAgICBjb250ZW50LmFwcGVuZChuYXZiYXIoKSwgaGVhZGVyKFwiQWJvdXRcIiksIGFib3V0KCkpO1xyXG4gICAgbmF2TGlua0NsYXNzVG9nZ2xlKFwiYWJvdXRcIik7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==