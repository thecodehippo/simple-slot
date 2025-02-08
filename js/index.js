import { gamesData } from '../data/gameData.js';
import { gameMapper } from './gameMapper.js';
const layoutFetch = fetch('data/layout.json').then(res => res.json());

async function generateContent() {
    layoutFetch.then(layout => gameMapper(gamesData, layout));
}

// Call the function to generate content after the page loads
generateContent();
