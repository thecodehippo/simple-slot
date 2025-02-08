const loadingScreen = document.getElementById('loading-screen');
const content = document.getElementById('games');

export async function gameMapper(gameData, layout) {
  try {    
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

        const filter = element.filters[0];

        function getValue(obj, key) {
            return obj[key];
        }

        const filterGames = gameData.filter(game => Object.hasOwn(game, filter) && getValue(game, filter));

        filterGames.forEach(game => {
            let gameTile = document.createElement('div');
            gameTile.innerHTML = game.gameName;
            gameTile.className = 'gameTile';
            gamesWrapper.appendChild(gameTile); 
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