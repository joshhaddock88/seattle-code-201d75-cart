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

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  table.innerHTML = ' ';
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  const tbodyElem = document.querySelector('tbody');
  console.log(tbodyElem);

  console.log(cart);

  // TODO: Iterate over the items in the cart
  for(let item of cart.items) {
    let trElem = document.createElement('tr');
    let thElem = document.createElement('th');
    thElem.textContent = `${item.product}: ${item.quantity}`;
    console.log(thElem);
    let tdElem = document.createElement('td');
    tdElem.textContent = "X";
    trElem.appendChild(thElem);
    trElem.appendChild(tdElem);
    tbodyElem.appendChild(trElem);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
