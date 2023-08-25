
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

    updateHealthBar(damage) {
        var healthBar = $('#enemy-health-bar-container'),
        bar = healthBar.find('#enemy-health-bar'),
        hit = healthBar.find('#enemy-health-hit-bar');
        updateBar(-damage, this.hp, this.maxhp, healthBar, bar, hit);
    }

    updateEntityDisplay(tick = -1) {
        // let htmlOutput = '';
        // htmlOutput = this.name+'<br>';
        // htmlOutput+='hp : '+this.hp+'/'+this.maxhp+'<br>';
        // htmlOutput+='dmg : '+this.calcStat('dmg')+'<br>';
        // if (tick != -1) {htmlOutput+='time: '+(this.calcAs()-(tick % this.calcAs()))+'<br>';}
        // htmlOutput+='arm : '+(this.testArm())+'<br>';
        // htmlOutput+='regen : '+this.calcRegen()+'<br>';
        // if(this.calcStat('dodge')!=0){htmlOutput+='dodge : '+this.calcStat('dodge')+'<br>';}
        // if(this.calcStat('thorn')!=0){htmlOutput+='thorn : '+this.calcStat('thorn')+'<br>';}
        // if(this.calcStat('shatter')!=0){htmlOutput+='shatter : '+this.calcStat('shatter')+'<br>';}
        // if(this.calcStat('lifedrain')!=0){htmlOutput+='lifedrain : '+this.calcStat('lifedrain')+'<br>';}
        // if(!this.alive){htmlOutput = '';}
        // $('#enemy-stats').html(htmlOutput);

        let statsList = ['dmg', 'arm', 'dodge', 'thorn', 'shatter', 'income', 'lifedrain', 'bleed', 'accuracy', 'superarmor', 'tear'];
        
        $('#enemy-name').text(this.name);
        $('#enemy-hp').text(this.hp + '/' + this.maxhp);
        if (tick != -1) {$('#enemy-time').text((this.calcAs()-(tick % this.calcAs())));}
        else {$('#enemy-time').text('');}

        // for each stat in statList (if it is > 0), append a div in this format to the #enemy-stats div if it doesn't exist. If it does, then edit it
        // <div class="enemy-stat" id="enemy-stat-[statname]">
        //     <p class="enemy-stat-name">dmg</p>
        //     <p class="enemy-stat-value">7</p>
        // </div>
        statsList.forEach((stat)=>{
            if (this.calcStat(stat) > 0) {
                if ($('#enemy-stat-' + stat).length == 0) {
                    $('#enemy-stats').append(
                        $('<div>', {
                            'class': 'enemy-stat',
                            'id': 'enemy-stat-' + stat
                        }).append(
                            $('<p>', {
                                'class': 'enemy-stat-name'
                            }).text(stat)
                        ).append(
                            $('<p>', {
                                'class': 'enemy-stat-value'
                            }).text(this.calcStat(stat))
                        )
                    )
                } else {
                    $('#enemy-stat-' + stat).find('.enemy-stat-value').text(this.calcStat(stat));
                }
            } else {
                $('#enemy-stat-' + stat).remove();
            }
        });

        if (!this.alive) {
            $('#enemy-stats').html('');
            $('#enemy-name').text('Defeated ' + this.name + '!');
        }
    
    }
}