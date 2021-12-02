/*
This is how an item object should look like
{
  id: 1, // <- the item id matches the icon name in the assets/icons folder
  name: "beetroot",
  price: 0.35 // <- You can come up with your own prices
}
*/

//state object, has an array items wich itself has lots of objects inside with 4 properties wich are updated and used in the app
const state = {

  items: [

    {
      id: 1,
      name: 'beetroot',
      price: 0.97,
      inCart: 0
    },

    {
      id: 2,
      name: 'carrot',
      price: 0.75,
      inCart: 0
    },

    {
      id: 3,
      name: 'apple',
      price: 0.89,
      inCart: 0
    },

    {
      id: 4,
      name: 'apricot',
      price: 0.55,
      inCart: 0
    },

    {
      id: 5,
      name: 'avocado',
      price: 1.25,
      inCart: 0
    },

    {
      id: 6,
      name: 'bananas',
      price: 1.57,
      inCart: 0
    },

    {
      id: 7,
      name: 'bell-pepper',
      price: 2.55,
      inCart: 0
    },

    {
      id: 8,
      name: 'berry',
      price: 2.90,
      inCart: 0
    },

    {
      id: 9,
      name: 'blueberry',
      price: 4.50,
      inCart: 0
    },

    {
      id: 10,
      name: 'eggplant',
      price: 5.75,
      inCart: 0
    }

  ],
 
}

//global variables wich i use in functions without passing as paraments, or in this case juse for total calculating
let totalEl = document.querySelector('span.total-number')
let totalPrice = 0

//function to call the renderStoreItem for the header items to fill out in a for with argument an array from state
function renderStoreHeader(itemsParam) {
  //just has a for of loop, because i have an array parameter and want to call store header items

  //we get the ul wich i want from header
  const ulEl = document.querySelector("header .item-list")
  ulEl.innerHTML = ''

  for (const element of itemsParam) {
    renderStoreItem(element)
  }

}

//function to call renderCartItem this is called only when the btn in add to cart in renderStoreItem is clicked, problems here in rerendering
function renderCartItem(cardImgParam) {

  //creating the ul
  const ulEl = document.querySelector("main .item-list")

  //creating the li
  const liEl = document.createElement('li')

  //creating the img
  const imgEl = document.createElement('img')
  imgEl.setAttribute('class', 'cart--item-icon')

  //checking if the id 10 will have the 0 not 00 cause then it doesnt load
  if (cardImgParam.id === 10) {
    imgEl.setAttribute('src', `assets/icons/0${cardImgParam.id}-${cardImgParam.name}.svg`)
  }

  //other wich from id 1-9
  else {
    imgEl.setAttribute('src', `assets/icons/00${cardImgParam.id}-${cardImgParam.name}.svg`)
  }

  imgEl.setAttribute('alt', `${cardImgParam.name}`)

  //creating the p element
  const pEl = document.createElement('p')

  //creating the btn element the first one with -
  const btnEl1 = document.createElement('button')
  btnEl1.setAttribute('class' , 'quantity-btn remove-btn center')
  btnEl1.textContent = '-'
  
  //creating span element wich has the value when you change the btn + or -
  const spanEl = document.createElement('span')
  spanEl.setAttribute('class', 'quantity-text center')
  spanEl.textContent = cardImgParam.inCart

  //creating btn2 wich creates this button for +
  const btnEl2 = document.createElement('button')
  btnEl2.setAttribute('class', 'quantity-btn add-btn center')
  btnEl2.textContent = '+'

  //appending things and ul is created totally
  liEl.append(imgEl, pEl, btnEl1, spanEl, btnEl2)
  ulEl.append(liEl)

  //event listeners butttons the 1 and 2 - and +
  btnEl1.addEventListener('click', function(event) {

    event.preventDefault()
    decreaseItemQuantity(cardImgParam)

    spanEl.textContent = cardImgParam.inCart

    if (cardImgParam.inCart === 0) {
      liEl.remove()
    }

    calculateTotalSub(cardImgParam)
    render()

  })

  btnEl2.addEventListener('click', function(event) {

    event.preventDefault()
    increaseItemQuantity(cardImgParam)

    spanEl.textContent = cardImgParam.inCart

    // if (cardImgParam.inCart >= 50) {
    //   liEl.remove()
    //   totalEl = 0
    // }

    calculateTotalAdd(cardImgParam)
    render()

  })

}

//this is called when i click the small btn minus in cart item section, and updates the states
function decreaseItemQuantity(cardParam) {
  cardParam.inCart -= 1
}

//this is called when i click the small btn plus in cart item section, and updates the states
function increaseItemQuantity(cardParam) {
  cardParam.inCart += 1
}

//this functions calls the above function in the btn eventlistener, and this renders all items in the header part the 10 elements in the store
function renderStoreItem(imgParam) {

  //we get the ul wich i want from header
  const ulEl = document.querySelector("header .item-list")

  //creating li
  const liEl = document.createElement('li')
  
  //creating a div
  const divEl = document.createElement('div')
  divEl.setAttribute('class', 'store--item-icon')

  //creating an image
  const imgEl = document.createElement('img')

  //checking that the id 10 should have different src image string
  if (imgParam.id === 10) {
    imgEl.setAttribute('src', `assets/icons/0${imgParam.id}-${imgParam.name}.svg`)
  }

  //for the other from id 1-9 wich has an 00
  else {
    imgEl.setAttribute('src', `assets/icons/00${imgParam.id}-${imgParam.name}.svg`)
  }

  imgEl.setAttribute('alt', imgParam.name)

  //creating a button wich is crucial to this app
  const btnEl = document.createElement('button')
  btnEl.textContent = 'Add to cart'

  divEl.append(imgEl)
  liEl.append(divEl, btnEl)
  ulEl.append(liEl)

  //event listeners for the add to cart button
  btnEl.addEventListener('click', function(event) {

    event.preventDefault()

    increaseItemQuantity(imgParam)
    renderCartItem(imgParam)
    
    calculateTotalAdd(imgParam)

    render()

  }, { once: true })
  
}

//calculates when the small btn + is clicked and is called there in an event dom
function calculateTotalAdd(itemsParam) {

  let price = itemsParam.price
  totalPrice = totalPrice + price
  totalEl.textContent = `£${totalPrice.toFixed(2)}`

}

//calculates when the small btn - is clicked and is called there in an event dom
function calculateTotalSub(itemsParam) {

  let price = itemsParam.price
  totalPrice = totalPrice - price
  totalEl.textContent = `£${totalPrice.toFixed(2)}`

}

//calls everything, rerenders the page and does all
function render() {
  renderStoreHeader(state.items)
}

//the only function call in main, then everything renders here with function calls
render()