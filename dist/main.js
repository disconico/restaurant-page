/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tabs/about.js":
/*!***************************!*\
  !*** ./src/tabs/about.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadAbout": () => (/* binding */ loadAbout)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/tabs/home.js");


function loadAbout() {
    const main = document.querySelector('main')
    main.textContent = ""
    main.classList.remove('main--menu')
    main.classList.remove('main--contact')
    main.classList.add('main--about')
    main.classList.toggle('active')

    const aboutTabHead = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createTabHead)('Benvenuti', 'Informazioni su di noi')
    main.appendChild(aboutTabHead)

    const aboutText = document.createElement('p')
    aboutText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod."
    aboutText.classList.add('about--text')
    main.appendChild(aboutText)

    const BR = document.createElement('br')
    main.appendChild(BR)

    const aboutText2 = document.createElement('p')
    aboutText2.innerText = "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    aboutText2.classList.add('about--text')
    main.appendChild(aboutText2)
}



/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/tabs/home.js");


function creteInfoDiv() {
    const main = document.querySelector('main')
    const infoDiv = document.createElement('div')
    infoDiv.classList.add('info--div')
    main.appendChild(infoDiv)

    const infoDivTitle = document.createElement('h3')
    infoDivTitle.innerText = 'Le nostre informazioni :'
    infoDiv.appendChild(infoDivTitle)

    const phoneNbr = document.createElement('p')
    phoneNbr.classList.add('phone--number')
    phoneNbr.innerText = "📞    06 45 03 16 52"
    infoDiv.appendChild(phoneNbr)

    const restaurantLocation = document.createElement('p')
    restaurantLocation.classList.add('phone--number')
    restaurantLocation.innerText = "🏠   1 Rue du Prêche, 46800 Montcuq"
    infoDiv.appendChild(restaurantLocation)

    const restaurantHours = document.createElement('p')
    restaurantHours.classList.add('opening--hours')
    restaurantHours.innerText = "🕰   Da martedì a domenica, dalle 11.00 alle 23.00"
    infoDiv.appendChild(restaurantHours)

    const restaurantMap = document.createElement('iframe')
    restaurantMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.6185003276487!2d1.2080284510136101!3d44.33834401577153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab80976fd9b0dd%3A0xb33eeb238647aaff!2sMairie!5e0!3m2!1sfr!2sfr!4v1654776443056!5m2!1sfr!2sfr'
    restaurantMap.width = '400'
    restaurantMap.height = '250'
    restaurantMap.setAttribute('loading', 'lazy')
    restaurantMap.style.border = '1px solid grey'
    restaurantMap.allowFullscreen = ''
    restaurantMap.classList.add('restaurant--map')
    infoDiv.appendChild(restaurantMap)

}



