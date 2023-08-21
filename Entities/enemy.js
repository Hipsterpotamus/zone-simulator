
class Enemy extends Entity{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
         super(name, type, health, attackspeed, damage, armor, gold, regen, complexStats);
         this.complexStats = complexStats;
         this.diffC = difficultyCh;
         this.boss = false;
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
        const adjRoot = 3; //functionally similar to fibonacci with cleaner code
        const adjScalingMult = 4;
        if (rawAS > 85) {
            this.aS = Math.max(15 - Math.floor(Math.pow((rawAS - 85) * adjScalingMult, 1/adjRoot)), 1);
        } else {
            this.aS = 100 - rawAS;
        }
        return this.aS;
    }
}