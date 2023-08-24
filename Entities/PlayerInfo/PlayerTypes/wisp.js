class Wisp extends Player {
    constructor(type) {
        super(type);
        this.name = 'willow'; //not implemented
        this.arm = 3;
        this.dodge = 25;
        this.maxhp = 1;
        this.hp = 1;
    }
    calcStat(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        if(stat=='superarmor'){
            return this.calcStatBase(stat) + this.calcStatBase('arm');
        }else{
            return this.calcStatBase(stat);
        }
    }
    calcStatBase(stat){
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
            notify('Willow cannot go over 1 max hp!')    
        }else{
            this.maxhp += amount;
            this.changeHp(Math.max(amount, 0));
            if (this.hp > this.maxhp) {this.changeHp(this.hp - this.maxhp)};
        }
    }
}