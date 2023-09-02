class BlobCharacter extends Player {
    constructor(type) {
        super(type);
        this.name = 'Bob'; //not implemented

        this.gold = this.hp;
    }

    changeStat (stat, amount) {
        if (stat === 'gold') {
            this.changeGold(amount);
        } else if (stat === 'hp') {
            this.changeHp(amount);
        } else if (stat === 'maxhp') {
            this.changeMaxHp(amount);
        } else if (stat === 'arm' && this.levelInfo.activeCharacteristics.has('defensive')) {
            this[stat] += CHARACTERISTICS['defensive'].onArmorGained(amount);
        } else {
            this[stat] += amount;
        }
        this.updateEntityDisplay();
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
            this.hp = Math.min(this.maxhp, this.hp + amount);
            if (this.inCombat && this.levelInfo.activeCharacteristics.has('resurgent')) {
                let preAmount = amount;
                amount += this.hp + CHARACTERISTICS['resurgent'].onHealthDrop(this);
                this.hp = Math.min(this.maxhp, this.hp + amount - preAmount);
            }
        }

        this.updateHealthBar(amount);
        this.gold = this.hp;

        if (this.hp <= 0 && this.alive) {
            this.hp = 0;
            this.death();
        } else if (this.hp > 0){
            this.updateEntityDisplay();
            this.updateGoldDisplay();
        };
    }

    changeGold(amount, inCombat = false) {
        this.changeHp(amount);
        this.updateGoldDisplay();
    }

    updateGoldDisplay() {
        $('#gold-text').text('gold: '+ this.hp);
        this.updateEntityDisplay();
    }
}