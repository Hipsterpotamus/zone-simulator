class Collector extends Player {
    constructor(type) {
        super(type);
        this.name = 'colette';
        this.levelheal = 0;
    }

    changeStat (stat, amount) {
        if (stat === 'gold') {
            this.changeGold(amount);
        } else if (stat === 'hp') {
            this.changeHp(amount);
        } else if (stat === 'maxhp') {
            this.changeMaxHp(amount);
        } else if (stat === 'levelheal') {
            if (amount > 0) {notify('Colette cannot gain levelheal')}
            else {this.levelheal += amount};            
        } else if (stat === 'arm' && this.levelInfo.activeCharacteristics.has('defensive')) {
            this[stat] += CHARACTERISTICS['defensive'].onArmorGained(amount);
        } else {
            this[stat] += amount;
        }
        this.updateEntityDisplay();
    }
}