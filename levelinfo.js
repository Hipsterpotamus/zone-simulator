const CHARACTERISTICS = ['persuasive', 'mechanical', 'vengeful', 'prescient', 'elusive', 'dominant', 'intimidating', 'precise', 'patient', 'thrifty']

class LevelInfo {
    constructor() {
        this.xp = 0;
        this.level = 0;
        this.nextLevel = 50;

        this.characteristicsOff = [];
        this.characteristics = {};
        CHARACTERISTICS.forEach(element => {
            this.characteristicsOff.push(element);
            this.characteristics[element] = false;
        });
    }

    changeXp(amount) {
        this.xp += amount;
        if (this.xp >= this.nextLevel) {
            this.xp -= this.nextLevel;
            this.level += 1;
            this.updateNextLevel();
            this.levelUp();
        }
    }

    updateNextLevel() { //generic, can be updated to your preferences
        this.nextLevel = this.level * 20 + 100;
    }

    levelUp() { 
        this.newCharacteristic();
    }

    newCharacteristic() { //currently picks a random one
        let charIndex = Math.floor(Math.random() * this.characteristicsOff.length)
        let newChar = this.characteristicsOff[charIndex];
        this.characteristicsOff.splice(charIndex, 1);
        notify('level up! new charactaristic: ' + newChar, 5);
        console.log(newChar);
        this.characteristics[newChar] = true;
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