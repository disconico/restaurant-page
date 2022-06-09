import { loadMenu } from "./menu"

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
    button.addEventListener('click', loadMenu)

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

export {createTabHead} 
export {loadHome}