/*

This is how an item object should look like

{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}

*/

function renderCardItem() {

  const ulEl = document.querySelector("main .item-list")

  const liEl = document.createElement('li')
  
  const imgEl = document.createElement('img')
  imgEl.setAttribute('class', 'cart--item-icon')
  imgEl.setAttribute('src', 'assets/icons/001-beetroot.svg')
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

function renderStoreItem() {

  const ulEl = document.querySelector("header .item-list")

  const liEl = document.createElement('li')
  
  const divEl = document.createElement('div')
  divEl.setAttribute('class', 'store--item-icon')

  const imgEl = document.createElement('img')
  imgEl.setAttribute('src', 'assets/icons/001-beetroot.svg')
  imgEl.setAttribute('alt', 'beetroot')

  const btnEl = document.createElement('button')
  btnEl.textContent = 'Add to cart'

  divEl.append(imgEl)
  liEl.append(divEl, btnEl)
  ulEl.append(liEl)
  
}

renderStoreItem()
renderCardItem()