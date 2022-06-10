import { createTabHead } from "./home"

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

  const menuTabHead = createTabHead('Benvenuti', 'Menu')
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

export { loadMenu }