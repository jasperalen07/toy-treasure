// In this file I will be doing the sorting and filter function based on default, categories and prices

fetchToyData();


const sortOptions = document.getElementById('sort-options');

// Once you create every sorting or filtering function use all their value for each with ===
sortOptions.addEventListener('change', function(){

    const selectChoices = sortOptions.value;

    if(selectChoices === "price-asc"){
        sortToyPricesAsc();
    } else if (selectChoices === "price-desc"){
        sortToyPricesDesc();
    } else if (selectChoices === 'stuffed-toys'){
        filterToysByCat();
    } else if (selectChoices === 'vehicle-toys'){
        filterToysByCat();
    } else if (selectChoices === 'action-toys'){
        filterToysByCat();
    } else if (selectChoices === 'default'){
        displayToys();
    } else {
        displayToys();
    }

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
    // document.addEventListener('toysDataLoaded', (e) => {
    //    window.toysData = e.detail;
    //    displayToys();
    //    // Now you can safely set up event listeners for sorting/filtering
    // });

    // Start by:
    // - Refactoring your data fetching and sharing logic.
    // - Then, rewrite your sorting/filtering functions as pure functions.
    // - Finally, connect everything with event listeners and rendering.

    // This approach will make your code modular, maintainable, and easier to debug.
});

// Create a function for every options 

function displayFeaturedToys(){
    clearAndDisplayToys(originalToysData)
    // Create another function in order to display every data
}

function sortToyPricesAsc(){
    toysData.sort((a, b) => a.price - b.price);
    clearAndDisplayToys()
}

function sortToyPricesDesc(){
    toysData.sort((a, b) => b.price - a.price);
    clearAndDisplayToys()
}

function filterToysByCat() {
    const filteredToys = toysData.filter(toy => toy.category === category);
    clearAndDisplayToys(filteredToys)
}


function clearAndDisplayToys( filteredToyData = toysData){
    const toysContainer = document.getElementById('toy-products');
    toysContainer.innerHTML = "";
    filteredToyData.forEach((toy) => {
        
           // New container for each toy data
           const newDiv = document.createElement("div");

           // Create an image element for each toy
               const image = document.createElement("img");
               image.src = toy.image;
               image.alt = toy.name;
   
               // Create a H2 element for each name of the toy
               const toyTitle = document.createElement("h2");
               toyTitle.textContent = toy.name;
               
               // Create a p element with backticks for the dollar sign for the toy price
               const toyPrice = document.createElement("p");
               toyPrice.textContent = `$${toy.price}`;
   
   
           // Create a details link using a tag for View Details, make an href and create a path for another html and connect it with the id from the json file
   
               const detailsLink = document.createElement("a");
               detailsLink.textContent = "View Details";
               detailsLink.href = `details.html?i=${toy.id}`;
   
   
               // Using append child is the last step to output every kind of data
               newDiv.appendChild(image);
           newDiv.appendChild(toyTitle);
           newDiv.appendChild(toyPrice);
           newDiv.appendChild(detailsLink);
   
          toyProducts.appendChild(newDiv);
       })
   
}

