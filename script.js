// Retrieve saved value from localStorage or initialize to 0 if not set
let currentValue = parseInt(localStorage.getItem("currentValue")) || 0;

// Update display with current value
document.getElementById("currentValue").textContent = currentValue;

// Add event listener for button click
document.getElementById("addButton").addEventListener("click", function() {
  // Add 5 to current value
  currentValue += 5;
  
  // Update localStorage with new value
  localStorage.setItem("currentValue", currentValue);
  
  // Update display
  document.getElementById("currentValue").textContent = currentValue;
});
