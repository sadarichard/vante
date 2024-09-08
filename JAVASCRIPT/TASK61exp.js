// Toggle navigation menu on mobile screens
function toggleNav() {
  // Retrieve the navigation links element from the DOM using its ID
  // 'getElementById' returns the element with the ID specified
  const navLinks = document.getElementById("navLinks");

  // 'classList' is a property that provides access to the class names of the element
  // 'toggle' is a method that adds or removes a class from the element's class list
  // If the 'active' class is present, it will be removed; if it is absent, it will be added
  // This is useful for showing or hiding the navigation menu on mobile screens
  navLinks.classList.toggle("active");
}

// Modal pop-up functionality
function openModal() {
  // Retrieve the modal element from the DOM using its ID
  // 'getElementById' returns the element with the ID specified
  const modal = document.getElementById("myModal");

  // Change the CSS 'display' property of the modal element to 'block'
  // This makes the modal visible on the page
  modal.style.display = "block"; // 'block' is a display value that makes the element a block-level element
}

function closeModal() {
  // Retrieve the modal element from the DOM using its ID
  // This is the same as in the 'openModal' function
  const modal = document.getElementById("myModal");

  // Change the CSS 'display' property of the modal element to 'none'
  // This hides the modal from view, making it not occupy any space in the layout
  modal.style.display = "none"; // 'none' hides the element completely
}

// Accordion functionality
// 'querySelectorAll' selects all elements that match the given CSS selector
// Here, we are selecting all elements with the class 'accordion-button'
const accordionButtons = document.querySelectorAll(".accordion-button");

// 'forEach' is an array method that executes a provided function once for each array element
// Here, it is used to loop through each 'accordion-button' element
accordionButtons.forEach((button) => {
  // 'addEventListener' attaches an event handler to the specified element
  // 'click' is the type of event we are listening for
  // The provided function will be executed whenever the button is clicked
  button.addEventListener("click", function () {
    // 'this' refers to the element that was clicked, i.e., the current 'accordion-button'
    // 'nextElementSibling' gets the next sibling element of the clicked button in the DOM
    // This is assumed to be the content panel that should be shown or hidden
    const content = this.nextElementSibling;

    // Toggle the display style of the content element
    // If the current display style is 'block', we set it to 'none' to hide the content
    // If the current display style is 'none', we set it to 'block' to show the content
    // This creates a show/hide effect for the accordion content
    content.style.display =
      content.style.display === "block" ? "none" : "block";

    // 'classList' provides access to the element's class names
    // 'toggle' is used to add or remove the 'active' class
    // The 'active' class can be used to change the appearance of the button to indicate it is active or not
    this.classList.toggle("active");
  });
});
