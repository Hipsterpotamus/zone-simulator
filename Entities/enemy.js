
class Enemy extends Entity{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
         super(name, type, health, attackspeed, damage, armor, gold, regen, complexStats);
         this.complexStats = complexStats;
         this.diffC = difficultyCh;
    }
    calcDmg() {
        return this.dmg;
    }
    calcArm() {
        return this.arm;
    }
    calcRegen() {
        return this.regen;
    }
    calcAs() {
        const rawAS = this.aSLvl;
        const fibonacci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
        if(rawAS > 85){
            for(let x = (fibonacci.length-1);x>=0;x-=1){
                if((rawAS-85) > fibonacci[x]){
                    this.aS = fibonacci.length-x;
                    x=-1;
                }
            }
        }else{
            this.aS = 100 - rawAS;
        }
        return this.aS;
    }
}