class Flourisher extends Player {
    constructor(type) {
        super(type);
        this.name = 'florence';
    }

    calcStatBase(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statBase = this.calcStatCore(stat);
        if (stat === 'income') {
            return statBase * 2;
        } else {
            return statBase;
        }
    }
}