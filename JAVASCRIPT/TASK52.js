let cart = [];

function addItem() {
  const itemName = document.querySelector(".item-name").value;
  const itemPrice = parseFloat(document.querySelector(".item-price").value);

  if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
    displayMessage("Please enter a valid item name and price.");
    return;
  }
  cart.push({ name: itemName, price: itemPrice });
  updateCart();
  clearInputs();
}

function removeLastItem() {
  if (cart.length === 0) {
    displayMessage("No items to remove.");
    return;
  }
  cart.pop();
  updateCart();
}

function updateCart() {
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  document.querySelector(".total-items").innerText = `Total Items: ${totalItems}`;
  document.querySelector(".total-price").innerText = `Total Price: $${totalPrice}`;
  document.querySelector(".free-shipping").innerText =`Free Shipping: ${
    totalPrice >= 50 ? "Eligible" : "Not eligible"
  }`;
  document.querySelector(".messages").innerText = "";

  updateItemsList();
}

function updateItemsList() {
  const itemsList = document.querySelector(".items-list");
  itemsList.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerText = `${index + 1}. ${item.name} - $${item.price.toFixed(2)}`;
    itemsList.appendChild(li);
  });
}

function clearInputs() {
  document.querySelector(".item-name").value = "";
  document.querySelector(".item-price").value = "";
}

function displayMessage(message) {
  document.querySelector(".messages").innerText = message;
}
