/*

Put this into html to create button which triggers download of the generated data

<script src="./js/gameCreatorScript.js"></script>
<button class="data" id="table-container">download</button>

*/

let games = [];

for(let i = 0; i < 2000; i++) {

	// Game Type
	let gameType;
	let randomPercent = Math.floor(Math.random() * 100);
	const liveGameTypes = [`Live-Roulette`, `Live-Blackjack`, `Live-Game Shows`, `Live-Baccarat and SicBo`, `Live-Poker`, `Live-Slots`];
	const tableGameTypes = [`Table-Roulette`, `Table-Blackjack`];
	const gameTypes = [`Instant Win`, `Slingo`, `Crash`, `Multiplayer`, `Tap`, `Arcade`, `Scratchcards`, `Keno`, `Match-3`];

	console.log(randomPercent);

	// Weighted game types
	if(randomPercent >= 30) {
		gameType = 'Slots'
	} else if (randomPercent >= 15 && randomPercent < 30) {
		gameType = liveGameTypes[Math.floor(Math.random() * liveGameTypes.length)];
	} else if (randomPercent >= 10 && randomPercent < 15) {
		gameType = tableGameTypes[Math.floor(Math.random() * tableGameTypes.length)];
	} else {
		gameType = gameTypes[Math.floor(Math.random() * tableGameTypes.length)];
	}

	// RTP
	let RTP;
	let rtpMax = 98;
	let rtpMin = 94;

	if (gameType === 'Slots') {
		let randomRTP = Math.random() * (rtpMax - rtpMin + 1) + rtpMin;
		RTP = randomRTP.toFixed(2);
	}

	// Hit Rate
	let hitRate;
	let hrMax = 22;
	let hrMin = 30;

	if (gameType === 'Slots') {
		let randomHitRate = Math.random() * (hrMax - hrMin + 1) + hrMin;
		hitRate = randomHitRate.toFixed(2);
	}

	// Volatility
	let volatility;
	const volatilityTypes = ['Very Low', 'Low', 'Medium', 'High', 'Very High'];

	if (gameType === 'Slots') {
		volatility = volatilityTypes[Math.floor(Math.random() * volatilityTypes.length)]
	}

	// Studio
	let studio;
	const studioList = [`Red Tiger`, `NetEnt`, `Play'n Go`, `Greentube`, `Gamomat`, `IGT`, `Evolution Gaming`, `Wizard Games`, `iSoftBet`, `Eyecon`, `StakeLogic`, `Hacksaw Gaming`, `JustForTheWin`, `Nolimit City`, `Inspired Gaming`, `Skywind Group`, `Light and Wonder`, `Quickspin`, `All For One Studios`, `Yggdrasil`, `MGA Games`, `Amusnet`, `Wazdan`, `SpinPlay Games`, `Triple Edge Studios`, `Gaming Realms`, `Red Rake`, `Relax Gaming`, `Playtech Origins`, `WMS`, `High 5 Games`, `1X2gaming`, `Kalamba Games`, `SYNOT`, `Big Time Gaming`, `NextGen`, `Push Gaming`, `Amatic Industries`, `Reel Kingdom`, `Gold Coin Studios`, `Rarestone Gaming`, `Booming Games`, `Gameburger Studios`, `Thunderkick`, `Ruby Play`, `Realistic`, `Foxium`, `edict`, `ELK Studios`, `Barcrest`, `Northern Lights Gaming`, `Slot Factory`, `Iron Dog Studio`, `Snowborn Games`, `Crazy Tooth Studio`, `Lightning Box`, `Alchemy Gaming`, `Ainsworth`, `Slingshot Studios`, `2by2 Gaming`, `Merkur`, `Neon Valley Studios`, `G.Games`, `Reel Time Gaming`, `Aurum Signature Studios`, `Ash Gaming`, `Gaming Corps`, `GONG Gaming Technologies`, `Rabcat`, `H�lle Games`, `Reel Play`, `AGS`, `Habanero`, `Fantasma Games`, `Betsoft`, `Real Dealer Studios`, `Hurricane Games`, `PearFiction`, `Infinity Dragon Studios`, `Bally Wulff`, `Area Vegas`, `Bally`, `4ThePlayer`, `Nailed It! Games`, `Oryx`, `Oros Gaming`, `PG Soft`, `Wild Streak Gaming`, `Golden Rock Studios`, `Fortune Factory Studios`, `Spinberry`, `Atomic Slot Lab`, `Indigo Magic`, `Design Works Gaming`, `Blue Guru Games`, `NetGaming`, `Max Win Gaming`, `Tom Horn Gaming`, `Reflex Gaming`, `Ino Games`, `GAMING1`, `Playtech Vikings`, `Bwin.Party`, `Pulse 8 Studios`, `Apparat Gaming`, `Leap Gaming`, `Neko Games`, `CR Games`, `Spinomenal`, `Stormcraft Studios`, `Amusnet Interactive`, `Wishbone`, `CORE Gaming`, `Buck Stakes Entertainment`, `Boldplay`, `Instant Win Gaming`, `Lucksome`, `All41 Studios`, `Print Studios`, `Eurocoin Interactive`, `S Gaming`, `AvatarUX Studios`, `Red7`, `Shuffle Master`, `ReelNRG`, `Old Skool Studios`, `High Limit Studio`, `Peter and Sons`, `Bang Bang Games`, `Prospect Gaming`, `Live 5`, `Skillzzgaming`, `Esa Gaming`, `Endemol Shine Gaming`, `Jelly`, `Apex Gaming`, `Blue Ring Studios`, `Bulletproof Games`, `Novomatic`, `Epic Industries`, `Half Pixel Studio`, `Bluberi`, `Silverback Gaming`, `NetGame`, `Touchstone Games`, `Hammertime`];

	// Weighted studios
	if(randomPercent >= 70) {
		studio = 'Pragmatic Play'
	} else if (randomPercent >= 50 && randomPercent < 70) {
		studio = 'Blueprint'
	} else if (randomPercent >= 30 && randomPercent < 50) {
		studio = 'Games Global'
	} else if (randomPercent >= 20 && randomPercent < 30) {
		studio = 'Playtech'
	} else {
		studio = studioList[Math.floor(Math.random() * studioList.length)];
	}

	// Game Name
	let gameName;
	const names = [`Diamond`, `Lucky`, `Blazing`, `Dream`, `Golden`, `Mega`, `Frost`, `Magic`, `Wild`, `Emerald`, `Super`, `Grand`, `Fire`, `Frozen`, `Epic`, `Crystal`, `Royal`, `Turbo`, `Mystic`, `Silver`, `Jackpot`, `Adventure`, `Quest`, `Treasure`, `Empire`, `Magic`, `Gold`, `Stars`, `Fortune`, `Realm`, `Odyssey`, `Dreams`, `Kingdom`, `Legends`, `Delight`, `Cash`, `Gems`, `Voyage`, `Riches`, `Spins`, `Treasurea`, `Starline`, `Crystalis`, `Gemoria`, `Cashflow`, `Frostline`, `Richstrike`, `Mystoria`, `Dreamtale`, `Fortunium`, `Silversky`, `Thundoria`, `Magelord`, `Emeralite`, `Spinfinity`, `Jackpotia`, `Goldstrike`, `Spinorama`, `Blazemore`, `Firestorm`];

	let gameName1 = names[Math.floor(Math.random() * names.length)];
	let gameName2 = names[Math.floor(Math.random() * names.length)];

	gameName = gameName1 + " " + gameName2;

	// Theme
	let theme;
	const themes = [`Fruit`, `Gems`, `Casino`, `Classic`, `Fishing`, `Mining`, `Animals`, `Fantasy`, `Mythology`, `Adventure`, `Ancient Civilisation`, `Characters`, `Holidays`, `Middle Ages / Medieval`, `Fairy Tale`, `Scary`, `Elements`, `Sports`, `Countries`, `Wealth`, `Crime`, `Magic`, `Space`, `Sweets`, `TV`, `Branded`];

	theme = themes[Math.floor(Math.random() * themes.length)];

	// Features
	let feature;
	const features = [`Free Spins`, `Retrigger`, `Pick Me`, `Trail`, `Gamble`, `Hold And Win`, `Respins`, `Multiplier`, `Stacked Wilds`, `Sticky Wilds`, `Random Wilds`, `Expanding Wilds`, `Mystery Symbol`, `Scatter Wilds`, `Cascading Reels`, `Cash Collect`, `Buy bonus`, `Power Combo`];

	if (gameType === 'Slots') {
		feature = features[Math.floor(Math.random() * features.length)]
	}

	// Exclusive
	let exclusive = Math.random() < 0.2;

	// Branded
	let branded = Math.random() < 0.1;

	// Persistent
	let persistent = Math.random() < 0.05;

	// Reel layout
	let reelLayout
	const reelLayouts = [`3x3`, `3x5`, `5x4`, `5x5`, `6x4`, 'Other'];

	if (gameType === 'Slots') {
		reelLayout = reelLayouts[Math.floor(Math.random() * reelLayouts.length)]
	};

	// New
	let newGame = Math.random() < 0.1;

	// Jackpot
	let jackpot = Math.random() < 0.25;

	// most searched
	let mostSearched = Math.random() < 0.1;

	// trending
	let trending = Math.random() < 0.1;

	// hot
	let hot = Math.random() < 0.1;

	// cold
	let cold = Math.random() < 0.1;

	// recommended
	let recommended = Math.random() < 0.1;

	games.push({
		id: i,
		gameName: gameName,
		gameType: gameType,
		RTP: RTP,
		volatility: volatility,
		hitRate: hitRate,
		studio: studio,
		theme: theme,
		feature: feature,
		exclusive: exclusive,
		branded: branded,
		persistent: persistent,
		reelLayout: reelLayout,
		newGame: newGame,
		jackpot: jackpot,
		mostSearched: mostSearched,
		trending: trending,
		hot: hot,
		cold: cold,
		recommended: recommended
	})
}

document.getElementById("table-container").addEventListener("click", function () {
	// Convert the JSON object to a string
	const jsonString = JSON.stringify(games, null, 2);

	// Create a Blob with the JSON data
	const blob = new Blob([jsonString], { type: "application/json" });

	// Create a link to download the file
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = "data.json"; // Specify the file name
	a.click();
});
