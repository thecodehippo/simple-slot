const loadingScreen = document.getElementById('loading-screen');
const content = document.getElementById('games');

//const gameDataF = fetch('data/gameData.json').then(res => res.json());
//const layoutF = fetch('data/layout.json').then(res => res.json());

loadingScreen.style.display = 'block';
content.style.display = 'none';

/*
async function generateContent() {
    const [gameData, layout] = await Promise.all([gameDataF, layoutF]);
}
    */

//generateContent();