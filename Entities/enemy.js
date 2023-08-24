
class Enemy extends Entity{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
         super(name, type, health, attackspeed, damage, armor, gold, regen, complexStats);
         this.complexStats = complexStats;
         this.diffC = difficultyCh;
         this.boss = false;
    }

    calcStat(stat) {//should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        return (this[stat]);
    }

    getLvlHealMult() {
        return 1;
    }

    death() {
        setBroadcastTitleText('Victory!', true)
        g.player.changeGold(this.gold, true);
        g.zone.changeZoneLevel(this.diffC);
        g.player.cleanStatus();
        g.player.changeHp(g.player.levelheal*this.getLvlHealMult());

        setNextButtonVisible(true);
    
        $('#combatTimer').addClass('hidden');
        this.updateEntityDisplay();
    }

    //display

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
        htmlOutput+='dmg : '+this.calcStat('dmg')+'<br>';
        if (tick != -1) {htmlOutput+='time: '+(this.calcAs()-(tick % this.calcAs()))+'<br>';}
        htmlOutput+='arm : '+(this.calcStat('arm')-this.shatterApplied)+'<br>';
        htmlOutput+='regen : '+this.calcRegen()+'<br>';
        if(this.calcStat('dodge')!=0){htmlOutput+='dodge : '+this.calcStat('dodge')+'<br>';}
        if(this.calcStat('thorn')!=0){htmlOutput+='thorn : '+this.calcStat('thorn')+'<br>';}
        if(this.calcStat('shatter')!=0){htmlOutput+='shatter : '+this.calcStat('shatter')+'<br>';}
        if(this.calcStat('lifedrain')!=0){htmlOutput+='lifedrain : '+this.calcStat('lifedrain')+'<br>';}
        if(!this.alive){htmlOutput = '';}
        $('#enemy-stats').html(htmlOutput);
    }
}