function createFormDiv() {

    const main = document.querySelector('main')
    const contactForm = document.createElement('div')
    contactForm.classList.add('contact--form--div')
    main.appendChild(contactForm)



    const formDivTitle = document.createElement('h3')
    formDivTitle.innerText = 'Contattateci :'
    contactForm.appendChild(formDivTitle)

    const form = document.createElement('form')
    form.action = 'post'
    form.classList.add('form')
    contactForm.appendChild(form)

    const firstName = document.createElement('div')
    firstName.classList.add('first--name')
    form.appendChild(firstName)

    const firstNameLabel = document.createElement('label')
    firstNameLabel.setAttribute('for', 'firstName')
    firstNameLabel.innerText = 'Nome :'
    firstName.appendChild(firstNameLabel)
    const BRFirst = document.createElement('br')
    firstName.appendChild(BRFirst)

    const firstNameInput = document.createElement('input')
    firstNameInput.type = 'text'
    firstNameInput.id = 'firstName'
    firstNameInput.placeholder = 'Jane *'
    firstName.appendChild(firstNameInput)

    const lastName = document.createElement('div')
    lastName.classList.add('last--name')
    form.appendChild(lastName)

    const lastNameLabel = document.createElement('label')
    lastNameLabel.setAttribute('for', 'lastName')
    lastNameLabel.innerText = 'Cognome :'
    lastName.appendChild(lastNameLabel)
    const BRLast = document.createElement('br')
    lastName.appendChild(BRLast)

    const lastNameInput = document.createElement('input')
    lastNameInput.type = 'text'
    lastNameInput.id = 'lastName'
    lastNameInput.placeholder = 'Doe *'
    lastName.appendChild(lastNameInput)

    const userPhone = document.createElement('div')
    userPhone.classList.add('user--phone')
    form.appendChild(userPhone)

    const userPhoneLabel = document.createElement('label')
    userPhoneLabel.setAttribute('for', 'userPhone')
    userPhoneLabel.innerText = 'Numero di telefono :'
    userPhone.appendChild(userPhoneLabel)
    const BRPhone = document.createElement('br')
    userPhone.appendChild(BRPhone)

    const userPhoneInput = document.createElement('input')
    userPhoneInput.type = 'phone'
    userPhoneInput.id = 'userPhone'
    userPhoneInput.placeholder = '+33'
    userPhone.appendChild(userPhoneInput)

    const userEmail = document.createElement('div')
    userEmail.classList.add('user--email')
    form.appendChild(userEmail)

    const userEmailLabel = document.createElement('label')
    userEmailLabel.setAttribute('for', 'userEmail')
    userEmailLabel.innerText = 'Indirizzo e-mail :'
    userEmail.appendChild(userEmailLabel)
    const BREmail = document.createElement('br')
    userEmail.appendChild(BREmail)

    const userEmailInput = document.createElement('input')
    userEmailInput.type = 'email'
    userEmailInput.id = 'userEmail'
    userEmailInput.placeholder = 'janedoe@disconico.com'
    userEmail.appendChild(userEmailInput)

    const userMsg = document.createElement('div')
    userMsg.classList.add('user--msg')
    form.appendChild(userMsg)

    const userMsgLabel = document.createElement('label')
    userMsgLabel.setAttribute('for', 'userMsg')
    userMsgLabel.innerText = 'Il vostro messaggio :'
    userMsg.appendChild(userMsgLabel)
    const BRMsg = document.createElement('br')
    userMsg.appendChild(BRMsg)

    const userMsgInput = document.createElement('textarea')
    userMsgInput.id = 'userMsg'
    userMsgInput.placeholder = '...'
    userMsgInput.setAttribute('rows', '5')
    userMsg.appendChild(userMsgInput)

    const userSubmit = document.createElement('div')
    userSubmit.classList.add('user--submit')
    form.appendChild(userSubmit)

    const submitBtn = document.createElement('button')
    submitBtn.classList.add('submit--button')
    submitBtn.type = 'button'
    submitBtn.innerText = 'Send your message'
    userSubmit.appendChild(submitBtn)


}

function loadContact() {
    const main = document.querySelector('main')
    main.textContent = ""
    main.classList.remove('main--menu')
    main.classList.remove('main--about')
    main.classList.add('main--contact')
    main.classList.toggle('active')

    const menuTabHead = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createTabHead)('Benvenuti', 'CONTATTI & INFO')
    main.appendChild(menuTabHead)

    creteInfoDiv()
    createFormDiv()
}





/***/ }),

/***/ "./src/tabs/home.js":
/*!**************************!*\
  !*** ./src/tabs/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTabHead": () => (/* binding */ createTabHead),
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/tabs/menu.js");

// import {load} from "./load"

function createTabHead(textP, textH1, textHR, textP2) {
    const tabHead = document.createElement('div')
    tabHead.classList.add('tab--head')

    const paragraph = document.createElement('p')
    paragraph.textContent = textP
    paragraph.classList.add('tab--head--p')
    tabHead.appendChild(paragraph)

    const H1 = document.createElement('h1')
    H1.textContent = textH1
    H1.classList.add('tab--head--h1')
    tabHead.appendChild(H1)

    const HR = document.createElement('hr')
    HR.textContent = ""
    HR.classList.add('tab--head--hr')
    tabHead.appendChild(HR)

    const paragraph2 = document.createElement('p')
    paragraph2.textContent = textP2
    paragraph2.classList.add('tab--head--p2')
    tabHead.appendChild(paragraph2)

    return tabHead
}

function createButton(text) {


    const button = document.createElement('button')
    button.type = 'button'
    button.classList.add('go--to--menu')
    button.innerText = text
    button.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__.loadMenu)

    function load() {
        const casa = document.getElementById('home')
        casa.classList.remove('active')

        const menu = document.getElementById('menu')
        menu.classList.add('active')
    }

    button.addEventListener('click', load)

    return button
}

function createHome() {
    const home = document.createElement('div')
    home.classList.add('home')

    home.appendChild(createTabHead('Benvenuti', 'La buona cucina', '', 'I migliori posti dove mangiare a Montcuq'))

    home.appendChild(createButton('Vedere il menu'))

    return home
}


