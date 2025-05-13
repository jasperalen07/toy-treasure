// 1. Extract the toy ID from the URL
function getToyIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search); // Parse the query string from the current page's URL
    let idParam = urlParams.get("id"); // Try to get the 'id' parameter from the URL
    if (!idParam) {
        idParam = urlParams.get("i"); // Fallback to 'i' if 'id' is not present
    }
    return idParam ? Number(idParam) : null; // Convert the parameter to a number, or return null if it doesn't exist
}

// 2. Fetch the toy data and find the toy by ID
async function fetchToyDetails() {
    try {
        const response = await fetch("scripts/toy-data.json"); // Fetch the JSON data from the specified file
        if (!response.ok) {
            throw new Error("Failed to fetch toy data"); // Throw an error if the response is not OK
        }

        const toys = await response.json(); // Convert the response to a JavaScript array of toy objects
        const toyId = getToyIdFromURL(); // Get the toy ID from the URL
        const toy = toys.find(toy => toy.id === toyId); // Find the toy object with the matching ID

        if (toy) {
            displayToyDetails(toy); // If the toy is found, display its details
        } else {
            console.error("Toy not found"); // Log an error if the toy is not found
            alert("This toy doesn't exist"); // Alert the user that the toy doesn't exist
        }
    } catch (error) {
        console.error("Failed to fetch toy details", error); // Log an error if fetching or parsing fails
        alert("Failed to fetch toy details"); // Alert the user that fetching failed
    }
}

// 3. Display the toy details dynamically
function displayToyDetails(toy) {
    const detailsSection = document.getElementById("toy-details"); // Get the section where the toy details will be displayed

    // Check if the section exists
    if (!detailsSection) {
        console.error('Element with ID "toy-details" not found.'); // Log an error if the section is missing
        return; // Stop execution if the section is not found
    }

    // Clear the section before adding new content
    detailsSection.innerHTML = ""; // Remove any existing content in the section

    // Create and append elements dynamically
    const image = document.createElement("img"); // Create an image element
    image.src = toy.image; // Set the image source to the toy's image URL
    image.alt = toy.name; // Set the alt text to the toy's name

    const toyTitle = document.createElement("h2"); // Create an <h2> element for the toy's name
    toyTitle.textContent = toy.name; // Set the text content to the toy's name

    const toyDescription = document.createElement("p"); // Create a <p> element for the toy's description
    toyDescription.innerHTML = `<strong>Description:</strong> ${toy.description}`; // Add a bold "Description" label and the toy's description

    const toyPrice = document.createElement("p"); // Create a <p> element for the toy's price
    toyPrice.innerHTML = `<strong>Price:</strong> $${toy.price.toFixed(2)}`; // Add a bold "Price" label and format the price to two decimal places

    // Append elements to the section
    detailsSection.appendChild(image); // Add the image to the section
    detailsSection.appendChild(toyTitle); // Add the title to the section
    detailsSection.appendChild(toyDescription); // Add the description to the section
    detailsSection.appendChild(toyPrice); // Add the price to the section
}

// 5. "Back to Homepage" button functionality
document.getElementById('return-button').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect the user to the homepage when the button is clicked
});

// Main function to run on page load
(async function () {
    await fetchToyDetails(); // Fetch and display the toy details when the page loads
})();

