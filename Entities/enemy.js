
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
    calcDodge() {
        return this.dodge;
    }
    calcThorn() {
        return this.thorn;
    }
    calcShatter() {
        return this.shatter;
    }
    calcLifeDrain() {
        return this.lifedrain;
    }
    receiveHit(player) {
        if(Math.random()>(this.calcDodge()*0.01)){
            let playerDMG =  player.calcDmg();
            if(this.status.shatterApplied<this.calcArm()){
                playerDMG -= (this.calcArm()-this.status.shatterApplied);
            }
            if (playerDMG < 0) {playerDMG = 0;}
            this.hp-=playerDMG;
            player.gainHp(Math.floor(playerDMG*(player.calcLifeDrain()/100)))
            let cleanShatter = Math.floor(player.calcShatter()/10); // shatter application
            if(Math.random()<((player.calcShatter()%10)/10)){cleanShatter+=1;}
            this.status.shatterApplied+=cleanShatter;
            this.maxhp -= player.tear;
            if(this.hp>this.maxhp){this.hp=this.maxhp}
            player.hp-=this.calcThorn();
        }
    }
}