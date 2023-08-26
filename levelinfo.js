const CHARACTERISTICS = ['persuasive', 'mechanical', 'vengeful']//, 'prescient', 'elusive', 'dominant', 'intimidating', 'precise', 'patient', 'thrifty']

class LevelInfo {
    constructor() {
        this.xp = 0;
        this.level = 0;
        this.nextLevel = 100;

        this.characteristicsOff = [];
        this.characteristics = {};
        CHARACTERISTICS.forEach(element => {
            this.characteristicsOff.push(element);
            this.characteristics[element] = false;
        });
    }

    addXp(amount) {
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
        console.log('level up')
        this.newCharacteristic();
    }

    newCharacteristic() { //currently picks a random one
        let charIndex = Math.floor(Math.random() * this.characteristicsOff.length)
        let newChar = this.characteristicsOff[charIndex];
        this.characteristicsOff.splice(charIndex, 1);
        console.log(newChar);
        this.characteristics[newChar] = true;
    }
}

// i fucked with ur numbers to give a more noticable impact but we can balance later

// Persuasive: -50% reduction on all future shop prices: added
// Mechanical: +100% uses on all new useables: added
// Vengeful: +100% weapon dmg when below 30% health: added
// Prescient: see the name of the next space: unadded
// Elusive: gains +5% dodge for every 10 attack speed: unadded
// Dominant: gains 100% more gold upon killing an enemy/boss in less than 10 seconds: unadded
// Intimidating: enemy loses 100% of armor upon start of battle: unadded
// Precise: enemies takes 100% more damage from items, and 100% more from spells. : unadded
// Patient: receives a 100% damage increase after 20 seconds: unadded
// Thrifty: gains +100% gold from income : unadded