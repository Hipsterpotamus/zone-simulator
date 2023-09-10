class Enemy extends Entity{
    constructor(game, xp, name, enemyInfo) {
         super();
         this.game = game;
         this.xp = xp;
         this.name = name;
         this.enemyInfo = enemyInfo;
         this.dropItem = 'none'; //default drop item- supports 'none' or specific item name currently
         //lmk if you want a random option

         if(enemyInfo){
            Object.keys(enemyInfo).forEach((stat)=>{
                this[stat] = enemyInfo[stat];
                if (stat === 'type' || stat === 'gold') {
                    delete this.enemyInfo[stat];
                }
            });
        }

        this.maxhp = this.hp;

        if (this.game.player.levelInfo.activeCharacteristics.has('intimidating')) {
            this.arm = CHARACTERISTICS['intimidating'].onCalculateEnemyArmor(this.arm);
        }
        if (this.game.player.levelInfo.activeCharacteristics.has('defensive')) {
            this.dmg = CHARACTERISTICS['defensive'].onCalculateEnemyDamage(this.dmg);
        }
        
        this.htmlElements = {};
        this.boss = false;
        this.updateHealthBar(0);
        $('#enemy-health-bar-container').removeClass('hidden');

         this.combatStats = {
            'gold' : this.gold,
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

        
        //this.dodge = 100;
        //uncomment above to test dodge animation
        
    }

    setEnemyNumber(number) {
        this.enemyNumber = number;
        this.timer = document.querySelector(`#enemy-timer-${this.enemyNumber}`);
        this.timermask = document.querySelector(`#enemy-timer-${this.enemyNumber} .timer-mask`);
    }

    calcStat(stat) {//should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        let statCalc = this[stat];

        statCalc = this.calcTempStatChange(stat, statCalc);
        statCalc = this.calcTimedStatChange(stat, statCalc);
        return statCalc;
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

    getDropItem() {
        if (this.dropItem === 'none') {return false}
        else {
            let item = this.game.path.itemShop.generateItem(this.dropItem, structuredClone(ITEMLIST[this.dropItem]));
            item.uses = 1;
            item.price = 0;
            return item;
        }
    }

    death() {
    let goldToGain = this.gold;
    if (this.game.player.levelInfo.activeCharacteristics.has('dominant')) {
        goldToGain = CHARACTERISTICS['dominant'].onCalculateGold(this.gold, this.combatStats.ticksAlive);
    }

    this.game.combat.combatStats['totalGoldGain'] += goldToGain;
    this.game.player.changeGold(goldToGain, true);
    let dropItem = this.getDropItem();
    if (dropItem) {dropItem.onBuy()};

    this.alive = false;
    this.game.zone.changeZoneLevel(this.levelAdjustment);
    
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

    // This creates the shell of the new enemy div and saves it's components to this.htmlElements
    // This should only be called once per enemy, on creation
    initializeEntityDisplay() {
        // Create the enemy div
        this.htmlElements.enemyDiv = $('<div>', {
            'class': 'enemy translucent on-surface-text',
            'id': 'enemy1'
        });

        // Create the enemy health bar
        this.htmlElements.enemyHealth = $('<div>', {
            'id': 'enemy-health'
        });
        this.htmlElements.enemyHealthBarContainer = $('<div>', {
            'id': 'enemy-health-bar-container',
            'data-total': this.maxhp,
            'data-value': this.hp
        });
        this.htmlElements.enemyHealthBar = $('<div>', {
            'id': 'enemy-health-bar'
        });
        this.htmlElements.enemyHealthHitBar = $('<div>', {
            'id': 'enemy-health-hit-bar'
        });
        this.htmlElements.enemyHealthBar.appendTo(this.htmlElements.enemyHealthBarContainer);
        this.htmlElements.enemyHealthHitBar.appendTo(this.htmlElements.enemyHealthBar);
        this.htmlElements.enemyHealthBarContainer.appendTo(this.htmlElements.enemyHealth);
        this.htmlElements.enemyHp = $('<p>', {
            'id': 'enemy-hp'
        });
        this.htmlElements.enemyHp.appendTo(this.htmlElements.enemyHealth);
        this.htmlElements.enemyHealth.appendTo(this.htmlElements.enemyDiv);

        // Create the enemy name box
        this.htmlElements.enemyNameBox = $('<div>', {
            'id': 'enemy-name-box',
            'class': 'secondary on-secondary-text'
        });
        this.htmlElements.enemyName = $('<h2>', {
            'id': 'enemy-name'
        });
        this.htmlElements.enemyName.appendTo(this.htmlElements.enemyNameBox);
        this.htmlElements.enemyTimer = $('<div>', {
            'class': 'timer draggable',
            'id': 'enemy-timer-1',
            'style': '--duration: 100;--size: 30;'
        });
        this.htmlElements.enemyTimerMask = $('<div>', {
            'class': 'timer-mask'
        });
        this.htmlElements.enemyTimerMask.appendTo(this.htmlElements.enemyTimer);
        this.htmlElements.enemyTime = $('<p>', {
            'class': 'enemy-time primary-container-text'
        });
        this.htmlElements.enemyTime.appendTo(this.htmlElements.enemyTimer);
        this.htmlElements.enemyTimer.appendTo(this.htmlElements.enemyNameBox);
        this.htmlElements.enemyNameBox.appendTo(this.htmlElements.enemyDiv);

        // Create the enemy stats box
        this.htmlElements.enemyStats = $('<div>', {
            'id': 'enemy-stats'
        });
        this.htmlElements.enemyStats.appendTo(this.htmlElements.enemyDiv);

        // Append the enemy div to the enemies div
        this.htmlElements.enemyDiv.appendTo('#enemies');
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
        $('.enemy').addClass('visible');    // OLD
        // this.htmlElements.enemyDiv.addClass('visible'); // NEW
        
        // this.htmlElements.enemyName.text(this.name);   // NEW
        $('#enemy-name').text(this.name);               // OLD
        // this.htmlElements.enemyHp.text(this.hp + '/' + this.maxhp); // NEW
        $('#enemy-hp').text(this.hp + '/' + this.maxhp);            // OLD
        // this.htmlElements.enemyTime.text((this.calcAs()-this.attackCounter)); // NEW
        $('#enemy-time').text((this.calcAs()-this.attackCounter));      // OLD

        // this will need modified for new enemy display creation
        this.setAttackTimer(this.calcAs()-this.attackCounter, this.calcAs(), 'primary');


        stats_list_enemy.forEach((stat)=>{
            if (this.calcStatDisplay(stat) != 0) {
                if ($('.enemy-stat-' + stat).length == 0) {
                    $('#enemy-stats').append(
                        $('<div>', {
                            // 'text': stat_icons[stat]
                            'class': 'enemy-stat has-tail enemy-stat-' + stat,
                            'id': 'stat-' + stat,
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
                    // $('.enemy-stat-' + stat + " .enemy-stat-icon-container").attr('data-text', "How many Hit Points the opponent loses on each attack.")
                    // $('.enemy-stat-' + stat + " .enemy-stat-icon-container").attr('data-text-title', stat)

                } else {
                    $('.enemy-stat-' + stat).find('.enemy-stat-value').text(this.calcStatDisplay(stat));
                    
                }
            } else {
                $('.enemy-stat-' + stat).remove();
            }
        });

        updateTailReferences();

        if (!this.alive) {
            // set contents to empty
            $('#enemy1').find('#enemy-stats').html('');
            $('#enemy1').find('#enemy-hp').text('');
            $('#enemy-name').text('Defeated ' + this.name + '!');
            //TODO: Display combat stats
            //this.combatStats = {
                //'gold' : gold,
                //'ticksAlive' : 0,
                //'outgoingDmg' : 0,
                //'incomingBlocked' : 0,
                //'hpRegened' : 0
            //}

            // add a new div to #enemy1 with the combat stats
            this.htmlElements.combatStats = $('<div>', {
                'class': 'combat-stats'
            });
            this.htmlElements.combatStats.html(
                '<p class="combat-stat combat-stat-enemy"><b>Gold</b>: ' + this.combatStats.gold + '</p>' +
                '<p class="combat-stat combat-stat-enemy"><b>Experience:</b> ' + this.xp + '</p>' +
                '<p class="combat-stat combat-stat-enemy"><b>Time Alive:</b> ' + this.combatStats.ticksAlive + '</p>' +
                '<p class="combat-stat combat-stat-enemy"><b>Outgoing Damage:</b> ' + this.combatStats.outgoingDmg + '</p>' +
                '<p class="combat-stat combat-stat-enemy"><b>Incoming Blocked:</b> ' + this.combatStats.incomingBlocked + '</p>' +
                '<p class="combat-stat combat-stat-enemy"><b>HP Regenerated:</b> ' + this.combatStats.hpRegened + '</p>'
            );
            this.htmlElements.combatStats.appendTo('#enemy1');
        } else {
            // remove the combat stats div
            if (this.htmlElements.combatStats) {
                this.htmlElements.combatStats.remove();
            }
            // remove any combat stat divs in #enemy1 
                // TO REMOVE this will not be needed once multiple enemies are implemented
            $('#enemy1').find('.combat-stats').remove();
        }
    }
}