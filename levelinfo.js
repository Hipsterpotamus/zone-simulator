const CHARACTERISTICS = {
    'persuasive': {
        description: '15% reduction on all future shop prices',
        onCalculatePrice: function(originalPrice) {
            return Math.ceil(originalPrice * 0.85);
        }
    },
    'mechanical': {
        description: 'x2 uses on all new items',
        onItemUses: function(originalUses) {
            return originalUses * 2;
        }
    },
    'vengeful': {
        description: 'x1.5 weapon dmg when below 30% health',
        onCalculateDamage: function(originalDmg, hp, maxHp) {
            return (hp / maxHp < 0.3) ? Math.ceil(originalDmg * 1.5) : originalDmg;
        }
    },
    'prescient': {
        description: 'see the name of the next space',
        onNotifyNextSpace: function(nextSpace) {
            notify('A chill runs down your spine... You can tell the next space will be a ' + nextSpace);
        }
    },
    'elusive': {
        description: 'gains +2% dodge for every 10 attack speed',
        onCalculateDodge: function(originalDodge, attackSpeed) {
            return originalDodge + Math.max(Math.floor(attackSpeed / 10) * 2, 0);
        }
    },
    'dominant': {
        description: 'gains x1.25 more gold upon killing an enemy/boss in less than 500 ticks/10 seconds',
        onCalculateGold: function(baseGold, ticksAlive) {
            if (ticksAlive < 500) {
                return Math.floor(baseGold * 1.25);
            }
            return baseGold;
        }
    },
    'intimidating': {
        description: 'enemies start with 25% less armor',
        onCalculateArmor: function(baseArmor) {
            return Math.ceil(baseArmor * 0.75);
        }
    },
    'precise': {
        description: 'enemies takes x1.8 more damage from items, and x1.8 more from spells',
        onCalculateDamage: function(baseDamage) {
            return Math.floor(baseDamage * 1.8);
        }
    },
    'patient': {
        description: 'receives a x1.4 damage increase after 500 ticks/10 seconds',
        onCalculateDamage: function(originalDmg, ticksAlive) {
            return (ticksAlive > 500) ? Math.ceil(originalDmg * 1.4) : originalDmg;
        }
    },
    'thrifty': {
        description: 'gains x2 gold from income',
        onCalculateIncome: function(originalIncome) {
            return originalIncome * 2;
        }
    },
    // Commented out blocks
    /*
    'healthy': {
        description: 'heal 5% of hp at the start of combat',
        onCombatStart: function(game) {
            // Logic for healing 5% of hp at the start of combat
        }
    },
    'brutal': {
        description: '+40% to shatter stat',
        onCalculateShatter: function(game) {
            // Logic for +40% to shatter stat
        }
    },
    'studious': {
        description: 'Placeholder for future logic',
        // Placeholder for future logic
    },
    'committed': {
        description: '+30% to all gained max hp',
        onMaxHpGained: function(game) {
            // Logic for +30% to all gained max hp
        }
    },
    'defensive': {
        description: '-5% to all enemy dmg and +10% to all future armor gained. (round up)',
        onCalculateEnemyDamage: function(game) {
            // Logic for -5% to all enemy dmg
        },
        onArmorGained: function(game) {
            // Logic for +10% to all future armor gained
        }
    },
    'tricky': {
        description: '25% chance on hit to reflect back 40% of damage taken (that bypassed armor)',
        onHitReceived: function(game) {
            // Logic for 25% chance on hit to reflect back 40% of damage taken
        }
    },
    'peculiar': {
        description: 'Placeholder for future logic',
        // Placeholder for future logic
    }
    */
};

    //'healthy': 'heal 5% of hp at the start of combat'
    //'brutal': '+40% to shatter stat'
    //'studious': -30% price reduction to all magic spells in shops
    //'emergent': +30% to all gained max hp 
    //'defensive': -5% to all enemy dmg and +10% to all future armor gained. (round up)
    //'tricky': 25% chance on hit to reflect back 40% of damage taken (that bypassed armor)
    //'nimble': +2 speed for every stat item purchased
    //'persistent': 10th attack of every combat does triple damage.
    //'committed': receive a 5% dmg buff upon purchasing a shop item which is worth more than 90% of your current bankroll
    //'connected': +3 shop items offered at each shop by default (1 weapon, 1 armor, 1 stat).
    //'resurgent': Once per combat, upon going below 50% health, heal 10% of max hp.
    //'boastful': After combat, if total dmg dealt was greater than dmg received, gain a small buff to dmg, armor, and regen. Max of +1 dmg and +(1% of current dmg) for all three stats
    //'protective': Armor gains a permanent 10% buff for each regen you have and regen receives a permanent 10% buff for each armor you have. (Do not interact, the 10% buff to armor from regen does not get factored into the 10% buff to regen from armor).
    //'elegant': When attackspeed is negative, attack speed stat is equal to 75% of it's current (true) value.
    //'peculiar': 

class LevelInfo {
    constructor() {
        this.xp = 0;
        this.level = 0;
        this.nextLevel = 50;

        this.characteristicsOff = [];
        this.activeCharacteristics = new Set();
        Object.keys(CHARACTERISTICS).forEach((char) => {
            this.characteristicsOff.push(char);
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
        this.createLvlUpElements([this.getCharacteristic(), this.getCharacteristic()], bossRewards);
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
            button.text(choice + ': ' + CHARACTERISTICS[choice].description);
            button.on('click', () => {
                this.activeCharacteristics.add(choice);
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