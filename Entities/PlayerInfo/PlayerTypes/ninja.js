class Ninja extends Player {
    constructor(type) {
        super(type);
        this.name = 'nina'; //fully implemented
        this.dodge = 33;
    }

    calcStat(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statBase = calcStatBase(stat);
        if (stat == 'dmg') {
            return Math.floor(statBase * 1.2);
        } else if (stat == 'arm') {
            return Math.floor(statBase / 2);
        } else {
            return statBase;
        }
    }

    calcStatBase(stat) {
        return (
            this[stat] +
            this.getByType('weapon')[stat] +
            this.getByType('head')[stat] +
            this.getByType('chest')[stat] +
            this.getByType('legs')[stat] +
            this.getByType('feet')[stat]
        );
    }
}