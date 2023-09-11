class Player extends Entity{
    constructor(type) {
        super();
        //default stats- can be specified further in char classes
        this.type = type;
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

        this.inCombat = false;
        this.resurgentUses = 0;

        this.timer = document.querySelector('#player-stats-row .timer');
        this.timermask = document.querySelector('#player-stats-row .timer .timer-mask');

        this.inv = {
            'weapon':['', []],
            'head':['', []],
            'chest':['', []],
            'legs':['', []],
            'feet':['', []],
            'magic':[],
            'usable':[]
        }

        this.gameCombatStats = {
            'outgoingDmg' : 0,
            'incomingDmg' : 0,
            'ticksAlive' : 0,
            'incomingBlocked' : 0,
            'hpRegened' : 0,
            'manaUsed' : 0,
            'spellsCast' : 0,
            'itemsUsed' : 0
        }

        this.combatStats = {
            'outgoingDmg' : 0,
            'incomingDmg' : 0,
            'ticksAlive' : 0,
            'incomingBlocked' : 0,
            'hpRegened' : 0,
            'manaUsed' : 0,
            'spellsCast' : 0,
            'itemsUsed' : 0
        }
    }

    initPlayerDisplay() {
        this.addItem(new Equippable(this.game, 'none', {'metatype': 'weapon'}));
        this.addItem(new Equippable(this.game, 'none', {'metatype': 'head'}));
        this.addItem(new Equippable(this.game, 'none', {'metatype': 'chest'}));
        this.addItem(new Equippable(this.game, 'none', {'metatype': 'legs'}));
        this.addItem(new Equippable(this.game, 'none', {'metatype': 'feet'}));

        this.changeMana(0);

        this.updateEntityDisplay();
    }

    addItem(item, itemShop = false) {
        if (item.metatype === 'usable') {
            let itemExists = false;
            for (let i = 0; i < this.inv.usable.length; i++) {
                if (this.inv.usable[i].name === item.name) {
                    this.inv.usable[i].uses += (item.uses || 0);
                    this.inv.usable[i].updateItemInfo()
                    itemExists = true;
                    break;
                }
            }
            if (!itemExists) {
                this.inv.usable.push(item);
                item.appendToSelect()
            }
        } else if (item.metatype === 'magic') {
            this.inv.magic.push(item);
            item.appendToSelect()
        } else if (['weapon', 'head', 'chest', 'legs', 'feet'].includes(item.metatype)) {
            this.inv[item.metatype][1].push(item);
            item.appendToSelect()
            this.changeSelectedItem(item, itemShop)
        }
    }

    removeItem(itemName, itemMetatype) {
        if (itemMetatype === 'usable') {
            for (let i = 0; i < this.inv.usable.length; i++) {
                if (this.inv.usable[i].name === itemName) {
                    this.inv.usable[i].usableButton.remove();
                    this.inv.usable.splice(i, 1);
                    break;
                }
            }
        } else if (itemMetatype === 'magic') {
            for (let i = 0; i < this.inv.magic.length; i++) {
                if (this.inv.magic[i].name === itemName) {
                    this.inv.magic[i].selectElement.remove();
                    this.inv.magic.splice(i, 1);
                    break;
                }
            }
        } else if (['weapon', 'head', 'chest', 'legs', 'feet'].includes(itemMetatype)) {
            console.log(itemName, itemMetatype)
            if (this.inv[itemMetatype][0] !== '' && this.inv[itemMetatype][0].name === itemName) {
                this.inv[itemMetatype][0] = '';
            }
            for (let i = 0; i < this.inv[itemMetatype][1].length; i++) {
                if (this.inv[itemMetatype][1][i].name === itemName) {
                    $(`#${itemMetatype}-select option[value="${itemName.replace(/ /g, '\\ ')}"]`).remove();
                    this.inv[itemMetatype][1].splice(i, 1);
                    break;
                }
            }
        }
    }

    changeSelectedItem(item, itemShop = false) {
        item.calcComparisons()
        this.attackCounter = 0;

        let prevItem = this.inv[item.metatype][0]; //kill income of item when switched
        if (prevItem != '' && prevItem.income != 0) {
            prevItem.income = 0;
            notify(`The luster of ${prevItem.name} fades away... You won't get any more income from this item`)
        }

        this.inv[item.metatype][0] = item;
        item.updateItemInfo()
        $('#'+item.metatype+'-select').val(item.name);
        if (itemShop && itemShop.shopOpen) {itemShop.updateShopItems()};
    }

    //generic functions

    calcStat(stat) {
        let total = this.calcStatBase(stat);
    
        if (stat === 'dodge' && this.levelInfo.activeCharacteristics.has('elusive')) {
            total = CHARACTERISTICS['elusive'].onCalculateDodge(total, this.calcStat('as'));
        }

        if (stat === 'shatter' && this.levelInfo.activeCharacteristics.has('brutal')) {
            total = CHARACTERISTICS['brutal'].onCalculateShatter(total);
        }

        if (stat === 'arm' && this.levelInfo.activeCharacteristics.has('protective')) {
            total = CHARACTERISTICS['protective'].onCalculateArmor(total, this.calcStatBase('regen'));
        }

        if (stat === 'regen' && this.levelInfo.activeCharacteristics.has('protective')) {
            total = CHARACTERISTICS['protective'].onCalculateRegen(total, this.calcStatBase('arm'));
        }

        if (stat === 'as' && this.levelInfo.activeCharacteristics.has('elegant')) {
            total = CHARACTERISTICS['elegant'].onCalculateAttackSpeed(total);
        }
    
        if (stat === 'dmg') {
            if (this.levelInfo.activeCharacteristics.has('patient')) {
                total = CHARACTERISTICS['patient'].onCalculateDamage(total, this.combatStats.ticksAlive);
            }
            if (this.levelInfo.activeCharacteristics.has('vengeful')) {
                total = CHARACTERISTICS['vengeful'].onCalculateDamage(total, this.hp, this.maxhp);
            }
        }
    
        return total;
    }

    calcStatBase(stat) {return this.calcStatCore(stat)};

    calcStatCore(stat) {
        let statCalc = this[stat] +
        this.getByType('weapon')[stat] +
        this.getByType('head')[stat] +
        this.getByType('chest')[stat] +
        this.getByType('legs')[stat] +
        this.getByType('feet')[stat]

        statCalc = this.calcTempStatChange(stat, statCalc);
        statCalc = this.calcTimedStatChange(stat, statCalc);
        return statCalc;
    }

    changeStat (stat, amount) {
        if (stat === 'gold') {
            this.changeGold(amount);
        } else if (stat === 'hp') {
            this.changeHp(amount);
        } else if (stat === 'maxhp') {
            this.changeMaxHp(amount);
        } else if (stat === 'arm' && this.levelInfo.activeCharacteristics.has('defensive')) {
            this[stat] += CHARACTERISTICS['defensive'].onArmorGained(amount);
        } else {
            this[stat] += amount;
        }
        this.updateEntityDisplay();
    }

    handleEquipmentStat(type, stat) {
        const value = this.getByType(type)[stat];
        if (value === 0) return '';
        return `${value > 0 ? '+' : ''}${value} from ${type} `;
    }

    displayCalc(stat) {
        let calc = `${this[stat]} base `;
        const equipmentTypes = ['weapon', 'head', 'chest', 'legs', 'feet'];
        for (const type of equipmentTypes) {
            calc += this.handleEquipmentStat.call(this, type, stat);
        }

        if (stat === 'speed') {
            calc = `${this.displayCalc('as')}, squished with 100*(1/2)^(${this.calcStat('as')}/100) = ${this.calcAs()}`;
        } else if (stat === 'regen') {
            if (this.antihealApplied > 0) calc += `-${this.antihealApplied} antiheal applied `;
            if (this.bleedApplied > 0) calc += `-${this.bleedApplied} bleed applied `;
            calc += `= ${this.calcRegen()}`;
        } else if (stat === 'arm') {
            if (this.shatterApplied > 0) calc += `-${this.shatterApplied} shatter taken `;
            calc += `= ${this.testArm()}`;
        } else {
            calc += `= ${this.calcStat(stat)}`;
        }

        //return calc;
    }

    calcStatDisplay(stat) { // For displaying in html
        if (stat=='arm') {return this.testArm()}
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

    testDmg(armor, mult, flatDmg, weaponHit = false) { //flat dmg is utilized when spells or items are used
        if(flatDmg){
            return Math.max(flatDmg * mult - armor, 0);
        }else{
            if (weaponHit) {this.getByType('weapon').changeDurability(-1)}
            return Math.max(this.calcStat('dmg') * mult - armor, 0);
        }
    }

    changeGold(amount, inCombat = false) {
        this.gold += amount;
        this.updateGoldDisplay();
    }

    changeHp(amount){
        if(amount == 'max') {
            this.hp = this.maxhp;
        } else {
            amount = Math.max(Math.min(amount + this.calcStat('superarmor'), 0), amount);
            if (amount < 0 && this.inCombat) {
                this.combatStats.incomingDmg -= amount;
                this.gameCombatStats.incomingDmg -= amount;
            }
            this.hp = Math.min(this.maxhp, this.hp + amount);
            if (this.inCombat && this.levelInfo.activeCharacteristics.has('resurgent')) {
                this.hp = Math.min(this.maxhp, this.hp + CHARACTERISTICS['resurgent'].onHealthDrop(this));
            }
        }

        this.updateHealthBar(amount);

        if (this.hp <= 0 && this.alive) {
            this.hp = 0;
            this.death();
        } else if (this.hp > 0){
            this.updateEntityDisplay();
        };
    }

    calcAsTheory(amount) {
        return Math.floor(100 * Math.pow((1/2), (amount / 100)))
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

    changeMana(amount) { // For when mana is used is by spells
        this.mana = this.mana + amount;
        this.mana = (this.mana >= this.maxMana) ? this.maxMana : this.mana;
        if(this.mana>this.maxMana){}
        updateManaBar(amount * -1, this.mana, this.maxMana, this.calcStat('manaGen'));
    }


    //display

    updateHealthBar(damage) { // damage healed
        var healthBar = $('#player-health-bar-container'),
        bar = healthBar.find('#player-health-bar'),
        hit = healthBar.find('#player-health-hit-bar');
        updateBar(-damage, this.hp, this.maxhp, healthBar, bar, hit);
    }

    updateEntityDisplay() {
        updateManaBar(0, this.mana, this.maxMana, this.calcStat('manaGen'));
        let htmlOutput = '';
        htmlOutput = this.name+' | ';

        $('#player-name').text(this.name);
        $('#player-hp').text(this.hp + '/' + this.maxhp);
        $('#player-time').text((this.calcAs()-this.attackCounter));

        
        this.setAttackTimer(this.calcAs()-this.attackCounter, this.calcAs(), 'tertiary');

        let stats_list_player = ['dmg', 'arm', 'regen', 'speed', 'dodge', 'shatter', 'bleed', 'lifedrain', 'antiheal', 'thorn', 'superarmor','tear'];
        if (this.accuracy != 100) {stats_list_player.push('accuracy')}


        stats_list_player.forEach((stat)=>{
            if (this.calcStatDisplay(stat) != 0) {
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
                            this.displayCalc(stat)
                        )
                    )
                    console.log("appended:" + this.calcStatDisplay(stat) - this[stat]);

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
        $('#gold-text-number').text(this.gold);
    }
}