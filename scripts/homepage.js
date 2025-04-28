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