const CHARACTERISTICS = {
    'persuasive': '-25% reduction on all future shop prices',
    'mechanical': 'x2 uses on all new useables',
    'vengeful': 'x2 weapon dmg when below 30% health',
    'prescient': 'see the name of the next space',
    'elusive': 'gains +5% dodge for every 10 attack speed',
    'dominant': 'gains x2 more gold upon killing an enemy/boss in less than 500 ticks/10 seconds',
    'intimidating': 'enemy loses 100% of armor upon start of battle',
    'precise': 'enemies takes x2 more damage from items, and x2 more from spells',
    'patient': 'receives a x2 damage increase after 500 ticks/10 seconds',
    'thrifty': 'gains x2 gold from income'
  };

class LevelInfo {
    constructor() {
        this.xp = 0;
        this.level = 0;
        this.nextLevel = 50;

        this.characteristicsOff = [];
        this.characteristics = {};
        Object.keys(CHARACTERISTICS).forEach((char)=>{
            this.characteristicsOff.push(char);
            this.characteristics[char] = false;
        });
    }

    changeXp(amount) {
        this.xp += amount;
    }

    checkLvlUp() {
        return this.xp >= this.nextLevel;
    }

    updateNextLevel() { //generic, can be updated to your preferences
        this.nextLevel = this.level * 10 + 50;
    }

    levelUp(bossRewards) {
        this.xp -= this.nextLevel;
        this.level += 1;
        this.updateNextLevel();
        setNextButtonVisible(false);
        setBroadcastTitleText('Level Up!');
        this.createLvlUpElements([this.getCharacteristic(), this.getCharacteristic(), this.getCharacteristic()], bossRewards);
    }

    getCharacteristic() { //currently picks a random one
        let charIndex = Math.floor(Math.random() * this.characteristicsOff.length)
        let newChar = this.characteristicsOff[charIndex];
        this.characteristicsOff.splice(charIndex, 1); //only offered each once per game bc they get removed here
        return newChar;
    }

    createLvlUpElements(choices, bossRewards) { //used event creation format for now
        setBroadcastTitleText('Level Up!');

        const description = 'Choose from one of the characteristics below:'
        let descriptionElement = $('<p>', {
            'class': 'event-description'
        });
        descriptionElement.text(description);
        descriptionElement.appendTo('#description-container');
        setEventFormat(true);

        for (let choice of choices) {
            let button = $('<button>', {
                'class': 'event-button'
            });
            button.text(choice + ': ' + CHARACTERISTICS[choice]);
            button.on('click', () => {
                this.characteristics[choice] = true;
                $('#content-central-box').empty();
                if (bossRewards) {
                    bossRewards.giveBossRewards();
                } else {
                    setNextButtonVisible(true);
                }
            });
            button.appendTo('#content-central-box');
        }
    }
}

// i fucked with ur numbers to give a more noticable impact but we can balance later

// Persuasive: -25% reduction on all future shop prices: added
// Mechanical: +100% uses on all new useables: added
// Vengeful: +100% weapon dmg when below 30% health: added
// Prescient: see the name of the next space: added
// Elusive: gains +5% dodge for every 10 attack speed: added
// Dominant: gains 100% more gold upon killing an enemy/boss in less than 500 ticks/10 seconds: added
// Intimidating: enemy loses 100% of armor upon start of battle: added
// Precise: enemies takes 100% more damage from items, and 100% more from spells. : added
// Patient: receives a 100% damage increase after 500 ticks/10 seconds: added
// Thrifty: gains +100% gold from income : added