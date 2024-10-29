const apiUrl = 'https://chicago.onrender.com'; // Use your Render URL

// Ensure the DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Fetch and display the initial value
  fetchValue();

  // Add event listeners for button clicks
  document.querySelector("button:nth-of-type(1)").addEventListener("click", function() {
    updateValue(5); // Add 5 to the value on the server
  });

  document.querySelector("button:nth-of-type(2)").addEventListener("click", function() {
    updateValue(-5); // Subtract 5 from the value on the server
  });
});

// Fetch the current value from the server
async function fetchValue() {
  try {
    const response = await fetch(`${apiUrl}/value`);
    const data = await response.json();
    document.getElementById("valueDisplay").textContent = data.value; // Update the displayed value
  } catch (error) {
    console.error("Error fetching value:", error);
    document.getElementById("valueDisplay").textContent = "Error loading value";
  }
}

// Update the value on the server
async function updateValue(increment) {
  try {
    const response = await fetch(`${apiUrl}/value`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ increment })
    });
    const data = await response.json();
    document.getElementById("valueDisplay").textContent = data.value; // Update the displayed value
  } catch (error) {
    console.error("Error updating value:", error);
  }
}
