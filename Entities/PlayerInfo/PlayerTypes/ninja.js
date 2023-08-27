class Ninja extends Player {
    constructor(type) {
        super(type);
        this.name = 'nina'; //fully implemented
        this.dodge = 33;
    }

    calcStat(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statBase = this.calcStatBase(stat);
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

/*
You are Nina. Since your early childhood you've received extensive special defense training which came at the expense of your personal life. For this reason, you willingly came to
the Zones hoping for a change of pace in life, with the knowledge you'd be particularly adept for the challenge. However, your training is in many ways more of a curse than a blessing. 
While you're talented in terms of strength and evasion, the style of training you received never anticipated that you'd actually get hit, and as such your defensive ability is worsened considerably.
Unfortunately, your training cannot be undone, nor the course of your life and the decisions you made to get here. 
*/