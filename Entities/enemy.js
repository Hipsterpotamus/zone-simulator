
class Enemy extends Entity{
    constructor(name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
         super(name, type, health, attackspeed, damage, armor, gold, regen, complexStats);
         this.complexStats = complexStats;
         this.diffC = difficultyCh;
         this.boss = false;
         this.updateHealthBar(0);
         $('#enemy-health-bar-container').removeClass('hidden');
    }

    calcStat(stat) {//should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        return (this[stat]);
    }

    getLvlHealMult() {
        return 1;
    }

    death() {
        setBroadcastTitleText('Victory!', true)
        game.player.changeGold(this.gold, true);
        game.zone.changeZoneLevel(this.diffC);
        game.player.cleanStatus();
        game.player.changeHp(game.player.levelheal*this.getLvlHealMult());

        setNextButtonVisible(true);
    
        $('#combatTimer').addClass('hidden');
        $('#enemy-health-bar-container').addClass('hidden');
        this.updateEntityDisplay();
    }

    //display

    updateHealthBar(damage) {
        let healthBar = $('#enemy-health-bar-container'),
        bar = healthBar.find('#enemy-health-bar'),
        hit = healthBar.find('#enemy-health-hit-bar');
        updateBar(-damage, this.hp, this.maxhp, healthBar, bar, hit);
    }

    updateEntityDisplay(tick = -1) {
        let htmlOutput = '';
        htmlOutput = this.name+'<br>';
        htmlOutput+='hp : '+this.hp+'/'+this.maxhp+'<br>';
        htmlOutput+='dmg : '+this.calcStat('dmg')+'<br>';
        if (tick != -1) {htmlOutput+='time: '+(this.calcAs()-(tick % this.calcAs()))+'<br>';}
        htmlOutput+='arm : '+(this.testArm())+'<br>';
        htmlOutput+='regen : '+this.calcRegen()+'<br>';
        if(this.calcStat('dodge')!=0){htmlOutput+='dodge : '+this.calcStat('dodge')+'<br>';}
        if(this.calcStat('thorn')!=0){htmlOutput+='thorn : '+this.calcStat('thorn')+'<br>';}
        if(this.calcStat('shatter')!=0){htmlOutput+='shatter : '+this.calcStat('shatter')+'<br>';}
        if(this.calcStat('lifedrain')!=0){htmlOutput+='lifedrain : '+this.calcStat('lifedrain')+'<br>';}
        if(!this.alive){htmlOutput = '';}
        $('#enemy-stats').html(htmlOutput);
    }
}