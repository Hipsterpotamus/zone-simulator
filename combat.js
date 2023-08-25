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
    constructor(msDelay) {
        this.tick = 0;
        this.player;
        this.enemy;
        this.delay = msDelay; //change this to change how long between ticks
        this.inCombat = false;
    }

    startCombat(player, enemy) {
        this.tick = 0;
        this.inCombat = true;
        this.player = player;
        this.enemy = enemy;
        this.combatTick();
    }

    combatTick() {
        this.tick += 1;
        if (this.tick % this.player.calcAs() == 0) {
            this.enemy.receiveHitFrom(this.player);
        }
        if (this.tick % this.enemy.calcAs() == 0) {
            this.player.receiveHitFrom(this.enemy);
        }
        if (this.tick % this.player.regenRate == 0) {
            this.player.runRegen();
        }
        if (this.tick % this.enemy.regenRate == 0) {
            this.enemy.runRegen();
        }
        if (this.tick % this.player.manaRate == 0){
            this.player.changeMana(this.player.calcStat('manaGen'));
        }
        this.displayCombatInfo();

        if (this.enemy.alive && this. player.alive) {
            if (this.delay != 0) {
                setTimeout(() => this.combatTick(), this.delay);
            } else{
                this.combatTick();
            }
            
        } else {
            this.inCombat = false;
        }
    }

    displayCombatInfo() {
        $('#combatTimer').text(Math.floor(this.tick / (3000))+":"+Math.floor((this.tick%(3000)/50)));
        this.player.updateEntityDisplay(this.tick);
        this.enemy.updateEntityDisplay(this.tick);
    }
}