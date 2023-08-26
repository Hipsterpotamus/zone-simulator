// all stats:
// dmg: 'dmg', how many hit points foe loses each attack
// armor: 'arm', how much damage is blocked for each attack by foe
// regen: 'regen', how much hp is regained every regen cycle 
// attack speed: 'as', how many ticks it takes for your next attack
// level heal: 'levelheal', how much hp you regain upon the end of a combat
// dodge: 'dodge', chance your foes's attack does no damage
// accuracy: 'accuracy', subtracts (or adds) to your opponent's dodge chance
// lifedrain: 'lifedrain', proportion of your dmg dealt which you reabsorb as health
// thorn: 'thorn', damage dealt to opponent on taking damage (bypasses armor)
// shatter: 'shatter' chance to break 1 of your oppponents armor on attack (5 shatter means 50%, 10 shatter means 100%, 15 shatter means guaranteed -1 and a 50% chance for -2). Armor regained after combat
// bleed: 'bleed', chance to remove 1 of your opponents regen on attack (5 bleed means 50%, 10 bleed means 100%, 15 bleed means guaranteed -1 and a 50% chance for -2). Regen regained after combat
// tear: 'tear' how much max hp is removed from foe on attack (applied after normal attack, bypasses armor) does NOT regain after combat.
// anti heal: 'antiheal' removes a flat amount of regen from opponent at start of combat
// super armor: 'superarmor', additional armor which blocks thorn and tear

// regen rate: how many ticks it takes to achieve next regen
// more to come:

class Combat {
    constructor(msDelay = 20) {
        this.tick = 0;
        this.player;
        this.enemyList;
        this.lvlHealMult;
        this.delay = msDelay; //change this to change how long between ticks
        this.inCombat = false;
    }

    startCombat(player, enemyList) {
        this.tick = 0;
        this.inCombat = true;
        this.player = player;
        this.enemyList = enemyList;
        this.lvlHealMult = 0;
        this.enemyList.forEach(enemy => {
            if (enemy.getLvlHealMult() > this.lvlHealMult) {this.lvlHealMult = enemy.getLvlHealMult()};
        });

        //default to have selected enemy be the first one, can add listener to change once frontend is added
        //will need to ensure selected enemy is alive before changing
        //will also likely require some changes to enemy.updateEntityDisplay(), as it always outputs to the same div
        //could easily add a parameter to each enemy that determines it's number or something, or pass in this object so
        //each enemy has access to the enemyList and can dynamically determine it's position
        this.selectedEnemy = enemyList[0];
        this.changeCounters(false);
        $('#combatTimer').removeClass('hidden');
        this.combatTick();
    }

    combatTick() {
        if (!this.enemyList.includes(this.selectedEnemy)) {this.selectedEnemy = this.enemyList[0]};
        this.tick += 1;
        this.changeCounters(1);
        if (this.player.regenCounter >= this.player.regenRate) {
            this.player.regenCounter = 0;
            this.player.runRegen();
        }
        if (this.player.manaCounter >= this.player.manaRate){
            this.player.manaCounter = 0;
            this.player.changeMana(this.player.calcStat('manaGen'));
        }
        if (this.player.attackCounter >= this.player.calcAs()) {
            this.player.attackCounter = 0;
            this.selectedEnemy.receiveHitFrom(this.player);
        }

        this.enemyList.forEach(enemy => {
            if (enemy.alive) {
                if (enemy.regenCounter >= enemy.regenRate) {
                    enemy.regenCounter = 0;
                    enemy.runRegen();
                }
                if (enemy.attackCounter >= enemy.calcAs()) {
                    enemy.attackCounter = 0;
                    this.player.receiveHitFrom(enemy);
                }
            }
        });

        this.enemyList.forEach((enemy, index) => {
            if (!enemy.alive) {
                this.enemyList.splice(index, 1);  //currently removes enemy from enemyList when the enemy dies
            }
        });

        this.displayCombatInfo();

        if (this.player.alive && this.enemyList.length > 0) {
            if (this.delay != 0) {
                setTimeout(() => this.combatTick(), this.delay);
            } else{
                this.combatTick();
            }
            
        } else {
            this.inCombat = false;
            setBroadcastTitleText('Victory!', true);
            this.player.cleanStatus();
            this.player.changeHp(this.player.levelheal*this.lvlHealMult);
    
            setNextButtonVisible(true);
        
            $('#combatTimer').addClass('hidden');
            $('#enemy-health-bar-container').addClass('hidden');
        }
    }

    displayCombatInfo() {
        $('#combatTimer').text(Math.floor(this.tick / (3000))+":"+Math.floor((this.tick%(3000)/50)));
        this.player.updateEntityDisplay();
        this.enemyList.forEach(enemy => {
            enemy.updateEntityDisplay();
        });
    }

    changeCounters(amount) {
        if (amount === false) { //if false, resets counters
            this.player.attackCounter = 0;
            this.player.regenCounter = 0;
            this.player.manaCounter = 0;
            this.enemyList.forEach(enemy => {
                enemy.attackCounter = 0;
                enemy.regenCounter = 0;
            });
        } else {
            this.player.attackCounter += amount;
            this.player.regenCounter += amount;
            this.player.manaCounter += amount;
            this.enemyList.forEach(enemy => {
                enemy.attackCounter += amount;
                enemy.regenCounter += amount;
            });
        }
    }
}