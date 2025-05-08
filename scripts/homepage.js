// This script fetches toy data from a JSON file and logs it to the console.
// It uses the Fetch API to make an asynchronous request to the specified URL.
let originalToysData = [];

async function fetchToyData() {
    const url = 'scripts/toy-data.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
            // console.log(url);
        }
    const toysData = await response.json();
    // Keep a copy of the original data
    console.log(toysData);
    originalToysData = [...toysData];
    displayToys(toysData);
    // If you want to use the originalToysData variable elsewhere in this function, you can reference it after this line.
    // For example:
    // console.log('Original Toys Data:', originalToysData);
    } catch (error) {
        console.error('Error fetching toy data:', error);
    }

}
fetchToyData();

// This function is when you make a forEach loop, create an element for each data you are trying to fetch


function displayToys(toysData){
    const toyProducts = document.getElementById('toy-products');

    // Creating an if statement making sure a product data exist
    if (!toyProducts){
        console.error('Element with ID "toy-products" not found.');
        return;
    }
    
    
    toysData.forEach((toy) => {
        
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



