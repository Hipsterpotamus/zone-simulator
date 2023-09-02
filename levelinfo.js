const CHARACTERISTICS = {
    'persuasive': {
        description: '15% reduction on all future shop prices',
        onCalculatePrice: function(basePrice) {
            return Math.ceil(basePrice * 0.85);
        }
    },
    'mechanical': {
        description: 'x2 uses on all new items',
        onItemUses: function(baseUses) {
            return baseUses * 2;
        }
    },
    'vengeful': {
        description: 'x1.5 weapon dmg when below 30% health',
        onCalculateDamage: function(baseDmg, hp, maxHp) {
            return (hp / maxHp < 0.3) ? Math.ceil(baseDmg * 1.5) : baseDmg;
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
        onCalculateDodge: function(baseDodge, attackSpeed) {
            return baseDodge + Math.max(Math.floor(attackSpeed / 10) * 2, 0);
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
        onCalculateEnemyArmor: function(baseArmor) {
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
        onCalculateDamage: function(baseDmg, ticksAlive) {
            return (ticksAlive > 500) ? Math.ceil(baseDmg * 1.4) : baseDmg;
        }
    },
    'thrifty': {
        description: 'gains x2 gold from income',
        onCalculateIncome: function(baseIncome) {
            return baseIncome * 2;
        }
    },
    'healthy': {
        description: 'heal 5% of max hp at the start of combat',
        onCombatStart: function(player) {
            player.changeHp(Math.floor(player.maxHp * 0.05));
        }
    },
    'brutal': {
        description: '+40% to shatter stat',
        onCalculateShatter: function(baseShatter) {
            return Math.floor(baseShatter * 1.4);
        }
    },
    'studious': {
        description: '-30% price reduction to all magic spells in shops',
        onCalculateSpellPrice: function(basePrice) {
            return Math.ceil(basePrice * 0.7);
        }
    },
    'emergent': {
        description: '+30% to all gained max hp',
        onMaxHpGained: function(baseMaxHp) {
            return Math.floor(baseMaxHp * 1.3);
        }
    },
    'defensive': {
        description: '-5% to all enemy dmg and +10% to all future armor gained. (round up)',
        onCalculateEnemyDamage: function(enemyDmg) {
            return Math.ceil(enemyDmg * 0.95);
        },
        onArmorGained: function(baseArmor) {
            return Math.ceil(baseArmor * 1.1);
        }
    },
    'tricky': {
        description: '25% chance on hit to reflect back 40% of damage taken (that bypassed armor)',
        onHitReceived: function(damageTaken) {
            if (Math.random() < 0.25) {
                return Math.floor(damageTaken * 0.4);
            }
            return 0;
        }
    },
    'nimble': {
        description: '+2 speed for every stat item purchased',
        onStatItemPurchased: function(itemInfo) {
            if (itemInfo['as']) {itemInfo['as'] += 2}
            else {itemInfo['as'] = 2}
            return itemInfo;
        }
    },
    'persistent': {
        description: '10th attack of every combat does triple damage.',
        onTenthAttack: function(attackNum) {
            return (attackNum === 10) ? 3 : 1;
        }
    },
    'committed': {
        description: 'receive a 5% dmg buff upon purchasing a shop item which is worth more than 90% of your current bankroll',
        onExpensivePurchase: function(player, itemPrice) {
            if (itemPrice >= player.gold * 0.9) {
                player.changeStat('dmg', Math.floor(player['dmg'] * 0.05));
            }
        }
    },
    'connected': {
        description: '+3 shop items offered at each shop by default (1 weapon, 1 armor, 1 stat).',
        onShopVisit: function(shopCode) {
            shopCode[0] += 1;
            shopCode[1] += 1;
            shopCode[2] += 1;
            return shopCode;
        }
    },
    'resurgent': {
        description: 'Once per combat, upon going below 50% health, heal 10% of max hp.',
        onHealthDrop: function(player) {
            if (player.resurgentUses === 0 && player.hp / player.maxHp < 0.5) {
                return Math.floor(player.maxHp * 0.1);
            }
            return 0;
        }
    },
    'boastful': {
        description: 'After combat, if total dmg dealt was greater than dmg received, gain a small buff to dmg, armor, and regen. Max of +1 dmg and +(1% of current dmg) for all three stats', //i do not know wtf this means
        onCombatEnd: function(player) {
            if (player.combatStats.outgoingDmg > player.combatStats.incomingDmg) {
                player.changeStat('dmg', 1);
                player.changeStat('arm', 1);
                player.changeStat('regen', 1);
            }
        }
    },
    'protective': {
        description: 'Armor gains a permanent 10% buff for each regen you have and regen receives a permanent 10% buff for each armor you have. (Do not interact, the 10% buff to armor from regen does not get factored into the 10% buff to regen from armor).', //this seems insane, lmk if i read it right lmao
        onCalculateArmor: function(baseArmor, baseRegen) {
            return baseArmor + baseArmor * baseRegen * 0.1;
        },
        onCalculateRegen: function(baseRegen, baseArmor) {
            return baseRegen + baseRegen * baseArmor * 0.1;
        }
    },
    'elegant': {
        description: 'When attackspeed is negative, attack speed stat is equal to 75% of it\'s current (true) value.',
        onCalculateAttackSpeed: function(baseAttackSpeed) {
            return (baseAttackSpeed < 0) ? Math.ceil(baseAttackSpeed * 0.75) : baseAttackSpeed;
        }
    },
    // 'peculiar': {
    //     description: 'Placeholder for future desc',
    //     onPeculiarEvent: function() {
    //         // Placeholder for future logic
    //     }
    // }
};

const LEVEL_ONE_XP = 50;
const XP_SCALE_MULT = 10;
    
class LevelInfo {
    constructor() {
        this.xp = 0;
        this.level = 0;
        this.nextLevel = LEVEL_ONE_XP;

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
        this.nextLevel = this.level * XP_SCALE_MULT + LEVEL_ONE_XP;
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