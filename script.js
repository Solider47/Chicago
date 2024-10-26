// Base URL of your Render deployment
const apiUrl = 'https://your-render-app-url.onrender.com';

// Fetch the current shared value on page load
async function fetchValue() {
  try {
    const response = await fetch(`${apiUrl}/value`);
    const data = await response.json();
    document.getElementById('valueDisplay').textContent = data.value;
  } catch (error) {
    console.error("Error fetching value:", error);
    document.getElementById('valueDisplay').textContent = "Error loading value";
  }
}

// Update the value on the server by adding or subtracting
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
    document.getElementById('valueDisplay').textContent = data.value;
  } catch (error) {
    console.error("Error updating value:", error);
  }
}

// Initial fetch when the page loads
fetchValue();
