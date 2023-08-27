class Player extends Entity{
    constructor(type) {
        super('', type, 0, 0, 0, 0, 0, 0, '');
        //default stats- can be specified further in char classes
        this.hp = 100;
        this.maxhp = 100;
        this.dmg = 1;
        this.arm = 0;
        this.regen = 0;
        this.levelheal = 10;
        this.income = 0;
        this.as = 0;
        this.dodge = 0;
        this.gold = 25;
        this.mana = 0;
        this.maxMana = 15;
        this.manaRate = 50;
        this.manaGen = 1;
        this.totalPurchased = 0;

        this.manaCounter = 0;

        this.inv = {
            'usable':['', []],
            'weapon':['', []],
            'head':['', []],
            'chest':['', []],
            'legs':['', []],
            'feet':['', []],
            'magic':['', []],
        }

        this.gameCombatStats = {
            'outgoingDmg' : 0,
            'ticksAlive' : 0,
            'incomingBlocked' : 0,
            'hpRegened' : 0,
            'manaUsed' : 0,
            'spellsCast' : 0,
            'itemsUsed' : 0
        }

        this.combatStats = {
            'outgoingDmg' : 0,
            'ticksAlive' : 0,
            'incomingBlocked' : 0,
            'hpRegened' : 0,
            'manaUsed' : 0,
            'spellsCast' : 0,
            'itemsUsed' : 0
        }
    }

    addSelectableItem(item) {
        this.inv[item.metatype][1].push(item);
        item.appendToSelect()
        this.changeSelectedItem(item);
    }

    changeSelectedItem(item) {
        this.attackCounter = 0;
        this.inv[item.metatype][0] = item;
        item.updateItemInfo();
        $('#'+item.metatype+'-select').val(item.name);
    }

    //generic functions

    calcStat(stat) { //should be used with: dmg, arm, dodge, thorn, shatter, income, lifedrain, bleed, accuracy, superarmor, tear, and any new stats with a generic calculation
        return (
            this[stat] +
            this.getByType('weapon')[stat] +
            this.getByType('head')[stat] +
            this.getByType('chest')[stat] +
            this.getByType('legs')[stat] +
            this.getByType('feet')[stat]
        );
    }

    calcStatDisplay(stat, tick) { // For displaying in html

        // if(this.shatterApplied!=0){
        //     htmlOutput+='arm : '++' ('+this.arm+' + '+(this.calcStat('arm')-this.arm)+' - '+Math.min(this.calcStat('arm'), this.shatterApplied)+') | ';
        // }else{
        //     htmlOutput+='arm : '+this.calcStat('arm')+' ('+this.arm+' + '+(this.calcStat('arm')-this.arm)+') | ';
        // }
        // htmlOutput+='regen : '+this.calcRegen()+' ('+this.regen+' + '+(this.calcRegen()-this.regen)+') | ';
        
        if (stat=='arm') {
            if (this.shatterApplied!=0) {
                return Math.max(0,(this.calcStat('arm')-this.shatterApplied))
            } else {return this.testArm()}
        }
        else if (stat=='speed') {return this.calcAs()}
        else if (stat=='regen') {return this.calcRegen()}
        else {return this.calcStat(stat)}
    }

    calcStatDisplayExtra(stat) {
        // idk what you want the actual calculation to be. I personally think that the main number should be base stat and the extra should be anything on top (with a +/-)
        this.calcStat(stat) - this[stat];
    }

    //other
        
    getByType(metatype){
        return this.inv[metatype][0];
    }

    changeGold(amount, inCombat = false) {
        this.gold += amount;
        this.updateGoldDisplay();
    }

    death() {
        this.alive = false;
        setBroadcastTitleText('You Died :(', true);
        this.updateEntityDisplay();

        console.log('game combat stats:');
        console.log(this.gameCombatStats); //not sure if you want any more than these stats

        // fuck u caden this was awesome...
        // $('#player-death').removeClass('hidden');
        // $('#player-death').addClass('fullViewport');
        // let video = $('#player-death')[0];
        // video.play();
        // video.addEventListener('ended', function() {$('#player-death').addClass('hidden')});
    }

    // Not totally sure where you'll want this, depending on if all entities have mana
    changeMana(amount) { // For when mana is used is by spells
        this.mana = this.mana + amount;
        this.mana = (this.mana >= this.maxMana) ? this.maxMana : this.mana;
        if(this.mana>this.maxMana){}
        updateManaBar(amount, this.mana, this.maxMana);
    }


    //display

    updateHealthBar(damage) { // damage healed
        var healthBar = $('#player-health-bar-container'),
        bar = healthBar.find('#player-health-bar'),
        hit = healthBar.find('#player-health-hit-bar');
        updateBar(-damage, this.hp, this.maxhp, healthBar, bar, hit);
    }

    updateEntityDisplay() {
        let htmlOutput = '';
        htmlOutput = this.name+' | ';




        $('#player-name').text(this.name);
        $('#player-hp').text(this.hp + '/' + this.maxhp);
        $('#player-time').text((this.calcAs()-this.attackCounter));

        let stats_list_player = ['dmg', 'arm', 'regen', 'speed', 'dodge', 'shatter', 'bleed', 'lifedrain', 'antiheal', 'thorn', 'superarmor','tear'];
        if (this.accuracy != 100) {stats_list_player.append('accuracy')}


        stats_list_player.forEach((stat)=>{
            if (this.calcStatDisplay(stat) > 0) {
                if ($('.player-stat-' + stat).length == 0) {
                    $('#player-stats').append(
                        $('<div>', {
                            // 'text': stat_icons[stat]
                            'class': 'player-stat has-tail player-stat-' + stat,
                            'id': 'stat-' + stat
                        })
                        .append(
                            $('<div>', {
                                'class': 'player-stat-icon-container'
                            }).text(stat))
                        .append(
                            $('<div>', {
                                'class': 'player-stat-value'
                            }).text(
                                percentage_stats.includes(stat) ? 
                                    this.calcStatDisplay(stat) + "%" 
                                    : this.calcStatDisplay(stat)
                                    // : this.calcStat(stat) - this.stat
                            )
                        )
                    )
                    $('.player-stat-' + stat + " .player-stat-icon-container").html(stat_icons[stat]);
                    // append another p to .player-stat-value for the extra stat
                    $('.player-stat-' + stat + " .player-stat-value").append(
                        $('<p>', {
                            'class': 'player-stat-extra'
                        }).text(
                            "+" + this.calcStatDisplayExtra(stat)
                        )
                    )
                    console.log("appended:" + this.calcStat(stat) - this[stat]);

                } else {
                    $('.player-stat-' + stat).find('.player-stat-value').text(this.calcStatDisplay(stat));
                }
            } else {
                $('.player-stat-' + stat).remove();
            }
        });

        // updateTailReferences();
    }

    updateGoldDisplay() {
        $('#gold-text').text('gold: '+ this.gold);
    }
}