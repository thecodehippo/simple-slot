export function createSection(type) {

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

    switch(type) {

    }
}