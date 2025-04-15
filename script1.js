// Get the button and heading elements from the DOM
const button = document.getElementById("changeTextBtn");
const heading = document.getElementById("heading");

// Add an event listener to the button
button.addEventListener("click", function() {
  heading.textContent = "ok done!";
});
