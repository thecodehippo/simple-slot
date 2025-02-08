const subPageContent = document.getElementById('subpage-games');
import { gamesData } from "../data/gameData.js";

const params = new URLSearchParams(window.location.search);
const subpageValue = params.get('page');

export function subPage() {

    let subPageGameSection = document.createElement('div');
    let subPageSectionTitle = document.createElement('div');
    let subPageSectionSubTitle = document.createElement('div');
    let subPageGamesWrapper = document.createElement('div');

    subPageGameSection.className = "sub-game-section"
    subPageSectionTitle.className = 'sub-section-title';
    subPageSectionSubTitle.className = 'sub-section-subtitle';
    subPageGamesWrapper.className = 'sub-games-wrapper'

    subPageGameSection.appendChild(subPageSectionTitle);
    subPageGameSection.appendChild(subPageSectionSubTitle);
    subPageGameSection.appendChild(subPageGamesWrapper);
    
    const subPageFilter = subpageValue;

    function getValue(obj, key) {
        return obj[key];
    }

    const subPageFilteredGames = gamesData.filter(game => Object.hasOwn(game, subPageFilter) && getValue(game, subPageFilter));

    subPageFilteredGames.forEach(game => {
        let gameTile = document.createElement('div');
        gameTile.innerHTML = game.gameName;
        gameTile.className = 'sub-gameTile';
        subPageGamesWrapper.appendChild(gameTile); 
    })

    subPageContent.appendChild(subPageGameSection);

    console.log(subPageContent);

}

subPage();

/*
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    let paramObj = {};
    for (let [key, value] of params.entries()) {
        paramObj[key] = value;
    }
    return paramObj;
}

const urlParams = new URLSearchParams("https://example.com/?product=trousers&color=black&newuser&size=s");

const urlParams = new URL("https://example.com/?product=trousers&color=black&newuser&size=s").searchParams;
const product = urlParams.get('product');
*/