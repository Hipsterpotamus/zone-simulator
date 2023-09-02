class Gambler extends Player {
    constructor(type) {
        super(type);
        this.name = 'garry';

        this.garryMult = 1;
    }

    calcGarryMult() {
        const rand = Math.random();
        console.log(rand);
        if (rand > 0.5) {
            this.garryMult = 2;
            notify('We\'re so back!!!')
        } else {
            this.garryMult = 0.5;
            notify('It\'s so joever...')
        }
    }

    calcStatBase(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statBase = this.calcStatInit(stat);
        if (stat == 'dmg') {
            return Math.ceil(statBase * this.garryMult);
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