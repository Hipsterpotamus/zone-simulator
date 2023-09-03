class BlobCharacter extends Player {
    constructor(type) {
        super(type);
        this.name = 'Bob'; //not implemented

        this.gold = this.maxhp;
    }

    changeMaxHp(amount) {
        let newAmount = amount;
        if (newAmount >= 0 && this.levelInfo.activeCharacteristics.has('emergent')) {
            newAmount = CHARACTERISTICS['emergent'].onMaxHpGained(amount);
        }
        this.maxhp += newAmount;
        this.changeHp(Math.max(amount, 0));
        if (this.hp > this.maxhp) {this.changeHp(this.hp - this.maxhp)};
        this.gold = this.maxhp;
        this.updateGoldDisplay();
    }

    changeGold(amount, inCombat = false) {
        this.changeMaxHp(amount);
        this.updateGoldDisplay();
    }

    updateGoldDisplay() {
        $('#gold-text-number').text(this.maxhp);
        this.updateEntityDisplay();
    }
}