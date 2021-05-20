/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('item')) || [];
  cart = new Cart(cartItems);
  console.log(cart);
}


// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.innerHTML = ' ';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const theadElem = document.createElement('thead');
  table.appendChild(theadElem);
  
  const trElem = document.createElement('tr');
  theadElem.appendChild(trElem);
  
  const thItem = document.createElement('th');
  trElem.appendChild(thItem);
  thItem.textContent = 'Item';
  
  const thQuantity = document.createElement('th');
  trElem.appendChild(thQuantity);
  thQuantity.textContent = 'Quantity';
  
  const thRemove = document.createElement('th');
  trElem.appendChild(thRemove);
  thRemove.textContent = 'Remove';
  
  const tbodyElem = document.createElement('tbody');
  table.appendChild(tbodyElem);
  console.log(tbodyElem);
  console.log(cart);

  // TODO: Iterate over the items in the cart
  for(let item of cart.items) {
    let trElem = document.createElement('tr');
    let thElem = document.createElement('th');
    let td1Elem = document.createElement('td');
    let td2Elem = document.createElement('td');
    thElem.textContent = `${item.product}:`;
    td1Elem.textContent = `${item.quantity}`;
    console.log(thElem);
    td2Elem.textContent = "X";
    tbodyElem.appendChild(trElem);
    trElem.appendChild(thElem);
    trElem.appendChild(td1Elem);
    trElem.appendChild(td2Elem);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}




function removeItemFromCart(event) {
  
  if (event.target.textContent === 'X') {
    target.parentElement.innerHTML = '';
  }

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  console.log(cart.item)
  cart.saveToLocalStorage();
}

// This will initialize the page and draw the cart on screen
renderCart();
