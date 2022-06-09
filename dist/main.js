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
    button.innerText = text
    button.addEventListener('click', _menu__WEBPACK_IMPORTED_MODULE_0__.loadMenu)

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
    homeButton.textContent = 'CASA'
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
    setActiveButton(homeButton);
    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadHome)();
    })

    const menuButton = document.createElement("button")
    menuButton.classList.add('button--nav')
    menuButton.textContent = 'MENU'
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(menuButton);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();
    })

    const aboutButton = document.createElement("button")
    aboutButton.classList.add('button--nav')
    aboutButton.textContent = 'CHI SIAMO'
    aboutButton.addEventListener('click', (e) => {
        if (e.target.classList.contains("active")) return;
    setActiveButton(aboutButton);
    (0,_about__WEBPACK_IMPORTED_MODULE_2__.loadAbout)();
    })

    const contactButton = document.createElement("button")
    contactButton.classList.add('button--nav')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQWE7QUFDckM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7Ozs7Ozs7VUMzREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUEsQ0FBMEM7O0FBRTFDLDBEQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3RhYnMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy90YWJzL2xhdW5jaEFwcC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdGFicy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVUYWJIZWFkIH0gZnJvbSBcIi4vaG9tZVwiXG5cbmZ1bmN0aW9uIGxvYWRBYm91dCgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLW1lbnUnKVxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tY29udGFjdCcpXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluLS1hYm91dCcpXG4gICAgbWFpbi5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxuXG4gICAgY29uc3QgYWJvdXRUYWJIZWFkID0gY3JlYXRlVGFiSGVhZCgnQmVudmVudXRpJywgJ0luZm9ybWF6aW9uaSBzdSBkaSBub2knKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYWJvdXRUYWJIZWFkKVxuXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWJvdXRUZXh0LmlubmVyVGV4dCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHBsYWNlcmF0LCB0ZWxsdXMgc2l0IGFtZXQgdWx0cmljZXMgcG9ydHRpdG9yLCBleCBleCBhbGlxdWV0IHB1cnVzLCBwZWxsZW50ZXNxdWUgcmhvbmN1cyBmZWxpcyBpcHN1bSBuZWMgcHVydXMuIERvbmVjIGlkIGVuaW0gaW4gcmlzdXMgcGVsbGVudGVzcXVlIGJsYW5kaXQuIFByb2luIHNlZCBuaWJoIG5lYyBhcmN1IG1vbGxpcyByaG9uY3VzIGluIHNpdCBhbWV0IGF1Z3VlLiBTdXNwZW5kaXNzZSBtYWduYSBuaXNsLCBlbGVpZmVuZCBub24gdGVtcG9yIGV0LCBsdWN0dXMgaWQgcXVhbS4gTnVsbGEgYmliZW5kdW0gdnVscHV0YXRlIGFudGUsIG5vbiBtYWxlc3VhZGEgZXJvcyBsb2JvcnRpcyBldWlzbW9kLlwiXG4gICAgYWJvdXRUZXh0LmNsYXNzTGlzdC5hZGQoJ2Fib3V0LS10ZXh0JylcbiAgICBtYWluLmFwcGVuZENoaWxkKGFib3V0VGV4dClcblxuICAgIGNvbnN0IEJSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoQlIpXG5cbiAgICBjb25zdCBhYm91dFRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgYWJvdXRUZXh0Mi5pbm5lclRleHQgPSBcIlV0IGVuaW0gYWQgbWluaW1hIHZlbmlhbSwgcXVpcyBub3N0cnVtIGV4ZXJjaXRhdGlvbmVtIHVsbGFtIGNvcnBvcmlzIHN1c2NpcGl0IGxhYm9yaW9zYW0sIG5pc2kgdXQgYWxpcXVpZCBleCBlYSBjb21tb2RpIGNvbnNlcXVhdHVyPyBRdWlzIGF1dGVtIHZlbCBldW0gaXVyZSByZXByZWhlbmRlcml0IHF1aSBpbiBlYSB2b2x1cHRhdGUgdmVsaXQgZXNzZSBxdWFtIG5paGlsIG1vbGVzdGlhZSBjb25zZXF1YXR1ciwgdmVsIGlsbHVtIHF1aSBkb2xvcmVtIGV1bSBmdWdpYXQgcXVvIHZvbHVwdGFzIG51bGxhIHBhcmlhdHVyP1wiXG4gICAgYWJvdXRUZXh0Mi5jbGFzc0xpc3QuYWRkKCdhYm91dC0tdGV4dCcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChhYm91dFRleHQyKVxuXG5cbn1cblxuZXhwb3J0IHsgbG9hZEFib3V0IH0iLCJpbXBvcnQge2NyZWF0ZVRhYkhlYWR9IGZyb20gXCIuL2hvbWVcIiAgIFxuXG5cblxuZnVuY3Rpb24gY3JldGVJbmZvRGl2ICgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvLS1kaXYnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaW5mb0RpdilcblxuICAgIGNvbnN0IGluZm9EaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBpbmZvRGl2VGl0bGUuaW5uZXJUZXh0ID0gJ0xlIG5vc3RyZSBpbmZvcm1hemlvbmkgOidcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGluZm9EaXZUaXRsZSlcblxuICAgIGNvbnN0IHBob25lTmJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcGhvbmVOYnIuY2xhc3NMaXN0LmFkZCgncGhvbmUtLW51bWJlcicpXG4gICAgcGhvbmVOYnIuaW5uZXJUZXh0ID0gXCLwn5OeICAgIDA2IDQ1IDAzIDE2IDUyXCJcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHBob25lTmJyKVxuXG4gICAgY29uc3QgcmVzdGF1cmFudExvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgcmVzdGF1cmFudExvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3Bob25lLS1udW1iZXInKVxuICAgIHJlc3RhdXJhbnRMb2NhdGlvbi5pbm5lclRleHQgPSBcIvCfj6AgICAxIFJ1ZSBkdSBQcsOqY2hlLCA0NjgwMCBNb250Y3VxXCJcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHJlc3RhdXJhbnRMb2NhdGlvbilcblxuICAgIGNvbnN0IHJlc3RhdXJhbnRNYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKVxuICAgIHJlc3RhdXJhbnRNYXAuc3JjID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xOCExbTEyITFtMyExZDI4NTMuNjE4NTAwMzI3NjQ4NyEyZDEuMjA4MDI4NDUxMDEzNjEwMSEzZDQ0LjMzODM0NDAxNTc3MTUzITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHgxMmFiODA5NzZmZDliMGRkJTNBMHhiMzNlZWIyMzg2NDdhYWZmITJzTWFpcmllITVlMCEzbTIhMXNmciEyc2ZyITR2MTY1NDc3NjQ0MzA1NiE1bTIhMXNmciEyc2ZyJ1xuICAgIHJlc3RhdXJhbnRNYXAud2lkdGggPSAnNDAwJ1xuICAgIHJlc3RhdXJhbnRNYXAuaGVpZ2h0ID0gJzI1MCdcbiAgICByZXN0YXVyYW50TWFwLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsICdsYXp5JylcbiAgICByZXN0YXVyYW50TWFwLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgZ3JleSdcbiAgICByZXN0YXVyYW50TWFwLmFsbG93RnVsbHNjcmVlbiA9ICcnXG4gICAgcmVzdGF1cmFudE1hcC5jbGFzc0xpc3QuYWRkKCdyZXN0YXVyYW50LS1tYXAnKVxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocmVzdGF1cmFudE1hcClcblxufVxuXG5cblxuZnVuY3Rpb24gY3JlYXRlRm9ybURpdiAoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIGNvbnN0IGNvbnRhY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjb250YWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdjb250YWN0LS1mb3JtLS1kaXYnKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdEZvcm0pXG5cbiAgICBjb25zdCBmb3JtRGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgZm9ybURpdlRpdGxlLmlubmVyVGV4dCA9ICdDb250YXR0YXRlY2kgOidcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtRGl2VGl0bGUpXG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgZm9ybS5hY3Rpb24gPSAncG9zdCdcbiAgICBjb250YWN0Rm9ybS5hcHBlbmRDaGlsZChmb3JtKVxuXG4gICAgY29uc3QgZmlyc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBmaXJzdE5hbWUuY2xhc3NMaXN0LmFkZCgnZmlyc3QtLW5hbWUnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZmlyc3ROYW1lKVxuXG4gICAgY29uc3QgZmlyc3ROYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZmlyc3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnZmlyc3ROYW1lJylcbiAgICBmaXJzdE5hbWVMYWJlbC5pbm5lclRleHQgPSAnRmlyc3QgbmFtZSA6J1xuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChmaXJzdE5hbWVMYWJlbClcblxuICAgIGNvbnN0IGZpcnN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGZpcnN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBmaXJzdE5hbWVJbnB1dC5pZCA9ICdmaXJzdE5hbWUnXG4gICAgZmlyc3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnSmFuZSAqJ1xuICAgIGZpcnN0TmFtZS5hcHBlbmRDaGlsZChmaXJzdE5hbWVJbnB1dClcblxuICAgIGNvbnN0IGxhc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBsYXN0TmFtZS5jbGFzc0xpc3QuYWRkKCdsYXN0LS1uYW1lJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhc3ROYW1lKVxuXG4gICAgY29uc3QgbGFzdE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYXN0TmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2xhc3ROYW1lJylcbiAgICBsYXN0TmFtZUxhYmVsLmlubmVyVGV4dCA9ICdMYXN0IG5hbWUgOidcbiAgICBsYXN0TmFtZS5hcHBlbmRDaGlsZChsYXN0TmFtZUxhYmVsKVxuXG4gICAgY29uc3QgbGFzdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBsYXN0TmFtZUlucHV0LnR5cGUgPSAndGV4dCdcbiAgICBsYXN0TmFtZUlucHV0LmlkID0gJ2xhc3ROYW1lJ1xuICAgIGxhc3ROYW1lSW5wdXQucGxhY2Vob2xkZXIgPSAnRG9lIConXG4gICAgbGFzdE5hbWUuYXBwZW5kQ2hpbGQobGFzdE5hbWVJbnB1dClcblxuICAgIGNvbnN0IHVzZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlclBob25lLmNsYXNzTGlzdC5hZGQoJ3VzZXItLXBob25lJylcbiAgICBmb3JtLmFwcGVuZENoaWxkKHVzZXJQaG9uZSlcblxuICAgIGNvbnN0IHVzZXJQaG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHVzZXJQaG9uZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXJQaG9uZScpXG4gICAgdXNlclBob25lTGFiZWwuaW5uZXJUZXh0ID0gJ1Bob25lIG51bWJlciA6J1xuICAgIHVzZXJQaG9uZS5hcHBlbmRDaGlsZCh1c2VyUGhvbmVMYWJlbClcblxuICAgIGNvbnN0IHVzZXJQaG9uZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHVzZXJQaG9uZUlucHV0LnR5cGUgPSAncGhvbmUnXG4gICAgdXNlclBob25lSW5wdXQuaWQgPSAndXNlclBob25lJ1xuICAgIHVzZXJQaG9uZUlucHV0LnBsYWNlaG9sZGVyID0gJyszMydcbiAgICB1c2VyUGhvbmUuYXBwZW5kQ2hpbGQodXNlclBob25lSW5wdXQpXG5cbiAgICBjb25zdCB1c2VyRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHVzZXJFbWFpbC5jbGFzc0xpc3QuYWRkKCd1c2VyLS1lbWFpbCcpXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh1c2VyRW1haWwpXG5cbiAgICBjb25zdCB1c2VyRW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB1c2VyRW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyRW1haWwnKVxuICAgIHVzZXJFbWFpbExhYmVsLmlubmVyVGV4dCA9ICdFLW1haWwgYWRkcmVzcyA6J1xuICAgIHVzZXJFbWFpbC5hcHBlbmRDaGlsZCh1c2VyRW1haWxMYWJlbClcblxuICAgIGNvbnN0IHVzZXJFbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHVzZXJFbWFpbElucHV0LnR5cGUgPSAnZW1haWwnXG4gICAgdXNlckVtYWlsSW5wdXQuaWQgPSAndXNlckVtYWlsJ1xuICAgIHVzZXJFbWFpbElucHV0LnBsYWNlaG9sZGVyID0gJ2phbmVkb2VAZGlzY29uaWNvLmNvbSdcbiAgICB1c2VyRW1haWwuYXBwZW5kQ2hpbGQodXNlckVtYWlsSW5wdXQpXG5cbiAgICBjb25zdCB1c2VyTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB1c2VyTXNnLmNsYXNzTGlzdC5hZGQoJ3VzZXItLW1zZycpXG4gICAgZm9ybS5hcHBlbmRDaGlsZCh1c2VyTXNnKVxuXG4gICAgY29uc3QgdXNlck1zZ0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHVzZXJNc2dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyTXNnJylcbiAgICB1c2VyTXNnTGFiZWwuaW5uZXJUZXh0ID0gJ1lvdXIgbWVzc2FnZSA6J1xuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQodXNlck1zZ0xhYmVsKVxuXG4gICAgY29uc3QgdXNlck1zZ0JyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKVxuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQodXNlck1zZ0JyKVxuXG4gICAgY29uc3QgdXNlck1zZ0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIHVzZXJNc2dJbnB1dC5pZCA9ICd1c2VyTXNnJ1xuICAgIHVzZXJNc2dJbnB1dC5wbGFjZWhvbGRlciA9ICdUZWxsIHVzIGV2ZXJ5dGhpbmcgOiknXG4gICAgdXNlck1zZ0lucHV0LnNldEF0dHJpYnV0ZSgncm93cycsJzUnLCdjb2xzJywnMzMnKVxuICAgIHVzZXJNc2cuYXBwZW5kQ2hpbGQodXNlck1zZ0lucHV0KVxuXG4gICAgY29uc3QgdXNlclN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdXNlclN1Ym1pdC5jbGFzc0xpc3QuYWRkKCd1c2VyLS1zdWJtaXQnKVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQodXNlclN1Ym1pdClcblxuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQgKCdzdWJtaXQtLWJ1dHRvbicpXG4gICAgc3VibWl0QnRuLnR5cGUgPSAnYnV0dG9uJ1xuICAgIHN1Ym1pdEJ0bi5pbm5lclRleHQgPSAnU2VuZCB5b3VyIG1lc3NhZ2UnXG4gICAgdXNlclN1Ym1pdC5hcHBlbmRDaGlsZChzdWJtaXRCdG4pXG5cblxufVxuXG5cblxuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCAoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiXG4gICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLS1tZW51JylcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWFib3V0JylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4tLWNvbnRhY3QnKVxuICAgIG1haW4uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcblxuICAgIGNvbnN0IG1lbnVUYWJIZWFkID0gY3JlYXRlVGFiSGVhZCgnQmVudmVudXRpJywgJ0NDT05UQVRUSSAmIElORk8nKVxuICAgIG1haW4uYXBwZW5kQ2hpbGQobWVudVRhYkhlYWQpXG5cbiAgICBjcmV0ZUluZm9EaXYoKVxuICAgIGNyZWF0ZUZvcm1EaXYoKVxufVxuXG5leHBvcnQge2xvYWRDb250YWN0fVxuXG4gICAgICIsImltcG9ydCB7IGxvYWRNZW51IH0gZnJvbSBcIi4vbWVudVwiXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYkhlYWQgKHRleHRQLCB0ZXh0SDEsIHRleHRIUiwgdGV4dFAyKSAge1xuICAgIGNvbnN0IHRhYkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhYkhlYWQuY2xhc3NMaXN0LmFkZCgndGFiLS1oZWFkJylcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHRQXG4gICAgcGFyYWdyYXBoLmNsYXNzTGlzdC5hZGQoJ3RhYi0taGVhZC0tcCcpXG4gICAgdGFiSGVhZC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpXG5cbiAgICBjb25zdCBIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbiAgICBIMS50ZXh0Q29udGVudCA9IHRleHRIMVxuICAgIEgxLmNsYXNzTGlzdC5hZGQoJ3RhYi0taGVhZC0taDEnKVxuICAgIHRhYkhlYWQuYXBwZW5kQ2hpbGQoSDEpXG5cbiAgICBjb25zdCBIUiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJylcbiAgICBIUi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBIUi5jbGFzc0xpc3QuYWRkKCd0YWItLWhlYWQtLWhyJylcbiAgICB0YWJIZWFkLmFwcGVuZENoaWxkKEhSKVxuXG4gICAgY29uc3QgcGFyYWdyYXBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgIHBhcmFncmFwaDIudGV4dENvbnRlbnQgPSB0ZXh0UDJcbiAgICBwYXJhZ3JhcGgyLmNsYXNzTGlzdC5hZGQoJ3RhYi0taGVhZC0tcDInKVxuICAgIHRhYkhlYWQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoMilcblxuXG4gICAgcmV0dXJuIHRhYkhlYWRcbn1cblxuZnVuY3Rpb24gY3JlYXRlQnV0dG9uKHRleHQpIHtcblxuXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBidXR0b24udHlwZSA9ICdidXR0b24nXG4gICAgYnV0dG9uLmlubmVyVGV4dCA9IHRleHRcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSlcblxuICAgIHJldHVybiBidXR0b25cbn1cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVUYWJIZWFkKCdCZW52ZW51dGknLCdMYSBidW9uYSBjdWNpbmEnLCcnLCdJIG1pZ2xpb3JpIHBvc3RpIGRvdmUgbWFuZ2lhcmUgYSBNb250Y3VxJykpXG4gICAgXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVCdXR0b24oJ1ZlZGVyZSBpbCBtZW51JykpXG5cbiAgICByZXR1cm4gaG9tZVxufVxuXG5cblxuXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLW1lbnUnKVxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tYWJvdXQnKVxuICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi0tY29udGFjdCcpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVIb21lKCkpXG5cbn1cblxuZXhwb3J0IHtjcmVhdGVUYWJIZWFkfSBcbmV4cG9ydCB7bG9hZEhvbWV9IiwiLy8gaW1wb3J0c1xuaW1wb3J0IHtsb2FkSG9tZX0gZnJvbSBcIi4vaG9tZVwiXG5pbXBvcnQge2xvYWRNZW51fSBmcm9tIFwiLi9tZW51XCJcbmltcG9ydCB7bG9hZEFib3V0fSBmcm9tIFwiLi9hYm91dFwiXG5pbXBvcnQge2xvYWRDb250YWN0fSBmcm9tIFwiLi9jb250YWN0XCJcblxuLy8gbGF1bmNoQXBwLmpzXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoJ25hdi0tYmFyJylcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKVxuXG4gICAgY29uc3QgaG9tZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0tbmF2JylcbiAgICBob21lQnV0dG9uLnRleHRDb250ZW50ID0gJ0NBU0EnXG4gICAgaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICBzZXRBY3RpdmVCdXR0b24oaG9tZUJ1dHRvbik7XG4gICAgbG9hZEhvbWUoKTtcbiAgICB9KVxuXG4gICAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBtZW51QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0tbmF2JylcbiAgICBtZW51QnV0dG9uLnRleHRDb250ZW50ID0gJ01FTlUnXG4gICAgbWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKG1lbnVCdXR0b24pO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pXG5cbiAgICBjb25zdCBhYm91dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBhYm91dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tLW5hdicpXG4gICAgYWJvdXRCdXR0b24udGV4dENvbnRlbnQgPSAnQ0hJIFNJQU1PJ1xuICAgIGFib3V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihhYm91dEJ1dHRvbik7XG4gICAgbG9hZEFib3V0KCk7XG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidXR0b24tLW5hdicpXG4gICAgY29udGFjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDT05UQVRUTydcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICBsb2FkQ29udGFjdCgpO1xuICAgIH0pXG5cbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbilcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbilcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQoYWJvdXRCdXR0b24pXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdXR0b24pXG5cbiAgICByZXR1cm4gaGVhZGVyXG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihidXR0b24pIHtcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5idXR0b24tLW5hdlwiKTtcbiAgXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgIGlmIChidXR0b24gIT09IHRoaXMpIHtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIFxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4gKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcbiAgICBtYWluLmNsYXNzTGlzdC5hZGQoJ21haW4nKVxuXG4gICAgcmV0dXJuIG1haW5cbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJylcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJylcblxuICAgIGNvbnN0IGZvb3RlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBmb290ZXJUZXh0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9vdGVyLXRleHQnKVxuICAgIGZvb3Rlci5pbm5lclRleHQgPSAnwqkgZGlzY29uaWNvJ1xuXG4gICAgY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgJ2h0dHBzOi8vZ2l0aHViLmNvbS9kaXNjb25pY28nKVxuICAgIGZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJylcblxuICAgIGNvbnN0IGZvb3Rlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxuICAgIGZvb3Rlckljb24uc2V0QXR0cmlidXRlKCdpZCcsICdnaXRodWItaWNvbicpXG4gICAgZm9vdGVySWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvYXNzZXRzL2ltYWdlcy9naXRodWItaWNvbi5wbmcnKVxuXG4gICAgZm9vdGVyTGluay5hcHBlbmRDaGlsZChmb290ZXJJY29uKVxuXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlckxpbmspXG4gICAgXG4gICAgcmV0dXJuIGZvb3RlclxufVxuXG5mdW5jdGlvbiBsYXVuY2hBcHAoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcblxuICAgIHNldEFjdGl2ZUJ1dHRvbihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi0tbmF2XCIpKTtcbiAgICBsb2FkSG9tZSgpXG5cbn1cblxuZXhwb3J0IHtsYXVuY2hBcHB9IiwiaW1wb3J0IHtjcmVhdGVUYWJIZWFkfSBmcm9tIFwiLi9ob21lXCIgICAgXG5cbmNvbnN0IG1lbnUgPSBbXG4gICAge1xuICAgICAgbmFtZTogXCJQYW4gY2FuaWxsYVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gUGVsbGVudGVzcXVlIHBsYWNlcmF0LCB0ZWxsdXMgc2l0IGFtZXRcIixcbiAgICAgIHByaWNlOiBcIuKCrDIwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlBhbiBzb2JhZG9cIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFBlbGxlbnRlc3F1ZSBwbGFjZXJhdCwgdGVsbHVzIHNpdCBhbWV0XCIsXG4gICAgICBwcmljZTogXCLigqwyMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogXCJQYW4gQW5kaW5vXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBQZWxsZW50ZXNxdWUgcGxhY2VyYXQsIHRlbGx1cyBzaXQgYW1ldFwiLFxuICAgICAgcHJpY2U6IFwi4oKsMjBcIixcbiAgICB9LFxuICBdO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpXG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCJcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWFib3V0JylcbiAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tLWNvbnRhY3QnKVxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbi0tbWVudScpXG4gICAgXG4gICAgY29uc3QgbWVudVRhYkhlYWQgPSBjcmVhdGVUYWJIZWFkKCdCZW52ZW51dGknLCAnTWVudScpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51VGFiSGVhZClcblxuICAgIG1lbnUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoJ21lbnUtLWl0ZW0nKVxuXG4gICAgICAgIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBpdGVtTmFtZS5pbm5lclRleHQgPSBpdGVtLm5hbWVcbiAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS0tbmFtZScpXG4gICAgICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgSXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgSXRlbVRleHQuaW5uZXJUZXh0ID0gaXRlbS5kZXNjcmlwdGlvblxuICAgICAgICBJdGVtVGV4dC5jbGFzc0xpc3QuYWRkKCdpdGVtLS10ZXh0JylcbiAgICAgICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoSXRlbVRleHQpXG5cbiAgICAgICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgICAgICBpdGVtUHJpY2UuaW5uZXJUZXh0ID0gaXRlbS5wcmljZVxuICAgICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS0tcHJpY2UnKVxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtUHJpY2UpXG5cbiAgICAgICAgY29uc3QgaXRlbUhSID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxuICAgICAgICBpdGVtSFIuY2xhc3NMaXN0LmFkZCgnaXRlbS0taHInKVxuICAgICAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChpdGVtSFIpXG5cbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtZW51SXRlbSlcbiAgICB9KVxuICAgIFxufVxuXG5leHBvcnQge2xvYWRNZW51fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpXG5cbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5zdHlsZS5yZWwgPSAnc3R5bGVzaGVldCdcbnN0eWxlLmhyZWYgPSAnLi4vc3JjL3N0eWxlcy9zdHlsZS5jc3MnXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudClcblxuY29uc3QgaGVhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKVxuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSlcblxuXG5cbmltcG9ydCB7bGF1bmNoQXBwfSBmcm9tIFwiLi90YWJzL2xhdW5jaEFwcFwiXG5cbmxhdW5jaEFwcCgpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=