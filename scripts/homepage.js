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
       const json = await response.json();
       console.log(json)
    } catch (error) {
        console.error('Error fetching toy data:', error);
    }

}
fetchToyData();

function displayToys(){
    const toyProducts = document.getElementById('toy-products');

    // Creating an if statement making sure a product data exist
    if (!toyProducts){
        console.error('Element with ID "toy-products" not found.');
        return;
    }

    toysData.forEach((toy) => {
        
    })
    
}



