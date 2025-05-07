// This script fetches toy data from a JSON file and logs it to the console.
// It uses the Fetch API to make an asynchronous request to the specified URL.
async function fetchToyData() {
    const url = 'scripts/toy-data.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
            console.log(url);
        }
       const toysData = await response.json();
       console.log(toysData);
       displayToys(toysData);
    } catch (error) {
        console.error('Error fetching toy data:', error);
    }

}
fetchToyData();

function displayToys(toysData){
    const toyProducts = document.getElementById('toy-products');

    // Creating an if statement making sure a product data exist
    if (!toyProducts){
        console.error('Element with ID "toy-products" not found.');
        return;
    }
    
    
    toysData.forEach((toy) => {
        
            const newDiv = document.createElement("div");

            const image = document.createElement("img");
            image.src = toy.image;
            image.alt = toy.name;
            const toyTitle = document.createElement("h2");
            toyTitle.textContent = toy.name;

            const toyPrice = document.createElement("p");
            toyPrice.textContent = `$${toy.price}`;


            
            newDiv.appendChild(image);
        newDiv.appendChild(toyTitle);
        newDiv.appendChild(toyPrice);
       toyProducts.appendChild(newDiv);
    })
    
}



