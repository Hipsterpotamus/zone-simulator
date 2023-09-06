class Wisp extends Player {
    constructor(type) {
        super(type);
        this.name = 'willow';
        this.arm = 3;
        this.dodge = 25;
        this.maxhp = 1;
        this.hp = 1;
    }

    calcStatBase(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statBase = this.calcStatInit(stat);
        if(stat=='superarmor'){
            return statBase + this.calcStat('arm');
        }else{
            return statBase;
        }
    }

    calcStatInit(stat){
        return (
            this[stat] +
            this.getByType('weapon')[stat] +
            this.getByType('head')[stat] +
            this.getByType('chest')[stat] +
            this.getByType('legs')[stat] +
            this.getByType('feet')[stat]
        );
    }

    changeMaxHp(amount){
        if(amount>0){
            notify('Willow cannot go over 1 max HP!')    
        }else{
            this.maxhp += amount;
            this.changeHp(Math.max(amount, 0));
            if (this.hp > this.maxhp) {this.changeHp(this.hp - this.maxhp)};
        }
    }
}