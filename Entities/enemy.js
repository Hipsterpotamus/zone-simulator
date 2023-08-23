
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

    calcRegen() { //regen where bleed goes negative
        let antihealRegen = Math.max(this.regen - this.antihealApplied, 0);
        return antihealRegen - this.bleedApplied;
    }

    //regen where never goes negative
    //calcRegen() {
    //    return Math.max(this.regen - this.antihealApplied - this.bleedApplied, 0);
    //}

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

    calcSuperArmor() {
        return this.superarmor;
    }

    calcAccuracy() {
        return this.accuracy;
    }

    calcBleed() {
        return this.bleed;
    }

    calcTear() {
        return this.tear;
    }

    getLvlHealMult() {
        return 1;
    }

    death() {
        setBroadcastTitleText('Victory!', true)
        g.player.gainGold(true, this.gold);
        g.zone.changeZoneLevel(this.diffC);
        g.player.cleanStatus();
        g.player.changeHp(g.player.levelheal*this.getLvlHealMult());

        $('#go-next').removeClass('hidden');
        setNextButtonVisible(true);
    
        $('#combatTimer').addClass('hidden');
    }

    updateHealthBar(damage) { // damage taken
        //eventual enemy health bar

        //var healthBar = $('#player-health-bar-container'),
        //bar = healthBar.find('#player-health-bar'),
        //hit = healthBar.find('#player-health-hit-bar');
        //updateBar(-damage, this.hp, this.maxhp, healthBar, bar, hit);
    }

    updateEntityDisplay(tick = -1) {
        let htmlOutput = '';
        htmlOutput = this.name+'<br>';
        htmlOutput+='hp : '+this.hp+'/'+this.maxhp+'<br>';
        htmlOutput+='dmg : '+this.calcDmg()+'<br>';
        if (tick != -1) {htmlOutput+='time: '+(this.calcAs()-(tick % this.calcAs()))+'<br>';}
        htmlOutput+='arm : '+(this.calcArm()-this.shatterApplied)+'<br>';
        htmlOutput+='regen : '+this.calcRegen()+'<br>';
        if(this.calcDodge()!=0){htmlOutput+='dodge : '+this.calcDodge()+'<br>';}
        if(this.calcThorn()!=0){htmlOutput+='thorn : '+this.calcThorn()+'<br>';}
        if(this.calcShatter()!=0){htmlOutput+='shatter : '+this.calcShatter()+'<br>';}
        if(this.calcLifeDrain()!=0){htmlOutput+='lifedrain : '+this.calcLifeDrain()+'<br>';}

        $('#enemy-stats').html(htmlOutput);
    }
}