
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

    getLvlHealMult() {
        return 1;
    }

    death() {
        setBroadcastTitleText('Victory!', true)
        g.inCombat = false;
        g.player.gainGold(true, g.cEnemy.gold);
        g.zone.changeZoneLevel(g.cEnemy.diffC);
        g.player.cleanStatus()
        g.cTick = 0;
        
        g.player.changeHp(g.player.levelheal*this.getLvlHealMult());
        clearInterval(timeoutCombatLoop);
        $('#go-next').removeClass('hidden');
        setNextButtonVisible(true);
    
        $('#combatTimer').addClass('hidden');
    
        elementUp();
    }

    updateHealthBar(damage) { // damage taken
        //eventual enemy health bar

        //var healthBar = $('#player-health-bar-container'),
        //bar = healthBar.find('#player-health-bar'),
        //hit = healthBar.find('#player-health-hit-bar');
        //updateBar(damage, this.hp, this.maxhp, healthBar, bar, hit);
    }
}