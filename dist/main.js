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

    const aboutTabHead = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createTabHead)('Bienvenue', 'A propos de nous')
    main.appendChild(aboutTabHead)

    const aboutText = document.createElement('p')
    aboutText.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod."
    aboutText.classList.add('about--text')
    main.appendChild(aboutText)
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
    infoDivTitle.innerText = 'Our infos :'
    infoDiv.appendChild(infoDivTitle)

    const phoneNbr = document.createElement('p')
    phoneNbr.classList.add('phone--number')
    phoneNbr.innerText = "📞    06 45 03 16 52"
    infoDiv.appendChild(phoneNbr)

    const restaurantLocation = document.createElement('p')
    restaurantLocation.classList.add('phone--number')
    restaurantLocation.innerText = "🏠   1 Rue du Prêche, 46800 Montcuq"
    infoDiv.appendChild(restaurantLocation)

    const restaurantMap = document.createElement('iframe')
    restaurantMap.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.6185003276487!2d1.2080284510136101!3d44.33834401577153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ab80976fd9b0dd%3A0xb33eeb238647aaff!2sMairie!5e0!3m2!1sfr!2sfr!4v1654776443056!5m2!1sfr!2sfr'
    restaurantMap.width = '400'
    restaurantMap.height = '250'
    restaurantMap.setAttribute('loading', 'lazy')
    restaurantMap.style.border = '1px solid black'
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
    formDivTitle.innerText = 'Contact us :'
    contactForm.appendChild(formDivTitle)

    const form = document.createElement('form')
    form.action = 'post'
    contactForm.appendChild(form)

    const firstName = document.createElement('div')
    firstName.classList.add('first--name')
    form.appendChild(firstName)

    const firstNameLabel = document.createElement('label')
    firstNameLabel.setAttribute('for', 'firstName')
    firstNameLabel.innerText = 'First name :'
    firstName.appendChild(firstNameLabel)

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
    lastNameLabel.innerText = 'Last name :'
    lastName.appendChild(lastNameLabel)

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
    userPhoneLabel.innerText = 'Phone number :'
    userPhone.appendChild(userPhoneLabel)

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
    userEmailLabel.innerText = 'E-mail address :'
    userEmail.appendChild(userEmailLabel)

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
    userMsgLabel.innerText = 'Your message :'
    userMsg.appendChild(userMsgLabel)

    const userMsgBr = document.createElement('br')
    userMsg.appendChild(userMsgBr)

    const userMsgInput = document.createElement('textarea')
    userMsgInput.id = 'userMsg'
    userMsgInput.placeholder = 'Tell us everything :)'
    userMsgInput.setAttribute('rows','5','cols','33')
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

    const menuTabHead = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createTabHead)('Bienvenue', 'Contact & infos')
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


function createTabHead (textP, textH1, textHR)  {
    const tabHead = document.createElement('div')

    const paragraph = document.createElement('p')
    paragraph.textContent = textP
    tabHead.appendChild(paragraph)

    const H1 = document.createElement('h1')
    H1.textContent = textH1
    tabHead.appendChild(H1)

    const HR = document.createElement('hr')
    HR.textContent = ""
    tabHead.appendChild(HR)

    return tabHead
}

function createButton(text) {
    const button = document.createElement('button')
    button.type = 'button'
    button.innerText = text
    button.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__.loadMenu)

    return button
}

function createHome() {
    const home = document.createElement('div')
    home.classList.add('home')

    home.appendChild(createTabHead('Bienvenue','Home'))
    home.appendChild(createButton('Voir le menu'))

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
    homeButton.classList.add('button-nav')
    homeButton.textContent = 'Home'
    homeButton.addEventListener('click', () => {
        ;(0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)()
    })

    const menuButton = document.createElement("button")
    menuButton.classList.add('button-nav')
    menuButton.textContent = 'Menu'
    menuButton.addEventListener('click', () => {
        ;(0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)()
    })

    const aboutButton = document.createElement("button")
    aboutButton.classList.add('button-nav')
    aboutButton.textContent = 'About'
    aboutButton.addEventListener('click', () => {
        ;(0,_about__WEBPACK_IMPORTED_MODULE_2__.loadAbout)()
    })

    const contactButton = document.createElement("button")
    contactButton.classList.add('button-nav')
    contactButton.textContent = 'Contact'
    contactButton.addEventListener('click', () => {
        ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)()
    })

    navBar.appendChild(homeButton)
    navBar.appendChild(menuButton)
    navBar.appendChild(aboutButton)
    navBar.appendChild(contactButton)

    return header
}

