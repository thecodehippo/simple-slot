const loadingScreen = document.getElementById('loading-screen');
const content = document.getElementById('games');

// Fetch requests for game data and layout JSON files
const gameDataF = fetch('data/gameData.json').then(res => res.json());
const layoutF = fetch('data/layout.json').then(res => res.json());

//loadingScreen.style.display = 'block';
//content.style.display = 'none';

async function generateContent() {
    try {
        const [gameData, layout] = await Promise.all([gameDataF, layoutF]);
        let sectionArray = [];
        
        layout.forEach(element => {

            let gameSection = document.createElement('div');
            let sectionTitle = document.createElement('div');
            let sectionSubTitle = document.createElement('div');
            let gamesWrapper = document.createElement('div');

            gameSection.className = "game-section"
            sectionTitle.className = 'section-title';
            sectionSubTitle.className = 'section-subtitle';
            gamesWrapper.className = 'games-wrapper'

            gameSection.appendChild(sectionTitle);
            gameSection.appendChild(sectionSubTitle);
            gameSection.appendChild(gamesWrapper);

            sectionTitle.innerHTML = element.name;
            sectionSubTitle.innerHTML = element.tagline;

            gameData.forEach(game => {
                if(game.newGame) {
                    let gameTile = document.createElement('div');
                    gameTile.className = 'gameTile';
                    gamesWrapper.appendChild(gameTile);
                }
            })

            content.appendChild(gameSection);


        });

        //loadingScreen.style.display = 'none';
        //content.innerHTML = sectionArray;

    } catch (error) {
        console.error("Error loading data:", error);
        loadingScreen.style.display = 'none';
        content.style.display = 'block'; // Show content even if there was an error
    }
}

// Call the function to generate content after the page loads
generateContent();