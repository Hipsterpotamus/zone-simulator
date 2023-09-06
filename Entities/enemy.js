class Enemy extends Entity{
    constructor(game, xp, name, type, health, attackspeed, damage, armor, gold, regen, difficultyCh, complexStats) {
         super(name, type, health, attackspeed, damage, armor, gold, regen, complexStats);
         this.game = game;
        if (this.game.player.levelInfo.activeCharacteristics.has('intimidating')) {
            this.arm = CHARACTERISTICS['intimidating'].onCalculateEnemyArmor(this.arm);
        }
        if (this.game.player.levelInfo.activeCharacteristics.has('defensive')) {
            this.dmg = CHARACTERISTICS['defensive'].onCalculateEnemyDamage(this.dmg);
        }
        
        this.xp = xp;
        this.complexStats = complexStats;
        this.diffC = difficultyCh;
        this.boss = false;
        this.updateHealthBar(0);
        $('#enemy-health-bar-container').removeClass('hidden');

         this.combatStats = {
            'gold' : gold,
            'ticksAlive' : 0,
            'outgoingDmg' : 0,
            'incomingBlocked' : 0,
            'hpRegened' : 0
        }

        this.gameCombatStats = {
            'outgoingDmg' : 0,
            'incomingBlocked' : 0,
            'hpRegened' : 0
        }

        this.enemyNumber = 1;
        this.timer = document.querySelector(`#enemy-timer-${this.enemyNumber}`);
        this.timermask = document.querySelector(`#enemy-timer-${this.enemyNumber} .timer-mask`);
        
    }

    calcStat(stat) {//should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        return (this[stat]);
    }
    
    calcStatDisplay(stat, tick) { // For displaying in html
        if (stat=='arm') {return this.testArm()}
        else if (stat=='speed') {return this.calcAs()}
        else if (stat=='regen') {return this.calcRegen()}
        else {return this.calcStat(stat)}
    }

    getLvlHealMult() {
        return 1;
    }

    changeGold(amount) {
        this.gold += amount;
    }

    death() {
    let goldToGain = this.gold;
    if (this.game.player.levelInfo.activeCharacteristics.has('dominant')) {
        goldToGain = CHARACTERISTICS['dominant'].onCalculateGold(this.gold, this.combatStats.ticksAlive);
    }

    this.game.combat.combatStats['totalGoldGain'] += goldToGain;
    this.game.player.changeGold(goldToGain, true);

    this.alive = false;
    this.game.zone.changeZoneLevel(this.diffC);
    
    this.updateEntityDisplay();

    this.game.player.levelInfo.changeXp(this.xp);
}

    //display

    updateHealthBar(damage) {
        let healthBar = $('#enemy-health-bar-container'),
        bar = healthBar.find('#enemy-health-bar'),
        hit = healthBar.find('#enemy-health-hit-bar');
        updateBar(-damage, this.hp, this.maxhp, healthBar, bar, hit);
    }

    animateDodge() {
        $('#enemy').addClass('dodge-animation');
        setTimeout(function() {
            $('#enemy').removeClass('dodge-animation');
        }, 800);
    }

    updateEntityDisplay() {
        
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

        let stats_list_enemy = ['dmg', 'arm', 'regen', 'speed', 'dodge', 'shatter', 'bleed', 'lifedrain', 'antiheal', 'thorn', 'superarmor','tear'];

        if (this.accuracy != 100) {stats_list_enemy.append('accuracy')}
        
        // add visible class to .enemy
        $('.enemy').addClass('visible');
        
        $('#enemy-name').text(this.name);
        $('#enemy-hp').text(this.hp + '/' + this.maxhp);
        $('#enemy-time').text((this.calcAs()-this.attackCounter));
        this.setAttackTimer(this.calcAs()-this.attackCounter, this.calcAs(), 'primary');

        stats_list_enemy.forEach((stat)=>{
            if (this.calcStatDisplay(stat) != 0) {
                if ($('.enemy-stat-' + stat).length == 0) {
                    $('#enemy-stats').append(
                        $('<div>', {
                            // 'text': stat_icons[stat]
                            'class': 'enemy-stat has-tail enemy-stat-' + stat,
                            'id': 'stat-' + stat
                        })
                        .append(
                            $('<div>', {
                                'class': 'enemy-stat-icon-container'
                            }).text(stat))
                        .append(
                            $('<p>', {
                                'class': 'enemy-stat-value'
                            }).text(
                                percentage_stats.includes(stat) ? 
                                    this.calcStatDisplay(stat) + "%" 
                                    : this.calcStatDisplay(stat)
                            )
                        )
                    )
                    $('.enemy-stat-' + stat + " .enemy-stat-icon-container").html(stat_icons[stat]);
                } else {
                    $('.enemy-stat-' + stat).find('.enemy-stat-value').text(this.calcStatDisplay(stat));
                }
            } else {
                $('.enemy-stat-' + stat).remove();
            }
        });

        updateTailReferences();

        if (!this.alive) {
            $('#enemy-stats').html('');
            $('#enemy-name').text('Defeated ' + this.name + '!');

            console.log('enemy stats:');
            console.log(this.combatStats);
            //TODO: Display combat stats
            //this.combatStats = {
                //'gold' : gold,
                //'ticksAlive' : 0,
                //'outgoingDmg' : 0,
                //'incomingBlocked' : 0,
                //'hpRegened' : 0
            //}
        }
    }
}