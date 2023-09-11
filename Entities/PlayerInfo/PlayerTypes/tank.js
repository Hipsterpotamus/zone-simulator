class Tank extends Player {
    constructor(type) {
        super(type);
        this.name = 'tanner';
        this.accuracy = 80;
        this.as = -100;
        
        this.initPlayerDisplay();
    }

    calcStatBase(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statBase = this.calcStatCore(stat);
        if (stat === 'arm') {
            return statBase * 2;
        } else {
            return statBase;
        }
    }
}