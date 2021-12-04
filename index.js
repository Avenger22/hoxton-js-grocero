//global variables wich i use in functions without passing as paraments, or in this case juse for total calculating
let totalEl = document.querySelector('span.total-number')
const storeUl = document.querySelector("header .item-list")
const cartUl = document.querySelector("main .item-list")
const emptyCartBtn = document.querySelector('button.empty-cart-btn')
const sortPriceBtn = document.querySelector('button.store--btn-sort-price')
const sortAlphabetBtn = document.querySelector('button.store--btn-sort-alphabet')
const sortPriceBtnRemove = document.querySelector('button.store--btn-sort-price-remove')

//global variables button to filter by type
const filterTypeApricot = document.querySelector('button.store--btn-sort-filter-10')
const filterTypeBeetroot = document.querySelector('button.store--btn-sort-filter-1')
const filterTypeCarrot = document.querySelector('button.store--btn-sort-filter-2')
const filterTypeApple = document.querySelector('button.store--btn-sort-filter-3')
const filterTypeAvocado = document.querySelector('button.store--btn-sort-filter-4')
const filterTypeBanana = document.querySelector('button.store--btn-sort-filter-5')
const filterTypeBellPepper = document.querySelector('button.store--btn-sort-filter-6')
const filterTypeBerry = document.querySelector('button.store--btn-sort-filter-7')
const filterTypeBlueBerry = document.querySelector('button.store--btn-sort-filter-8')
const filterTypeEggPlant = document.querySelector('button.store--btn-sort-filter-9')

// const filterAllBtn = document.querySelectorAll('button.store--btn-sort-filter')

//state object, has an array items wich itself has lots of objects inside with 4 properties wich are updated and used in the app
const state = {

  items: [

    {
      id: 1,
      name: 'beetroot',
      price: 6.78,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 2,
      name: 'carrot',
      price: 0.75,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 3,
      name: 'apple',
      price: 0.55,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 4,
      name: 'apricot',
      price: 0.25,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 5,
      name: 'avocado',
      price: 1.25,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 6,
      name: 'bananas',
      price: 1.70,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 7,
      name: 'bell-pepper',
      price: 7.55,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 8,
      name: 'berry',
      price: 9.90,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 9,
      name: 'blueberry',
      price: 4.50,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    },

    {
      id: 10,
      name: 'eggplant',
      price: 5.75,
      inStock: 30,
      inCart: 0,
      filterOnly: false
    }

  ],

  priceOrderBy: [], //this will have objects from items in state ordered by price in rerendering etc feature works
  alphabetOrderBy: [], //the same as above

  orderByPrice: false, //this is what trigers wether we will have to render in order or not
  orderByAlphabet: false,
  filter: false
 
}
 
state.priceOrderBy.push(...state.items); //now both are the same spread operator copy array
state.alphabetOrderBy.push(...state.items); //now both are the same spread operator copy array

//function that sorts by alphabet uses state.alphabetOrderBy
function sortByAlphabet() {

  //or do it with arrow functions
  state.alphabetOrderBy.sort(function(a, b){
    if(a.name < b.name) { return -1; }
    if(a.name > b.name) { return 1; }
    return 0;
  })

  state.orderByAlphabet = true
  state.orderByPrice = false
  render()

}

//function that uses sorts by alphabet
function getEventListenerBtnSortAlphabet() {

  sortAlphabetBtn.addEventListener('click', function(event) {

    event.preventDefault()
    sortByAlphabet()

  })

}

// const priceOrderDescending = state.items.sort((b, a) => (b.price > a.price) ? 1 : (b.price === a.price) ? ((b.name > a.name) ? 1 : -1) : -1 )
// console.log(priceOrderDescending)

// Questions to answer

// Q: What items are in the store? ✅
// A: state.items

// Q: What items are in my cart? ✅
// A: getCartItems()

// Q: How many of each item do I have? ✅
// A: state.items.inCart

// Q: How much do I have to pay? ✅
// A: getCalculateTotal()

// Q: How many items are in stock? ✅
// A: state.items.inStock

//-------------------------------------------HELPER FUNCTIONS---------------------------------------------------------------
//-------------------------------------------DERIVED STATE------------------------------------------------------------------
//this function gets the ordered array in the state
function getOrderedStore() {

  // state.priceOrderBy = state.items.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.name > b.name) ? 1 : -1) : -1 ) //this changes original array thats why revert button didnt work

  state.priceOrderBy.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.name > b.name) ? 1 : -1) : -1 )
  state.orderByPrice = true
  state.orderByAlphabet = false
  render()

}

//this function gets the previous orderes array by changing state and rerender
function getEventListenerRevertBackOrder() {

  sortPriceBtnRemove.addEventListener('click', function(event) {

    event.preventDefault()
    changeOrderByPrice()

  })

}

//helper for the event listener to rever order price back to previous state
function changeOrderByPrice() {

    state.orderByPrice = false
    state.orderByAlphabet = false
    state.filter = false
    render()

}