function loadHome() {
    const main = document.querySelector('main')
    main.textContent = ""
    main.classList.remove('main--menu')
    main.classList.remove('main--about')
    main.classList.remove('main--contact')
    main.appendChild(createHome())

}




/***/ }),

/***/ "./src/tabs/launchApp.js":
/*!*******************************!*\
  !*** ./src/tabs/launchApp.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "launchApp": () => (/* binding */ launchApp)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/tabs/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/tabs/menu.js");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ "./src/tabs/about.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/tabs/contact.js");
// imports





// launchApp.js
function createHeader() {
    const header = document.createElement('header')
    header.classList.add('header')

    const navBar = document.createElement('nav')
    navBar.classList.add('nav--bar')
    header.appendChild(navBar)

    const homeButton = document.createElement("button")
    homeButton.classList.add('button--nav')
    homeButton.setAttribute('id', 'home')
    homeButton.textContent = 'CASA'
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
    })

    const menuButton = document.createElement("button")
    menuButton.classList.add('button--nav')
    menuButton.setAttribute('id', 'menu')
    menuButton.textContent = 'MENU'
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
    })

    const aboutButton = document.createElement("button")
    aboutButton.classList.add('button--nav')
    aboutButton.setAttribute('id', 'about')
    aboutButton.textContent = 'CHI SIAMO'
    aboutButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(aboutButton);
        (0,_about__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();
    })

    const contactButton = document.createElement("button")
    contactButton.classList.add('button--nav')
    contactButton.setAttribute('id', 'contact')
    contactButton.textContent = 'CONTATTO'
    contactButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(contactButton);
        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)();
    })

    navBar.appendChild(homeButton)
    navBar.appendChild(menuButton)
    navBar.appendChild(aboutButton)
    navBar.appendChild(contactButton)

    return header
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button--nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement('main')
    main.classList.add('main')

    return main
}

function createFooter() {
    const footer = document.createElement('footer')
    footer.classList.add('footer')

    const footerText = document.createElement('p')
    footerText.setAttribute('id', 'footer-text')
    footer.innerText = '© disconico'

    const footerLink = document.createElement('a')
    footerLink.setAttribute('href', 'https://github.com/disconico')
    footerLink.setAttribute('target', '_blank')

    const footerIcon = document.createElement('img')
    footerIcon.setAttribute('id', 'github-icon')
    footerIcon.setAttribute('src', './assets/images/github-icon.png')

    footerLink.appendChild(footerIcon)

    footer.appendChild(footerText)
    footer.appendChild(footerLink)

    return footer
}

function launchApp() {
    const content = document.getElementById('content')

    content.appendChild(createHeader())
    content.appendChild(createMain())
    content.appendChild(createFooter())

    setActiveButton(document.querySelector(".button--nav"));

    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)()
}



/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/tabs/home.js");


const menu = [
  {
    name: "Pan canilla",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "€20",
  },
  {
    name: "Pan sobado",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "€20",
  },
  {
    name: "Pan Andino",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
    price: "€20",
  },
];

function loadMenu() {
  const main = document.querySelector('main')
  main.textContent = ""
  main.classList.remove('main--about')
  main.classList.remove('main--contact')
  main.classList.add('main--menu')

  const menuTabHead = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createTabHead)('Benvenuti', 'Menu')
  main.appendChild(menuTabHead)

  menu.forEach((item) => {
    const menuItem = document.createElement('div')
    menuItem.classList.add('menu--item')

    const itemName = document.createElement('h2')
    itemName.innerText = item.name
    itemName.classList.add('item--name')
    menuItem.appendChild(itemName)

    const ItemText = document.createElement('p')
    ItemText.innerText = item.description
    ItemText.classList.add('item--text')
    menuItem.appendChild(ItemText)

    const itemPrice = document.createElement('h2')
    itemPrice.innerText = item.price
    itemPrice.classList.add('item--price')
    menuItem.appendChild(itemPrice)

    const itemHR = document.createElement('hr')
    itemHR.classList.add('item--hr')
    menuItem.appendChild(itemHR)

    main.appendChild(menuItem)
  })

}



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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_launchApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs/launchApp */ "./src/tabs/launchApp.js");
const content = document.createElement('div')
content.classList.add('content')
content.setAttribute('id','content')

const style = document.createElement('link')
style.rel = 'stylesheet'
style.href = 'style.css'

