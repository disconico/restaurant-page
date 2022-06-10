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
   



function creteInfoDiv () {
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



function createFormDiv () {
    
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
    userMsgInput.setAttribute('rows','5')
    userMsg.appendChild(userMsgInput)

    const userSubmit = document.createElement('div')
    userSubmit.classList.add('user--submit')
    form.appendChild(userSubmit)

    const submitBtn = document.createElement('button')
    submitBtn.classList.add ('submit--button')
    submitBtn.type = 'button'
    submitBtn.innerText = 'Send your message'
    userSubmit.appendChild(submitBtn)


}




function loadContact () {
    const main = document.querySelector('main')
    main.textContent = ""
    main.classList.remove('main--menu')
    main.classList.remove('main--about')
    main.classList.add('main--contact')
    main.classList.toggle('active')

    const menuTabHead = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createTabHead)('Benvenuti', 'CCONTATTI & INFO')
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
    footerIcon.setAttribute('src', '../src/assets/images/github-icon.png')

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
style.href = '../src/styles/style.css'

const body = document.querySelector('body')
body.appendChild(content)

const head = document.querySelector('head')
head.appendChild(style)

;

(0,_tabs_launchApp__WEBPACK_IMPORTED_MODULE_0__.launchApp)()


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBSSwrQ0FBUTs7QUFFWjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0SG9DOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9EQUFhO0FBQ3JDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7Ozs7Ozs7O1VDM0RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxDQUEwQzs7QUFFMUMsMERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvbGF1bmNoQXBwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhYkhlYWQgfSBmcm9tIFwiLi9ob21lXCJcblxuZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tbWVudScpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1jb250YWN0JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tLWFib3V0JylcbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cbiAgICBjb25zdCBhYm91dFRhYkhlYWQgPSBjcmVhdGVUYWJIZWFkKCdCZW52ZW51dGknLCAnSW5mb3JtYXppb25pIHN1IGRpIG5vaScpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFRhYkhlYWQpXG5cbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dFRleHQuaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldCB1bHRyaWNlcyBwb3J0dGl0b3IsIGV4IGV4IGFsaXF1ZXQgcHVydXMsIHBlbGxlbnRlc3F1ZSByaG9uY3VzIGZlbGlzIGlwc3VtIG5lYyBwdXJ1cy4gRG9uZWMgaWQgZW5pbSBpbiByaXN1cyBwZWxsZW50ZXNxdWUgYmxhbmRpdC4gUHJvaW4gc2VkIG5pYmggbmVjIGFyY3UgbW9sbGlzIHJob25jdXMgaW4gc2l0IGFtZXQgYXVndWUuIFN1c3BlbmRpc3NlIG1hZ25hIG5pc2wsIGVsZWlmZW5kIG5vbiB0ZW1wb3IgZXQsIGx1Y3R1cyBpZCBxdWFtLiBOdWxsYSBiaWJlbmR1bSB2dWxwdXRhdGUgYW50ZSwgbm9uIG1hbGVzdWFkYSBlcm9zIGxvYm9ydGlzIGV1aXNtb2QuXCJcbiAgICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtLXRleHQnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KVxuXG4gICAgY29uc3QgQlIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChCUilcblxuICAgIGNvbnN0IGFib3V0VGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dFRleHQyLmlubmVyVGV4dCA9IFwiVXQgZW5pbSBhZCBtaW5pbWEgdmVuaWFtLCBxdWlzIG5vc3RydW0gZXhlcmNpdGF0aW9uZW0gdWxsYW0gY29ycG9yaXMgc3VzY2lwaXQgbGFib3Jpb3NhbSwgbmlzaSB1dCBhbGlxdWlkIGV4IGVhIGNvbW1vZGkgY29uc2VxdWF0dXI/IFF1aXMgYXV0ZW0gdmVsIGV1bSBpdXJlIHJlcHJlaGVuZGVyaXQgcXVpIGluIGVhIHZvbHVwdGF0ZSB2ZWxpdCBlc3NlIHF1YW0gbmloaWwgbW9sZXN0aWFlIGNvbnNlcXVhdHVyLCB2ZWwgaWxsdW0gcXVpIGRvbG9yZW0gZXVtIGZ1Z2lhdCBxdW8gdm9sdXB0YXMgbnVsbGEgcGFyaWF0dXI/XCJcbiAgICBhYm91dFRleHQyLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LS10ZXh0JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0VGV4dDIpXG5cblxufVxuXG5leHBvcnQgeyBsb2FkQWJvdXQgfSIsImltcG9ydCB7Y3JlYXRlVGFiSGVhZH0gZnJvbSBcIi4vaG9tZVwiICAgXG5cblxuXG5mdW5jdGlvbiBjcmV0ZUluZm9EaXYgKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2luZm8tLWRpdicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvRGl2KVxuXG4gICAgY29uc3QgaW5mb0RpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGluZm9EaXZUaXRsZS5pbm5lclRleHQgPSAnTGUgbm9zdHJlIGluZm9ybWF6aW9uaSA6J1xuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoaW5mb0RpdlRpdGxlKVxuXG4gICAgY29uc3QgcGhvbmVOYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBwaG9uZU5ici5jbGFzc0xpc3QuYWRkKCdwaG9uZS0tbnVtYmVyJylcbiAgICBwaG9uZU5ici5pbm5lclRleHQgPSBcIvCfk54gICAgMDYgNDUgMDMgMTYgNTJcIlxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocGhvbmVOYnIpXG5cbiAgICBjb25zdCByZXN0YXVyYW50TG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICByZXN0YXVyYW50TG9jYXRpb24uY2xhc3NMaXN0LmFkZCgncGhvbmUtLW51bWJlcicpXG4gICAgcmVzdGF1cmFudExvY2F0aW9uLmlubmVyVGV4dCA9IFwi8J+PoCAgIDEgUnVlIGR1IFByw6pjaGUsIDQ2ODAwIE1vbnRjdXFcIlxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudExvY2F0aW9uKVxuXG4gICAgY29uc3QgcmVzdGF1cmFudEhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcmVzdGF1cmFudEhvdXJzLmNsYXNzTGlzdC5hZGQoJ29wZW5pbmctLWhvdXJzJylcbiAgICByZXN0YXVyYW50SG91cnMuaW5uZXJUZXh0ID0gXCLwn5WwICAgRGEgbWFydGVkw6wgYSBkb21lbmljYSwgZGFsbGUgMTEuMDAgYWxsZSAyMy4wMFwiXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50SG91cnMpXG5cbiAgICBjb25zdCByZXN0YXVyYW50TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICByZXN0YXVyYW50TWFwLnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyODUzLjYxODUwMDMyNzY0ODchMmQxLjIwODAyODQ1MTAxMzYxMDEhM2Q0NC4zMzgzNDQwMTU3NzE1MyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTJhYjgwOTc2ZmQ5YjBkZCUzQTB4YjMzZWViMjM4NjQ3YWFmZiEyc01haXJpZSE1ZTAhM20yITFzZnIhMnNmciE0djE2NTQ3NzY0NDMwNTYhNW0yITFzZnIhMnNmcidcbiAgICByZXN0YXVyYW50TWFwLndpZHRoID0gJzQwMCdcbiAgICByZXN0YXVyYW50TWFwLmhlaWdodCA9ICcyNTAnXG4gICAgcmVzdGF1cmFudE1hcC5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpXG4gICAgcmVzdGF1cmFudE1hcC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGdyZXknXG4gICAgcmVzdGF1cmFudE1hcC5hbGxvd0Z1bGxzY3JlZW4gPSAnJ1xuICAgIHJlc3RhdXJhbnRNYXAuY2xhc3NMaXN0LmFkZCgncmVzdGF1cmFudC0tbWFwJylcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRNYXApXG5cbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm1EaXYgKCkge1xuICAgIFxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBjb250YWN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFjdEZvcm0uY2xhc3NMaXN0LmFkZCgnY29udGFjdC0tZm9ybS0tZGl2JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RGb3JtKVxuXG4gICAgXG5cbiAgICBjb25zdCBmb3JtRGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgZm9ybURpdlRpdGxlLmlubmVyVGV4dCA9ICdDb250YXR0YXRlY2kgOidcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2VGl0bGUpXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5hY3Rpb24gPSAncG9zdCdcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKVxuICAgIGNvbnRhY3RGb3JtLmFwcGVuZENoaWxkKGZvcm0pXG5cbiAgICBjb25zdCBmaXJzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGZpcnN0TmFtZS5jbGFzc0xpc3QuYWRkKCdmaXJzdC0tbmFtZScpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmaXJzdE5hbWUpXG5cbiAgICBjb25zdCBmaXJzdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBmaXJzdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdmaXJzdE5hbWUnKVxuICAgIGZpcnN0TmFtZUxhYmVsLmlubmVyVGV4dCA9ICdOb21lIDonXG4gICAgZmlyc3ROYW1lLmFwcGVuZENoaWxkKGZpcnN0TmFtZUxhYmVsKVxuICAgIGNvbnN0IEJSRmlyc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgZmlyc3ROYW1lLmFwcGVuZENoaWxkKEJSRmlyc3QpXG5cbiAgICBjb25zdCBmaXJzdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBmaXJzdE5hbWVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgZmlyc3ROYW1lSW5wdXQuaWQgPSAnZmlyc3ROYW1lJ1xuICAgIGZpcnN0TmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0phbmUgKidcbiAgICBmaXJzdE5hbWUuYXBwZW5kQ2hpbGQoZmlyc3ROYW1lSW5wdXQpXG5cbiAgICBjb25zdCBsYXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgbGFzdE5hbWUuY2xhc3NMaXN0LmFkZCgnbGFzdC0tbmFtZScpXG4gICAgZm9ybS5hcHBlbmRDaGlsZChsYXN0TmFtZSlcblxuICAgIGNvbnN0IGxhc3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFzdE5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdsYXN0TmFtZScpXG4gICAgbGFzdE5hbWVMYWJlbC5pbm5lclRleHQgPSAnQ29nbm9tZSA6J1xuICAgIGxhc3ROYW1lLmFwcGVuZENoaWxkKGxhc3ROYW1lTGFiZWwpXG4gICAgY29uc3QgQlJMYXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgIGxhc3ROYW1lLmFwcGVuZENoaWxkKEJSTGFzdClcblxuICAgIGNvbnN0IGxhc3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbGFzdE5hbWVJbnB1dC50eXBlID0gJ3RleHQnXG4gICAgbGFzdE5hbWVJbnB1dC5pZCA9ICdsYXN0TmFtZSdcbiAgICBsYXN0TmFtZUlucHV0LnBsYWNlaG9sZGVyID0gJ0RvZSAqJ1xuICAgIGxhc3ROYW1lLmFwcGVuZENoaWxkKGxhc3ROYW1lSW5wdXQpXG5cbiAgICBjb25zdCB1c2VyUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJQaG9uZS5jbGFzc0xpc3QuYWRkKCd1c2VyLS1waG9uZScpXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh1c2VyUGhvbmUpXG5cbiAgICBjb25zdCB1c2VyUGhvbmVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB1c2VyUGhvbmVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyUGhvbmUnKVxuICAgIHVzZXJQaG9uZUxhYmVsLmlubmVyVGV4dCA9ICdOdW1lcm8gZGkgdGVsZWZvbm8gOidcbiAgICB1c2VyUGhvbmUuYXBwZW5kQ2hpbGQodXNlclBob25lTGFiZWwpXG4gICAgY29uc3QgQlJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJylcbiAgICB1c2VyUGhvbmUuYXBwZW5kQ2hpbGQoQlJQaG9uZSlcblxuICAgIGNvbnN0IHVzZXJQaG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHVzZXJQaG9uZUlucHV0LnR5cGUgPSAncGhvbmUnXG4gICAgdXNlclBob25lSW5wdXQuaWQgPSAndXNlclBob25lJ1xuICAgIHVzZXJQaG9uZUlucHV0LnBsYWNlaG9sZGVyID0gJyszMydcbiAgICB1c2VyUGhvbmUuYXBwZW5kQ2hpbGQodXNlclBob25lSW5wdXQpXG5cbiAgICBjb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJFbWFpbC5jbGFzc0xpc3QuYWRkKCd1c2VyLS1lbWFpbCcpXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh1c2VyRW1haWwpXG5cbiAgICBjb25zdCB1c2VyRW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB1c2VyRW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyRW1haWwnKVxuICAgIHVzZXJFbWFpbExhYmVsLmlubmVyVGV4dCA9ICdJbmRpcml6em8gZS1tYWlsIDonXG4gICAgdXNlckVtYWlsLmFwcGVuZENoaWxkKHVzZXJFbWFpbExhYmVsKVxuICAgIGNvbnN0IEJSRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgdXNlckVtYWlsLmFwcGVuZENoaWxkKEJSRW1haWwpXG5cbiAgICBjb25zdCB1c2VyRW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB1c2VyRW1haWxJbnB1dC50eXBlID0gJ2VtYWlsJ1xuICAgIHVzZXJFbWFpbElucHV0LmlkID0gJ3VzZXJFbWFpbCdcbiAgICB1c2VyRW1haWxJbnB1dC5wbGFjZWhvbGRlciA9ICdqYW5lZG9lQGRpc2Nvbmljby5jb20nXG4gICAgdXNlckVtYWlsLmFwcGVuZENoaWxkKHVzZXJFbWFpbElucHV0KVxuXG4gICAgY29uc3QgdXNlck1zZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlck1zZy5jbGFzc0xpc3QuYWRkKCd1c2VyLS1tc2cnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodXNlck1zZylcblxuICAgIGNvbnN0IHVzZXJNc2dMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB1c2VyTXNnTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlck1zZycpXG4gICAgdXNlck1zZ0xhYmVsLmlubmVyVGV4dCA9ICdJbCB2b3N0cm8gbWVzc2FnZ2lvIDonXG4gICAgdXNlck1zZy5hcHBlbmRDaGlsZCh1c2VyTXNnTGFiZWwpXG4gICAgY29uc3QgQlJNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpXG4gICAgdXNlck1zZy5hcHBlbmRDaGlsZChCUk1zZylcblxuICAgIGNvbnN0IHVzZXJNc2dJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbiAgICB1c2VyTXNnSW5wdXQuaWQgPSAndXNlck1zZydcbiAgICB1c2VyTXNnSW5wdXQucGxhY2Vob2xkZXIgPSAnLi4uJ1xuICAgIHVzZXJNc2dJbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCc1JylcbiAgICB1c2VyTXNnLmFwcGVuZENoaWxkKHVzZXJNc2dJbnB1dClcblxuICAgIGNvbnN0IHVzZXJTdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJTdWJtaXQuY2xhc3NMaXN0LmFkZCgndXNlci0tc3VibWl0JylcbiAgICBmb3JtLmFwcGVuZENoaWxkKHVzZXJTdWJtaXQpXG5cbiAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkICgnc3VibWl0LS1idXR0b24nKVxuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ2J1dHRvbidcbiAgICBzdWJtaXRCdG4uaW5uZXJUZXh0ID0gJ1NlbmQgeW91ciBtZXNzYWdlJ1xuICAgIHVzZXJTdWJtaXQuYXBwZW5kQ2hpbGQoc3VibWl0QnRuKVxuXG5cbn1cblxuXG5cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QgKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tbWVudScpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1hYm91dCcpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLS1jb250YWN0JylcbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cbiAgICBjb25zdCBtZW51VGFiSGVhZCA9IGNyZWF0ZVRhYkhlYWQoJ0JlbnZlbnV0aScsICdDQ09OVEFUVEkgJiBJTkZPJylcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVUYWJIZWFkKVxuXG4gICAgY3JldGVJbmZvRGl2KClcbiAgICBjcmVhdGVGb3JtRGl2KClcbn1cblxuZXhwb3J0IHtsb2FkQ29udGFjdH1cblxuICAgICAiLCJpbXBvcnQgeyBsb2FkTWVudSB9IGZyb20gXCIuL21lbnVcIlxuLy8gaW1wb3J0IHtsb2FkfSBmcm9tIFwiLi9sb2FkXCJcblxuZnVuY3Rpb24gY3JlYXRlVGFiSGVhZCAodGV4dFAsIHRleHRIMSwgdGV4dEhSLCB0ZXh0UDIpICB7XG4gICAgY29uc3QgdGFiSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFiSGVhZC5jbGFzc0xpc3QuYWRkKCd0YWItLWhlYWQnKVxuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dFBcbiAgICBwYXJhZ3JhcGguY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1wJylcbiAgICB0YWJIZWFkLmFwcGVuZENoaWxkKHBhcmFncmFwaClcblxuICAgIGNvbnN0IEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIEgxLnRleHRDb250ZW50ID0gdGV4dEgxXG4gICAgSDEuY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1oMScpXG4gICAgdGFiSGVhZC5hcHBlbmRDaGlsZChIMSlcblxuICAgIGNvbnN0IEhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIEhSLnRleHRDb250ZW50ID0gXCJcIlxuICAgIEhSLmNsYXNzTGlzdC5hZGQoJ3RhYi0taGVhZC0taHInKVxuICAgIHRhYkhlYWQuYXBwZW5kQ2hpbGQoSFIpXG5cbiAgICBjb25zdCBwYXJhZ3JhcGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoMi50ZXh0Q29udGVudCA9IHRleHRQMlxuICAgIHBhcmFncmFwaDIuY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkLS1wMicpXG4gICAgdGFiSGVhZC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgyKVxuXG5cbiAgICByZXR1cm4gdGFiSGVhZFxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24odGV4dCkge1xuXG5cbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbidcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnZ28tLXRvLS1tZW51JylcbiAgICBidXR0b24uaW5uZXJUZXh0ID0gdGV4dFxuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KVxuXG4gICAgZnVuY3Rpb24gbG9hZCAoKSB7XG4gICAgICAgIGNvbnN0IGNhc2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZScpXG4gICAgICAgIGNhc2EuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcblxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKVxuICAgICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG4gICAgfVxuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZClcblxuICAgIHJldHVybiBidXR0b25cbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVUYWJIZWFkKCdCZW52ZW51dGknLCdMYSBidW9uYSBjdWNpbmEnLCcnLCdJIG1pZ2xpb3JpIHBvc3RpIGRvdmUgbWFuZ2lhcmUgYSBNb250Y3VxJykpXG4gICAgXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oJ1ZlZGVyZSBpbCBtZW51JykpXG5cbiAgICByZXR1cm4gaG9tZVxufVxuXG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tbWVudScpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1hYm91dCcpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1jb250YWN0JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSlcblxufVxuXG5leHBvcnQge2NyZWF0ZVRhYkhlYWR9IFxuZXhwb3J0IHtsb2FkSG9tZX0iLCIvLyBpbXBvcnRzXG5pbXBvcnQgeyBsb2FkSG9tZSB9IGZyb20gXCIuL2hvbWVcIlxuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51XCJcbmltcG9ydCB7IGxvYWRBYm91dCB9IGZyb20gXCIuL2Fib3V0XCJcbmltcG9ydCB7IGxvYWRDb250YWN0IH0gZnJvbSBcIi4vY29udGFjdFwiXG5cbi8vIGxhdW5jaEFwcC5qc1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpXG5cbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYtLWJhcicpXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkJhcilcblxuICAgIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tLW5hdicpXG4gICAgaG9tZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2hvbWUnKVxuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSAnQ0FTQSdcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgfSlcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tLW5hdicpXG4gICAgbWVudUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKVxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTUVOVSdcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0tbmF2JylcbiAgICBhYm91dEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Fib3V0JylcbiAgICBhYm91dEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDSEkgU0lBTU8nXG4gICAgYWJvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihhYm91dEJ1dHRvbik7XG4gICAgICAgIGxvYWRBYm91dCgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLS1uYXYnKVxuICAgIGNvbnRhY3RCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0JylcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ0NPTlRBVFRPJ1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICB9KVxuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5mdW5jdGlvbiBzZXRBY3RpdmVCdXR0b24oYnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLS1uYXZcIik7XG5cbiAgICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG5cbiAgICByZXR1cm4gbWFpblxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKVxuXG4gICAgY29uc3QgZm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIGZvb3RlclRleHQuc2V0QXR0cmlidXRlKCdpZCcsICdmb290ZXItdGV4dCcpXG4gICAgZm9vdGVyLmlubmVyVGV4dCA9ICfCqSBkaXNjb25pY28nXG5cbiAgICBjb25zdCBmb290ZXJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnaHR0cHM6Ly9naXRodWIuY29tL2Rpc2NvbmljbycpXG4gICAgZm9vdGVyTGluay5zZXRBdHRyaWJ1dGUoJ3RhcmdldCcsICdfYmxhbmsnKVxuXG4gICAgY29uc3QgZm9vdGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZm9vdGVySWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2dpdGh1Yi1pY29uJylcbiAgICBmb290ZXJJY29uLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4uL3NyYy9hc3NldHMvaW1hZ2VzL2dpdGh1Yi1pY29uLnBuZycpXG5cbiAgICBmb290ZXJMaW5rLmFwcGVuZENoaWxkKGZvb3Rlckljb24pXG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dClcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyTGluaylcblxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZnVuY3Rpb24gbGF1bmNoQXBwKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpXG5cbiAgICBzZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tLW5hdlwiKSk7XG5cbiAgICBsb2FkSG9tZSgpXG5cbn1cblxuZXhwb3J0IHsgbGF1bmNoQXBwIH0iLCJpbXBvcnQge2NyZWF0ZVRhYkhlYWR9IGZyb20gXCIuL2hvbWVcIiAgICBcblxuY29uc3QgbWVudSA9IFtcbiAgICB7XG4gICAgICBuYW1lOiBcIlBhbiBjYW5pbGxhXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldFwiLFxuICAgICAgcHJpY2U6IFwi4oKsMjBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUGFuIHNvYmFkb1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHBsYWNlcmF0LCB0ZWxsdXMgc2l0IGFtZXRcIixcbiAgICAgIHByaWNlOiBcIuKCrDIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlBhbiBBbmRpbm9cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBlbGxlbnRlc3F1ZSBwbGFjZXJhdCwgdGVsbHVzIHNpdCBhbWV0XCIsXG4gICAgICBwcmljZTogXCLigqwyMFwiLFxuICAgIH0sXG4gIF07XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tYWJvdXQnKVxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tY29udGFjdCcpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLS1tZW51JylcbiAgICBcbiAgICBjb25zdCBtZW51VGFiSGVhZCA9IGNyZWF0ZVRhYkhlYWQoJ0JlbnZlbnV0aScsICdNZW51JylcbiAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVUYWJIZWFkKVxuXG4gICAgbWVudS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnbWVudS0taXRlbScpXG5cbiAgICAgICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIGl0ZW1OYW1lLmlubmVyVGV4dCA9IGl0ZW0ubmFtZVxuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLS1uYW1lJylcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpXG4gICAgICAgIFxuICAgICAgICBjb25zdCBJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBJdGVtVGV4dC5pbm5lclRleHQgPSBpdGVtLmRlc2NyaXB0aW9uXG4gICAgICAgIEl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tLXRleHQnKVxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChJdGVtVGV4dClcblxuICAgICAgICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgICAgIGl0ZW1QcmljZS5pbm5lclRleHQgPSBpdGVtLnByaWNlXG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLS1wcmljZScpXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSlcblxuICAgICAgICBjb25zdCBpdGVtSFIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpXG4gICAgICAgIGl0ZW1IUi5jbGFzc0xpc3QuYWRkKCdpdGVtLS1ocicpXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1IUilcblxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKG1lbnVJdGVtKVxuICAgIH0pXG4gICAgXG59XG5cbmV4cG9ydCB7bG9hZE1lbnV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpXG5jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50JylcblxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbnN0eWxlLnJlbCA9ICdzdHlsZXNoZWV0J1xuc3R5bGUuaHJlZiA9ICcuLi9zcmMvc3R5bGVzL3N0eWxlLmNzcydcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KVxuXG5jb25zdCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZCcpXG5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKVxuXG5pbXBvcnQge2xhdW5jaEFwcH0gZnJvbSBcIi4vdGFicy9sYXVuY2hBcHBcIlxuXG5sYXVuY2hBcHAoKVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=