function createMain () {
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

    ;(0,_contact__WEBPACK_IMPORTED_MODULE_3__.loadContact)()
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
      price: "20$",
    },
    {
      name: "Pan sobado",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "20$",
    },
    {
      name: "Pan Andino",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet",
      price: "20$",
    },
  ];

function loadMenu() {
    const main = document.querySelector('main')
    main.textContent = ""
    main.classList.remove('main--about')
    main.classList.remove('main--contact')
    main.classList.add('main--menu')
    
    const menuTabHead = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createTabHead)('Bienvenue', 'Menu')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7O0FBRXRDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixvREFBYTtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCb0M7Ozs7QUFJcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixvREFBYTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRW9COztBQUVwQjs7Ozs7Ozs7Ozs7Ozs7OztBQ25LaUM7O0FBRWpDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywyQ0FBUTs7QUFFN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BEdEI7QUFDK0I7QUFDQTtBQUNFO0FBQ0k7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsZ0RBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVM7QUFDakIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQVc7QUFDbkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHNEQUFXO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0ZvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBYTtBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBOzs7Ozs7OztVQzNEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQSxDQUEwQzs7QUFFMUMsMERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvbGF1bmNoQXBwLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRhYkhlYWQgfSBmcm9tIFwiLi9ob21lXCJcblxuZnVuY3Rpb24gbG9hZEFib3V0KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tbWVudScpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1jb250YWN0JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tLWFib3V0JylcbiAgICBtYWluLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXG5cbiAgICBjb25zdCBhYm91dFRhYkhlYWQgPSBjcmVhdGVUYWJIZWFkKCdCaWVudmVudWUnLCAnQSBwcm9wb3MgZGUgbm91cycpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFRhYkhlYWQpXG5cbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dFRleHQuaW5uZXJUZXh0ID0gXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldCB1bHRyaWNlcyBwb3J0dGl0b3IsIGV4IGV4IGFsaXF1ZXQgcHVydXMsIHBlbGxlbnRlc3F1ZSByaG9uY3VzIGZlbGlzIGlwc3VtIG5lYyBwdXJ1cy4gRG9uZWMgaWQgZW5pbSBpbiByaXN1cyBwZWxsZW50ZXNxdWUgYmxhbmRpdC4gUHJvaW4gc2VkIG5pYmggbmVjIGFyY3UgbW9sbGlzIHJob25jdXMgaW4gc2l0IGFtZXQgYXVndWUuIFN1c3BlbmRpc3NlIG1hZ25hIG5pc2wsIGVsZWlmZW5kIG5vbiB0ZW1wb3IgZXQsIGx1Y3R1cyBpZCBxdWFtLiBOdWxsYSBiaWJlbmR1bSB2dWxwdXRhdGUgYW50ZSwgbm9uIG1hbGVzdWFkYSBlcm9zIGxvYm9ydGlzIGV1aXNtb2QuXCJcbiAgICBhYm91dFRleHQuY2xhc3NMaXN0LmFkZCgnYWJvdXQtLXRleHQnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRUZXh0KVxufVxuXG5leHBvcnQgeyBsb2FkQWJvdXQgfSIsImltcG9ydCB7Y3JlYXRlVGFiSGVhZH0gZnJvbSBcIi4vaG9tZVwiICAgXG5cblxuXG5mdW5jdGlvbiBjcmV0ZUluZm9EaXYgKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBjb25zdCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2luZm8tLWRpdicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChpbmZvRGl2KVxuXG4gICAgY29uc3QgaW5mb0RpdlRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGluZm9EaXZUaXRsZS5pbm5lclRleHQgPSAnT3VyIGluZm9zIDonXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChpbmZvRGl2VGl0bGUpXG5cbiAgICBjb25zdCBwaG9uZU5iciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBob25lTmJyLmNsYXNzTGlzdC5hZGQoJ3Bob25lLS1udW1iZXInKVxuICAgIHBob25lTmJyLmlubmVyVGV4dCA9IFwi8J+TniAgICAwNiA0NSAwMyAxNiA1MlwiXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChwaG9uZU5icilcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRMb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHJlc3RhdXJhbnRMb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdwaG9uZS0tbnVtYmVyJylcbiAgICByZXN0YXVyYW50TG9jYXRpb24uaW5uZXJUZXh0ID0gXCLwn4+gICAgMSBSdWUgZHUgUHLDqmNoZSwgNDY4MDAgTW9udGN1cVwiXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TG9jYXRpb24pXG5cbiAgICBjb25zdCByZXN0YXVyYW50TWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJylcbiAgICByZXN0YXVyYW50TWFwLnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQyODUzLjYxODUwMDMyNzY0ODchMmQxLjIwODAyODQ1MTAxMzYxMDEhM2Q0NC4zMzgzNDQwMTU3NzE1MyEybTMhMWYwITJmMCEzZjAhM20yITFpMTAyNCEyaTc2OCE0ZjEzLjEhM20zITFtMiExczB4MTJhYjgwOTc2ZmQ5YjBkZCUzQTB4YjMzZWViMjM4NjQ3YWFmZiEyc01haXJpZSE1ZTAhM20yITFzZnIhMnNmciE0djE2NTQ3NzY0NDMwNTYhNW0yITFzZnIhMnNmcidcbiAgICByZXN0YXVyYW50TWFwLndpZHRoID0gJzQwMCdcbiAgICByZXN0YXVyYW50TWFwLmhlaWdodCA9ICcyNTAnXG4gICAgcmVzdGF1cmFudE1hcC5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnbGF6eScpXG4gICAgcmVzdGF1cmFudE1hcC5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkIGJsYWNrJ1xuICAgIHJlc3RhdXJhbnRNYXAuYWxsb3dGdWxsc2NyZWVuID0gJydcbiAgICByZXN0YXVyYW50TWFwLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtLW1hcCcpXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChyZXN0YXVyYW50TWFwKVxuXG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtRGl2ICgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3QgY29udGFjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtLWZvcm0tLWRpdicpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0Rm9ybSlcblxuICAgIGNvbnN0IGZvcm1EaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBmb3JtRGl2VGl0bGUuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgdXMgOidcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2VGl0bGUpXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5hY3Rpb24gPSAncG9zdCdcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaXJzdE5hbWUuY2xhc3NMaXN0LmFkZCgnZmlyc3QtLW5hbWUnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3ROYW1lKVxuXG4gICAgY29uc3QgZmlyc3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZmlyc3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmlyc3ROYW1lJylcbiAgICBmaXJzdE5hbWVMYWJlbC5pbm5lclRleHQgPSAnRmlyc3QgbmFtZSA6J1xuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChmaXJzdE5hbWVMYWJlbClcblxuICAgIGNvbnN0IGZpcnN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGZpcnN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBmaXJzdE5hbWVJbnB1dC5pZCA9ICdmaXJzdE5hbWUnXG4gICAgZmlyc3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnSmFuZSAqJ1xuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChmaXJzdE5hbWVJbnB1dClcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsYXN0TmFtZS5jbGFzc0xpc3QuYWRkKCdsYXN0LS1uYW1lJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhc3ROYW1lKVxuXG4gICAgY29uc3QgbGFzdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYXN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhc3ROYW1lJylcbiAgICBsYXN0TmFtZUxhYmVsLmlubmVyVGV4dCA9ICdMYXN0IG5hbWUgOidcbiAgICBsYXN0TmFtZS5hcHBlbmRDaGlsZChsYXN0TmFtZUxhYmVsKVxuXG4gICAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBsYXN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBsYXN0TmFtZUlucHV0LmlkID0gJ2xhc3ROYW1lJ1xuICAgIGxhc3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRG9lIConXG4gICAgbGFzdE5hbWUuYXBwZW5kQ2hpbGQobGFzdE5hbWVJbnB1dClcblxuICAgIGNvbnN0IHVzZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlclBob25lLmNsYXNzTGlzdC5hZGQoJ3VzZXItLXBob25lJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKHVzZXJQaG9uZSlcblxuICAgIGNvbnN0IHVzZXJQaG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHVzZXJQaG9uZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXJQaG9uZScpXG4gICAgdXNlclBob25lTGFiZWwuaW5uZXJUZXh0ID0gJ1Bob25lIG51bWJlciA6J1xuICAgIHVzZXJQaG9uZS5hcHBlbmRDaGlsZCh1c2VyUGhvbmVMYWJlbClcblxuICAgIGNvbnN0IHVzZXJQaG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHVzZXJQaG9uZUlucHV0LnR5cGUgPSAncGhvbmUnXG4gICAgdXNlclBob25lSW5wdXQuaWQgPSAndXNlclBob25lJ1xuICAgIHVzZXJQaG9uZUlucHV0LnBsYWNlaG9sZGVyID0gJyszMydcbiAgICB1c2VyUGhvbmUuYXBwZW5kQ2hpbGQodXNlclBob25lSW5wdXQpXG5cbiAgICBjb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJFbWFpbC5jbGFzc0xpc3QuYWRkKCd1c2VyLS1lbWFpbCcpXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh1c2VyRW1haWwpXG5cbiAgICBjb25zdCB1c2VyRW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB1c2VyRW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyRW1haWwnKVxuICAgIHVzZXJFbWFpbExhYmVsLmlubmVyVGV4dCA9ICdFLW1haWwgYWRkcmVzcyA6J1xuICAgIHVzZXJFbWFpbC5hcHBlbmRDaGlsZCh1c2VyRW1haWxMYWJlbClcblxuICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHVzZXJFbWFpbElucHV0LnR5cGUgPSAnZW1haWwnXG4gICAgdXNlckVtYWlsSW5wdXQuaWQgPSAndXNlckVtYWlsJ1xuICAgIHVzZXJFbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ2phbmVkb2VAZGlzY29uaWNvLmNvbSdcbiAgICB1c2VyRW1haWwuYXBwZW5kQ2hpbGQodXNlckVtYWlsSW5wdXQpXG5cbiAgICBjb25zdCB1c2VyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VyTXNnLmNsYXNzTGlzdC5hZGQoJ3VzZXItLW1zZycpXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh1c2VyTXNnKVxuXG4gICAgY29uc3QgdXNlck1zZ0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHVzZXJNc2dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyTXNnJylcbiAgICB1c2VyTXNnTGFiZWwuaW5uZXJUZXh0ID0gJ1lvdXIgbWVzc2FnZSA6J1xuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQodXNlck1zZ0xhYmVsKVxuXG4gICAgY29uc3QgdXNlck1zZ0JyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQodXNlck1zZ0JyKVxuXG4gICAgY29uc3QgdXNlck1zZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHVzZXJNc2dJbnB1dC5pZCA9ICd1c2VyTXNnJ1xuICAgIHVzZXJNc2dJbnB1dC5wbGFjZWhvbGRlciA9ICdUZWxsIHVzIGV2ZXJ5dGhpbmcgOiknXG4gICAgdXNlck1zZ0lucHV0LnNldEF0dHJpYnV0ZSgncm93cycsJzUnLCdjb2xzJywnMzMnKVxuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQodXNlck1zZ0lucHV0KVxuXG4gICAgY29uc3QgdXNlclN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlclN1Ym1pdC5jbGFzc0xpc3QuYWRkKCd1c2VyLS1zdWJtaXQnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodXNlclN1Ym1pdClcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQgKCdzdWJtaXQtLWJ1dHRvbicpXG4gICAgc3VibWl0QnRuLnR5cGUgPSAnYnV0dG9uJ1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU2VuZCB5b3VyIG1lc3NhZ2UnXG4gICAgdXNlclN1Ym1pdC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG5cblxufVxuXG5cblxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCAoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1tZW51JylcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWFib3V0JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tLWNvbnRhY3QnKVxuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblxuICAgIGNvbnN0IG1lbnVUYWJIZWFkID0gY3JlYXRlVGFiSGVhZCgnQmllbnZlbnVlJywgJ0NvbnRhY3QgJiBpbmZvcycpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51VGFiSGVhZClcblxuICAgIGNyZXRlSW5mb0RpdigpXG4gICAgY3JlYXRlRm9ybURpdigpXG59XG5cbmV4cG9ydCB7bG9hZENvbnRhY3R9XG5cbiAgICAgIiwiaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9tZW51XCJcblxuZnVuY3Rpb24gY3JlYXRlVGFiSGVhZCAodGV4dFAsIHRleHRIMSwgdGV4dEhSKSAge1xuICAgIGNvbnN0IHRhYkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gdGV4dFBcbiAgICB0YWJIZWFkLmFwcGVuZENoaWxkKHBhcmFncmFwaClcblxuICAgIGNvbnN0IEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIEgxLnRleHRDb250ZW50ID0gdGV4dEgxXG4gICAgdGFiSGVhZC5hcHBlbmRDaGlsZChIMSlcblxuICAgIGNvbnN0IEhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgIEhSLnRleHRDb250ZW50ID0gXCJcIlxuICAgIHRhYkhlYWQuYXBwZW5kQ2hpbGQoSFIpXG5cbiAgICByZXR1cm4gdGFiSGVhZFxufVxuXG5mdW5jdGlvbiBjcmVhdGVCdXR0b24odGV4dCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJ1xuICAgIGJ1dHRvbi5pbm5lclRleHQgPSB0ZXh0XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZE1lbnUpXG5cbiAgICByZXR1cm4gYnV0dG9uXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJylcblxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlVGFiSGVhZCgnQmllbnZlbnVlJywnSG9tZScpKVxuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlQnV0dG9uKCdWb2lyIGxlIG1lbnUnKSlcblxuICAgIHJldHVybiBob21lXG59XG5cblxuXG5cbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gXCJcIlxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tbWVudScpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1hYm91dCcpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1jb250YWN0JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSlcblxufVxuXG5leHBvcnQge2NyZWF0ZVRhYkhlYWR9IFxuZXhwb3J0IHtsb2FkSG9tZX0iLCIvLyBpbXBvcnRzXG5pbXBvcnQge2xvYWRIb21lfSBmcm9tIFwiLi9ob21lXCJcbmltcG9ydCB7bG9hZE1lbnV9IGZyb20gXCIuL21lbnVcIlxuaW1wb3J0IHtsb2FkQWJvdXR9IGZyb20gXCIuL2Fib3V0XCJcbmltcG9ydCB7bG9hZENvbnRhY3R9IGZyb20gXCIuL2NvbnRhY3RcIlxuXG4vLyBsYXVuY2hBcHAuanNcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKVxuXG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2JylcbiAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2LS1iYXInKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpXG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicpXG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb21lJ1xuICAgIGhvbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRIb21lKClcbiAgICB9KVxuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKVxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQgPSAnTWVudSdcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2FkTWVudSgpXG4gICAgfSlcblxuICAgIGNvbnN0IGFib3V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGFib3V0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1uYXYnKVxuICAgIGFib3V0QnV0dG9uLnRleHRDb250ZW50ID0gJ0Fib3V0J1xuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsb2FkQWJvdXQoKVxuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGNvbnRhY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9uLW5hdicpXG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDb250YWN0J1xuICAgIGNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxvYWRDb250YWN0KClcbiAgICB9KVxuXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGFib3V0QnV0dG9uKVxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKVxuXG4gICAgcmV0dXJuIGhlYWRlclxufVxuXG5mdW5jdGlvbiBjcmVhdGVNYWluICgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJylcblxuICAgIHJldHVybiBtYWluXG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpXG5cbiAgICBjb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgZm9vdGVyVGV4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb3Rlci10ZXh0JylcbiAgICBmb290ZXIuaW5uZXJUZXh0ID0gJ8KpIGRpc2NvbmljbydcblxuICAgIGNvbnN0IGZvb3RlckxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgnaHJlZicsICdodHRwczovL2dpdGh1Yi5jb20vZGlzY29uaWNvJylcbiAgICBmb290ZXJMaW5rLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpXG5cbiAgICBjb25zdCBmb290ZXJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICBmb290ZXJJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZ2l0aHViLWljb24nKVxuICAgIGZvb3Rlckljb24uc2V0QXR0cmlidXRlKCdzcmMnLCAnLi4vc3JjL2Fzc2V0cy9pbWFnZXMvZ2l0aHViLWljb24ucG5nJylcblxuICAgIGZvb3RlckxpbmsuYXBwZW5kQ2hpbGQoZm9vdGVySWNvbilcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJUZXh0KVxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKVxuICAgIFxuICAgIHJldHVybiBmb290ZXJcbn1cblxuZnVuY3Rpb24gbGF1bmNoQXBwKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpXG5cbiAgICBsb2FkQ29udGFjdCgpXG59XG5cbmV4cG9ydCB7bGF1bmNoQXBwfSIsImltcG9ydCB7Y3JlYXRlVGFiSGVhZH0gZnJvbSBcIi4vaG9tZVwiICAgIFxuXG5jb25zdCBtZW51ID0gW1xuICAgIHtcbiAgICAgIG5hbWU6IFwiUGFuIGNhbmlsbGFcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBlbGxlbnRlc3F1ZSBwbGFjZXJhdCwgdGVsbHVzIHNpdCBhbWV0XCIsXG4gICAgICBwcmljZTogXCIyMCRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiUGFuIHNvYmFkb1wiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHBsYWNlcmF0LCB0ZWxsdXMgc2l0IGFtZXRcIixcbiAgICAgIHByaWNlOiBcIjIwJFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQYW4gQW5kaW5vXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldFwiLFxuICAgICAgcHJpY2U6IFwiMjAkXCIsXG4gICAgfSxcbiAgXTtcblxuZnVuY3Rpb24gbG9hZE1lbnUoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1hYm91dCcpXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1jb250YWN0JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tLW1lbnUnKVxuICAgIFxuICAgIGNvbnN0IG1lbnVUYWJIZWFkID0gY3JlYXRlVGFiSGVhZCgnQmllbnZlbnVlJywgJ01lbnUnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVRhYkhlYWQpXG5cbiAgICBtZW51LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbWVudUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCdtZW51LS1pdGVtJylcblxuICAgICAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgaXRlbU5hbWUuaW5uZXJUZXh0ID0gaXRlbS5uYW1lXG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tLW5hbWUnKVxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtTmFtZSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IEl0ZW1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgIEl0ZW1UZXh0LmlubmVyVGV4dCA9IGl0ZW0uZGVzY3JpcHRpb25cbiAgICAgICAgSXRlbVRleHQuY2xhc3NMaXN0LmFkZCgnaXRlbS0tdGV4dCcpXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKEl0ZW1UZXh0KVxuXG4gICAgICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbiAgICAgICAgaXRlbVByaWNlLmlubmVyVGV4dCA9IGl0ZW0ucHJpY2VcbiAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tLXByaWNlJylcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKVxuXG4gICAgICAgIGNvbnN0IGl0ZW1IUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcbiAgICAgICAgaXRlbUhSLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tLWhyJylcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoaXRlbUhSKVxuXG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudUl0ZW0pXG4gICAgfSlcbiAgICBcbn1cblxuZXhwb3J0IHtsb2FkTWVudX0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbmNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKVxuXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuc3R5bGUucmVsID0gJ3N0eWxlc2hlZXQnXG5zdHlsZS5ocmVmID0gJy4uL3NyYy9zdHlsZXMvc3R5bGUuY3NzJ1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpXG5cbmNvbnN0IGhlYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkJylcbmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpXG5cblxuXG5pbXBvcnQge2xhdW5jaEFwcH0gZnJvbSBcIi4vdGFicy9sYXVuY2hBcHBcIlxuXG5sYXVuY2hBcHAoKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9