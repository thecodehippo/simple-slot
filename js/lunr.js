async function search() {
    const gameDataS = await fetch('data/gameData.json').then(res => res.json());

    var idx = lunr(function () {
        this.ref('id')
        this.field('gameName')
        
        gameDataS.forEach(function (doc) {
            this.add(doc)
        }, this)

    });

    return idx;

}

const button = document.getElementById('myButton');

button.addEventListener('click', async (e) => {
    const index = await search();
    const result = await index.search(document.getElementById('search').value);
    console.log(result);
})


