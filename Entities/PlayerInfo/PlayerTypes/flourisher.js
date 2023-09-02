class Flourisher extends Player {
    constructor(type) {
        super(type);
        this.name = 'florence';
    }

    calcStatBase(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statBase = this.calcStatInit(stat);
        if (stat === 'income') {
            return statBase * 2;
        } else {
            return statBase;
        }
    }

    calcStatInit(stat) {
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