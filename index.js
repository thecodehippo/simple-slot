// config
const numLines = 6;
const numReels = 5;
const numSymbols = 58;
const numImages = 11;
let spinCount = 0;
const animationDelays = ["animationDelay0", "animationDelay5", "animationDelay10", "animationDelay15", "animationDelay20"];
const animationTiming = ["animationTiming1", "animationTiming2", "animationTiming3", "animationTiming4", "animationTiming5", "animationTiming6", "animationTiming7", "animationTiming8", "animationTiming9", "animationTiming10"];
const viewportHeight = window.innerHeight;
const helper = document.getElementById("helper"); 

//event listeners
const spinButton = document.getElementById("spinButton");
spinButton.addEventListener("click", spin);
const animatedDivs = document.querySelectorAll(".animatedDiv");

loadReels();

function loadReels() {
    animatedDivs.forEach((d, key) => {
        fillReel(d, numLines, key)
    })
}

function spin() {
    helper.innerText = ""
    animatedDivs.forEach((d, key) => {
        d.animationDirection = false //Math.random() < 0.5;
        d.animationDelay = animationDelays[4] //animationDelays[Math.floor(Math.random() * animationDelays.length)];
        d.animationTiming = animationTiming[2] //animationTiming[Math.floor(Math.random() * animationTiming.length)];
        spinCount++
        helper.innerText = helper.innerText + key + d.animationDirection + d.animationDelay + d.animationTiming + viewportHeight + "\n";
        fillReel(d, numSymbols, key, d.animationDirection)
        d.animationDirection ? d.setAttribute("style", "transform: translateY(0)") : d.setAttribute("style", `transform: translateY(-${(viewportHeight / 100 * 10) * 58}px`);
        d.animationDirection ? d.classList.add("active", d.animationDelay, d.animationTiming) : d.classList.add("reverse", d.animationDelay, d.animationTiming);
        d.addEventListener("animationend",() => {
            d.setAttribute("style", "transform: translateY(0)");
            d.animationDirection ? d.classList.remove("active", d.animationDelay, d.animationTiming) : d.classList.remove("reverse", d.animationDelay, d.animationTiming);
            let children = d.childElementCount;
            for(let i = 0; i < children - numLines; i++){
                d.animationDirection ? d.removeChild(d.firstChild) :  d.removeChild(d.lastChild);
            }
        })
    })
}

// utils
function randomImage() {
    let randomInt = Math.floor(Math.random() * numImages);
    switch(randomInt) {
        case 0:
            return '10';
        case 1:
            return 'A';
        case 2:
            return 'Gold';
        case 3:
            return 'J';
        case 4:
            return 'K';
        case 5:
            return 'Lantern';
        case 6:
            return 'Minecart';
        case 7:
            return 'Pickaxe';
        case 8:
            return 'Q';
        case 9:
            return 'Scatter';
        case 10:
            return 'Wild';
        default:
            return '10';
    }
}

function fillReel(animatedDiv, numSymbolsToAdd, animatedDivKey, animationDirection) {
    for(let i = 0; i < numSymbolsToAdd; i++) {
        let image = document.createElement("IMG");
        let symbolImage = randomImage();
        image.setAttribute("src", `images/${symbolImage}.png`);
        image.setAttribute("class", "symbolImage");
        animationDirection ? animatedDiv.appendChild(image) : animatedDiv.insertBefore(image, animatedDiv.firstChild);
    }
}