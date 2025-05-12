// In this file I will be doing the sorting and filter function based on default, categories and prices

fetchToyData();

// Fetch toy data and listen for the custom event
document.addEventListener('toysDataLoaded', (e) => {
    window.toysData = e.detail;
    clearAndDisplayToys(toysData); // Display toys initially
});

const sortOptions = document.getElementById('sort-options');

// Once you create every sorting or filtering function use all their value for each with ===
sortOptions.addEventListener('change', function() {

    const selectChoices = sortOptions.value;

    if (selectChoices === "price-asc") {
        sortToyPricesAsc();
    } else if (selectChoices === "price-desc") {
        sortToyPricesDesc();
    } else if (selectChoices === 'stuffed-toys') {
        filterToysByCat('Stuffed Toys');
    } else if (selectChoices === 'vehicle-toys') {
        filterToysByCat('Vehicles');
    } else if (selectChoices === 'action-toys') {
        filterToysByCat('Action Toys');
    } else if (selectChoices === 'default') {
        clearAndDisplayToys(originalToysData);
    } else {
        clearAndDisplayToys(originalToysData);
    }

});

// Create a function for every options 

function displayFeaturedToys() {
    clearAndDisplayToys(originalToysData)
    // Create another function in order to display every data
}

function sortToyPricesAsc() {
    const sortedToys = [...toysData].sort((a, b) => a.price - b.price);
    clearAndDisplayToys(sortedToys);
}

function sortToyPricesDesc() {
    const sortedToys = [...toysData].sort((a, b) => b.price - a.price);
    clearAndDisplayToys(sortedToys);
}

function filterToysByCat(categoryName) {
    const filteredToys = toysData.filter(toy => toy.category === categoryName);
    clearAndDisplayToys(filteredToys);
}

function clearAndDisplayToys(filteredToyData = toysData) {
    const toysContainer = document.getElementById('toy-products');
    toysContainer.innerHTML = ""; // Clear the container

    filteredToyData.forEach((toy) => {
        const newDiv = document.createElement("div");

        const image = document.createElement("img");
        image.src = toy.image;
        image.alt = toy.name;

        const toyTitle = document.createElement("h2");
        toyTitle.textContent = toy.name;

        const toyPrice = document.createElement("p");
        toyPrice.textContent = `$${toy.price.toFixed(2)}`;

        const detailsLink = document.createElement("a");
        detailsLink.textContent = "View Details";
        detailsLink.href = `details.html?i=${toy.id}`;

        newDiv.appendChild(image);
        newDiv.appendChild(toyTitle);
        newDiv.appendChild(toyPrice);
        newDiv.appendChild(detailsLink);

        toysContainer.appendChild(newDiv);
    });
}

// To filter by "Stuffed Toys", you need to pass this specific category name
// to your filtering function.
// Your `filterToysByCat` function (and similar filtering logic) should be modified:
// 1. It should accept a `categoryName` as a parameter (e.g., `function filterToysByCat(categoryName)`).
// 2. Inside the function, filter your primary array of all toys (e.g., `originalToysData` or `allFetchedToys`)
//    to get only toys matching `categoryName`. Example:
//    `const filteredToys = originalToysData.filter(toy => toy.category === categoryName);`
// 3. After filtering, call `clearAndDisplayToys(filteredToys)` to update the UI.
//    This ensures that filtering always happens on the complete dataset for consistency,
//    unless you intend to chain filters.

// Call the modified function with the specific category:
// Step-by-step plan to refactor and organize the code:

// 1. Centralize Data Fetching
//    - Move data fetching logic into a reusable function or module.
//    - If homepage.js already fetches toy data, consider exporting the data or a function to get the data from there.

// 2. Share Data Between Files
//    - Use a global variable or shared module to store fetched toy data so both homepage.js and sorting.js can access it.
//    - Alternatively, trigger a custom event after fetching data in homepage.js and listen for it in sorting.js.

// 3. Refactor Sorting and Filtering
//    - Write pure functions for sorting and filtering that take data as input and return new arrays.
//    - Avoid mutating the original data unless necessary.

// 4. Display Logic
//    - Have a single function responsible for rendering toys to the DOM.
//    - Call this function after sorting or filtering.

// 5. Event Handling
//    - Set up event listeners after ensuring the data is loaded.
//    - If data is loaded asynchronously, wait for it before enabling sorting/filtering.

// 6. Testing
//    - Test each function independently with sample data before integrating.

// Example: In homepage.js, after fetching data, dispatch a custom event with the data:
// fetch('toys.json')
//    .then(res => res.json())
//    .then(data => {
//       window.toysData = data;
//       document.dispatchEvent(new CustomEvent('toysDataLoaded', { detail: data }));
//    });

// Example: In sorting.js, listen for this event:
document.addEventListener('toysDataLoaded', (e) => {
    window.toysData = e.detail;
    clearAndDisplayToys(toysData); // Display toys initially
});

// Start by:
// - Refactoring your data fetching and sharing logic.
// - Then, rewrite your sorting/filtering functions as pure functions.
// - Finally, connect everything with event listeners and rendering.

// This approach will make your code modular, maintainable, and easier to debug.
