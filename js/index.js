//const games = document.getElementById('games');

//const gameDataFetch = fetch('data/gameData.json', { mode: 'no-cors' })
//const layoutFetch = fetch('data/layout.json', { mode: 'no-cors' });

// Path to your JSON file
const jsonFilePath = './data/gameData.json';

// Function to load JSON data
async function loadJSON() {
    try {
        const response = await fetch(jsonFilePath, { mode: 'no-cors' });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayData(data); // Call a function to handle the data
    } catch (error) {
        console.error('Error fetching the JSON file:', error);
    }
}

// Function to display the data on the page
function displayData(data) {
    const outputDiv = document.getElementById('games');
    outputDiv.innerHTML = `
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
}

// Call the function to load JSON data when the script runs
loadJSON();
