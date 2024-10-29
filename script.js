const apiUrl = 'https://chicago.onrender.com'; // Update with your Render URL

// Ensure the DOM is loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
  fetchValue(); // Fetch and display initial value

  // Button actions
  document.querySelector("button:nth-of-type(1)").addEventListener("click", () => updateValue(5));
  document.querySelector("button:nth-of-type(2)").addEventListener("click", () => updateValue(-5));
});

// Fetch current value from the server
async function fetchValue() {
  try {
    const response = await fetch(`${apiUrl}/value`);
    const data = await response.json();
    document.getElementById("valueDisplay").textContent = data.value;
  } catch (error) {
    console.error("Error fetching value:", error);
    document.getElementById("valueDisplay").textContent = "Error loading value";
  }
}

// Update value on the server
async function updateValue(increment) {
  try {
    const response = await fetch(`${apiUrl}/value`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ increment })
    });
    const data = await response.json();
    document.getElementById("valueDisplay").textContent = data.value;
  } catch (error) {
    console.error("Error updating value:", error);
  }
}