//this function just is part of init() and gets ordered calls the function there
function getEventListenerBtnSortPrice() {

  sortPriceBtn.addEventListener('click', function(event) {

    event.preventDefault()
    getOrderedStore()

  })

}

//function wich contains all 10 event listeners for 10 btn filters by type
function getEventListenerFilterButtons() {

  filterTypeApple.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'apple') {
        element.filterOnly = true
        render()
      }

    }

  })

  filterTypeApricot.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'apricot') {
        element.filterOnly = true
        render()
      }

    }
    
  })

  filterTypeAvocado.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'avocado') {
        element.filterOnly = true
        render()
      }

    }
    
  })

  filterTypeBanana.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'bananas') {
        element.filterOnly = true
        render()
      }

    }
    
  })

  filterTypeBeetroot.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'beetroot') {
        element.filterOnly = true
        render()
      }

    }
    
  })

  filterTypeBellPepper.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'bell-pepper') {
        element.filterOnly = true
        render()
      }

    }
    
  })

  filterTypeBerry.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'berry') {
        element.filterOnly = true
        render()
      }

    }
    
  })

  filterTypeBlueBerry.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'blueberry') {
        element.filterOnly = true
        render()
      }

    }
    
  })

  filterTypeEggPlant.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'eggplant') {
        element.filterOnly = true
        render()
      }

    }
  
  })

  filterTypeCarrot.addEventListener('click', function(event) {

    event.preventDefault()
    state.filter = true

    for (const element of state.items) {

      if (element.name === 'carrot') {
        element.filterOnly = true
        render()
      }

    }
    
  })

}

//function that stores all true filter only in state.items array i need for events of buttons filter by
function getFilterByState() {
  return state.items.filter(item => item.filterOnly === true)
}

//this is a function in wich when i click a new feature added button the whole cart item get erased by manipulating the STATE
function emptyCartBtnEvent() {

  for (const element of state.items) {
    const saveCartQuantity = element.inCart
    element.inCart = 0
    element.inStock += saveCartQuantity
  }

}

//this function just clears all cart items when clicked as an event listener and calls function inside it
function listenToEmptyCartBtn() {

  emptyCartBtn.addEventListener('click', function () {

    emptyCartBtnEvent()
    render()

  })

}

//the key function to make rendering work as it should
function getCartItems() {

  return state.items.filter(item => item.inCart > 0) //filter is a method for ARRAYS to filter and create a new ARRAY

  /* arrow function function (item) {
    return item.inCart > 0
  } 
  */

}

//this is called when i click the small btn minus in cart item section, and updates the states
function decreaseItemQuantity(cardParam) {

  if (cardParam.inCart > 0) {
    cardParam.inCart--
    cardParam.inStock++
  }

}

//this is called when i click the small btn plus in cart item section, and updates the states
function increaseItemQuantity(cardParam) {

  if (cardParam.inStock > 0) {
    cardParam.inStock--
    cardParam.inCart++
  }

}

//this function calculates the total and rerenders when state changes
function calculateTotal() {

  let total = 0

  const cartArray = getCartItems()

  for (const element of cartArray) {
    total += element.price * element.inCart
  }

  return total

}

//this function crucial to make the x button feature work
function removeItemFromStore(removeParam) {

  const updatedStore = state.items.filter(storeParam => storeParam.id !== removeParam.id)
  state.items = updatedStore

}

//----------------------------------------RENDER FUNCTIONS------------------------------------------------------------------------
//function to call the renderStoreItem for the header items to fill out in a for with argument an array from state
function renderStore(itemsParam, priceParam, alphabetParam) {

  //just has a for of loop, because i have an array parameter and want to call store header items

  //we get the ul wich i want from header DESTROY THEN RECREATE
  storeUl.innerHTML = ''
  const filterArray = getFilterByState()

  //we create here individual store item so 10 will be shown each time you rerender and destroy then render etc

  if (state.orderByPrice === false && state.orderByAlphabet === false && state.filter === false) {
    for (const element of itemsParam) {
        renderStoreItem(element)
    }
  }

  else if(state.orderByPrice === true && state.orderByAlphabet === false && state.filter === false) {
    for (const element of priceParam) {
        renderStoreItem(element)
    }
  }

  else if(state.orderByPrice === false && state.orderByAlphabet === true && state.filter === false) {
    for (const element of alphabetParam) {
        renderStoreItem(element)
    }
  }

  else if(state.orderByPrice === false && state.orderByAlphabet === false && state.filter === true) {
    for (const element of filterArray) {
        renderStoreItem(element)
    }
  }

}

