// imports
import {loadHome} from "./home"
import {loadMenu} from "./menu"
import {loadAbout} from "./about"
import {loadContact} from "./contact"

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
        loadHome()
    })

    const menuButton = document.createElement("button")
    menuButton.classList.add('button-nav')
    menuButton.textContent = 'Menu'
    menuButton.addEventListener('click', () => {
        loadMenu()
    })

    const aboutButton = document.createElement("button")
    aboutButton.classList.add('button-nav')
    aboutButton.textContent = 'About'
    aboutButton.addEventListener('click', () => {
        loadAbout()
    })

    const contactButton = document.createElement("button")
    contactButton.classList.add('button-nav')
    contactButton.textContent = 'Contact'
    contactButton.addEventListener('click', () => {
        loadContact()
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

    loadContact()
}

export {launchApp}