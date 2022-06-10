import { loadMenu } from "./menu"
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
    button.addEventListener('click', loadMenu)

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

export {createTabHead} 
export {loadHome}