const body = document.querySelector('body')
body.appendChild(content)

const head = document.querySelector('head')
head.appendChild(style)

;

(0,_tabs_launchApp__WEBPACK_IMPORTED_MODULE_0__.launchApp)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixvREFBYTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG9EQUFhO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFc0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVLVztBQUNqQyxXQUFXLE1BQU07O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywyQ0FBUTs7QUFFN0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRXhCO0FBQ2lDO0FBQ0E7QUFDRTtBQUNJOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFRO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFRO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFTO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSwrQ0FBUTtBQUNaOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixvREFBYTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDs7Ozs7Ozs7VUMzREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQTBDOztBQUUxQywwREFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9sYXVuY2hBcHAuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVGFiSGVhZCB9IGZyb20gXCIuL2hvbWVcIlxuXG5mdW5jdGlvbiBsb2FkQWJvdXQoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1tZW51JylcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWNvbnRhY3QnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi0tYWJvdXQnKVxuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblxuICAgIGNvbnN0IGFib3V0VGFiSGVhZCA9IGNyZWF0ZVRhYkhlYWQoJ0JlbnZlbnV0aScsICdJbmZvcm1hemlvbmkgc3UgZGkgbm9pJylcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0VGFiSGVhZClcblxuICAgIGNvbnN0IGFib3V0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFib3V0VGV4dC5pbm5lclRleHQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBlbGxlbnRlc3F1ZSBwbGFjZXJhdCwgdGVsbHVzIHNpdCBhbWV0IHVsdHJpY2VzIHBvcnR0aXRvciwgZXggZXggYWxpcXVldCBwdXJ1cywgcGVsbGVudGVzcXVlIHJob25jdXMgZmVsaXMgaXBzdW0gbmVjIHB1cnVzLiBEb25lYyBpZCBlbmltIGluIHJpc3VzIHBlbGxlbnRlc3F1ZSBibGFuZGl0LiBQcm9pbiBzZWQgbmliaCBuZWMgYXJjdSBtb2xsaXMgcmhvbmN1cyBpbiBzaXQgYW1ldCBhdWd1ZS4gU3VzcGVuZGlzc2UgbWFnbmEgbmlzbCwgZWxlaWZlbmQgbm9uIHRlbXBvciBldCwgbHVjdHVzIGlkIHF1YW0uIE51bGxhIGJpYmVuZHVtIHZ1bHB1dGF0ZSBhbnRlLCBub24gbWFsZXN1YWRhIGVyb3MgbG9ib3J0aXMgZXVpc21vZC5cIlxuICAgIGFib3V0VGV4dC5jbGFzc0xpc3QuYWRkKCdhYm91dC0tdGV4dCcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFRleHQpXG5cbiAgICBjb25zdCBCUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcbiAgICBtYWluLmFwcGVuZENoaWxkKEJSKVxuXG4gICAgY29uc3QgYWJvdXRUZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGFib3V0VGV4dDIuaW5uZXJUZXh0ID0gXCJVdCBlbmltIGFkIG1pbmltYSB2ZW5pYW0sIHF1aXMgbm9zdHJ1bSBleGVyY2l0YXRpb25lbSB1bGxhbSBjb3Jwb3JpcyBzdXNjaXBpdCBsYWJvcmlvc2FtLCBuaXNpIHV0IGFsaXF1aWQgZXggZWEgY29tbW9kaSBjb25zZXF1YXR1cj8gUXVpcyBhdXRlbSB2ZWwgZXVtIGl1cmUgcmVwcmVoZW5kZXJpdCBxdWkgaW4gZWEgdm9sdXB0YXRlIHZlbGl0IGVzc2UgcXVhbSBuaWhpbCBtb2xlc3RpYWUgY29uc2VxdWF0dXIsIHZlbCBpbGx1bSBxdWkgZG9sb3JlbSBldW0gZnVnaWF0IHF1byB2b2x1cHRhcyBudWxsYSBwYXJpYXR1cj9cIlxuICAgIGFib3V0VGV4dDIuY2xhc3NMaXN0LmFkZCgnYWJvdXQtLXRleHQnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRUZXh0Milcbn1cblxuZXhwb3J0IHsgbG9hZEFib3V0IH0iLCJpbXBvcnQgeyBjcmVhdGVUYWJIZWFkIH0gZnJvbSBcIi4vaG9tZVwiXG5cbmZ1bmN0aW9uIGNyZXRlSW5mb0RpdigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvLS1kaXYnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5mb0RpdilcblxuICAgIGNvbnN0IGluZm9EaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBpbmZvRGl2VGl0bGUuaW5uZXJUZXh0ID0gJ0xlIG5vc3RyZSBpbmZvcm1hemlvbmkgOidcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9EaXZUaXRsZSlcblxuICAgIGNvbnN0IHBob25lTmJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGhvbmVOYnIuY2xhc3NMaXN0LmFkZCgncGhvbmUtLW51bWJlcicpXG4gICAgcGhvbmVOYnIuaW5uZXJUZXh0ID0gXCLwn5OeICAgIDA2IDQ1IDAzIDE2IDUyXCJcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHBob25lTmJyKVxuXG4gICAgY29uc3QgcmVzdGF1cmFudExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcmVzdGF1cmFudExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3Bob25lLS1udW1iZXInKVxuICAgIHJlc3RhdXJhbnRMb2NhdGlvbi5pbm5lclRleHQgPSBcIvCfj6AgICAxIFJ1ZSBkdSBQcsOqY2hlLCA0NjgwMCBNb250Y3VxXCJcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRMb2NhdGlvbilcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJlc3RhdXJhbnRIb3Vycy5jbGFzc0xpc3QuYWRkKCdvcGVuaW5nLS1ob3VycycpXG4gICAgcmVzdGF1cmFudEhvdXJzLmlubmVyVGV4dCA9IFwi8J+VsCAgIERhIG1hcnRlZMOsIGEgZG9tZW5pY2EsIGRhbGxlIDExLjAwIGFsbGUgMjMuMDBcIlxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEhvdXJzKVxuXG4gICAgY29uc3QgcmVzdGF1cmFudE1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpXG4gICAgcmVzdGF1cmFudE1hcC5zcmMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjg1My42MTg1MDAzMjc2NDg3ITJkMS4yMDgwMjg0NTEwMTM2MTAxITNkNDQuMzM4MzQ0MDE1NzcxNTMhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDEyYWI4MDk3NmZkOWIwZGQlM0EweGIzM2VlYjIzODY0N2FhZmYhMnNNYWlyaWUhNWUwITNtMiExc2ZyITJzZnIhNHYxNjU0Nzc2NDQzMDU2ITVtMiExc2ZyITJzZnInXG4gICAgcmVzdGF1cmFudE1hcC53aWR0aCA9ICc0MDAnXG4gICAgcmVzdGF1cmFudE1hcC5oZWlnaHQgPSAnMjUwJ1xuICAgIHJlc3RhdXJhbnRNYXAuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJ2xhenknKVxuICAgIHJlc3RhdXJhbnRNYXAuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCBncmV5J1xuICAgIHJlc3RhdXJhbnRNYXAuYWxsb3dGdWxsc2NyZWVuID0gJydcbiAgICByZXN0YXVyYW50TWFwLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtLW1hcCcpXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TWFwKVxuXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtRGl2KCkge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LS1mb3JtLS1kaXYnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pXG5cblxuXG4gICAgY29uc3QgZm9ybURpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGZvcm1EaXZUaXRsZS5pbm5lclRleHQgPSAnQ29udGF0dGF0ZWNpIDonXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybURpdlRpdGxlKVxuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIGZvcm0uYWN0aW9uID0gJ3Bvc3QnXG4gICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtJylcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaXJzdE5hbWUuY2xhc3NMaXN0LmFkZCgnZmlyc3QtLW5hbWUnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3ROYW1lKVxuXG4gICAgY29uc3QgZmlyc3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZmlyc3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmlyc3ROYW1lJylcbiAgICBmaXJzdE5hbWVMYWJlbC5pbm5lclRleHQgPSAnTm9tZSA6J1xuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChmaXJzdE5hbWVMYWJlbClcbiAgICBjb25zdCBCUkZpcnN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChCUkZpcnN0KVxuXG4gICAgY29uc3QgZmlyc3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgZmlyc3ROYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIGZpcnN0TmFtZUlucHV0LmlkID0gJ2ZpcnN0TmFtZSdcbiAgICBmaXJzdE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdKYW5lIConXG4gICAgZmlyc3ROYW1lLmFwcGVuZENoaWxkKGZpcnN0TmFtZUlucHV0KVxuXG4gICAgY29uc3QgbGFzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGxhc3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2xhc3QtLW5hbWUnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFzdE5hbWUpXG5cbiAgICBjb25zdCBsYXN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhc3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbGFzdE5hbWUnKVxuICAgIGxhc3ROYW1lTGFiZWwuaW5uZXJUZXh0ID0gJ0NvZ25vbWUgOidcbiAgICBsYXN0TmFtZS5hcHBlbmRDaGlsZChsYXN0TmFtZUxhYmVsKVxuICAgIGNvbnN0IEJSTGFzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcbiAgICBsYXN0TmFtZS5hcHBlbmRDaGlsZChCUkxhc3QpXG5cbiAgICBjb25zdCBsYXN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGxhc3ROYW1lSW5wdXQudHlwZSA9ICd0ZXh0J1xuICAgIGxhc3ROYW1lSW5wdXQuaWQgPSAnbGFzdE5hbWUnXG4gICAgbGFzdE5hbWVJbnB1dC5wbGFjZWhvbGRlciA9ICdEb2UgKidcbiAgICBsYXN0TmFtZS5hcHBlbmRDaGlsZChsYXN0TmFtZUlucHV0KVxuXG4gICAgY29uc3QgdXNlclBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VyUGhvbmUuY2xhc3NMaXN0LmFkZCgndXNlci0tcGhvbmUnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodXNlclBob25lKVxuXG4gICAgY29uc3QgdXNlclBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgdXNlclBob25lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlclBob25lJylcbiAgICB1c2VyUGhvbmVMYWJlbC5pbm5lclRleHQgPSAnTnVtZXJvIGRpIHRlbGVmb25vIDonXG4gICAgdXNlclBob25lLmFwcGVuZENoaWxkKHVzZXJQaG9uZUxhYmVsKVxuICAgIGNvbnN0IEJSUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgdXNlclBob25lLmFwcGVuZENoaWxkKEJSUGhvbmUpXG5cbiAgICBjb25zdCB1c2VyUGhvbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB1c2VyUGhvbmVJbnB1dC50eXBlID0gJ3Bob25lJ1xuICAgIHVzZXJQaG9uZUlucHV0LmlkID0gJ3VzZXJQaG9uZSdcbiAgICB1c2VyUGhvbmVJbnB1dC5wbGFjZWhvbGRlciA9ICcrMzMnXG4gICAgdXNlclBob25lLmFwcGVuZENoaWxkKHVzZXJQaG9uZUlucHV0KVxuXG4gICAgY29uc3QgdXNlckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VyRW1haWwuY2xhc3NMaXN0LmFkZCgndXNlci0tZW1haWwnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodXNlckVtYWlsKVxuXG4gICAgY29uc3QgdXNlckVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgdXNlckVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlckVtYWlsJylcbiAgICB1c2VyRW1haWxMYWJlbC5pbm5lclRleHQgPSAnSW5kaXJpenpvIGUtbWFpbCA6J1xuICAgIHVzZXJFbWFpbC5hcHBlbmRDaGlsZCh1c2VyRW1haWxMYWJlbClcbiAgICBjb25zdCBCUkVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgIHVzZXJFbWFpbC5hcHBlbmRDaGlsZChCUkVtYWlsKVxuXG4gICAgY29uc3QgdXNlckVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdXNlckVtYWlsSW5wdXQudHlwZSA9ICdlbWFpbCdcbiAgICB1c2VyRW1haWxJbnB1dC5pZCA9ICd1c2VyRW1haWwnXG4gICAgdXNlckVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSAnamFuZWRvZUBkaXNjb25pY28uY29tJ1xuICAgIHVzZXJFbWFpbC5hcHBlbmRDaGlsZCh1c2VyRW1haWxJbnB1dClcblxuICAgIGNvbnN0IHVzZXJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJNc2cuY2xhc3NMaXN0LmFkZCgndXNlci0tbXNnJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKHVzZXJNc2cpXG5cbiAgICBjb25zdCB1c2VyTXNnTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgdXNlck1zZ0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXJNc2cnKVxuICAgIHVzZXJNc2dMYWJlbC5pbm5lclRleHQgPSAnSWwgdm9zdHJvIG1lc3NhZ2dpbyA6J1xuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQodXNlck1zZ0xhYmVsKVxuICAgIGNvbnN0IEJSTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQoQlJNc2cpXG5cbiAgICBjb25zdCB1c2VyTXNnSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgdXNlck1zZ0lucHV0LmlkID0gJ3VzZXJNc2cnXG4gICAgdXNlck1zZ0lucHV0LnBsYWNlaG9sZGVyID0gJy4uLidcbiAgICB1c2VyTXNnSW5wdXQuc2V0QXR0cmlidXRlKCdyb3dzJywgJzUnKVxuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQodXNlck1zZ0lucHV0KVxuXG4gICAgY29uc3QgdXNlclN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlclN1Ym1pdC5jbGFzc0xpc3QuYWRkKCd1c2VyLS1zdWJtaXQnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodXNlclN1Ym1pdClcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ3N1Ym1pdC0tYnV0dG9uJylcbiAgICBzdWJtaXRCdG4udHlwZSA9ICdidXR0b24nXG4gICAgc3VibWl0QnRuLmlubmVyVGV4dCA9ICdTZW5kIHlvdXIgbWVzc2FnZSdcbiAgICB1c2VyU3VibWl0LmFwcGVuZENoaWxkKHN1Ym1pdEJ0bilcblxuXG59XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tbWVudScpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1hYm91dCcpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLS1jb250YWN0JylcbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cbiAgICBjb25zdCBtZW51VGFiSGVhZCA9IGNyZWF0ZVRhYkhlYWQoJ0JlbnZlbnV0aScsICdDT05UQVRUSSAmIElORk8nKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVRhYkhlYWQpXG5cbiAgICBjcmV0ZUluZm9EaXYoKVxuICAgIGNyZWF0ZUZvcm1EaXYoKVxufVxuXG5leHBvcnQgeyBsb2FkQ29udGFjdCB9XG5cbiIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudVwiXG4vLyBpbXBvcnQge2xvYWR9IGZyb20gXCIuL2xvYWRcIlxuXG5mdW5jdGlvbiBjcmVhdGVUYWJIZWFkKHRleHRQLCB0ZXh0SDEsIHRleHRIUiwgdGV4dFAyKSB7XG4gICAgY29uc3QgdGFiSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiSGVhZC5jbGFzc0xpc3QuYWRkKCd0YWItLWhlYWQnKVxuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dFBcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1wJylcbiAgICB0YWJIZWFkLmFwcGVuZENoaWxkKHBhcmFncmFwaClcblxuICAgIGNvbnN0IEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIEgxLnRleHRDb250ZW50ID0gdGV4dEgxXG4gICAgSDEuY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1oMScpXG4gICAgdGFiSGVhZC5hcHBlbmRDaGlsZChIMSlcblxuICAgIGNvbnN0IEhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIEhSLnRleHRDb250ZW50ID0gXCJcIlxuICAgIEhSLmNsYXNzTGlzdC5hZGQoJ3RhYi0taGVhZC0taHInKVxuICAgIHRhYkhlYWQuYXBwZW5kQ2hpbGQoSFIpXG5cbiAgICBjb25zdCBwYXJhZ3JhcGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoMi50ZXh0Q29udGVudCA9IHRleHRQMlxuICAgIHBhcmFncmFwaDIuY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1wMicpXG4gICAgdGFiSGVhZC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgyKVxuXG4gICAgcmV0dXJuIHRhYkhlYWRcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQpIHtcblxuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dvLS10by0tbWVudScpXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHRcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSlcblxuICAgIGZ1bmN0aW9uIGxvYWQoKSB7XG4gICAgICAgIGNvbnN0IGNhc2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXG4gICAgICAgIGNhc2EuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZClcblxuICAgIHJldHVybiBidXR0b25cbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVUYWJIZWFkKCdCZW52ZW51dGknLCAnTGEgYnVvbmEgY3VjaW5hJywgJycsICdJIG1pZ2xpb3JpIHBvc3RpIGRvdmUgbWFuZ2lhcmUgYSBNb250Y3VxJykpXG5cbiAgICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZUJ1dHRvbignVmVkZXJlIGlsIG1lbnUnKSlcblxuICAgIHJldHVybiBob21lXG59XG5cblxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1tZW51JylcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWFib3V0JylcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWNvbnRhY3QnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZSgpKVxuXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVRhYkhlYWQgfVxuZXhwb3J0IHsgbG9hZEhvbWUgfSIsIi8vIGltcG9ydHNcbmltcG9ydCB7IGxvYWRIb21lIH0gZnJvbSBcIi4vaG9tZVwiXG5pbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IHsgbG9hZEFib3V0IH0gZnJvbSBcIi4vYWJvdXRcIlxuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9jb250YWN0XCJcblxuLy8gbGF1bmNoQXBwLmpzXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi0tYmFyJylcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKVxuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0tbmF2JylcbiAgICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaG9tZScpXG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdDQVNBJ1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihob21lQnV0dG9uKTtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0tbmF2JylcbiAgICBtZW51QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVudScpXG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9ICdNRU5VJ1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihtZW51QnV0dG9uKTtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgYWJvdXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYWJvdXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLS1uYXYnKVxuICAgIGFib3V0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWJvdXQnKVxuICAgIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NISSBTSUFNTydcbiAgICBhYm91dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGFib3V0QnV0dG9uKTtcbiAgICAgICAgbG9hZEFib3V0KCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tLW5hdicpXG4gICAgY29udGFjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRhY3QnKVxuICAgIGNvbnRhY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ09OVEFUVE8nXG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGNvbnRhY3RCdXR0b24pO1xuICAgICAgICBsb2FkQ29udGFjdCgpO1xuICAgIH0pXG5cbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tLW5hdlwiKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIHJldHVybiBtYWluXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItdGV4dCcpXG4gICAgZm9vdGVyLmlubmVyVGV4dCA9ICfCqSBkaXNjb25pY28nXG5cbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2Rpc2NvbmljbycpXG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKVxuXG4gICAgY29uc3QgZm9vdGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZm9vdGVySWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1pY29uJylcbiAgICBmb290ZXJJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vYXNzZXRzL2ltYWdlcy9naXRodWItaWNvbi5wbmcnKVxuXG4gICAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJJY29uKVxuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspXG5cbiAgICByZXR1cm4gZm9vdGVyXG59XG5cbmZ1bmN0aW9uIGxhdW5jaEFwcCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSlcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKVxuXG4gICAgc2V0QWN0aXZlQnV0dG9uKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLS1uYXZcIikpO1xuXG4gICAgbG9hZEhvbWUoKVxufVxuXG5leHBvcnQgeyBsYXVuY2hBcHAgfSIsImltcG9ydCB7IGNyZWF0ZVRhYkhlYWQgfSBmcm9tIFwiLi9ob21lXCJcblxuY29uc3QgbWVudSA9IFtcbiAge1xuICAgIG5hbWU6IFwiUGFuIGNhbmlsbGFcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHBsYWNlcmF0LCB0ZWxsdXMgc2l0IGFtZXRcIixcbiAgICBwcmljZTogXCLigqwyMFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJQYW4gc29iYWRvXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBlbGxlbnRlc3F1ZSBwbGFjZXJhdCwgdGVsbHVzIHNpdCBhbWV0XCIsXG4gICAgcHJpY2U6IFwi4oKsMjBcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiUGFuIEFuZGlub1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldFwiLFxuICAgIHByaWNlOiBcIuKCrDIwXCIsXG4gIH0sXG5dO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWFib3V0JylcbiAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1jb250YWN0JylcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLS1tZW51JylcblxuICBjb25zdCBtZW51VGFiSGVhZCA9IGNyZWF0ZVRhYkhlYWQoJ0JlbnZlbnV0aScsICdNZW51JylcbiAgbWFpbi5hcHBlbmRDaGlsZChtZW51VGFiSGVhZClcblxuICBtZW51LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS0taXRlbScpXG5cbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtLm5hbWVcbiAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLS1uYW1lJylcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSlcblxuICAgIGNvbnN0IEl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgSXRlbVRleHQuaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvblxuICAgIEl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tLXRleHQnKVxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKEl0ZW1UZXh0KVxuXG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBpdGVtLnByaWNlXG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tLXByaWNlJylcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpXG5cbiAgICBjb25zdCBpdGVtSFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpXG4gICAgaXRlbUhSLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tLWhyJylcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSFIpXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVJdGVtKVxuICB9KVxuXG59XG5cbmV4cG9ydCB7IGxvYWRNZW51IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKVxuXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuc3R5bGUucmVsID0gJ3N0eWxlc2hlZXQnXG5zdHlsZS5ocmVmID0gJ3N0eWxlLmNzcydcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG5jb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpXG5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKVxuXG5pbXBvcnQge2xhdW5jaEFwcH0gZnJvbSBcIi4vdGFicy9sYXVuY2hBcHBcIlxuXG5sYXVuY2hBcHAoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=