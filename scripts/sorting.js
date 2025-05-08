// In this file I will be doing the sorting and filter function based on default, categories and prices

fetchToyData()

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