//this functions calls the above function in the btn eventlistener, and this renders all items in the header part the 10 elements in the store
function renderStoreItem(storeParam) {

  //creating li
  const liEl = document.createElement('li')
  
  //creating a div
  const divEl = document.createElement('div')
  divEl.setAttribute('class', 'store--item-icon')

  //creating a btn with x to remove el from store
  const removeBtnEl = document.createElement('button')
  removeBtnEl.textContent = 'X'
  removeBtnEl.addEventListener('click', function(event) {

    event.preventDefault()

    removeItemFromStore(storeParam)
    render()

  })
  
  //creating an image
  const imgEl = document.createElement('img')

  //checking that the id 10 should have different src image string
  if (storeParam.id === 10) {
    imgEl.setAttribute('src', `assets/icons/0${storeParam.id}-${storeParam.name}.svg`)
  }

  //for the other from id 1-9 wich has an 00
  else {
    imgEl.setAttribute('src', `assets/icons/00${storeParam.id}-${storeParam.name}.svg`)
  }

  imgEl.setAttribute('alt', storeParam.name)

  //creating a button wich is crucial to this app
  const btnEl = document.createElement('button')
  btnEl.textContent = 'Add to cart'

  //creating span to show me the item if is in stock and how many
  const stockSpanEl = document.createElement('span')
  stockSpanEl.setAttribute('class', 'stock-span-store')
  stockSpanEl.textContent = `The stock: ${storeParam.inStock}`

  //creating span to show me the item price
  const priceSpanEl = document.createElement('span')
  priceSpanEl.setAttribute('class', 'price-span-store')
  priceSpanEl.textContent = `The price: ${storeParam.price}`

  //creating span to show me the item name
  const nameSpanEl = document.createElement('span')
  nameSpanEl.setAttribute('class', 'name-span-store')
  nameSpanEl.textContent = `Name: ${storeParam.name}`

  //appending in order
  divEl.append(imgEl)
  liEl.append(removeBtnEl, divEl, btnEl, stockSpanEl, priceSpanEl, nameSpanEl)
  storeUl.append(liEl)

  //event listeners for the add to cart button
  btnEl.addEventListener('click', function(event) {

    event.preventDefault()

    increaseItemQuantity(storeParam)
    calculateTotal()

    render()

  })

}

//this function render the cart in the main html
function renderCart() {

  //just has a for of loop, because i have an array parameter and want to call store header items

  //we get the ul wich i want from header DESTROY
  cartUl.innerHTML = ''

  // then, recreate the contents of the cart FILTER ARRAY THIS RETURNED THING
  const cart = getCartItems() //KEY TO MAKE THINGS WORK

  for (const element of cart) {
    renderCartItem(element)
  }

}

//function to call renderCartItem this is called only when the btn in add to cart in renderStoreItem is clicked, problems here in rerendering
function renderCartItem(cartParam) {

  //creating the li
  const liEl = document.createElement('li')

  //creating the img
  const imgEl = document.createElement('img')
  imgEl.setAttribute('class', 'cart--item-icon')

  //checking if the id 10 will have the 0 not 00 cause then it doesnt load
  if (cartParam.id === 10) {
    imgEl.setAttribute('src', `assets/icons/0${cartParam.id}-${cartParam.name}.svg`)
  }

  //other wich from id 1-9
  else {
    imgEl.setAttribute('src', `assets/icons/00${cartParam.id}-${cartParam.name}.svg`)
  }

  imgEl.setAttribute('alt', `${cartParam.name}`)

  //creating the p element
  const pEl = document.createElement('p')

  //creating the btn element the first one with -
  const btnEl1 = document.createElement('button')
  btnEl1.setAttribute('class' , 'quantity-btn remove-btn center')
  btnEl1.textContent = '-'
  
  //creating span element wich has the value when you change the btn + or -
  const spanEl = document.createElement('span')
  spanEl.setAttribute('class', 'quantity-text center')
  spanEl.textContent = cartParam.inCart

  //creating btn2 wich creates this button for +
  const btnEl2 = document.createElement('button')
  btnEl2.setAttribute('class', 'quantity-btn add-btn center')
  btnEl2.textContent = '+'

  //appending things and ul is created totally
  liEl.append(imgEl, pEl, btnEl1, spanEl, btnEl2)
  cartUl.append(liEl)

  //event listeners butttons the 1 and 2 - and +
  btnEl1.addEventListener('click', function(event) {

    event.preventDefault()
    decreaseItemQuantity(cartParam)

    spanEl.textContent = cartParam.inCart

    // if (cardImgParam.inCart === 0) {
    //   liEl.remove() YOU DONT NEED THIS YOU HAVE STATE NO DOM
    // }

    calculateTotal()
    render()

  })

  btnEl2.addEventListener('click', function(event) {

    event.preventDefault()
    increaseItemQuantity(cartParam)

    spanEl.textContent = cartParam.inCart

    calculateTotal()
    render()

  })

}

//function that renders the total span after each rerender
function renderTotal() {

  totalEl.textContent = '£' + calculateTotal().toFixed(2)

}

//calls everything, rerenders the page and does all
function render() {

  renderStore(state.items, state.priceOrderBy, state.alphabetOrderBy)
  renderCart()
  renderTotal()

}

// change state >>> rerender
function init() {

  render()
  listenToEmptyCartBtn()
  getEventListenerBtnSortPrice()
  getEventListenerRevertBackOrder()
  getEventListenerBtnSortAlphabet()
  getEventListenerFilterButtons()

}

//FUNCTION CALL
//the only function call in main, then everything renders here with function calls
init()