// Ensure the DOM is loaded before running script
document.addEventListener("DOMContentLoaded", function() {
  // Retrieve saved value from localStorage or initialize to 0 if not set
  let currentValue = parseInt(localStorage.getItem("currentValue")) || 0;

  // Display the initial value
  document.getElementById("currentValue").textContent = currentValue;

  // Add event listener for button click
  document.getElementById("addButton").addEventListener("click", function() {
    // Log current value for debugging
    console.log("Current value before adding 5:", currentValue);

    // Add 5 to current value
    currentValue += 5;

    // Save updated value to localStorage
    localStorage.setItem("currentValue", currentValue);

    // Update display with new value
    document.getElementById("currentValue").textContent = currentValue;

    // Log updated value for debugging
    console.log("Current value after adding 5:", currentValue);
  });
});
