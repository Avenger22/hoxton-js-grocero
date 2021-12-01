/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

const state = {

  items: [

    {
      id: 01,
      name: 'beetroot',
      price: 0.97
    },

    {
      id: 02,
      name: 'carrot',
      price: 0.75
    },

    {
      id: 03,
      name: 'apple',
      price: 0.89
    },

    {
      id: 04,
      name: 'apricot',
      price: 0.55
    },

    {
      id: 05,
      name: 'avocado',
      price: 1.25
    },

    {
      id: 06,
      name: 'bananas',
      price: 1.57
    },

    {
      id: 07,
      name: 'bell-pepper',
      price: 2.55
    },

    {
      id: 08,
      name: 'berry',
      price: 2.90
    },

    {
      id: 09,
      name: 'blueberry',
      price: 4.50
    },

    {
      id: 10,
      name: 'eggplant',
      price: 5.75
    }

  ],
 
}

// const imgSvg = [
//   '001-beetroot.svg',
//   '002-carrot.svg',
//   '003-apple.svg',
//   '004-apricot.svg',
//   '005-avocado.svg',
//   '006-bananas.svg',
//   '007-bell-pepper.svg',
//   '008-berry.svg',
//   '009-blueberry.svg',
//   '010-eggplant.svg',
// ]

function renderStoreSvg(itemsParam) {

  for (const element of itemsParam) {
    renderStoreItem(element)
  }

}

function renderCardItem(cardImgParam) {

  const ulEl = document.querySelector("main .item-list")

  const liEl = document.createElement('li')
  
  const imgEl = document.createElement('img')
  imgEl.setAttribute('class', 'cart--item-icon')

  if (cardImgParam.id === 10) {
    imgEl.setAttribute('src', `assets/icons/0${cardImgParam.id}-${cardImgParam.name}.svg`)
  }

  else {
    imgEl.setAttribute('src', `assets/icons/00${cardImgParam.id}-${cardImgParam.name}.svg`)
  }

  imgEl.setAttribute('alt', 'beetroot')

  const pEl = document.createElement('p')

  const btnEl1 = document.createElement('button')
  btnEl1.setAttribute('class' , 'quantity-btn remove-btn center')
  btnEl1.textContent = '-'
  
  const spanEl = document.createElement('span')
  spanEl.setAttribute('class', 'quantity-text center')
  spanEl.textContent = '1'

  const btnEl2 = document.createElement('button')
  btnEl2.setAttribute('class', 'quantity-btn add-btn center')
  btnEl2.textContent = '+'

  liEl.append(imgEl, pEl, btnEl1, spanEl, btnEl2)
  ulEl.append(liEl)

}

function renderStoreItem(imgParam) {

  const ulEl = document.querySelector("header .item-list")

  const liEl = document.createElement('li')
  
  const divEl = document.createElement('div')
  divEl.setAttribute('class', 'store--item-icon')

  const imgEl = document.createElement('img')

  if (imgParam.id === 10) {
    imgEl.setAttribute('src', `assets/icons/0${imgParam.id}-${imgParam.name}.svg`)
  }

  else {
    imgEl.setAttribute('src', `assets/icons/00${imgParam.id}-${imgParam.name}.svg`)
  }
  imgEl.setAttribute('alt', 'beetroot')

  const btnEl = document.createElement('button')
  btnEl.textContent = 'Add to cart'

  divEl.append(imgEl)
  liEl.append(divEl, btnEl)
  ulEl.append(liEl)

  //event listeners
  btnEl.addEventListener('click', function(event) {

    event.preventDefault()
    renderCardItem(imgParam)

  })
  
}

function render() {
  renderStoreSvg(state.items)
}

render()