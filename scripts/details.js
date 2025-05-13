// 1. Extract the toy ID from the URL
function getToyIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    // Try to get 'id', if not present, fallback to 'i'
    let idParam = urlParams.get("id");
    if (!idParam) {
        idParam = urlParams.get("i");
    }
    return idParam ? Number(idParam) : null; // Convert the parameter to a number
}

// 2. Fetch the toy data and find the toy by ID
async function fetchToyDetails() {
    try {
        const response = await fetch("scripts/toy-data.json"); // Fetch the JSON data
        if (!response.ok) {
            throw new Error("Failed to fetch toy data");
        }

        const toys = await response.json(); // Convert the response to a JavaScript array
        const toyId = getToyIdFromURL(); // Get the toy ID from the URL
        const toy = toys.find(toy => toy.id === toyId); // Find the toy with the matching ID

        if (toy) {
            displayToyDetails(toy); // Display the toy details if found
        } else {
            console.error("Toy not found");
            alert("This toy doesn't exist"); // Alert the user if the toy isn't found
        }
    } catch (error) {
        console.error("Failed to fetch toy details", error);
        alert("Failed to fetch toy details"); // Alert the user if fetching fails
    }
}

// 3. Display the toy details dynamically
function displayToyDetails(toy) {
    const detailsSection = document.getElementById("toy-details");

    // Check if the section exists
    if (!detailsSection) {
        console.error('Element with ID "toy-details" not found.');
        return;
    }

    // Clear the section before adding new content
    detailsSection.innerHTML = "";

    // Create and append elements dynamically
    const image = document.createElement("img");
    image.src = toy.image;
    image.alt = toy.name;

    const toyTitle = document.createElement("h2");
    toyTitle.textContent = toy.name;

    const toyDescription = document.createElement("p");
    toyDescription.innerHTML = `<strong>Description:</strong> ${toy.description}`;

    const toyPrice = document.createElement("p");
    toyPrice.innerHTML = `<strong>Price:</strong> $${toy.price.toFixed(2)}`;

    // Append elements to the section
    detailsSection.appendChild(image);
    detailsSection.appendChild(toyTitle);
    detailsSection.appendChild(toyDescription);
    detailsSection.appendChild(toyPrice);
}

// 5. "Back to Homepage" button functionality
document.getElementById('return-button').addEventListener('click', () => {
    window.location.href = 'index.html'; // Redirect to the homepage
});

// Main function to run on page load
(async function () {
    await fetchToyDetails(); // Fetch and display the toy details
})();

