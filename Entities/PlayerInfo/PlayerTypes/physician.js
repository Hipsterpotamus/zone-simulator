class Physician extends Player {
    constructor(type) {
        super(type);
        this.name = 'phillip'; //implimented heal modifier but cannot find bleed
    }

    changeHp(amount){
        if(amount == 'max') {
            this.hp = this.maxhp;
        } else {
            amount = Math.max(Math.min(amount + this.calcStat('superarmor'), 0), amount);
            if (amount < 0 && this.inCombat) {
                this.combatStats.incomingDmg -= amount;
                this.gameCombatStats.incomingDmg -= amount;
            }
            console.log(amount);
            if (amount > 0) {amount = Math.floor(amount * 1.3)}
            console.log(amount);
            this.hp = Math.min(this.maxhp, this.hp + amount);
            if (this.inCombat && this.levelInfo.activeCharacteristics.has('resurgent')) {
                this.hp = Math.min(this.maxhp, this.hp + CHARACTERISTICS['resurgent'].onHealthDrop(this));
            }
        }

        this.updateHealthBar(amount);

        if (this.hp <= 0 && this.alive) {
            this.hp = 0;
            this.death();
        } else if (this.hp > 0){
            this.updateEntityDisplay();
        };
    }

    calcStatBase(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statBase = this.calcStatCore(stat);
        if (stat === 'bleed' || stat === 'tear' || stat === 'shatter') {
            return 0;
        } else {
            return statBase;
        }
    }
}