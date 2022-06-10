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

function createTabHead (textP, textH1, textHR, textP2)  {
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

    function load () {
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

    home.appendChild(createTabHead('Benvenuti','La buona cucina','','I migliori posti dove mangiare a Montcuq'))
    
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
    footerIcon.setAttribute('src', '../dist/assets/images/github-icon.png')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLElBQUksK0NBQVE7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwSG9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFhO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUEwQzs7QUFFMUMsMERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvbGF1bmNoQXBwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhYkhlYWQgfSBmcm9tIFwiLi9ob21lXCJcblxuZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tbWVudScpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1jb250YWN0JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tLWFib3V0JylcbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cbiAgICBjb25zdCBhYm91dFRhYkhlYWQgPSBjcmVhdGVUYWJIZWFkKCdCZW52ZW51dGknLCAnSW5mb3JtYXppb25pIHN1IGRpIG5vaScpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFRhYkhlYWQpXG5cbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dFRleHQuaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldCB1bHRyaWNlcyBwb3J0dGl0b3IsIGV4IGV4IGFsaXF1ZXQgcHVydXMsIHBlbGxlbnRlc3F1ZSByaG9uY3VzIGZlbGlzIGlwc3VtIG5lYyBwdXJ1cy4gRG9uZWMgaWQgZW5pbSBpbiByaXN1cyBwZWxsZW50ZXNxdWUgYmxhbmRpdC4gUHJvaW4gc2VkIG5pYmggbmVjIGFyY3UgbW9sbGlzIHJob25jdXMgaW4gc2l0IGFtZXQgYXVndWUuIFN1c3BlbmRpc3NlIG1hZ25hIG5pc2wsIGVsZWlmZW5kIG5vbiB0ZW1wb3IgZXQsIGx1Y3R1cyBpZCBxdWFtLiBOdWxsYSBiaWJlbmR1bSB2dWxwdXRhdGUgYW50ZSwgbm9uIG1hbGVzdWFkYSBlcm9zIGxvYm9ydGlzIGV1aXNtb2QuXCJcbiAgICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtLXRleHQnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KVxuXG4gICAgY29uc3QgQlIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChCUilcblxuICAgIGNvbnN0IGFib3V0VGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dFRleHQyLmlubmVyVGV4dCA9IFwiVXQgZW5pbSBhZCBtaW5pbWEgdmVuaWFtLCBxdWlzIG5vc3RydW0gZXhlcmNpdGF0aW9uZW0gdWxsYW0gY29ycG9yaXMgc3VzY2lwaXQgbGFib3Jpb3NhbSwgbmlzaSB1dCBhbGlxdWlkIGV4IGVhIGNvbW1vZGkgY29uc2VxdWF0dXI/IFF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlIHJlcHJlaGVuZGVyaXQgcXVpIGluIGVhIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIHF1YW0gbmloaWwgbW9sZXN0aWFlIGNvbnNlcXVhdHVyLCB2ZWwgaWxsdW0gcXVpIGRvbG9yZW0gZXVtIGZ1Z2lhdCBxdW8gdm9sdXB0YXMgbnVsbGEgcGFyaWF0dXI/XCJcbiAgICBhYm91dFRleHQyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LS10ZXh0JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0VGV4dDIpXG59XG5cbmV4cG9ydCB7IGxvYWRBYm91dCB9IiwiaW1wb3J0IHsgY3JlYXRlVGFiSGVhZCB9IGZyb20gXCIuL2hvbWVcIlxuXG5mdW5jdGlvbiBjcmV0ZUluZm9EaXYoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mby0tZGl2JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGluZm9EaXYpXG5cbiAgICBjb25zdCBpbmZvRGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgaW5mb0RpdlRpdGxlLmlubmVyVGV4dCA9ICdMZSBub3N0cmUgaW5mb3JtYXppb25pIDonXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvRGl2VGl0bGUpXG5cbiAgICBjb25zdCBwaG9uZU5iciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBob25lTmJyLmNsYXNzTGlzdC5hZGQoJ3Bob25lLS1udW1iZXInKVxuICAgIHBob25lTmJyLmlubmVyVGV4dCA9IFwi8J+TniAgICAwNiA0NSAwMyAxNiA1MlwiXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChwaG9uZU5icilcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJlc3RhdXJhbnRMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdwaG9uZS0tbnVtYmVyJylcbiAgICByZXN0YXVyYW50TG9jYXRpb24uaW5uZXJUZXh0ID0gXCLwn4+gICAgMSBSdWUgZHUgUHLDqmNoZSwgNDY4MDAgTW9udGN1cVwiXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TG9jYXRpb24pXG5cbiAgICBjb25zdCByZXN0YXVyYW50SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByZXN0YXVyYW50SG91cnMuY2xhc3NMaXN0LmFkZCgnb3BlbmluZy0taG91cnMnKVxuICAgIHJlc3RhdXJhbnRIb3Vycy5pbm5lclRleHQgPSBcIvCflbAgICBEYSBtYXJ0ZWTDrCBhIGRvbWVuaWNhLCBkYWxsZSAxMS4wMCBhbGxlIDIzLjAwXCJcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRIb3VycylcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKVxuICAgIHJlc3RhdXJhbnRNYXAuc3JjID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI4NTMuNjE4NTAwMzI3NjQ4NyEyZDEuMjA4MDI4NDUxMDEzNjEwMSEzZDQ0LjMzODM0NDAxNTc3MTUzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgxMmFiODA5NzZmZDliMGRkJTNBMHhiMzNlZWIyMzg2NDdhYWZmITJzTWFpcmllITVlMCEzbTIhMXNmciEyc2ZyITR2MTY1NDc3NjQ0MzA1NiE1bTIhMXNmciEyc2ZyJ1xuICAgIHJlc3RhdXJhbnRNYXAud2lkdGggPSAnNDAwJ1xuICAgIHJlc3RhdXJhbnRNYXAuaGVpZ2h0ID0gJzI1MCdcbiAgICByZXN0YXVyYW50TWFwLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsICdsYXp5JylcbiAgICByZXN0YXVyYW50TWFwLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgZ3JleSdcbiAgICByZXN0YXVyYW50TWFwLmFsbG93RnVsbHNjcmVlbiA9ICcnXG4gICAgcmVzdGF1cmFudE1hcC5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LS1tYXAnKVxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE1hcClcblxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlRm9ybURpdigpIHtcblxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdEZvcm0uY2xhc3NMaXN0LmFkZCgnY29udGFjdC0tZm9ybS0tZGl2JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKVxuXG5cblxuICAgIGNvbnN0IGZvcm1EaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBmb3JtRGl2VGl0bGUuaW5uZXJUZXh0ID0gJ0NvbnRhdHRhdGVjaSA6J1xuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm1EaXZUaXRsZSlcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbiAgICBmb3JtLmFjdGlvbiA9ICdwb3N0J1xuICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnZm9ybScpXG4gICAgY29udGFjdEZvcm0uYXBwZW5kQ2hpbGQoZm9ybSlcblxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZmlyc3ROYW1lLmNsYXNzTGlzdC5hZGQoJ2ZpcnN0LS1uYW1lJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZpcnN0TmFtZSlcblxuICAgIGNvbnN0IGZpcnN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGZpcnN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2ZpcnN0TmFtZScpXG4gICAgZmlyc3ROYW1lTGFiZWwuaW5uZXJUZXh0ID0gJ05vbWUgOidcbiAgICBmaXJzdE5hbWUuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lTGFiZWwpXG4gICAgY29uc3QgQlJGaXJzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcbiAgICBmaXJzdE5hbWUuYXBwZW5kQ2hpbGQoQlJGaXJzdClcblxuICAgIGNvbnN0IGZpcnN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGZpcnN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBmaXJzdE5hbWVJbnB1dC5pZCA9ICdmaXJzdE5hbWUnXG4gICAgZmlyc3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnSmFuZSAqJ1xuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChmaXJzdE5hbWVJbnB1dClcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsYXN0TmFtZS5jbGFzc0xpc3QuYWRkKCdsYXN0LS1uYW1lJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhc3ROYW1lKVxuXG4gICAgY29uc3QgbGFzdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYXN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhc3ROYW1lJylcbiAgICBsYXN0TmFtZUxhYmVsLmlubmVyVGV4dCA9ICdDb2dub21lIDonXG4gICAgbGFzdE5hbWUuYXBwZW5kQ2hpbGQobGFzdE5hbWVMYWJlbClcbiAgICBjb25zdCBCUkxhc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgbGFzdE5hbWUuYXBwZW5kQ2hpbGQoQlJMYXN0KVxuXG4gICAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBsYXN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBsYXN0TmFtZUlucHV0LmlkID0gJ2xhc3ROYW1lJ1xuICAgIGxhc3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRG9lIConXG4gICAgbGFzdE5hbWUuYXBwZW5kQ2hpbGQobGFzdE5hbWVJbnB1dClcblxuICAgIGNvbnN0IHVzZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlclBob25lLmNsYXNzTGlzdC5hZGQoJ3VzZXItLXBob25lJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKHVzZXJQaG9uZSlcblxuICAgIGNvbnN0IHVzZXJQaG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHVzZXJQaG9uZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXJQaG9uZScpXG4gICAgdXNlclBob25lTGFiZWwuaW5uZXJUZXh0ID0gJ051bWVybyBkaSB0ZWxlZm9ubyA6J1xuICAgIHVzZXJQaG9uZS5hcHBlbmRDaGlsZCh1c2VyUGhvbmVMYWJlbClcbiAgICBjb25zdCBCUlBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgIHVzZXJQaG9uZS5hcHBlbmRDaGlsZChCUlBob25lKVxuXG4gICAgY29uc3QgdXNlclBob25lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgdXNlclBob25lSW5wdXQudHlwZSA9ICdwaG9uZSdcbiAgICB1c2VyUGhvbmVJbnB1dC5pZCA9ICd1c2VyUGhvbmUnXG4gICAgdXNlclBob25lSW5wdXQucGxhY2Vob2xkZXIgPSAnKzMzJ1xuICAgIHVzZXJQaG9uZS5hcHBlbmRDaGlsZCh1c2VyUGhvbmVJbnB1dClcblxuICAgIGNvbnN0IHVzZXJFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlckVtYWlsLmNsYXNzTGlzdC5hZGQoJ3VzZXItLWVtYWlsJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKHVzZXJFbWFpbClcblxuICAgIGNvbnN0IHVzZXJFbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHVzZXJFbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXJFbWFpbCcpXG4gICAgdXNlckVtYWlsTGFiZWwuaW5uZXJUZXh0ID0gJ0luZGlyaXp6byBlLW1haWwgOidcbiAgICB1c2VyRW1haWwuYXBwZW5kQ2hpbGQodXNlckVtYWlsTGFiZWwpXG4gICAgY29uc3QgQlJFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcbiAgICB1c2VyRW1haWwuYXBwZW5kQ2hpbGQoQlJFbWFpbClcblxuICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHVzZXJFbWFpbElucHV0LnR5cGUgPSAnZW1haWwnXG4gICAgdXNlckVtYWlsSW5wdXQuaWQgPSAndXNlckVtYWlsJ1xuICAgIHVzZXJFbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ2phbmVkb2VAZGlzY29uaWNvLmNvbSdcbiAgICB1c2VyRW1haWwuYXBwZW5kQ2hpbGQodXNlckVtYWlsSW5wdXQpXG5cbiAgICBjb25zdCB1c2VyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VyTXNnLmNsYXNzTGlzdC5hZGQoJ3VzZXItLW1zZycpXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh1c2VyTXNnKVxuXG4gICAgY29uc3QgdXNlck1zZ0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHVzZXJNc2dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyTXNnJylcbiAgICB1c2VyTXNnTGFiZWwuaW5uZXJUZXh0ID0gJ0lsIHZvc3RybyBtZXNzYWdnaW8gOidcbiAgICB1c2VyTXNnLmFwcGVuZENoaWxkKHVzZXJNc2dMYWJlbClcbiAgICBjb25zdCBCUk1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcbiAgICB1c2VyTXNnLmFwcGVuZENoaWxkKEJSTXNnKVxuXG4gICAgY29uc3QgdXNlck1zZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHVzZXJNc2dJbnB1dC5pZCA9ICd1c2VyTXNnJ1xuICAgIHVzZXJNc2dJbnB1dC5wbGFjZWhvbGRlciA9ICcuLi4nXG4gICAgdXNlck1zZ0lucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICc1JylcbiAgICB1c2VyTXNnLmFwcGVuZENoaWxkKHVzZXJNc2dJbnB1dClcblxuICAgIGNvbnN0IHVzZXJTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJTdWJtaXQuY2xhc3NMaXN0LmFkZCgndXNlci0tc3VibWl0JylcbiAgICBmb3JtLmFwcGVuZENoaWxkKHVzZXJTdWJtaXQpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtLWJ1dHRvbicpXG4gICAgc3VibWl0QnRuLnR5cGUgPSAnYnV0dG9uJ1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU2VuZCB5b3VyIG1lc3NhZ2UnXG4gICAgdXNlclN1Ym1pdC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG5cblxufVxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLW1lbnUnKVxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tYWJvdXQnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi0tY29udGFjdCcpXG4gICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXG4gICAgY29uc3QgbWVudVRhYkhlYWQgPSBjcmVhdGVUYWJIZWFkKCdCZW52ZW51dGknLCAnQ09OVEFUVEkgJiBJTkZPJylcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVUYWJIZWFkKVxuXG4gICAgY3JldGVJbmZvRGl2KClcbiAgICBjcmVhdGVGb3JtRGl2KClcbn1cblxuZXhwb3J0IHsgbG9hZENvbnRhY3QgfVxuXG4iLCJpbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnVcIlxuLy8gaW1wb3J0IHtsb2FkfSBmcm9tIFwiLi9sb2FkXCJcblxuZnVuY3Rpb24gY3JlYXRlVGFiSGVhZCAodGV4dFAsIHRleHRIMSwgdGV4dEhSLCB0ZXh0UDIpICB7XG4gICAgY29uc3QgdGFiSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiSGVhZC5jbGFzc0xpc3QuYWRkKCd0YWItLWhlYWQnKVxuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dFBcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1wJylcbiAgICB0YWJIZWFkLmFwcGVuZENoaWxkKHBhcmFncmFwaClcblxuICAgIGNvbnN0IEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIEgxLnRleHRDb250ZW50ID0gdGV4dEgxXG4gICAgSDEuY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1oMScpXG4gICAgdGFiSGVhZC5hcHBlbmRDaGlsZChIMSlcblxuICAgIGNvbnN0IEhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIEhSLnRleHRDb250ZW50ID0gXCJcIlxuICAgIEhSLmNsYXNzTGlzdC5hZGQoJ3RhYi0taGVhZC0taHInKVxuICAgIHRhYkhlYWQuYXBwZW5kQ2hpbGQoSFIpXG5cbiAgICBjb25zdCBwYXJhZ3JhcGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoMi50ZXh0Q29udGVudCA9IHRleHRQMlxuICAgIHBhcmFncmFwaDIuY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1wMicpXG4gICAgdGFiSGVhZC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgyKVxuXG4gICAgcmV0dXJuIHRhYkhlYWRcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQpIHtcblxuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2dvLS10by0tbWVudScpXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHRcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSlcblxuICAgIGZ1bmN0aW9uIGxvYWQgKCkge1xuICAgICAgICBjb25zdCBjYXNhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hvbWUnKVxuICAgICAgICBjYXNhLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXG5cbiAgICAgICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51JylcbiAgICAgICAgbWVudS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIH1cblxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWQpXG5cbiAgICByZXR1cm4gYnV0dG9uXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJylcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlVGFiSGVhZCgnQmVudmVudXRpJywnTGEgYnVvbmEgY3VjaW5hJywnJywnSSBtaWdsaW9yaSBwb3N0aSBkb3ZlIG1hbmdpYXJlIGEgTW9udGN1cScpKVxuICAgIFxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCdWZWRlcmUgaWwgbWVudScpKVxuXG4gICAgcmV0dXJuIGhvbWVcbn1cblxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLW1lbnUnKVxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tYWJvdXQnKVxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tY29udGFjdCcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpXG5cbn1cblxuZXhwb3J0IHtjcmVhdGVUYWJIZWFkfSBcbmV4cG9ydCB7bG9hZEhvbWV9IiwiLy8gaW1wb3J0c1xuaW1wb3J0IHsgbG9hZEhvbWUgfSBmcm9tIFwiLi9ob21lXCJcbmltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudVwiXG5pbXBvcnQgeyBsb2FkQWJvdXQgfSBmcm9tIFwiLi9hYm91dFwiXG5pbXBvcnQgeyBsb2FkQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIlxuXG4vLyBsYXVuY2hBcHAuanNcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LS1iYXInKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpXG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLS1uYXYnKVxuICAgIGhvbWVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdob21lJylcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0NBU0EnXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdXR0b24pO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLS1uYXYnKVxuICAgIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdtZW51JylcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01FTlUnXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tLW5hdicpXG4gICAgYWJvdXRCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdhYm91dCcpXG4gICAgYWJvdXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ0hJIFNJQU1PJ1xuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oYWJvdXRCdXR0b24pO1xuICAgICAgICBsb2FkQWJvdXQoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0tbmF2JylcbiAgICBjb250YWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpXG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDT05UQVRUTydcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oY29udGFjdEJ1dHRvbik7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSlcblxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnV0dG9uKVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChhYm91dEJ1dHRvbilcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbilcblxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZnVuY3Rpb24gc2V0QWN0aXZlQnV0dG9uKGJ1dHRvbikge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJ1dHRvbi0tbmF2XCIpO1xuXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgaWYgKGJ1dHRvbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG5cbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZm9vdGVyVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlci10ZXh0JylcbiAgICBmb290ZXIuaW5uZXJUZXh0ID0gJ8KpIGRpc2NvbmljbydcblxuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vZGlzY29uaWNvJylcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpXG5cbiAgICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBmb290ZXJJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWljb24nKVxuICAgIGZvb3Rlckljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vZGlzdC9hc3NldHMvaW1hZ2VzL2dpdGh1Yi1pY29uLnBuZycpXG5cbiAgICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGZvb3Rlckljb24pXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluaylcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZnVuY3Rpb24gbGF1bmNoQXBwKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpXG5cbiAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tLW5hdlwiKSk7XG5cbiAgICBsb2FkSG9tZSgpXG59XG5cbmV4cG9ydCB7IGxhdW5jaEFwcCB9IiwiaW1wb3J0IHtjcmVhdGVUYWJIZWFkfSBmcm9tIFwiLi9ob21lXCIgICAgXG5cbmNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJQYW4gY2FuaWxsYVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHBsYWNlcmF0LCB0ZWxsdXMgc2l0IGFtZXRcIixcbiAgICAgIHByaWNlOiBcIuKCrDIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlBhbiBzb2JhZG9cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBlbGxlbnRlc3F1ZSBwbGFjZXJhdCwgdGVsbHVzIHNpdCBhbWV0XCIsXG4gICAgICBwcmljZTogXCLigqwyMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQYW4gQW5kaW5vXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldFwiLFxuICAgICAgcHJpY2U6IFwi4oKsMjBcIixcbiAgICB9LFxuICBdO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWFib3V0JylcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWNvbnRhY3QnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi0tbWVudScpXG4gICAgXG4gICAgY29uc3QgbWVudVRhYkhlYWQgPSBjcmVhdGVUYWJIZWFkKCdCZW52ZW51dGknLCAnTWVudScpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51VGFiSGVhZClcblxuICAgIG1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtLWl0ZW0nKVxuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtLm5hbWVcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS0tbmFtZScpXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgSXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgSXRlbVRleHQuaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICBJdGVtVGV4dC5jbGFzc0xpc3QuYWRkKCdpdGVtLS10ZXh0JylcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoSXRlbVRleHQpXG5cbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gaXRlbS5wcmljZVxuICAgICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS0tcHJpY2UnKVxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpXG5cbiAgICAgICAgY29uc3QgaXRlbUhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgICAgICBpdGVtSFIuY2xhc3NMaXN0LmFkZCgnaXRlbS0taHInKVxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSFIpXG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbSlcbiAgICB9KVxuICAgIFxufVxuXG5leHBvcnQge2xvYWRNZW51fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpXG5cbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5zdHlsZS5yZWwgPSAnc3R5bGVzaGVldCdcbnN0eWxlLmhyZWYgPSAnc3R5bGUuY3NzJ1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbmNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJylcbmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG5cbmltcG9ydCB7bGF1bmNoQXBwfSBmcm9tIFwiLi90YWJzL2xhdW5jaEFwcFwiXG5cbmxhdW5jaEFwcCgpXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==