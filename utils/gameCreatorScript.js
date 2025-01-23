/*

Put this into html to create button which triggers download of the generated data

    <button class="data" id="table-container">download</button>
    <script src="./utils/gameCreatorScript.js"></script>

*/

let games = [];

for(let i = 0; i < 1000; i++) {

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
	const names = [`Fishtastic`,`Cleopatra`,`Raging Gods: Olympus™ POWER COMBO`,`Game of Gladiators: Uprising`,`Dynamite Digger Eureka Jackpot`,`Mystery Reels Megaways™`,`BOGOF`,`Diamonds in Flames`,`Paws of Fury`,`Buffalo Blitz Live`,`Vikings: Fight for Honour™`,`Double Cash Spinner`,`King Kong Cash Instant`,`3 Blazing Volcanoes™ POWER COMBO`,`Granny vs. Zombies`,`Mega Moolah 4Tune Reels`,`ted Afterparty`,`Deal or No Deal Live`,`Scarab Gold`,`Britain's Got Talent Superstar`,`Lucha Chilli Scratch`,`6 Jokers`,`Wanted: Unusual Suspects`,`Roulette - Evolution`,`Live All Bets Blackjack`,`Rainbow Riches Cash Cluster`,`Aztec Might Cash Spree`,`Noughts & Crosses JP`,`Magical Reels`,`Elite Opal Blackjack`,`Bugs Money`,`Luck o' the Irish: Gold Spins`,`5 Pots o' Riches`,`Book of Kingdoms`,`Bullion Bars: Grab the Gold`,`Thai Flower Slot`,`Gold Digger`,`Flowers`,`Lil Demon Blazing Lava`,`Hell of a Deal`,`Money Stacks`,`Good Old 7's`,`Big Top Tombola`,`Past the Post`,`Vegas Sports Infinite Blackjack`,`Tiki Magic`,`Napoleon: Rise of an Empire`,`Fishin' Frenzy Jackpot King`,`Big Bonus`,`Frankie Dettori's Jackpot Roulette`,`Divine Diamonds`,`Grizzly!`,`Jackpot King Prize Lines`,`20p Slot`,`Colossal Cash Zone`,`RoboCop: Cash Collect`,`Well of Wishes`,`Chilli Picante Megaways`,`Kingdom of the Dead`,`Anubis Gold`,`3 Jokers+`,`Wild Drop Multiplier`,`The Greatest Train Robbery`,`Tippy Tavern`,`Cashzuma`,`Book of Bass`,`William Hill Christmas Megaways`,`Age of the Gods Norse: Gods and Giants`,`Sylvan Spirits`,`Wild Cats - Must Drop Jackpots`,`Lucky Little Devil - Must Drop Jackpots`,`Coconut Climb: LuckyTap`,`Vegas Cash Spins`,`Fishin' Frenzy`,`Big Bass Halloween™`,`Joker's Jewels Wild`,`Last Chance Saloon`,`Five Star Power Reels`,`Dynamite Diggin Doug`,`Plinball`,`Majestic Mysteries Power Reels`,`Premium Blackjack`,`Deal or No Deal: Double Action`,`MONOPOLY: On the Money Deluxe`,`Rise of Anubis`,`Fishin' Frenzy: The Big Catch Rapid Fire`,`Masters of Valhalla`,`Big Catch Bass Fishing Christmas Rapid Fire`,`Lightning Roulette Italia`,`Find the Diamonds!`,`Roulette Deluxe`,`Jinns Moon`,`9 Pearls of Fortune`,`Mr. Pigg E. Bank™`,`Amazing Link Hades`,`Deal or No Deal: Banker's Bonanza`,`William Hill Slingo`,`Kong`,`Blazin' Rails`,`Tempered Steel`,`Leprechaun's Luck: Cash Collect`,`Gold Hit: Dragon Bonanza`,`Diamond Rise`,`Vikings Go Berzerk`,`888 | WH Mega Fire Blaze Blackjack`,`Fishin' Pots of Gold: Gold Blitz™`,`Slingo Advance`,`Rainbow Riches: Pick'n'Mix`,`Nugget Frenzy`,`Teen Patti - Evolution`,`Area Link Phoenix`,`Time of the Titans: Reign of Cronus`,`Holy Mackerel! Fishy Business`,`Dragon's Luck - Must Drop Jackpots`,`MONOPOLY Mega Movers`,`Snakes & Ladders: Snake Eyes`,`Slingo Space Invaders`,`Slingo: Journey to Asgard`,`7's Deluxe`,`Frozen Age`,`Mining Pots of Gold`,`Casino Hold'em`,`Mr Cash Back`,`Tsai Shen's Gift`,`William Hill Vegas Great Gifts`,`Deal or No Deal Bingo 75`,`The Flintstones`,`Fishing Floats: Connectify Pays™`,`Hyper Strike Cash Megaways`,`Willy's Den`,`Craps Live`,`Age of the Gods Norse: Book of Dwarves`,`Luck o' the Irish Strike: Rapid Fire`,`Wolf It Up!`,`Hope Diamond`,`Purrfect Potions`,`Speed Baccarat B`,`Big Fishing Fortune`,`Zoom Room`,`Gold Blitz™ Extreme`,`Diamond Bet Roulette`,`Gold Hit: Shrine of Anubis`,`Thai Flower Megaways`,`Pirates' Frenzy`,`Fire Forge`,`Star Wilds Hot Spins+`,`Starburst`,`Buster Blackjack`,`5 Star Coins Hold & Win`,`Red Door Roulette`,`Age of the Gods: Lord of Lightning`,`Fairground Fortunes Ghost Train`,`Fruit Mix`,`William Hill Auto Mega Roulette`,`Day of the Dinero`,`9 Pots of Gold`,`Diamond Jackpots`,`Tropical Bonanza`,`Vegas Blackjack F`,`Dr. Jackpot & Mr. Wild`,`Luck o' the Irish: Fortune Spins 2`,`Live Roulette Lobby`,`Honey Rush`,`Muertos Fortune`,`Slingo River Re3ls`,`888 Megaways™`,`Beat The Bobbies Tower of London Jackpot`,`Lucky Lucky Blackjack`,`Amazing Link Fates`,`Jade Shuriken`,`Santa Spins`,`The Winnings of Oz`,`Cash Inferno: Sizzling Scatters`,`Lucky Larry's Lobstermania Slingo`,`Team Santa: POWER COMBO`,`Mighty Griffin Megaways™`,`333 Fat Frogs™ POWER COMBO™`,`American Triple Double Gold™`,`Rolling in Gold`,`Slots o' Gold`,`Lucky Numbers X8`,`Wild Party Jokers`,`William Hill Vegas: The Hot Offer Deluxe`,`Rainbow Power Potz UltraNudge`,`Big Bass: Hold & Spinner`,`Bigger Bass Bonanza`,`Slingo Extreme`,`Hell's Kitchen`,`Crystal Lotus`,`9 Pots of Gold: Land & Win™`,`Scrooge Megaways`,`Lunch Club`,`Fishin' Christmas Pots of Gold`,`Coins`,`Lucky Wizard - Must Drop Jackpots`,`Timelines`,`Banquet of Dead`,`Asgardian Fire`,`Age of the Gods: King of the Underworld`,`Night Trax`,`Bling Bling Penguin: Link & Win`,`Big Bass: Secrets of the Golden Lake`,`Atlantean Treasures Mega Moolah`,`Gets the Worm`,`Super Hot Fruits`,`Wish Upon a Jackpot`,`Winner Workshop Wonderland LuckyTap`,`Beez Kneez Jackpot`,`The Dog House: Muttley Crew`,`Piggies and the Bank: LuckyTap`,`Fortune Coin`,`Ancient Disco`,`Euphoria Megaways`,`John Hunter and the Book of Tut`,`Dream Catcher`,`The Ultimate 5`,`Sticky Stacked Fire 7s`,`First Person Deal or No Deal`,`Vegas Sports Blackjack 3`,`Perfect Blackjack`,`Atlantis: POWER COMBO`,`9 Pots of Gold Megaways`,`Odin's Riches`,`Diamond Room`,`Slingo Fire & Ice`,`Diamond Blitz`,`Legacy of Dead`,`Elite Topaz Blackjack`,`Mafia Millions`,`Rainbow Riches Drops of Gold`,`Wild West Gold`,`Revolution`,`Dragon's Fire`,`90k Yeti Gigablox`,`Adventures Beyond Wonderland Live`,`Pirots`,`Slingo Money Train`,`Reel King Megaways`,`Cashpots Blazinator`,`PowerUP Roulette`,`Dunk Buddy LuckyTap﻿™`,`Bullion Bars: Gold Collector`,`Vault of Anubis`,`9 Races to Glory`,`Fire and Roses Joker: King Millions`,`5 Star Knockout`,`Saint Nicked 2: Ho Ho Ho JPK`,`Gold Cherry`,`Diamond Sands`,`Housey Bingo`,`My Bingo Hall Jackpot`,`Masters of Olympus`,`First Person Lightning Blackjack`,`Live Spin a Win`,`Slingo Who Wants to Be a Millionaire`,`Big Bad Wolf Megaways`,`4 Fantastic Fish Gigablox`,`Eye of Horus: The Golden Tablet`,`Happy Fortune Dragon`,`Spirit Wolf Wins`,`Kings of Crystals II POWER COMBO`,`Heart of Rio`,`Big Piggy Bank`,`Battle for Booty: LuckyTap`,`Pragmatic Play Top Games`,`Cat Wilde in the Eclipse of the Sun God`,`Blue Wizard`,`New & Hot`,`333 Boom Banks™ POWER COMBO™`,`UFC Gold Blitz Extreme`,`Wintry Wonderland`,`Star Clusters`,`Leprechaun's Rainbow Megaways`,`Bass Cash Christmas X UP`,`Halloween Fortune`,`Emerald King`,`The Hot Offer`,`Piranha Pays`,`Zodiac Supernova`,`Cash Strike HotStepper Rapid Fire`,`20p Roulette`,`Hot Shots: Mines`,`Ghost Slider`,`Bargain Basement`,`Ancient Fortunes: Minotaur Rising™`,`Top Games Evolution Lobby`,`Playtech Exclusive Tables`,`Fox Mayhem`,`The Lost Boys™: Rapid Fire`,`Wild Antics`,`Transylvania: Night of Blood`,`Fishin' Frenzy Christmas`,`Rick and Morty Megaways™`,`Egyptian Fortunes`,`Power Zones: Thunder Birds`,`First Person Lightning Roulette`,`Crazy Genie - Must Drop Jackpots`,`Pirate Plunder`,`Hi-Lo`,`Fluffy Favourites Fairground Jackpot`,`Legion Gold and the Sphinx of Dead`,`Cash Truck`,`Santa's Big Bash Megaways`,`William Hill Royal Roulette`,`Pilgrim of Dead`,`Captain Jack's Chests`,`Cleopatra Gold`,`Serengeti Gold`,`Bass Cash X UP™`,`Goal Strike Rising Rewards™`,`9 Pots of Gold Roulette`,`Jungle Jackpots`,`Pyramid LinX`,`Zulu Gold`,`Immortal Romance II`,`Gods of Egypt: Ra's Reign`,`Lucky Ways Multiplier`,`Book of Yuletide`,`Bison Moon Ultra Link&Win`,`Dead or Alive: Saloon`,`Western Gold 2`,`Wild Tundra`,`Riptide Pirates™`,`Snakes & Ladders Megadice`,`Front Runner: Link & Win`,`Panther Pays`,`Djinn of Storms`,`Fishin' Frenzy Scratchcard`,`3 Pots of Gold`,`Barnyard Megahays Megaways™`,`Big Bass: Day at the Races`,`Deal or No Deal Red Box Streak`,`Beach Life`,`Genie Jackpots Wishmaker Jackpot King`,`Money Stacks Megaways™`,`William Hill Vegas Presents Loot Boost`,`Good Luck ClusterBuster`,`WH First Person Roulette`,`Gus's Gold: Minecart Mayhem`,`Beriched`,`Rich Little Piggies: Meal Ticket`,`Jin Ji Bao Xi: Endless Treasure`,`Dr. Wildshock: Mad Loot Lab`,`Buildin' Bucks`,`Boat Bonanza: Colossal Catch`,`Angel Princess`,`Norsk Roulette`,`9 Masks of Fire: Land & Win`,`William Hill Mayfair Roulette.`,`Moon Princess`,`Slingo: Press Your Luck`,`Mega Bars Big Hit JPK`,`Fire Blaze: Sky Queen Megaways™`,`Snow Wild and the 7 Features - Must Drop Jackpots`,`Cleocatra`,`Age of the Gods: Rulers of Olympus`,`Book of Blarney Gigablox`,`Deal or No Deal: The Big Hit Megaways Jackpot King`,`No Commission Baccarat`,`Aviator`,`Dynamite Digger Jackpot`,`Slingo Centurion`,`Dice`,`Buffalo Collector`,`Cash Conjurer Scratch Card`,`Rise of Giza PowerNudge`,`First Person Prosperity Tree Baccarat`,`Fishin' Frenzy Prize Lines`,`Slingo Berserk`,`Mega Pyramid`,`Genie's Link&Win 4Tune™`,`Big Bass Bonanza`,`Cash Bonanza`,`Pirots 2`,`Persian Fortune - Must Drop Jackpots`,`9 Mad Hats`,`Vegas Free Bet Blackjack 1`,`Bingo Scratch`,`Rising Rewards`,`Vegas Ball Bonanza`,`Squealin' Riches LocknWin`,`Fishin' Pots of Gold`,`Starlite Fruits: Mega Moolah`,`Popping Potions Magical Mixtures`,`Lightning Viking`,`Plinko`,`Live Unlimited Blackjack`,`Big Big Fishing Fortune`,`Chilli Con Carnival`,`Big Wheel Bonus`,`Prize Putt LuckyTap™`,`Premium French Roulette`,`Sweet Alchemy`,`Cirque de la Fortune`,`Clover Craze`,`Extreme 7+`,`First Person Golden Wealth Baccarat`,`Jackpot Giant`,`Fluffy Favourites: LuckyTap`,`Agent Jane Blonde Max Volume`,`Candy Combo™ POWER COMBO™`,`All Bets Blackjack Brasileira`,`William Hill Racetrack Riches`,`Rich Wilde and the Tome of Insanity`,`Slingo Tetris`,`Queen of the Pyramids: Mega Cash Collect`,`Temple of Riches Spin Boost`,`Temple of Iris 2 Jackpot`,`Gold Rally`,`Bonanza`,`Jingle Bells - Must Drop Jackpots`,`Gates of Olympus™`,`Mask of Amun Gold Blitz`,`Cats of the Caribbean`,`Undead Rich`,`Rich Little Hens: Founding Feathers`,`White Wizard Jackpot`,`Astronaut`,`Fire Hot 5`,`Puss'n Boots - Must Drop Jackpots`,`Crabbin' for Christmas JPK`,`Bling Bling Penguin: Ice on the Beach™`,`Perfect Peacock: Coin Combo`,`Slingo Capital Gains`,`Well of Wilds Megaways`,`Thunderstruck Wild Lightning`,`Vault Cracker Megaways™`,`Step Back 7's`,`Gold Hit & Link: JP Bacon & Co.`,`Grand Blackjack`,`Genie Jackpots`,`William Hill Mines`,`Rise of Khepri`,`Wild Circus - Must Drop Jackpots`,`Cash Box™`,`William Hill Valentine's Luck`,`God of Fire`,`Slingo Inca Trail`,`3 Lucky Witches`,`Bounty of the Beanstalk`,`Big Money Megaways™`,`Live Football Roulette`,`Speed Roulette - Evolution`,`Beetlejuice Megaways`,`Fast Fruits DoubleMax`,`Beware the Deep Megaways™`,`Fire and Roses Joker 2 All-In™`,`20p Boost Roulette`,`Big Money Frenzy`,`Slingo Reveal`,`Laser Fruit`,`MONOPOLY Live`,`Fishin' Frenzy Megaways™`,`Bigger Catch Bass Fishing: Rapid Fire`,`Chilli Heat Megaways`,`Silver Bullet Bandit: Cash Collect`,`Gold Digger Megaways`,`The Goonies Return`,`Triple 777 Jackpot`,`Slingo: Day of the Dab`,`Eye of Horus: Power 4 Slots`,`Slingo China Shores`,`Starlite Fruits`,`Mummy's Millions`,`Boat Bonanza`,`Big Scary Fortune`,`Rich Roll: Lust for Gold`,`Flash Pays Gold`,`No Commission Speed Baccarat A`,`Captain 8 and the Cosmic Crystals`,`Book of Dead`,`Age of the Gods: Goddess of Wisdom`,`Adventures in Wonderland Deluxe`,`1000 Diamond Bet Roulette`,`Majestic Megaways`,`Blazin' Hot 7's Wonder 500`,`William Hill Cash Bonanza`,`Arcade Bomb - Must Drop Jackpots`,`Bruno's Vegas Gold Blitz™`,`Speed Baccarat 1`,`Classic Roulette`,`Book of Midas`,`Dazzle Me™`,`Football Studio Roulette`,`Gonzo's Quest`,`Gems Bonanza`,`Tomb of Gold`,`Mines`,`Panda Queen`,`9 Masks of Fire`,`American Roulette`,`Anaconda Wild`,`Sheriff of Nottingham 2`,`Fluffy Favourites Fairground`,`Deal or No Deal: Go All the Way`,`Golden Gallina`,`Pile 'em Up: Frosty Sweets`,`Anubis Wild Megaways`,`Leprechaun's Lucky Charms`,`Eye of Horus II`,`Buffalo Blitz Megaways`,`Battleship Direct Hit`,`Safari Riches Megaways™`,`King Kong Cash: Even Bigger Bananas`,`Bar-X Infinity Reels™`,`Jingle Winner™`,`Chilli Champions UltraHitz`,`Montezuma`,`Cash Eruption`,`First Person Craps`,`Piggy Blitz: Disco Gold`,`The Runemakers DoubleMax`,`Rome: Fight for Gold 20000x`,`King Kong Cash: Even Bigger Bananas JPK`,`Candyfinity`,`Spin Spin Sugar`,`Furlong Fortunes Sprint`,`MONOPOLY Super Wheel Bonus`,`Christmas Plaza DoubleMax`,`First Person American Roulette`,`Elven Magic - Must Drop Jackpots`,`Book of Charms: Christmas Edition`,`Speed Baccarat A`,`Eye of Atum`,`Immersive Roulette`,`Spinny McWinnagin Loot Boost™`,`Heart of Cleopatra`,`Caribbean Stud Poker Live`,`Toro Shogun`,`Flash Pays Magician: LuckyTap`,`Slingo Rakin' Bacon`,`Football Penny Roller`,`Deal or No Deal Bingo`,`Shaman's Dream`,`Cash Link Express: Hold & Win`,`Deal or No Deal: What's in Your Box?`,`Cash Volt`,`Zeus Lightning Power Reels`,`The Magic Cauldron: Enchanted Brew`,`Slingoooal! Championship`,`Book of Scrolls`,`Luck o' the Irish: Fortune Play`,`Dragonfall`,`WWE Bonus Rumble™: Gold Blitz™`,`Wild Wild Riches`,`Treasure Tracks`,`Hot Gems`,`Lightning Blitz: Supercharged`,`Busted or Bailed`,`Time Out Tavern`,`Cash Patrol`,`Prosperity Tree Baccarat`,`Rise of the Pharaohs Scratch`,`Giant Gems`,`Blood Suckers™`,`Instant Roulette`,`Treasure Box Clans`,`Arabic Roulette`,`Chicken or the Egg?`,`Thor's Hammer Time`,`Irish Luck`,`Vegas Blackjack E`,`Wild o'Clock`,`Rainbow Riches Leprechauns Gold`,`Fishin' Frenzy: The Big Catch`,`Treasure Island`,`Stellar Stars™`,`Divine 9`,`Dawn of the Vikings: POWER COMBO`,`Wacky Waves Jackpot`,`Hot to Burn`,`Treasure Ireland™`,`Sahara Riches Megaways: Cash Collect`,`William Hill Joker`,`Slingo Fluffy Favourites`,`Fintastic Fishing™`,`Mega Fire Blaze: Big Circus!`,`Cats`,`Neon Links`,`Wishing Wheel`,`Rainbow Bonanza Paddys Fortunes`,`100 to 1 Roulette`,`Cash Eruption Vegas`,`Sidewinder: DoubleMax`,`3 Lucky Rainbows`,`Oink Farm`,`3 Stellar Bonanza™`,`Slingo Shark Week 700x`,`Armadillo Artie Gone Wild`,`Unusual Catch™`,`Royal Gems`,`Wild Wild Riches: Luck of the Irish Megaways`,`Jumanji: The Bonus Level Live`,`Sahara Riches: Cash Collect`,`Dungeons and Diamonds`,`Hyper Strike`,`Gargantoonz`,`Big Horsey Fortune`,`Hen Heist: Hold & Win`,`Buffalo King`,`Jackpot Bells`,`Gold Vault Roulette`,`Mirror Joker`,`Gold Hit: Lil' Demon`,`Jokrz Wild Jackpot`,`Wild Link Cleopatra`,`Crabbin' for Cash Extra Big Catch Jackpot King`,`Joker Rush: Cash Collect`,`Speed Crash`,`Epic Strike Roulette: 9 Masks of Fire`,`3 Tiny Gods Bonanza™`,`Wild Fishin' Wild Ways`,`Arctic Catch`,`Dragon's Mirror`,`Devilish Fortunes`,`Bulldozer`,`Beachside Bonanza Scratch Card`,`Hold Your Horses LuckyTap™`,`Midnight Thirst`,`Big William Hill Fortune`,`Original Roulette`,`Snakes & Ladders Live`,`Diamond Miner DuoMax™`,`Super Spinner Bar X`,`Fish 'em Up`,`Streak of Luck`,`Sweet Bonanza`,`Dynamite Riches Megaways`,`777 Super BIG BuildUp﻿﻿﻿ Deluxe`,`Joker Fire Frenzy`,`Battle Maidens`,`Rainbow Riches Power Pitch`,`Rainbow Riches Megaways™`,`Slingo Wolf Snowstorm`,`Lucky Halloween - Must Drop Jackpots`,`Fluffy Too Jackpot`,`Infinite Blackjack`,`Trolls Bridge`,`Piggy Riches 2 Megaways™`,`The Dog House`,`Tiger Palace`,`Quantum Blackjack Live Plus`,`More Unusual Catch`,`Grim Reaper Supermatch`,`Magic Mouse`,`Plunder Ahoy! Thundershots`,`Dracula Awakening`,`Prestige Roulette`,`Ray of Light`,`Wild Toro II`,`Bunny Loot`,`Age of the Gods: King of Olympus Fire Blaze Xtreme`,`Quantum Roulette Instant Play`,`MONOPOLY Travel World Tour`,`Chilli Prize Pots`,`Release the Bison`,`Deal or No Deal: The Big Draw`,`Superstars`,`Enchanted Prince`,`Bounty Raid 2`,`Lock it Link Diamonds`,`Magic Jokers Bump Up`,`The Money Drop Live`,`Catch 22`,`Hot off the Press JP`,`Luck o' the Irish: Go for Gold`,`Finn's Golden Tavern`,`Big Santa Fortune`,`Big Bass Bonanza: Reel Action`,`Boxes`,`Cash Collect Roulette Live`,`Summer Vibes Accumul8`,`Big Buzz™`,`7's on Fire Deluxe`,`Santa King Megaways`,`Majestic Megaways Extreme 4`,`Ammit Arctic Freeze POWER COMBO`,`Hypernova 10kWays`,`Tin Can Cash`,`Sparkling Joker X UP`,`Hot Zone Wild`,`Live French Roulette`,`Big Piggy Bonus`,`Tiki Treasures Megaways™`,`John Hunter and the Tomb of the Scarab Queen`,`Ancient Fortunes: Poseidon™ WOWPOT!™ Megaways`,`Piggy Payout`,`Space Invaders Roulette`,`Lightning Storm`,`Aztec Falls`,`It's Bananas!`,`6 Appeal`,`Funky Pharaoh Spin Boost JPK`,`Bet on Baccarat`,`Bass Boss`,`William Hill Football Cash Collect`,`Totem Lightning - Must Drop Jackpots`,`Totem Lightning Power Reels - Must Drop Jackpots`,`Moriarty Megaways`,`Rainbow Wilds Megaways`,`Stacking Kong`,`Elephant Riches`,`Release the Kraken Megaways`,`Clover Rollover`,`Bingo Bowl`,`Crystal Lotus Jackpot`,`Cygnus`,`Funky Time`,`Lucky Fish Finder`,`Wish Upon a Leprechaun Megaways`,`Crabbin' Crazy: Hold & Win`,`Magic Tricks`,`Vicky Ventura - Must Drop Jackpots`,`Dynamite Frenzy`,`888 | WH Blackjack 2`,`Frank Bruno: Sporting Legends`,`Carp Chaos`,`Big Bass Xmas Xtreme`,`King Kong Cash`,`Deal or No Deal: Perfect Play`,`Azteca: Cash Collect™`,`Call of the Wild`,`Playboy® Fortunes™ King Millions™`,`Lucky Emeralds`,`William Hill Test Your Strength: LuckyTap™`,`Eye of Horus Gold Bet`,`Mega Roulette`,`Magnificent Power Bastet`,`Amazing Link Apollo`,`Lightning Dice`,`Sweet Alchemy 100`,`7's Deluxe Jackpot King`,`Wheel`,`Reel LinKing`,`Buffalo Blitz II`,`Irish Luck Jackpot`,`Hi-Lo Premium`,`7's Deluxe Fire Wheel JPK`,`Hot Shots Megaways`,`First Person XXXtreme Lightning Roulette`,`Rich Little Piggies: Hog Wild`,`Bac Bo`,`William Hill Coin Vault`,`Golden Offer`,`Cash 'N Riches Megaways`,`Diamonds, Sapphires & Rubies 4Play`,`Wild Showdown`,`Genie Jackpots Big Spin Frenzy`,`Queens of Ra: POWER COMBO`,`Jokrz Wild UltraNudge Gigablox`,`Dice Dice Dice`,`Gladiator: Road to Rome`,`Luck o' the Irish: Cash Strike Rapid Fire`,`Plenty o' Fortune`,`Irish Riches`,`Rome: Rise of an Empire`,`Piggy Bonanza`,`20p Roulette Christmas`,`Congo Cash`,`Vegas Sports Roulette`,`Majority Rules Speed Blackjack`,`Primate King`,`Fishin' Frenzy Megaways Jackpot King`,`Fishing Floats of Cash`,`Double Digger`,`Wild Crusade: Empire Treasures`,`Atlantis Queen`,`Deal or No Deal Golden Game`,`Ocean Hunter`,`Super Fruits Wild`,`William Hill Blackjack`,`Book of William Hill`,`Yun Cong Long`,`Coin! Coin! Coin!`,`Scarab Fortunes: Win & Spin`,`Fluffy Arcade: Ring Toss LuckyTap`,`Cleopatra Plus`,`3 Lucky Hippos`,`888 | WH Mega Fire Blaze Roulette`,`777 Strike`,`Mighty Black Knight`,`Eggs Bonanza`,`Double Fancy 7's`,`Esmeralda`,`Diamond Mine Extra Gold`,`Bully 4 U`,`Jewel Scarabs`,`Sky Queen™`,`Fluffy Favourites Remastered`,`Da Vinci's Mystery Super Lines`,`Lobster Bob's Crazy Crab Shack`,`Giga Blast`,`333 Jolly Fat Frogs POWER COMBO`,`Whack the Bell: Tap n Cash™`,`Fire and Roses Jolly Joker`,`7 Gold Gigablox`,`Green Wizard`,`Black Bull`,`Mega Fire Blaze: Breaking Bad`,`Blackjack Switch`,`Reel King Mega`,`Sugar Rush`,`Ice Lobster`,`Sherwood Gold`,`Football Studio Top Dice`,`King Kong Cash: Even Bigger Bananas Xmas`,`Royal Charm Scratch`,`Svensk Roulette`,`Majestic Fury Megaways Rapid Fire`,`Soho All Bets Blackjack`,`Lucky Numbers Bingo`,`Crabbin' Crazy II: Crabbin' Bonanza!`,`Age of the Gods: Furious 4`,`Stampede: Call of the Pride`,`Pixies of the Forest II`,`Early Bird`,`Stallion Kingdom™`,`Vegas Blackjack A`,`Who Wants to Be a Millionaire Megaways™`,`Monsters Unchained`,`Infinite Fun Fun 21 Blackjack`,`Big Bonus Booster™`,`King Kong Cash: Even Bigger Bananas 2`,`Fashion TV Mega Party`,`Mega Dragon`,`Quantum Roulette Live`,`Legion Gold Unleashed`,`Christmas Prize Pooch`,`Blazing Sea`,`MONOPOLY Utility Trails`,`Cosmic Moon Link&Win`,`DeLorean LuckyTap™`,`Desperate Dawgs 2 Gigablox`,`Gold Horsey Winner`,`Jacks or Better`,`Diamonds, Sapphires & Rubies`,`White Wizard Deluxe`,`Bonus Fruits`,`Vegas Blackjack C`,`Past the Post Jackpot`,`Ahmun Ra Scratch`,`Mustang Gold Megaways`,`Nitropolis 2`,`Slingo Cleopatra`,`Jacks or Better Multi-Hand`,`Big Bass Bonanza Megaways`,`Devil's Number`,`Alice's Spin Party`,`Dwarf & Dragon`,`XXXtreme Lightning Roulette`,`Reel Keeper`,`Finn and the Swirly Spin`,`Deutsches Roulette`,`Piggy Blitz`,`Live from Las Vegas`,`Gold Collector`,`Blobsters ClusterBuster`,`Ammit Treasure™`,`Willy's Winners`,`Wolf It Up! Christmas`,`Age of the Gods Bonus Roulette Live`,`Oasis of Dead`,`10,001 Nights`,`Jingle Bells Power Reels`,`Hit the Top`,`Spaceman`,`Flaming Tiki`,`The Wicked Dead`,`Age of the Gods: Mighty Midas`,`Japanese Squeeze Baccarat`,`Fruits & Fortune`,`Thunderstruck Stormchaser`,`Blazing Mammoth`,`Splash of Riches`,`European Roulette - Realistic`,`William Hill: Soccer Festival`,`24 Hour Grand Prix`,`Stampede`,`Power Blackjack`,`Double Lucky Mushrooms DoubleMax`,`Age of the Gods: Athena vs Ares`,`Cash Plane X5000™`,`The Dog House Megaways`,`Cash Ultimate`,`The Great Jackpot Expedition`,`Thunderstruck II`,`Mighty Monkey: Coin Combo`,`Slingo Elf Blitz`,`Halloween Spin Party`,`William Hill Vegas Football: Gold Hit`,`Mega Don: Feeding Frenzy`,`Gold Splash: Toots Froots`,`Gold Cash Free Spins`,`Christmas Morning`,`Elite Pearl Blackjack`,`Dragon Jackpot Roulette`,`Mad Max: Fury Road Megaways`,`Joyful Joker Megaways`,`Storm to Riches`,`Buckaneers' Frenzy`,`Fortune Fortress`,`Hot Spin Hot Link`,`Tiki Fruits - Must Drop Jackpots`,`Centurion`,`Kingfisher Rising™`,`Piggy Payouts Bank Buster LuckyTap™`,`Shamans Dream 2 Jackpot`,`Fruit Party 2`,`Big Kick LuckyTap`,`Raiders of Fortune`,`Coins on Fire`,`Age of the Gods: Fate Sisters`,`First Person Lightning Baccarat`,`ted™`,`Centurion Megaways`,`Roulette Live`,`Sleepy Barista`,`Wolf Legend`,`Rich Wilde and the Amulet of Dead`,`Loot Boost`,`Fishin' Frenzy Gold Bet`,`Limbo`,`Fruit Shop Megaways`,`Fruit Combinator`,`Perfect Prize Pooch`,`Rainbow Riches: Rainbow Frenzy`,`Doggy Riches Megaways`,`Millionaire Genie Scratch`,`Honoluloot Smash: LuckyTap™`,`777`,`Clash of the Beasts`,`Roulette - Azure`,`Sonic Links`,`Age of the Gods: God of Storms III`,`Deadliest Catch™`,`Rainbow Riches: Crops of Cash`,`Elephant's Treasure`,`Fishing Deeper: Floats of Cash`,`Zeus III`,`The Pig Wizard`,`Monkey Bonanza`,`3 Cherry Frenzy™`,`3 Lucky Leprechauns`,`A  Nightmare on Elm Street`,`Cool Catch!`,`Fire Blaze: Fire Fighter`,`Nice Catch DoubleMax`,`Diamond Match Deluxe`,`Wild Hammer Megaways`,`Quickseat Blackjack`,`Genie's Arabian Riches™`,`Vlad's Castle Jackpot`,`Frankie Dettori's Magic Seven Blackjack`,`Reel Rush`,`Scratch 'n' Go! World Cup`,`Sweep&Win Roulette`,`Slingoooal!`,`Slingo Piggy Bank`,`MGM Grand Live Baccarat`,`Safari Riches`,`Electric Rocks`,`Barn Festival`,`Chronicles of Olympus II: Hades`,`Rabbit Royale`,`Rugby Penny Roller`,`Blackjack - Virtue Fusion`,`The Walking Dead 2`,`Shinobi Moon`,`Area Blast™ Double Bass`,`ted™ Cash Lock`,`Shave the Beard`,`Lucky Nuggets Megaways`,`Leprechaun Links: Power Stacks`,`Dice Dare2Win`,`Frankie Dettori: Sporting Legends`,`Oink Oink Oink`,`Magnificent Power Wolf Fire Spirit™`,`All About the Bass™`,`Cash Cubes Slot`,`Vegas Sports Blackjack 1`,`Samurai Katsumi`,`Lightning Dragon Tiger`,`Magnificent Power Apollo`,`Slingo Pop Arcade`,`4 Fantastic Fish`,`Dancing Drums`,`Slingo Lucky Joker`,`Wolf Gold`,`Ammit™`,`Western Gold Megaways`,`Always 8 Baccarat`,`Book of Ra 10 Deluxe`,`Frankie Dettori's Magic Seven Jackpot`,`Wild Survivor`,`JaXpot 7s`,`Lucky Lemons™`,`Jack and the Beanstalk`,`Time Machine`,`Bounty Raid`,`Vegas Sports Free Bet Blackjack 1`];
	let gameName = names[i];

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
	let newGame = Math.random() < 0.01;

	// Jackpot
	let jackpot = Math.random() < 0.025;

	// most searched
	let mostSearched = Math.random() < 0.01;

	// trending
	let trending = Math.random() < 0.01;

	// hot
	let hot = Math.random() < 0.01;

	// cold
	let cold = Math.random() < 0.01;

	// recommended
	let recommended = Math.random() < 0.01;

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
